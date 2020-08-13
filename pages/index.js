import { initializeApollo } from "../lib/apolloClient";
import { useQuery } from "@apollo/client";
import { LaunchCard } from "../components/LaunchCard";
import Header from "../components/Header";
import { LAUNCHES } from "../graphql/queries";
import { FlexContainer } from "../components/FlexContainer";
import { ContainerPad } from "../components/Container";
import { NavButton } from "../components/NavButton";
import App from "../components/App";
import Spinner from "../components/Spinner";
import { SortDownIcon, SortUpIcon } from "../components/Icons";

const STRIDE = 10;
const SORTBY = {
  date: "launch_date_local",
  status: "launch_success",
};
const ORD = {
  asc: "ASC",
  desc: "DESC",
};

const launchesVars = {
  offset: STRIDE,
  limit: STRIDE,
  sort: SORTBY.date,
  order: ORD.desc,
};

const IndexPage = () => {
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState(launchesVars.sort);
  const [order, setOrder] = React.useState(launchesVars.order);
  const { loading, error, data } = useQuery(LAUNCHES, {
    variables: { ...launchesVars, offset: page * STRIDE, order, sort },
    notifyOnNetworkStatusChange: true,
  });

  if (error) return `Error! ${error.message}`;
  const nextPage = () => setPage(page + 1);
  const previousPage = () => page - 1 >= 0 && setPage(page - 1);
  const sortByDate = () => sort != SORTBY.date && setSort(SORTBY.date);
  const sortByStatus = () => sort != SORTBY.status && setSort(SORTBY.status);
  const changeOrder = () => setOrder(ORD.asc == order ? ORD.desc : ORD.asc);
  return (
    <App>
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ContainerPad style={{ textAlign: "center" }}>
            Sort by
            <NavButton onClick={sortByDate}>Date</NavButton>
            <NavButton onClick={sortByStatus}>Status</NavButton>
            <span onClick={changeOrder}>
              {order == ORD.desc ? <SortDownIcon /> : <SortUpIcon />}
            </span>
          </ContainerPad>

          <FlexContainer>
            {data.launches.map((elem, index) => (
              <LaunchCard key={`launchCard-${index}`} launch={elem} />
            ))}
          </FlexContainer>

          <ContainerPad style={{ textAlign: "center" }}>
            {page - 1 >= 0 && (
              <NavButton onClick={previousPage}>Previous</NavButton>
            )}
            {!!data.launches.length && (
              <NavButton onClick={nextPage}>Next</NavButton>
            )}
          </ContainerPad>
        </>
      )}
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
    revalidate: 100,
  };
}

export default IndexPage;
