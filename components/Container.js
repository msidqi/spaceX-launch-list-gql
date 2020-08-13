import styled from "styled-components";

export const GlobalContainer = styled.div`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 95%;
  max-width: 1000px;
  min-height: 400px;
  margin: auto;
  position: relative;
  font-family: Ubuntu;
`;

export const ContainerPad = styled.div`
  padding: 10px 30px;
  @media (max-width: 320px) {
    padding: 10px;
  }
`;