import color from "common/GlobalColors";
import styled from "styled-components";

export const ModalEdit = styled.div`
  position: relative;
  width: 480px;
  height: 580px;
  background: ${color.white};
  border-radius: 30px;
  padding: 50px;
`;


export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 380px;
  height: 52px;

  padding: 16px;

  /* margin-top: 5px; */
  margin-bottom: 16px;
  border: 1px solid ${color.orangePrimary};
  border-radius: 30px;

  /* &:not(:last-child) {
    margin-bottom: 16px;
  } */
`;


export const Button = styled.button`
  background-color: ${color.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${color.primaryDark};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > ${Input}:not(:last-child) {
    margin-bottom: 16px;
  }
`;