import { ContentBlock, ContentContainer, Title } from "common/GiobalStyles";
import FriendsList from "components/FriendsList/FriendsList";

export default function Friends() {
  return (
    <ContentContainer>
      <ContentBlock>
        <Title>Our friends</Title>
        <FriendsList />
      </ContentBlock>
    </ContentContainer>
  );
}  