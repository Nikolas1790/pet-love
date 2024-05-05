import ButtonWithBorder from "components/Buttons/ButtonWithBorder/ButtonWithBorder";
import { NavConteiner } from "./Nav.styled";

export default function Nav({home}){
  return (
    <NavConteiner>
      <ButtonWithBorder to='/news' label='News' width='80px' home={home ? 'true' : ''} />
      <ButtonWithBorder to='/notices' label='Find pet' width='97px' home={home ? 'true' : ''} />
      <ButtonWithBorder to='/friends' label='Our friends' width='119px' home={home ? 'true' : ''} />
    </NavConteiner>
  )
}