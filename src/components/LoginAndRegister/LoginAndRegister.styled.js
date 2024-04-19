import color from 'common/GlobalColers'
import styled from 'styled-components'
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center ;
`

export const LoginContainer = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  padding: 24px 20px;

  @media (min-width: 768px) {
    width: 768px;
    height: 1024px;
    padding: 24px 32px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    height: 800px;
    padding: 28px  100px;
  }
`
export const TableContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const TableContentsNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 12px; 
  letter-spacing: -0.2px;
  color: ${color.blackModalColr}; 
  transition: color 0.3s linear; 
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${color.greenDarker};
    outline: none;
 }
 &:active {
    color: black;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const ElementsSvg = styled.svg`
  position: absolute;
  right: -180px;
  bottom: -188px;
  width: 464px;
  height: 345px;
  @media (min-width: 768px) {
    right: -180px;
    bottom: -88px;
  }
`
export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 148px;

  @media (min-width: 768px) {
    gap: 50px;
    margin-top: 204px;
  }
  @media (min-width: 1440px) {
    gap: 150px;
    flex-direction: row;
    margin-top: 226px;
  }
`
///////////////////////////////////////////////////
export const TitleContainer = styled.div`
  position: relative;

  @media (min-width: 768px) {
    width: 614px;
  }
`
export const WhitePill = styled.img`
  position: absolute;
  top: -58px;
  right: 20px;
  width: 95px;
  height: 93px;

  @media (min-width: 768px) {
    top: -104px;
    width: 179px;
    height: 175px;
  }
`
export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 54px;
    font-weight: 600;
    line-height: 1.1;
  }
`
export const TitleSpan = styled.span`
  color:${color.greenLight};
`

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    width: 323px;
  }
`

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormConteiner = styled.div`
  display:flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormFieldConteiner = styled.div`
  position:relative;
  width: 100%;
  height:44px;
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 44px;
  border: 1px solid	${color.blackPrimarySecondary};
  border-radius: 60px;
  padding: 13px 18px;
  outline: none;
  background: ${color.white};
`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 13px;
  right: 18px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;
`;