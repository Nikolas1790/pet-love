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
  top: 14px;
  right: 14px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;
`;

export const DropdownButton = styled.button`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  height: 44px;
  border-radius: 60px; 
  border: 1px solid ${color.blackPrimarySecondary};
  outline: none;
  cursor: pointer;
  background-color: ${color.white};
  padding: 13px 18px;

  width: 295px;
  color: ${({ defaultname }) => defaultname ? color.blackColorSecondary : color.blackModalColr};
  border-color: ${({ haserror }) => haserror ? color.red : color.blackPrimarySecondary};

  @media (min-width: 768px) {
    width: 224px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 112%;
  left: 0;
  background-color: ${color.greenLight};

  display: ${({ open }) => (open ? 'block' : 'none')};
  max-height: 140px; 
  padding: 13px 18px;
  margin: 0;
  width: 100%;
  border-radius: 15px;
`;

export const DropdownItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${color.whiterTranslucent};
  padding:  3px 0;
  cursor: pointer;  

  &:hover {
    color: ${color.white};
  }
`;

export const BtnConteiner = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;