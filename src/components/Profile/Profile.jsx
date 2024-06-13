import { ContentContainer } from "common/GiobalStyles";
import MyNotices from "components/MyNotices/MyNotices";
import UserCard from "components/UserCard/UserCard";

export default function Profile() {
  return (
    <ContentContainer>
      <UserCard />
      <MyNotices />
    </ContentContainer>
  );
}  