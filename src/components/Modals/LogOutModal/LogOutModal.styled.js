import color from "common/GlobalColors";
import styled from "styled-components";

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 448px;
  min-height: 364px;
  background: ${color.white};
  border-radius: 30px;
  padding: 80px ;

  /* @media (min-width: 768px) {
    width: 536px;
  } */
`;

export const Cat = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const TitleLodOut = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  margin-bottom: 28px;

`;

export const BtnsConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;











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