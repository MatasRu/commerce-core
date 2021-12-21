import styled from "styled-components";
import { black } from "../../styles/colors";

export const TextBase = styled.p`
  margin: ${({ margin }) => margin || ""};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-family: ${({ fontFamily }) => fontFamily || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || black};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
`;

export const TextBaseBold = styled(TextBase).attrs(({ fontWeight }) => ({
  fontWeight: fontWeight || 900,
}))``;
