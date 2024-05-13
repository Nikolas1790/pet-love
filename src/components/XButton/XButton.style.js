import color from "common/GlobalColors";
import styled from "styled-components";

export const ClosingSymbol = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.blackPrimary};
  background: transparent;
  transition: transform 0.25s linear; 
  &:hover,
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
`;