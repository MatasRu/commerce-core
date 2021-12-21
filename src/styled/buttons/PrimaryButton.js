import styled from "styled-components";

import { Button } from "./Button";
import { primaryColor } from "../../styles/colors";

export const PrimaryButton = styled(Button).attrs(({ borderRadius }) => ({
  borderRadius: borderRadius || "3px",
}))`
  color: white;
  background-color: ${primaryColor};
`;
