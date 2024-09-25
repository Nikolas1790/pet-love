import styled from "styled-components";

export const Star = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.filled === "true" ? "gold" : "gray")}; 
`;
