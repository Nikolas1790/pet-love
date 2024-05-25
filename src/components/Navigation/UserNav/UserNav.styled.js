import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ProfilNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const ProfilName = styled.span`
  max-width:200px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`