import { CustomBtn } from "./ButtonWithBorder.styled";

export default function ButtonWithBorder({ className, label, onClick, width, to, home }) {
  return (    
    <CustomBtn className={className} onClick={onClick} type="submit" width={width} to={to} home={home} >
      {label}
    </CustomBtn>    
  )
}