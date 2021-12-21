import styled from "styled-components";
import { TextBase } from "../index";
import { mobile } from "../../styles/breakpoints";

export const TextCaption = styled(TextBase)`
  font-size: 0.875rem;
  line-height: 1.375rem;

  @media ${mobile} {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`;
