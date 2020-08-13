import {DateRange} from "@styled-icons/material/DateRange";
import {Rocket} from "@styled-icons/ionicons-sharp/Rocket";
import styled from "styled-components";

export const DateIcon = styled(DateRange)`
  color: ${({ theme }) => theme.colors.primary};
  width: 35px;
  max-width: 35px;
`;

export const RocketIcon = styled(Rocket)`
  color: ${({ theme }) => theme.colors.primary};
  width: 35px;
  max-width: 35px;
`;
