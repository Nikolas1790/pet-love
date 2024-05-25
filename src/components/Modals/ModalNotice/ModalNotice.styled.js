import color from "common/GlobalColors";
import styled from "styled-components";

export const NoticeModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 473px;
  height: 476px;  
  background: ${color.white};
  border-radius: 30px;
  padding: 40px ;
`;

export const ImgContainer = styled.div`
  position:relative;
`;
export const PetImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 16px;
`;
export const CategoryBlock = styled.div`
  position: absolute;
  top: 0px;
  left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.orangePrimary};
  background: ${color.orangeLight};
  padding: 8px 14px;
  border-radius: 30px; 

`;

export const PetCategory = styled.p`
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
`;

export const ReitingContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;