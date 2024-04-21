import Logo from "components/Logo/Logo";
import AuthNav from "components/Navigation/AuthNav/AuthNav";
import Nav from "components/Navigation/Nav/Nav";
import { HeaderBlock, HeaderContainer } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderBlock>
        <Logo />
        <Nav />    
        <AuthNav /> 
      </HeaderBlock> 
    </HeaderContainer>
  );
};
