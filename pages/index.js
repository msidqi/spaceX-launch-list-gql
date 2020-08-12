import { initializeApollo } from "../lib/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { LaunchCard, Container, Title } from "../components/LaunchCard";

const LAUNCHES = gql`
  query spacexLaunches($limit: Int!) {
    launches(limit: $limit) {
      mission_name
      launch_year
      launch_site {
        site_name
      }
      is_tentative
      launch_date_local
      launch_success
      links {
        video_link
      }
    }
  }
`;

const launchesVars = {
  limit: 10,
};


const IndexPage = ({ initialApolloState }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(LAUNCHES, {
    variables: launchesVars,
    //   notifyOnNetworkStatusChange: true,
  });
  console.log('loading', loading, 'error', error, 'networkStatus', networkStatus, 'data', data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Title>Index Page!</Title>
      <button onClick={() => refetch()}>Refetch!</button>
      <Container>
        {data.launches.map((elem, index) => (
          <LaunchCard key={`launchCard-${index}`} launch={elem}/>
        ))}
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LAUNCHES,
    variables: launchesVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
