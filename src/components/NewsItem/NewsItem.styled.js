import styled from 'styled-components'

export const ArticleContainer = styled.li`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 361px;
  height: 476px;
  /* background: pink; */
`
export const ImgContainer = styled.img`
  width: 361px;
  height: 226px;
  border-radius: 15px; 
  background: pink;
  margin-bottom: 28px;
`

export const TitleArticle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 14px;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* Ограничивает количество строк до 2 */
  -webkit-box-orient: vertical; /* Ориентация контейнера */
  overflow: hidden;
  text-overflow: ellipsis; /* Добавляет многоточие, если текст обрезается */
  height: 2.6em; /* Высота, рассчитанная как line-height * количество строк */
`


export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextArticle = styled.p`
  font-size: 16px;
  margin-bottom: 28px;

  display: -webkit-box;
  -webkit-line-clamp: 4; /* Ограничивает количество строк до 4 */
  -webkit-box-orient: vertical; /* Ориентация контейнера */
  overflow: hidden;
  text-overflow: ellipsis; /* Добавляет многоточие, если текст обрезается */
  height: 5em; /* Высота, рассчитанная как line-height * количество строк */
`