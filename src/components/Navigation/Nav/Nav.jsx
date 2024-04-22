import ButtonWithBorder from "components/Buttons/ButtonWithBorder/ButtonWithBorder";
import { NavConteiner } from "./Nav.styled";

export default function Nav(){
  return (
    <NavConteiner>
      <ButtonWithBorder to='/news' label='News' width='80px' />
      <ButtonWithBorder to='/notices' label='Find pet' width='97px' />
      <ButtonWithBorder to='/friends' label='Our friends' width='119px' />
    </NavConteiner>
  )
}