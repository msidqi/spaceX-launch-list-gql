import { initializeApollo } from "../lib/apolloClient";
import { useQuery } from "@apollo/client";
import { LaunchCard } from "../components/LaunchCard";
import Header from "../components/Header";
import { LAUNCHES } from "../graphql/queries";
import { FlexContainer } from "../components/FlexContainer";
import { ContainerPad } from "../components/Container";
import { NavButton } from "../components/NavButton";
import App from "../components/App";

const STRIDE = 10;
const launchesVars = {
  offset: STRIDE,
  limit: STRIDE,
  sort: "launch_date_local",
  order: "DESC",
};

const IndexPage = () => {
  const [page, setPage] = React.useState(2);
  const { loading, error, data } = useQuery(LAUNCHES, {
    variables: { ...launchesVars, offset: page * STRIDE },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page - 1 >= 0) {
      setPage(page - 1);
    }
  };
  const { launches } = data;
  console.log("page", page);
  return (
    <App>
      <Header />
      <FlexContainer>
        {launches.map((elem, index) => (
          <LaunchCard key={`launchCard-${index}`} launch={elem} />
        ))}
      </FlexContainer>

      <ContainerPad style={{ textAlign: "center" }}>
        {page - 1 >= 0 && (
          <NavButton onClick={previousPage}>Previous</NavButton>
        )}
        {!!launches.length && <NavButton onClick={nextPage}>Next</NavButton>}
      </ContainerPad>
    </App>
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
