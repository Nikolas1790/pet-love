import { ContentContainer } from "common/GiobalStyles";
import { HomeContainer, HomeText, HomeTitle, HomeTitleBlock } from "./Home.styled";

export default function Home() {  
  return (
    <ContentContainer>
      <HomeContainer>
        <HomeTitleBlock>
          <HomeTitle>Take good <span>care</span> of your small pets</HomeTitle>
          <HomeText>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</HomeText>
        </HomeTitleBlock>

        <div>
          <img src="" alt="" />
        </div>
      </HomeContainer>
    </ContentContainer>
  );
}