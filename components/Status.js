import React from "react";
import styled from "styled-components";

export const Status = styled.div`
  background-color: ${({ theme, colorKey }) => theme.colors[colorKey]};
  z-index: 2;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 8px 16px;
  border-radius: 0px 5px 0px 5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;

const statuses = {primary: "Upcoming", green: "Successful launch", red:"Failed launch"};

export default function LaunchStatus({ isUpcoming, isSuccess }) {
  let key;

  if (isUpcoming) key = 'primary';
  else key = isSuccess ? 'green' : 'red';
  return <Status colorKey={key}>{statuses[key]}</Status>;
}
