import styled from "styled-components";
import React from 'react'

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Card = styled.div`
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
	background-color: white;
	max-width: 300px;
	width: 100%;
	padding: 8px;
	margin: 10px;
	border-radius: 5px;
`

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	max-width: 1500px;
	margin: auto;
`

export function LaunchCard(props) {
	const launch = props.launch;
	const date = new Date(launch.launch_date_local);
	const month = date.toLocaleString('default', { month: 'short' });
	const day = date.getUTCDate();
	const year = date.getFullYear();
	return (
		<Card>
			<h4>
				Mission Name: {launch.mission_name}
			</h4>
			Launch Date: {day}  {month}  {year}
		</Card>
	)
}
