import { LightBtn } from "./ButtonLightOrange.styled";

export default function ButtonLightOrange({ className, label, onClick, width }) {
  return (    
    <LightBtn className={className} onClick={onClick} width={width} label={label} >
      {label}
    </LightBtn>    
  )
}