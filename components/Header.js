import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from "styled-components";

const StyledHeader = styled.header`
		/* margin-bottom: 25px; */
		/* font-size: 14px; */
		/* margin-right: 15px; */
		/* text-decoration: none; */
		padding: 5px 30px;
		margin-bottom: 50px;
		/* background-color: #282a33; */
		/* color: white; */
`

export default function Header() {
  const { pathname } = useRouter()

  return (
    <StyledHeader>
      <Link href="/">
        <a>Home</a>
      </Link>
    </StyledHeader>
  )
}
