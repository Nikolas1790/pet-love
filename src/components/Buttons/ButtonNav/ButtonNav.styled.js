import color from 'common/GlobalColors'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBtn = styled(NavLink)`
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
  border: 1px solid ${({ home }) => home  ? color.whiteTransparencyZeroFour : 'none'};
  color: ${({ label }) =>label === 'LOG IN' || label === 'Yes' ? color.white : color.orangePrimary};
  background: ${({ label }) =>label === 'LOG IN' || label === 'Yes' ? color.orangePrimary: color.orangeLight};

  transition: all 0.25s linear;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${({ label }) =>label === 'LOG IN' || label === 'Yes' ? color.orangePrimaryActive : color.orangeDim};
    color: ${({ label }) =>label === 'LOG IN' || label === 'Yes' ? color.white : color.orangePrimary};
    outline: none;
  }
`