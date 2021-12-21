import styled from "styled-components";
import { TextBaseBold } from "./TextBase";
import { mobile } from "../../styles/breakpoints";
import { primaryColor } from "../../styles/colors";

export const H5 = styled(TextBaseBold).attrs({ as: "h5" })`
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: ${primaryColor};

  @media ${mobile} {
    font-size: 0.5rem;
    line-height: 1.375rem;
  }
`;
