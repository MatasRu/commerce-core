import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || ""};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || ""};
  gap: ${({ gap }) => gap || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
`;
