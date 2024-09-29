import color from "common/GlobalColors";
import styled from "styled-components";

export const EditUserBtnContainer = styled.div`
  position: absolute;
  top: 40px;
  ${({ position }) => (position === 'left' ? 'left: 40px;' : 'right: 40px;')}
`;

export const EditUserButton = styled.button`
  fill: ${({ position }) =>
      position === 'right' ? color.orangeLight : color.orangePrimary};

  transition: all 0.3s linear;
  :hover{
    fill: ${({ position }) =>
      position === 'right' ? color.orangeDim : color.orangePrimaryActive};
  }
`;

