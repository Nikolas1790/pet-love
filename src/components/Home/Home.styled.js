import color from 'common/GlobalColors'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1280px;
  background: pink;
  padding: 0 32px 16px 32px;
`
export const HomeTitleBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 73px;
  width: 1216px;
  height: 302px;
  background: ${color.orangePrimary};
  border-radius:  0 0 60px 60px;
  padding: 96px 64px 32px 64px;

`

export const HomeTitle = styled.h1`
  width: 760px;
  font-size: 90px;
  font-weight: 700;
  line-height: 0.97;
  letter-spacing: -0.03em;
  color: ${color.white};
`

export const TranslucentWord = styled.span`
  color: ${color.whiteTransparencyZeroFour};
`


export const HomeText = styled.p`
  width: 256px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  letter-spacing: -0.02em;
  color: ${color.white};
`

export const HomeImg = styled.img`
  width: 1217px;
  height: 384px;
  border-radius: 60px; 
`