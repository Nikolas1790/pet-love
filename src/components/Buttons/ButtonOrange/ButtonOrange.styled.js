import color from 'common/GlobalColors'
import styled from 'styled-components'

export const OrangeBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.03em;;
  height: 50px;
  width: ${({ width }) => width || '100%'};
  border-radius: 30px;

  color: ${color.white};

  /* border: 1px solid ${color.blackPrimaryLight}; */
  background: ${color.orangePrimary};


  transition: all 0.25s linear;
  &:focus {
    outline: none;
  }
  &:hover {
    /* border: 1px solid ${color.orangePrimary}; */
    background: ${color.orangePrimaryActive};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    outline: none;
  }
`

export const Heart = styled.svg.withConfig({
  shouldForwardProp: (prop) => !['isFavorite'].includes(prop),
})`
  width: 18px;
  height: 18px;
  /* fill: transparent;
  stroke: ${color.white}; */
  margin-left: 8px;

  fill: ${props => (props.isFavorite ? 'red' : 'transparent')};
  stroke: ${props => (props.isFavorite ? 'red' : 'white')};
`
