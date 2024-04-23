import color from 'common/GlobalColors'
import { Field } from 'formik'
import { NavLink } from 'react-router-dom'
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
  letter-spacing: -0.03em;
  margin-bottom: 32px;
  /* @media (min-width: 768px) {
    font-size: 54px;
    font-weight: 600;
    line-height: 1.1;
  } */
`





// export const FormBlock = styled.div`
//   @media (min-width: 768px) {
//     width: 323px;
//   }
// `

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormConteiner = styled.div`
  display:flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormFieldConteiner = styled.div`
  position:relative;
  width: 424px;
  /* height:44px; */
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 52px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 16px;
  outline: none;
  background: ${color.white};
`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  stroke: ${color.orangePrimary};
  fill: none;
`;

export const AuthorizationLink = styled(NavLink)`
  margin: 0 auto;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.43;
  letter-spacing: -0.03em;
  color: ${color.blackPrimaryTranslucent};
`;

export const AuthorizationLinkSpan = styled.span`
  color: ${color.orangePrimary};
`;