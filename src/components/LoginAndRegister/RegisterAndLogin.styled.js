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
  flex-direction: column; /* Устанавливаем направление столбца */
  align-items: start; /* Выравниваем элементы по центру горизонтально */
  justify-content: center; /* Выравниваем элементы по центру вертикально */
  width: 592px;
  height: 654px;
  padding: 20px 84px;  
  background: ${color.white};
  border-radius: 60px;
`





export const Title = styled.h2`
  font-size: 54px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
  /* @media (min-width: 768px) {
    font-size: 54px;
    font-weight: 600;
    line-height: 1.1;
  } */
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  /* @media (min-width: 768px) {
    font-size: 54px;
    font-weight: 600;
    line-height: 1.1;
  } */
`
