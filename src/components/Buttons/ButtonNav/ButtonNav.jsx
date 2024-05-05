import { NavBtn } from "./ButtonNav.styled";

export default function ButtonNav({ className, label, onClick, width, to, home }) {
  return (    
    <NavBtn to={to} className={className} onClick={onClick} width={width} label={label} home={home} >
      {label}
    </NavBtn>    
  )
}