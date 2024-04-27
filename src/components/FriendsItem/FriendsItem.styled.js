import color from 'common/GlobalColors'
import styled from 'styled-components'

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 371px;
  height: 196px;
  background: ${color.white};
  padding: 40px 20px;
`

export const ImgContainer = styled.img`
  width: 90px;
  height: 90px;
`

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.04em;
  margin-bottom: 20px;
`

export const ItemContacts = styled.p`
width: 222px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  white-space: nowrap;        // Содержимое в одну строку без переносов
  overflow: hidden;           // Скрыть содержимое, выходящее за пределы элемента
  text-overflow: ellipsis; 

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
export const ItemSpan = styled.span`
  color: ${color.blackPrimaryFiftyPercebt};

`