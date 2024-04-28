import color from 'common/GlobalColors'
import styled from 'styled-components'

export const ItemContainer = styled.li`
  position: relative;
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
  white-space: nowrap;        
  overflow: hidden;         
  text-overflow: ellipsis; 

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
export const ItemSpan = styled.span`
  color: ${color.blackPrimaryFiftyPercebt};
`

export const LinkContact = styled.a`
  transition: all 0.25s linear; 
  &:hover {
    color: ${color.orangePrimary};
  }
`

export const TimeContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 102px;
  height: 34px;
  padding: 8px;
  border-radius: 30px;
  color: ${color.orangePrimary};
  background:  rgb(255, 244, 223);

  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.05em;
`