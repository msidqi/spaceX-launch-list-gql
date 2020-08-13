import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
	primary: "#5585bb",
	primaryDarker: '#4973a2',
	secondary: 'white',
	green: '#5bb75d',
	red: '#d9544f',
  },
};

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
