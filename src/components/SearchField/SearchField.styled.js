import color from 'common/GlobalColors';
import styled from 'styled-components';

export const SearchContainer = styled.div`
position: relative;
  /* display: flex; */
  /* align-items: center; */
`;

export const SearchInput = styled.input`
  padding: 14px;
  font-size: 16px;
  width: 230px;
  border: 1px solid ${color.blackPrimaryLight};
  border-radius: 30px;
  outline: none;
`;

export const SearchButton = styled.button`
position: absolute;
top: 15px;
right: 15px;
  cursor: pointer;
  /* padding: 8px 16px; */
  /* background-color: #007BFF; */
  /* border: none; */
  /* border-radius: 4px; */
  /* color: white; */
  /* font-size: 16px; */

  &:hover {
    /* background-color: #0056b3; */
  }
`;

export const ClearButton = styled(SearchButton)`
position: absolute;
top: 15px;
right: 36px;
stroke: ${color.blackPrimary};
  /* background-color: #dc3545; */

  &:hover {
    /* background-color: #c82333; */
  }
`;
