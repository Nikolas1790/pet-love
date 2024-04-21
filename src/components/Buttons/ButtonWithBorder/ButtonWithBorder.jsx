import { CustomBtn } from "./ButtonWithBorder.styled";

export default function ButtonWithBorder({ className, label, onClick, width }) {
  return (    
    <CustomBtn className={className} onClick={onClick} type="submit" width={width} >
      {label}
    </CustomBtn>    
  )
}