import { initializeApollo } from "../../lib/apolloClient";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import EmbededVideo from "../../components/EmbededVideo";
import { getVideoID, getDateFromString } from "../../lib/helpers";
import Header from "../../components/Header";
import { DateIcon, RocketIcon } from "../../components/Icons";
import {
  SINGLE_LAUNCH_QUERY,
  ALL_LAUNCHES_ID_QUERY,
} from "../../graphql/queries";
import { GlobalContainer, ContainerPad } from "../../components/Container";
import { Cover } from "../../components/Cover";
import Status from "../../components/Status";
import App from '../../components/App'

const LaunchPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { error, data } = useQuery(SINGLE_LAUNCH_QUERY, {
    variables: { id },
  });
  if (!data) return "loading...";
  const { launch } = data;
  if (error) return `Error! ${error.message}`;
  if (!launch) return "404 Not Found";
  const videoID = getVideoID(launch.links.video_link);
  const { year, month, day } = getDateFromString(launch.launch_date_local);
  return (
    <App>
      <Header />
      <GlobalContainer>
        <Status
          isUpcoming={launch.upcoming}
          isSuccess={launch.launch_success}
        />
        <Cover src={launch.links.flickr_images[0]}>
          <h1>{launch.mission_name}</h1>
        </Cover>
        <ContainerPad>
          <p>
            <DateIcon /> {day} {month} {year}
          </p>
          <p>
            <RocketIcon /> {launch.rocket.rocket_name} | type{" "}
            {launch.rocket.rocket_type} | {launch.rocket.rocket.mass.kg} kg |{" "}
            {launch.rocket.rocket.engines.number} engines
          </p>
          <p>
            {launch.details}{" "}
            {!!launch.links.article_link && (
              <a
                href={launch.links.article_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
            )}
          </p>
          {!!videoID && (
            <EmbededVideo url={`https://www.youtube.com/embed/${videoID}`} />
          )}
        </ContainerPad>
      </GlobalContainer>
    </App>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SINGLE_LAUNCH_QUERY,
    variables: { id },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default LaunchPage;
