import { initializeApollo } from "../../lib/apolloClient";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import EmbededVideo from "../../components/EmbededVideo";
import { getVideoID, getDateFromString } from "../../lib/helpers";
import Header from "../../components/Header";
import { DateIcon, RocketIcon } from "../../components/Icons";
import { SINGLE_LAUNCH_QUERY, ALL_LAUNCHES_ID_QUERY } from '../../graphql/queries'
import { GlobalContainer, ContainerPad } from "../../components/Container";
import { Cover, Status } from "../../components/Cover";

const LaunchPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { error, data: { launch } } = useQuery(SINGLE_LAUNCH_QUERY, {
    variables: { id },
  });
  if (error) return `Error! ${error.message}`;
  const videoID = getVideoID(launch.links.video_link);
  const { year, month, day } = getDateFromString(launch.launch_date_local);
//   console.log(launch);
  return (
    <>
      <Header />
      <GlobalContainer>
        <Status isSuccess={launch.launch_success}>
          {launch.launch_success ? "Successful launch" : "Failed launch"}
        </Status>
        <Cover src={launch.links.flickr_images[0]}>
          <h1>{launch.mission_name}</h1>
        </Cover>
        <ContainerPad>
          <p>
            <DateIcon /> {day} {month} {year}
          </p>
          <p>
            <RocketIcon /> {launch.rocket.rocket_name} |{" "}
            {launch.rocket.rocket_type} | {launch.rocket.rocket.mass.kg} kg |{" "}
            {launch.rocket.rocket.engines.number} engines
          </p>
          <p style={{ padding: "0px 10px" }}>
            {launch.details}{" "}
            <a
              href={launch.links.article_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              read more
            </a>
          </p>
          {videoID && (
            <EmbededVideo url={`https://www.youtube.com/embed/${videoID}`} />
          )}
        </ContainerPad>
      </GlobalContainer>
    </>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: ALL_LAUNCHES_ID_QUERY,
    variables: { limit: 10 },
  });

  const paths = data.launches.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SINGLE_LAUNCH_QUERY,
    variables: { id },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default LaunchPage;
