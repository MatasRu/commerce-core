import styled from "styled-components";

export const ContainerSmall = styled.div`
  position: ${({ position }) => position || "relative"};
  display: block;
  margin: ${({ margin }) => margin || "auto"};
  padding: 0 1rem;
  max-width: 52rem;
`;
