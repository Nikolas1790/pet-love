// import { PaginationButton, PaginationConteiner, PaginationSvg } from "./Pagination.styled";
// import sprite from '../../img/sprite.svg';

// export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pages = [...Array(totalPages).keys()].map(num => num + 1);

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };

//   return (
//     <PaginationConteiner>
//       <PaginationButton
//         disabled={currentPage === 1}
//         current='true'
//         onClick={goToPreviousPage}
//       >
//         <PaginationSvg>
//           <use href={`${sprite}#icon-slider-l-left`} />
//         </PaginationSvg>
//       </PaginationButton>

//       {pages.map(page => (
//         <PaginationButton
//           key={page}
//           disabled={page === currentPage}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </PaginationButton>
//       ))}      

//       <PaginationButton
//         disabled={currentPage === totalPages}
//         current='last'
//         onClick={goToNextPage}
//       >
//         <PaginationSvg >
//           <use href={`${sprite}#icon-slider-r-right`} />
//         </PaginationSvg>
//       </PaginationButton>
//     </PaginationConteiner>
//   );
// };



import { PaginationButton, PaginationConteiner, PaginationSvg } from "./Pagination.styled";
import sprite from '../../img/sprite.svg';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // const pages = [...Array(totalPages).keys()].map(num => num + 1);

  // const goToPreviousPage = () => {
  //   if (currentPage > 1) {
  //     onPageChange(currentPage - 1);
  //   }
  // };

  // const goToNextPage = () => {
  //   if (currentPage < totalPages) {
  //     onPageChange(currentPage + 1);
  //   }
  // };
// Ограничение количества отображаемых страницных кнопок
const maxPageNumberLimit = 5;
const minPageNumberLimit = 0;

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

  return (
    <PaginationConteiner>
      <PaginationButton disabled={currentPage === 1} onClick={handleFirstPage}>
        ««
      </PaginationButton>
      <PaginationButton disabled={currentPage === 1} onClick={handlePrevBtn}>
        «
      </PaginationButton>
      {currentPage > 1 && totalPages > maxPageNumberLimit && <span>...</span>}
      {pages.map(page => {
        if (page < currentPage + 2 && page > currentPage - 2) {
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
        »
      </PaginationButton>
      <PaginationButton disabled={currentPage === totalPages} onClick={handleLastPage}>
        »»
      </PaginationButton>
    </PaginationConteiner>
  );
};