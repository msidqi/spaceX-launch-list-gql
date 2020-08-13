import styled from "styled-components";

export const Cover = styled.div`
  width: 100%;
  max-height: 300px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 18.96%, black 100%),
    url(${({ src }) => src});
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px 5px 0px 0px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 2s ease-in-out;
  &:hover {
    background-position: bottom;
  }
`;

export const Status = styled.div`
  background-color: ${({ theme, isSuccess }) =>
    isSuccess ? theme.colors.green : theme.colors.red};
  z-index: 2;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 8px 16px;
  border-radius: 0px 5px 0px 5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;