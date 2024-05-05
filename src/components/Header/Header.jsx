import Logo from "components/Logo/Logo";
import AuthNav from "components/Navigation/AuthNav/AuthNav";
import Nav from "components/Navigation/Nav/Nav";
import { HeaderBlock, HeaderContainer } from "./Header.styled";
import UserNav from "components/Navigation/UserNav/UserNav";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/selectorAuth";
import { useLocation } from "react-router-dom";

export default function Header() {
  const token = useSelector(selectToken);
  const location = useLocation(); // Получаем текущий путь
  const isHome = location.pathname === '/home'; // Проверяем, является ли путь /home

  return (
    <HeaderContainer>
      <HeaderBlock home={isHome ? 'true' : ''}>
        <Logo home={isHome ? 'true' : ''} />
        <Nav home={isHome ? 'true' : ''} />   
        { token ?  <UserNav /> :<AuthNav home={isHome ? 'true' : ''} />}
      </HeaderBlock> 
    </HeaderContainer>
  );
};
