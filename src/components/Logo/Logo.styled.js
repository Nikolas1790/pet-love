import color from 'common/GlobalColors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  padding: 11px 0;
`; 

export const LogoHeart = styled.span`
  margin: 0 2.3px;
  fill: ${({ home }) => home  ? color.white : color.orangePrimary};
`; 

