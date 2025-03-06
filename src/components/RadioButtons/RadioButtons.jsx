import React, { useState, useEffect, useCallback } from 'react';
import { RadioGroup, RadioContainer, Label, StyledRadioButton, SvgX } from './RadioButtons.styled';
import sprite from '../../img/sprite.svg';

export default function RadioButtons({ setSortCriteria, resetSignal }) {
  const [isPopular, setIsPopular] = useState(null); 
  const [isExpensive, setIsExpensive] = useState(null); 

  const resetRadioButtons = useCallback(() => {
    setIsPopular(null);
    setIsExpensive(null);
    setSortCriteria({ popular: null, price: null });
  }, [setSortCriteria]);

  useEffect(() => {
    resetRadioButtons();
  }, [resetSignal, resetRadioButtons ]);

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
              <use href={`${sprite}#icon-heart-add`} />
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
              <use href={`${sprite}#icon-heart-add`} />
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
              <use href={`${sprite}#icon-heart-add`} />
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
              <use href={`${sprite}#icon-heart-add`} />
            </SvgX>
          )}
        </Label>
      </RadioGroup>
    </RadioContainer>
  );
}
