import styled from "styled-components";

export const NavButton = styled.button`
  margin: 10px;
  padding: 5px;
  max-width: 90px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
  }
  font-family: Ubuntu;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
`;
