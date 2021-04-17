import styled from "styled-components"

import {theme} from "../theme"

export interface Heading1Props {
  variant?: boolean;
  children: string;
}

export const Heading1 = styled.h1`
  color: ${(props:Heading1Props) => props.variant ? theme.color.secondary : theme.color.primary}
`