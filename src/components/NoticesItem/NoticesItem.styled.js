import color from 'common/GlobalColors'
import styled from 'styled-components'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 363px;
  height: 444px;
  background: pink;
  padding: 24px;
`

export const ImgCard = styled.img`
  width: 315px;
  height: 178px;
  border-radius: 16px; 
  background: ${color.orangePrimary};
  /* margin-bottom: 28px; */
`