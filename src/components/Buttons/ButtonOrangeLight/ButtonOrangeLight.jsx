import { OrangeLightBtn } from "./ButtonOrangeLight.style";

export default function ButtonOrangeLight({ className, label, onClick, width }) {
  return (    
    <OrangeLightBtn className={className} onClick={onClick} type="submit" width={width} >
      {label}
    </OrangeLightBtn>    
  )
}