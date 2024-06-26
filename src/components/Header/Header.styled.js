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
  width: 1216px;
  
  padding: ${({ home }) => home ? '32px 64px' : '32px'} ;
  background: ${({ home }) => home ? color.orangePrimary : 'none'};
  border-radius: ${({ home }) => home ? '60px 60px 0 0' : '0'};
  color: ${({ home }) => home ? color.white : color.blackPrimary};

`
