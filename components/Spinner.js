import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: auto;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${({ theme }) => theme.colors.primaryDarker};
  border-right: 2px solid ${({ theme }) => theme.colors.primaryDarker};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryDarker};
  border-left: 2px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Spinner;
