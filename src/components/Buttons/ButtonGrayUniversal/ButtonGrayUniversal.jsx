import { GrayUniversalBtn } from "./ButtonGrayUniversal.style";

export default function ButtonGrayUniversal({ className, label, onClick, width }) {
  return (    
    <GrayUniversalBtn className={className} onClick={onClick} type="submit" width={width} >
      {label}
    </GrayUniversalBtn>    
  )
}