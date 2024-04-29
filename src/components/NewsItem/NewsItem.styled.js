import color from 'common/GlobalColors'
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


export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DateArticle = styled.p`
  font-size: 16px;
  color: ${color.blackPrimaryFiftyPercebt};
`

export const LinkNewPageArticle = styled.a`
  font-size: 16px;
  color: ${color.orangePrimary};
  position: relative;
  /* text-decoration: none;  */

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0px;
    background: ${color.orangePrimary};
    transition: background-color 0.25s linear, width 0.25s linear;
  }

  &:hover::after {
    background-color: ${color.orangePrimaryActive}; /* Меняем цвет подчеркивания при hover */
    width: 0%; /* Это заставит линию исчезать плавно */
  }

  &:focus {
    outline: none;
  }
`
