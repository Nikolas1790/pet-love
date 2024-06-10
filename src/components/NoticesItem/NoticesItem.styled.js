import color from 'common/GlobalColors'
import styled from 'styled-components'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 363px;
  height: 444px;
  background:  ${color.white};
  border-radius: 16px;
  padding: 24px;
`

export const ImgCard = styled.img`
  width: 315px;
  height: 178px;
  border-radius: 16px; 
  background: ${color.orangeLight};
  object-fit: cover; 
`
export const InfMainContainer = styled.div`
  min-height: 194px; /* Пример минимальной высоты */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PopularityIndicators = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const TitleCard = styled.h3`
  color: ${color.blackPrimaryCard};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 1;

  margin-bottom: ${({ margin }) => (margin || '0px')};
`


export const PopularityContainer = styled.div`
  display: flex;
  gap: 4px; 
`

export const PetDetails = styled.ul`
  display: flex;
  gap: 20px; 
  margin-bottom: ${({margin}) => margin || '16px'}; 
`

export const PetComments = styled.p`
  color: ${color.blackPrimaryCard};
  font-size: 14px;
`

export const NavCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const FavoritBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isFavorite'].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${color.orangeLight};
  
  :hover,
  :focus {
    /* background: red; */
  }

  svg {
    width: 18px;
    height: 18px;

    fill: ${({isFavorite}) => (isFavorite ? color.orangePrimary : 'transparent')};
    stroke: ${color.orangePrimary};
  }

  /* fill: transparent;
  stroke: ${color.orangePrimary};

  :active{
    fill: ${color.white};
    stroke: ${color.blackPrimary};
  } */

`