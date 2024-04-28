import { ContentBlock, ContentContainer, Title } from "common/GiobalStyles";
import NewsList from "components/NewsList/NewsList";

export default function News() {
  return (
    <ContentContainer>
      <ContentBlock>
        <Title>News</Title>
        <NewsList />
      </ContentBlock>
    </ContentContainer>
  );
}  