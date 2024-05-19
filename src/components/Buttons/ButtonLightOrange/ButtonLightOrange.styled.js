import color from 'common/GlobalColors'
import styled from 'styled-components'

export const LightBtn = styled.button`
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
  /* border: 1px solid ${({ home }) => home  ? color.whiteTransparencyZeroFour : 'none'}; */
  color: ${color.orangePrimary};
  background: ${color.orangeLight};

  transition: all 0.25s linear;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${({ label }) =>label === 'REGISTRATION' ? color.orangeDim : color.orangePrimaryActive};
    color: ${({ label }) =>label === 'REGISTRATION' ? color.orangePrimary : color.white};
    outline: none;
  }
`