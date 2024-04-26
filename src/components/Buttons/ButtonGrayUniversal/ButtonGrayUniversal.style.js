import color from 'common/GlobalColors'
import styled from 'styled-components'

export const GrayUniversalBtn = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.03em;;
  height: 48px;
  width: ${({ width }) => width || '100%'};
  border-radius: 30px;

  color: ${color.blackPrimary};

  background: ${color.blackPrimarySuperLight};

  transition: all 0.25s linear;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${color.blackPrimaryLight};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    outline: none;
  }
`