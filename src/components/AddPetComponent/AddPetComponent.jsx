import ButtonNav from "components/Buttons/ButtonNav/ButtonNav";
import { AddPetBlock, TitleMyPets } from "./AddPetComponent.styled";

export default function AddPetComponent() {
  return (
    <AddPetBlock>
      <TitleMyPets>My pets</TitleMyPets>
      <ButtonNav to='/add-pet' label='Add pet' width='118px'  />
    </AddPetBlock>
  );
}
