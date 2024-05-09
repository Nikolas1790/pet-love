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
  background: ${color.orangePrimary};
   object-fit: cover; /* Додаємо object-fit для обрізання зображення */
  /* margin-bottom: 28px; */
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
`


export const PopularityContainer = styled.div`
  display: flex;
  gap: 4px; 
  // justify-content: space-between;
`

export const PetDetails = styled.ul`
  display: flex;
  gap: 20px; 
  margin-bottom: 16px; 
`

export const PetComments = styled.p`
  color: ${color.blackPrimaryCard};
  font-size: 14px;
`