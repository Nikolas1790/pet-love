import ButtonWithBorder from "components/Buttons/ButtonWithBorder/ButtonWithBorder";
import { NavConteiner } from "./Nav.styled";

export default function Nav(){
  return (
    <NavConteiner>
      <ButtonWithBorder label='News' width='80px' />
      <ButtonWithBorder label='Find pet' width='97px' />
      <ButtonWithBorder label='Our friends' width='119px' />
    </NavConteiner>
  )
}