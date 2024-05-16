import color from "common/GlobalColors";
import styled from "styled-components";

export const DogSilhouette = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const AtentionsModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 466px;
  min-height: 434px;
  background: ${color.white};
  border-radius: 30px;
  padding: 60px ;
`;

export const TitleAttention = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.29;
  margin-bottom: 20px;
  color: ${color.orangePrimary};
`;

export const TextAttention = styled.p`
text-align: center;
  font-size: 14px;
  line-height: 1.17;
  margin-bottom: 28px;
  color: ${color.blackPrimaryCard};
  letter-spacing: -0.02em;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 8px;
`;