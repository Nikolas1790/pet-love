import color from 'common/GlobalColors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 32px;
  width: 1280px;
  height: 686px;
  padding: 0  32px 32px 32px;  
`

export const PetImg = styled.img` 
  width: 592px;
  height: 654px;
  border-radius: 60px;
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  
  width: 592px;
  height: 654px;
  padding: 20px 84px;  
  background: ${color.white};
  border-radius: 60px;
`





export const Title = styled.h2`
  /* font-size: 28px;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 54px;
    font-weight: 600;
    line-height: 1.1;
  } */
`


