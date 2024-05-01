import { PaginationButton, PaginationConteiner, PaginationSvg } from "./Pagination.styled";
import sprite from '../../img/sprite.svg';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPageNumberLimit = 5;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevBtn = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextBtn = () => {
    onPageChange(currentPage + 1);
  };

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };
console.log(pages)
  return (
    <PaginationConteiner>
      <PaginationButton disabled={currentPage === 1} onClick={handleFirstPage}>
      <PaginationSvg>
           <use href={`${sprite}#icon-slider-l-left`} />
        </PaginationSvg>
      </PaginationButton>
      <PaginationButton disabled={currentPage === 1} onClick={handlePrevBtn}>
         <PaginationSvg>
           <use href={`${sprite}#icon-slider-left`} />
        </PaginationSvg>
      </PaginationButton>
      {pages.map(page => {
        if (page < currentPage + 3 && page > currentPage - 2) {
          return (
            <PaginationButton
              key={page}
              disabled={currentPage === page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationButton>
          );
        } else {
          return null;
        }
      })}
      {currentPage < totalPages && totalPages > maxPageNumberLimit && <span>...</span>}
      <PaginationButton disabled={currentPage === totalPages} onClick={handleNextBtn}>
         <PaginationSvg >
           <use href={`${sprite}#icon-slider-right`} />
         </PaginationSvg>
      </PaginationButton>
      <PaginationButton disabled={currentPage === totalPages} onClick={handleLastPage}>
         <PaginationSvg >
/           <use href={`${sprite}#icon-slider-r-right`} />
         </PaginationSvg>
      </PaginationButton>
    </PaginationConteiner>
  );
};