import ButtonNav from "components/Buttons/ButtonNav/ButtonNav";
import { NavConteiner } from "../Navigation.styled";

export default function AuthNav() {
  return (
    <NavConteiner>
      <ButtonNav to='/login' label='LOG IN' width='119px' />
      <ButtonNav to='/register' label='REGISTRATION' width='149px' />
    </NavConteiner>
  )
}