import color from "common/GlobalColors";
import styled from "styled-components";

export const UserBlockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const UploadPhoto = styled.p`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const TitleInformation = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 20px;
  margin-right: auto; 
`;


export const UserInfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const UserInfoItem = styled.li`
  width: 440px;
  height: 52px;
  padding: 16px;  
  border: 1px solid ${color.blackPrimaryLight};
  border-radius: 30px;
  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;