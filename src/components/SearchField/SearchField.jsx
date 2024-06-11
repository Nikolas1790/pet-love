import React, { useCallback, useEffect, useState } from 'react';
import { ClearButton, SearchButton, SearchContainer, SearchInput } from './SearchField.styled';
import sprite from '../../img/sprite.svg';

export default function SearchField({ onSearch, width, border, resetSignal }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  const handleClear = () => {
    setInput('');
    onSearch('');
  };

  const resetSearchField = useCallback(() => {
    setInput('');
  }, [setInput]);

  // Trigger reset when resetSignal changes
  useEffect(() => {
    resetSearchField();
  }, [resetSignal, resetSearchField ]);

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          border={border}
          width={width}
        />
        {input && (
          <ClearButton onClick={handleClear} type="button">
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-x`} />
            </svg>
          </ClearButton>
        )}
        <SearchButton type="submit">
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-search-1`} />
          </svg>
        </SearchButton>
      </form>
    </SearchContainer>
  );
};