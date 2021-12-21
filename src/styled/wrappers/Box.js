import styled from "styled-components";

export const Box = styled.div`
  padding: ${({ padding }) => padding || ""};
  margin-bottom: 3rem;
  position: ${({ position }) => position || "relative"};
  background-color: white;
  display: block;
  border: 1px solid #e9d6c5;
  box-sizing: border-box;
  border-radius: 6px;
`;
