import color from "common/GlobalColors";
import styled from "styled-components";
import {  Field } from "formik";

export const ModalEdit = styled.div`
  position: relative;
  width: 480px;
  height: 580px;
  background: ${color.white};
  border-radius: 30px;
  padding: 50px;
`;

export const TitleModalEdit = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${color.blackPrimaryCard};
  margin-bottom: 20px;
`;

export const PhotoBlock = styled.div`
  display: flex;
  justify-content: center; 
  margin-bottom: 12px;
`;


export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

export const Input = styled(Field)`
  width: 380px;
  height: 52px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid ${color.orangePrimary};
  border-radius: 30px;
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > ${Input}:not(:last-child) {
    margin-bottom: 16px;
  }
`;