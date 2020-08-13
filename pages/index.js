import { initializeApollo } from "../lib/apolloClient";
import { useQuery } from "@apollo/client";
import { LaunchCard } from "../components/LaunchCard";
import Header from "../components/Header";
import { LAUNCHES } from "../graphql/queries";
import { FlexContainer } from '../components/FlexContainer';

const launchesVars = {
  limit: 10,
  sort: "launch_date_local",
  order: "DESC"
};

const IndexPage = ({ initialApolloState }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(LAUNCHES, {
    variables: launchesVars,
    //   notifyOnNetworkStatusChange: true,
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header />
      <button onClick={() => refetch()}>Update</button>
      <FlexContainer>
        {data.launches.map((elem, index) => (
          <LaunchCard key={`launchCard-${index}`} launch={elem}/>
        ))}
      </FlexContainer>
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
