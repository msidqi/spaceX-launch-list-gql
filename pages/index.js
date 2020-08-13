import { initializeApollo } from "../lib/apolloClient";
import { useQuery } from "@apollo/client";
import { LaunchCard } from "../components/LaunchCard";
import Header from "../components/Header";
import { LAUNCHES } from "../graphql/queries";
import { FlexContainer } from "../components/FlexContainer";
import { ContainerPad } from "../components/Container";

const launchesVars = {
  limit: 20,
  sort: "launch_date_local",
  order: "DESC",
};

const IndexPage = () => {
  const [page, setPage] = React.useState(0);
  const { loading, error, data } = useQuery(LAUNCHES, {
    variables: {...launchesVars, offset: page},
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const nextPage = () => setPage(page + 10)
  const { launches } = data;
  return (
    <>
      <Header />
      <FlexContainer>
        {launches.map((elem, index) => (
          <LaunchCard key={`launchCard-${index}`} launch={elem} />
        ))}
      </FlexContainer>

      <ContainerPad style={{ textAlign: "center"}}>
        <button onClick={nextPage}>Next</button>
      </ContainerPad>
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
