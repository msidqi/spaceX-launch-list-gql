import styled from "styled-components";

export const FlexContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1500px;
  margin: auto;
`;
