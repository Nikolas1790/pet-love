import color from "common/GlobalColors";
import styled from "styled-components";

export const Container = styled.div`
  width: 643px;
  min-height: 674px;
  background: yellow;
`;

export const Tabs = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const Tab = styled.button`
  padding: 12px 20px;
  background-color: ${({ isActive }) => (isActive ? color.orangePrimary : '#FFF')};
  color: ${({ isActive }) => (isActive ? '#FFF' : '#000')};

  cursor: pointer;

  /* &:hover {
    background-color: #f0f0f0;
  } */
`;

export const NoticesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;