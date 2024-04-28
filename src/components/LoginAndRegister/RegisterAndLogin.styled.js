import color from 'common/GlobalColors'
import {  Field } from 'formik'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 32px;
  width: 1280px;
  height: 686px;
  padding: 0  32px 32px 32px;  
`
///////////////// ing /////////////////////////////
export const ImgContainer = styled.div`
  position: relative;
`
export const PetImg = styled.img` 
  width: 592px;
  height: 654px;
  border-radius: 60px;
`
export const SmsImg = styled.img` 
  position: absolute;
  bottom: 97px;
  left: 61px;
  width: 294px;
  height: 121px;
  border-radius: 20px;
`


///////////////// ing /////////////////////////////
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


export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  letter-spacing: -0.03em;
  margin-bottom: 32px;
  margin-top: 16px;
`



export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({page}) => (page === "login" ? '64px' : '32px')};
  margin-bottom: 16px;
`;

export const FormConteiner = styled.div`
  display:flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormFieldConteiner = styled.div`
  position:relative;
  width: 424px;
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 52px;
  border: 1px solid	${({error, right}) => (error === "true" ? color.redWrong :(right ==="true" ? color.greenRight : color.blackPrimaryLight))};

  border-radius: 30px;
  padding: 16px;
  outline: none;
  background: ${color.white};
`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  stroke: ${color.orangePrimary};
  fill: none;
`;

export const TopRightSvg = styled.svg`
  position: absolute;
  top: 15px;
  /* right: 15px; */
  right: ${({right}) => (right || '15px' )};
  width: 22px;
  height: 22px;
  cursor: pointer;
  fill: none;
`;

export const SecureMessage = styled.p`
  font-size: 10px;
  color: ${({error}) => (error ? color.redWrong : color.greenRight )};
  padding: 4px 0px 0px 16px;
`;



export const AuthorizationLink = styled(NavLink)`
  margin: 0 auto;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.43;
  letter-spacing: -0.03em;
  color: ${color.blackPrimaryFiftyPercebt};
`;

export const AuthorizationLinkSpan = styled.span`
  color: ${color.orangePrimary};
`;