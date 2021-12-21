import styled from "styled-components";
import { TextBase } from "../index";
import { mobile } from "../../styles/breakpoints";

export const TextSmall = styled(TextBase)`
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${mobile} {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;
