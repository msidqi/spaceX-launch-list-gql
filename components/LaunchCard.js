import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { getDateFromString } from "../lib/helpers";

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Card = styled.div`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.secondary};
  max-width: 300px;
  width: 100%;
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
  position: relative;
  min-height: 150px;
  @media (max-width: 768px) {
    padding-bottom: 36px;
  }
`;

export const CardButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px 0px 5px 0px;
  border: none;
  padding: 8px 16px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-family: Ubuntu;
`;

export function LaunchCard({ launch }) {
  const { year, month, day } = getDateFromString(launch.launch_date_local);
  return (
    <Card>
      <Title>Mission Name: {launch.mission_name}</Title>
      Launch Date: {day} {month} {year}
      <Link href={`/launches/${launch.id}`}>
        <CardButton>Details</CardButton>
      </Link>
    </Card>
  );
}
