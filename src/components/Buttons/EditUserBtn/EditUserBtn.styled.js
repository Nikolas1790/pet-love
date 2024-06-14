import color from "common/GlobalColors";
import styled from "styled-components";

export const EditUserButton = styled.button`
  fill: ${color.orangeLight};

  transition: fill 0.3s linear;
  :hover{
    fill: ${color.orangeDim};
  }
`;

