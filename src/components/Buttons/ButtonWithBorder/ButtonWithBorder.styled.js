import color from 'common/GlobalColors'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CustomBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.03em;;
  height: 50px;
  width: ${({ width }) => width || '100%'};
  border-radius: 30px;
  border: 1px solid ${({ home }) => home  ? color.whiteTransparencyZeroFour : color.blackPrimaryLight};

  transition: all 0.25s linear;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid ${color.orangePrimary};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    outline: none;
  }
  &.active {
     border: 1px solid ${color.orangePrimary};
  }
`