import color from 'common/GlobalColors';
import styled from 'styled-components';
// import color from 'common/GlobalColors';

export const RadioContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
`;

export const RadioGroup = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 8px;
`;

export const RadioButton = styled.input`
  margin-right: 10px;
`;


export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  /* border: 1px solid #ccc; */
  border-radius: 30px;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? '#ff0000' : '#fff')};
  color: ${({ checked }) => (checked ? '#fff' : '#000')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${color.orangeDim};
    color: #fff;
  }
`;

export const StyledRadioButton = styled.input`
  display: none;

  /* &:checked + ${Label} {
    background-color: #007bff;
    color: #fff;
  } */
`;