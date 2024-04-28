import { ArticleContainer } from "./NewsItem.styled";

export default function NewsItem({article}) {

  
  return (
    <ArticleContainer>
{article.text}
    </ArticleContainer> 
  );
}  