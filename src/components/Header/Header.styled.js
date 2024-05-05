import color from 'common/GlobalColors'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 32px; 
  width: 1216px;
/* background: yellow;
border-radius: 60px 60px 0 0;  */
  background: ${({ home }) => home ? color.orangePrimary : 'none'};
  border-radius: ${({ home }) => home ? '60px 60px 0 0' : '0'};
  color: ${({ home }) => home ? color.white : color.blackPrimary};


  /* @media (min-width: 768px) {
    width: 768px;
    padding: 15px 32px; 
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 15px 40px 15px 20px; 
  } */
`
