import color from 'common/GlobalColors'
import styled from 'styled-components'

export const WraperBoxNotFond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 109px 283px;
  width: 1216px;
  height: 654px;
  color: ${color.white};
  background: ${color.orangePrimary};
  border-radius: 60px;

  font-size: 24px;
  font-weight: 700;
`

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px; 

`;

export const NotFoundImageStyled = styled.img`
  width: 280px; 
  height: 280px;
  border-radius: 50%;
`;

export const FourText = styled.h1`
  font-size: 300px; 
  font-weight: 800;
  line-height: 1;
  color: ${color.white};
`;

export const WrongMainText = styled.p`
  margin-bottom: 20px;
`