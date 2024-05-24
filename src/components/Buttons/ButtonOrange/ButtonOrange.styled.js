import color from 'common/GlobalColors'
import styled from 'styled-components'

export const OrangeBtn = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.03em;;
  height: 50px;
  width: ${({ width }) => width || '100%'};
  border-radius: 30px;

  color: ${color.white};
  background: ${color.orangePrimary};

  transition: all 0.25s linear;
  &:focus {
    outline: none;
  }
  &:hover {
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
  margin-left: 8px;

  fill: ${({isFavorite}) => (isFavorite ? color.white : 'transparent')};
  stroke: ${color.white};
`
