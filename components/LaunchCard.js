import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { getDateFromString } from "../lib/helpers";
import { Cover } from "./Cover";

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: Ubuntu;
  padding: 12px;
  text-align: center;
`;

export const Card = styled.div`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.secondary};
  max-width: 300px;
  width: 100%;
  /* padding: 8px; */
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
  border-radius: 0px 0px 5px 5px;
  border: none;
  padding: 8px 16px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-weight: bold;
  font-family: Ubuntu;
  &:hover {
  	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary} inset;
  }
`;

export function LaunchCard({ launch }) {
  const { year, month, day } = getDateFromString(launch.launch_date_local);
  return (
    <Card>
		<Cover fullRadius src={launch.links.flickr_images[0]} >
			<Title>{launch.mission_name}</Title>
			{/* <Title>{day} {month} {year}</Title> */}
		</Cover>
      <Link href={`/launches/${launch.id}`}>
        <CardButton>Details</CardButton>
      </Link>
    </Card>
  );
}
