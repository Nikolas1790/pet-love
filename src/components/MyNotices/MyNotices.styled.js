import color from "common/GlobalColors";
import styled from "styled-components";

export const Container = styled.div`
  width: 643px;
  min-height: 674px;
  padding-top: 40px;
  /* background: yellow; */
`;

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Tab = styled(({ isActive, ...props }) => <button {...props} />)`
  padding: 14px;
  width: 142px;
  background-color: ${({ isActive }) => (isActive ? color.orangePrimary : color.white)};
  color: ${({ isActive }) => (isActive ? color.white : color.blackPrimary)};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.25s linear;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? color.orangePrimaryActive : color.orangeDim)};
  }
`;

export const NoticesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;