import Logo from "components/Logo/Logo";
import AuthNav from "components/Navigation/AuthNav/AuthNav";
import Nav from "components/Navigation/Nav/Nav";

export default function Header() {
  return (
    <div>
      <Logo />
      <Nav />    
      <AuthNav />  
    </div>
  );
};
