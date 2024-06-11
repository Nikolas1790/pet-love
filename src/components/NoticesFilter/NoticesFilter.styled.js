import color from 'common/GlobalColors'
import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1216px;
  height: 216px;
  border-radius: 30px;
  background: ${color.orangeLight};
  padding: 40px;  
`

export const DataEntryContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const SeparatingContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(38, 38, 38, 0.1);
  margin: 20px 0;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ResetBtn = styled.button`
  display: flex;
  justify-content: space-between;
`