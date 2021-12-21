import styled from "styled-components";
import { FlexWrapper } from "..";
import { mobile } from "../../styles/breakpoints";

export const MainWrapper = styled(FlexWrapper)`
  flex-direction: column;
  width: 80%;
  margin: 9rem 0 0 0;

  /* @media ${mobile} {
    margin: 2.5rem 0;
  } */
`;
