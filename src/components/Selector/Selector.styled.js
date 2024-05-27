import color from "common/GlobalColors";
import styled from "styled-components";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

export const StyledSimpleBar = styled(SimpleBar)`
  .simplebar-scrollbar {
    background: rgba(255, 255, 255, 0.4) !important;
    width: 6px !important;
    border-radius: 12px !important;
  }

  .simplebar-track.simplebar-vertical {
    width: 6px !important;
    right: -10px !important;
  }

  .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    background-color: #dcdcdc;
  }

  .simplebar-track.simplebar-vertical .simplebar-scrollbar:hover:before {
    background-color: #bcbcbc;
  }
`;


export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownSvg = styled.svg`
  position: absolute;
  top: 15px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;
`;

export const DropdownButton = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  height: 48px;
  border-radius: 30px; 
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${color.white};
  padding: 14px;

  width: 200px;
  color: ${color.blackPrimary};
 
  /* @media (min-width: 768px) {
    width: 224px;
  } */
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 52px;
  left: 0;
  background-color: ${color.white};

  display: ${({ open }) => (open ? 'block' : 'none')};
  height: 160px; 
  /* max-height: 160px;  */

  padding: 14px;
  /* margin: 0; */
  width: 100%;
  border-radius: 15px;
`;

export const DropdownItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${color.blackPrimarySixtyPercebt};
  /* padding:  3px 0; */
  cursor: pointer;  

  &:hover {
    color: ${color.orangePrimary};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const BtnConteiner = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;