import { NavBtn } from "./ButtonNav.styled";

export default function ButtonNav({ className, label, onClick, width, to }) {
  return (    
    <NavBtn to={to} className={className} onClick={onClick} width={width} label={label} >
      {label}
    </NavBtn>    
  )
}