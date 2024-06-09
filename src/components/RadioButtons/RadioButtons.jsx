// import React, { useState } from 'react';
// import { RadioGroup, RadioContainer, Label, StyledRadioButton, SvgX } from './RadioButtons.styled';
// import sprite from '../../img/sprite.svg';

// export default function RadioButtons({ setSortCriteria }) {
//   const [selectedPopularGroup, setSelectedPopularGroup] = useState('');
//   const [selectedPriceGroup, setSelectedPriceGroup] = useState('');

//   const handleOptionChangeGroup1 = (event) => {
//     setSelectedPopularGroup(event.target.value);
//     setSortCriteria((prev) => ({ ...prev, group1: event.target.value }));
//   };

//   const handleOptionChangeGroup2 = (event) => {
//     setSelectedPriceGroup(event.target.value);
//     setSortCriteria((prev) => ({ ...prev, group2: event.target.value }));
//   };

//   return (
//     <RadioContainer>
      
//       <RadioGroup>
//         <Label  checked={selectedPopularGroup === 'Popular'}>
//           <StyledRadioButton
//             type="radio"
//             value="Popular"
//             checked={selectedPopularGroup === 'Popular'}
//             onChange={handleOptionChangeGroup1}
//           />
//           Popular
//           {selectedPopularGroup === 'Popular' && (
//             <SvgX >
//               <use href={`${sprite}#icon-x`} />
//             </SvgX>
//           )}
//         </Label>
//         <Label checked={selectedPopularGroup === 'Unpopular'}>
//           <StyledRadioButton
//             type="radio"
//             value="Unpopular"
//             checked={selectedPopularGroup === 'Unpopular'}
//             onChange={handleOptionChangeGroup1}
//           />
//           Unpopular
//           {selectedPopularGroup === 'Unpopular' && (
//             <SvgX >
//               <use href={`${sprite}#icon-x`} />
//             </SvgX>
//           )}
//         </Label>
//       </RadioGroup>
      
//       <RadioGroup>
//         <Label checked={selectedPriceGroup === 'Cheap'}>
//           <StyledRadioButton
//             type="radio"
//             value="Cheap"
//             checked={selectedPriceGroup === 'Cheap'}
//             onChange={handleOptionChangeGroup2}
//           />
//           Cheap
//           {selectedPriceGroup === 'Cheap' && (
//             <SvgX >
//               <use href={`${sprite}#icon-x`} />
//             </SvgX>
//           )}
//         </Label>
//         <Label checked={selectedPriceGroup === 'Expensive'}>
//           <StyledRadioButton
//             type="radio"
//             value="Expensive"
//             checked={selectedPriceGroup === 'Expensive'}
//             onChange={handleOptionChangeGroup2}
//           />
//           Expensive
//           {selectedPriceGroup === 'Expensive' && (
//             <SvgX >
//               <use href={`${sprite}#icon-x`} />
//             </SvgX>
//           )}
//         </Label>
//       </RadioGroup>
//     </RadioContainer>
//   );
// }



import React, { useState } from 'react';
import { RadioGroup, RadioContainer, Label, StyledRadioButton, SvgX } from './RadioButtons.styled';
import sprite from '../../img/sprite.svg';

export default function RadioButtons({ setSortCriteria }) {
  const [isPopular, setIsPopular] = useState(null); // true for Popular, false for Unpopular
  const [isExpensive, setIsExpensive] = useState(null); // true for Expensive, false for Cheap

  const handlePopularChange = () => {
    setIsPopular(true);
    setSortCriteria((prev) => ({ ...prev, popular: false }));
  };

  const handleUnpopularChange = () => {
    setIsPopular(false);
    setSortCriteria((prev) => ({ ...prev, popular: true }));
  };

  const handleCheapChange = () => {
    setIsExpensive(false);
    setSortCriteria((prev) => ({ ...prev, price: false }));
  };

  const handleExpensiveChange = () => {
    setIsExpensive(true);
    setSortCriteria((prev) => ({ ...prev, price: true }));
  };

  return (
    <RadioContainer>
      <RadioGroup>
        <Label checked={isPopular === true}>
          <StyledRadioButton
            type="radio"
            checked={isPopular === true}
            onChange={handlePopularChange}
          />
          Popular
          {isPopular === true && (
            <SvgX>
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
        </Label>
        <Label checked={isPopular === false}>
          <StyledRadioButton
            type="radio"
            checked={isPopular === false}
            onChange={handleUnpopularChange}
          />
          Unpopular
          {isPopular === false && (
            <SvgX>
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
        </Label>
      </RadioGroup>

      <RadioGroup>
        <Label checked={isExpensive === false}>
          <StyledRadioButton
            type="radio"
            checked={isExpensive === false}
            onChange={handleCheapChange}
          />
          Cheap
          {isExpensive === false && (
            <SvgX>
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
        </Label>
        <Label checked={isExpensive === true}>
          <StyledRadioButton
            type="radio"
            checked={isExpensive === true}
            onChange={handleExpensiveChange}
          />
          Expensive
          {isExpensive === true && (
            <SvgX>
              <use href={`${sprite}#icon-x`} />
            </SvgX>
          )}
        </Label>
      </RadioGroup>
    </RadioContainer>
  );
}
