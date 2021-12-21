import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";

export const SectionWrapper = styled.div`
  display: block;
  margin: 3rem 0;
  background-color: ${({ backgroundColor }) => backgroundColor || ""};

  @media ${mobile} {
    margin: 2.5rem 0;
  }
`;
