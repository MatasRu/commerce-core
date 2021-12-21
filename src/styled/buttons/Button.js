import styled from "styled-components";

export const Button = styled.button`
  display: ${({ display }) => display || "inline-block"};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || "0.8rem 1.5rem"};
  max-width: ${({ maxWidth }) => maxWidth || "16rem"};
  min-width: ${({ minWidth }) => minWidth || "none"};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color || ""};
  background: ${({ background }) => background || "transparent"};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "8rem"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
