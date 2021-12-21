import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
  height: ${({ height }) => height || ""};
  width: ${({ width }) => width || ""};
  order: ${({ order }) => order || ""};
`;
