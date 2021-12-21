import styled from "styled-components";

import { TextBase } from "../index";

import { mobile } from "../../styles/breakpoints";

export const TextRegular = styled(TextBase)`
  font-size: 1.125rem;
  line-height: 2rem;

  @media ${mobile} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
