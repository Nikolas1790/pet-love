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
  opacity: ${({ disabled, current }) => (disabled && current ? 0 : 1)};
  background: ${({disabled}) => disabled ? color.orangePrimary :  "transporent"}; /* Более тусклый фон для активной (отключенной) страницы */
  margin-right:  ${({current }) => current === 'last' ? '0' : '17px'};
  width: 18px;
  height: ${({current }) => current ?  '14px' : '18px'};
  border-radius: 4px;
  color: ${color.blackPrimary};

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
    scale: 1.25;
    box-shadow: none;
  }
`;

export const PaginationSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${color.blackColorSecondary};

  transition: all 0.25s linear;
  &:focus,
  &:hover {
    stroke: ${color.blackModalColr};
  };
`