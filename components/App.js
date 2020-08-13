import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.colors.secondary};
	padding: 0px;
	margin: 0px;
  }
`

export default function App({ children }) {
	return (
	  <main>
		  <GlobalStyle />
		{children}
	  </main>
	)
}