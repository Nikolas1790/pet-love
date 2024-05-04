import { ContentContainer } from "common/GiobalStyles";
import { HomeContainer, HomeImg, HomeText, HomeTitle, HomeTitleBlock, TranslucentWord } from "./Home.styled";
import mainHomeImg from '../../img/home/DesctopHomeImg.jpg';

export default function Home() {  
  return (
    <ContentContainer>
      <HomeContainer>
        <HomeTitleBlock>
          <HomeTitle>Take good <TranslucentWord>care</TranslucentWord> of your small pets</HomeTitle>
          <HomeText>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</HomeText>
        </HomeTitleBlock>

        
          <HomeImg src={mainHomeImg} alt="dirl with dog" />
        
      </HomeContainer>
    </ContentContainer>
  );
}