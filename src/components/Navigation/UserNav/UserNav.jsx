import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import { NavConteiner } from "../Navigation.styled";

export default function UserNav() {
  
  return (
    <NavConteiner>
      <ButtonOrange label='LOG OUT' width='136px' />
      <button>NAME</button>
    </NavConteiner>
  )
}