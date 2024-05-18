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

export const PetImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const ReitingContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;