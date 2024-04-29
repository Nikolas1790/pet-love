import { ArticleContainer, ImgContainer, LinkContainer, TextArticle, TitleArticle } from "./NewsItem.styled";

export default function NewsItem({article}) {  
    // Функция для форматирования даты
    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

  return (
    <ArticleContainer>
      <ImgContainer src={article.imgUrl} alt="cover" />
      <TitleArticle>{article.title}</TitleArticle>
      <TextArticle>{article.text}</TextArticle>
      <LinkContainer>
        <p>{formatDate(article.date)}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </LinkContainer>
    </ArticleContainer> 
  );
}  