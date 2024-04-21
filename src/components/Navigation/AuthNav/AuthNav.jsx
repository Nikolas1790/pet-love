import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import { NavConteiner } from "./AuthNav.styled";
import ButtonOrangeLight from "components/Buttons/ButtonOrangeLight/ButtonOrangeLight";

export default function AuthNav() {
  return (
    <NavConteiner>
      <ButtonOrange label='LOG IN' width='119px' />
      <ButtonOrangeLight label='REGISTRATION' width='149px' />      
    </NavConteiner>
  )
}