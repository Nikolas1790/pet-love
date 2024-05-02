import color from 'common/GlobalColors';
import styled from 'styled-components'

export const PaginationConteiner = styled.div`
  display: flex;
  justify-content: start; 
  align-items: center; 

  @media (min-width: 768px) {  
    justify-content: center; 
  }
`

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({dis}) => dis ? color.orangePrimary :  "transporent"}; 
  margin-right:  ${({current }) => current === 'last' ? '0' : '10px'};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${({dis}) => dis ? color.white : color.blackPrimary };
  border: 1px solid rgba(38, 38, 38, 0.05);
  /* stroke: blue; */
  fill: ${color.blackPrimary};
  transition: all 0.25s linear;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: ${({ isClicked }) => (isClicked ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.7)')};
  }

  &:disabled {
    cursor: default;
    color: ${color.white};
    box-shadow: none;
  fill: ${color.blackPrimaryFiftyPercebt};

  }
`;

export const ThreeDots = styled.span`
display: flex;
align-items: center;
justify-content: center;
  margin-right:  10px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  /* background: red; */
  border: 1px solid rgba(38, 38, 38, 0.05);
`

export const PaginationSvg = styled.svg`
  width: 44px;
  height: 44px;

  transition: all 0.25s linear;
  &:focus,
  &:hover {
    stroke: ${color.blackModalColr};
  };
`