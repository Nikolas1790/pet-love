import color from "common/GlobalColors";
import styled from "styled-components";

export const AtentionsModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 466px;
  min-height: 434px;
  background: ${color.white};
  border-radius: 30px;
  padding: 80px ;

  /* @media (min-width: 768px) {
    width: 536px;
  } */
`;
