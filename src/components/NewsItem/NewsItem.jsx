import { ArticleContainer, DateArticle, ImgContainer, LinkContainer, LinkNewPageArticle, TextArticle, TitleArticle } from "./NewsItem.styled";

export default function NewsItem({article}) {  
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <ArticleContainer>
      <ImgContainer src={article.imgUrl} alt="cover" />
      <TitleArticle>{article.title}</TitleArticle>
      <TextArticle>{article.text}</TextArticle>
      <LinkContainer>
        <DateArticle>{formatDate(article.date)}</DateArticle>
        <LinkNewPageArticle href={article.url} target="_blank" rel="noopener noreferrer">Read more</LinkNewPageArticle>
      </LinkContainer>
    </ArticleContainer> 
  );
}  