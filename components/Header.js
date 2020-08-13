import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 15px 30px;
  margin-bottom: 50px;
  background-color: #282a33;
  font-family: Ubuntu;
  a {
    text-decoration: none;
    color: white;
  }
`;

export default function Header() {

  return (
    <StyledHeader>
      <Link href="/">
        <a>Home</a>
      </Link>
    </StyledHeader>
  );
}
