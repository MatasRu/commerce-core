import styled from "styled-components";
import { TextBaseBold } from "./TextBase";
import { mobile } from "../../styles/breakpoints";

export const H4 = styled(TextBaseBold).attrs({ as: "h4" })`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;

  @media ${mobile} {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;
