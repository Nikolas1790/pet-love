import { PaginationButton, PaginationConteiner, PaginationSvg, ThreeDots } from "./Pagination.styled";
import sprite from '../../img/sprite.svg';

const getVisiblePages = (current, total) => {
  if (total < 3) {
    // Если страниц меньше трех, возвращаем все
    return Array.from({length: total}, (_, i) => i + 1);
  } else {
    // Вычисляем начальную страницу для показа
    let startPage = current - ((current - 1) % 3);
    // Вычисляем последнюю страницу для показа
    let endPage = Math.min(startPage + 2, total);
    return Array.from({length: (endPage - startPage + 1)}, (_, i) => startPage + i);
  }
};

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  const handlePrevBtn = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextBtn = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <PaginationConteiner>
      <PaginationButton disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        <PaginationSvg>
          <use href={`${sprite}#icon-slider-l-left`} />
        </PaginationSvg>
      </PaginationButton>
      <PaginationButton disabled={currentPage === 1} onClick={handlePrevBtn}>
        <PaginationSvg>
          <use href={`${sprite}#icon-slider-left`} />
        </PaginationSvg>
      </PaginationButton>
      {visiblePages.map(page => (
        <PaginationButton
          key={page}
          dis={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
      {currentPage < totalPages && totalPages > 5 && <ThreeDots>...</ThreeDots>}
      <PaginationButton disabled={currentPage === totalPages} onClick={handleNextBtn}>
        <PaginationSvg>
          <use href={`${sprite}#icon-slider-right`} />
        </PaginationSvg>
      </PaginationButton>
      <PaginationButton disabled={currentPage === totalPages}  onClick={() => onPageChange(totalPages)}>
        <PaginationSvg>
          <use href={`${sprite}#icon-slider-r-right`} />
        </PaginationSvg>
      </PaginationButton>
    </PaginationConteiner>
  );
};