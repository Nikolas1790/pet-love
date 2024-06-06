import Select from 'react-select';
import styled from 'styled-components';

export const StyledSelect = styled(Select)`
.react-select__control {
  width: 227px;
  height: 48px;
  border: none;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  box-shadow: none;
  padding-left: 14px;
}

.react-select__control--is-focused {
  border-color: 1px solid rgb(246, 184, 61);
}

.react-select__value-container {
  margin: 0;
  padding: 0;
}

.react-select__value-container {
  padding: 0 6px;
  margin: 0;
  padding: 0;
}

.react-select__input {
  /* margin: 0;
  padding: 0; */
}

.react-select__placeholder {
  color: rgba(0, 0, 0, 0.4);
  margin: 0;
  padding: 0;
}

.react-select__indicator-separator {
  display: none;
}

.react-select__dropdown-indicator {
  /* padding: 4px; */
  display: none;
}

.react-select__menu {
  border-radius: 15px;
  margin-top: -84px;
}

.react-select__menu-list {
  border-radius: 15px;
}
`;



export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: rgb(246, 184, 61);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgb(220, 160, 50);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  margin-top: 10px;
`;