import styled from 'styled-components';
import color from "common/GlobalColors";

export const Star = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${({ filled }) => (filled ? color.gold : color.grey)};
`;