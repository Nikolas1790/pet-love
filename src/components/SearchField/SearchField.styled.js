import color from 'common/GlobalColors';
import styled from 'styled-components';

export const SearchContainer = styled.div`
position: relative;
`;

export const SearchInput = styled.input`
  padding: 14px;

  font-size: 16px;
  width: ${({width}) => width || '230px' };
  border: ${({ border }) => border || `1px solid ${color.blackPrimaryLight}`};
  border-radius: 30px;
  outline: none;

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: ${({ border }) => border === "none" ? color.blackPrimary :  "none"};
  }

`;

export const SearchButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  &:hover {
    /* background-color: #0056b3; */
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 15px;
  right: 36px;
  stroke: ${color.blackPrimary};

  &:hover {
    /* background-color: red; */
  }
`;
