import Logo from "components/Logo/Logo";
import AuthNav from "components/Navigation/AuthNav/AuthNav";
import Nav from "components/Navigation/Nav/Nav";
import { HeaderBlock, HeaderContainer } from "./Header.styled";
import UserNav from "components/Navigation/UserNav/UserNav";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/selectorAuth";

export default function Header() {
  const token = useSelector(selectToken);
  return (
    <HeaderContainer>
      <HeaderBlock>
        <Logo />
        <Nav />   
        { token ?  <UserNav /> :<AuthNav />}
      </HeaderBlock> 
    </HeaderContainer>
  );
};
