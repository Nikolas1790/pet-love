import SearchField from "components/SearchField/SearchField";
import { BottomContainer, DataEntryContainer, FilterContainer, SeparatingContainer } from "./NoticesFilter.styled";
import SelectorCategory from "components/Selectors/SelectorCategory/SelectorCategory";
import SelectorGender from "components/Selectors/SelectorGender/SelectorGender";
import SelectorType from "components/Selectors/SelectType/SelectType";
import SearchLocality from "components/SearchLocality/SearchLocality";
import RadioButtons from "components/RadioButtons/RadioButtons";
import { useState } from "react";

export default function NoticesFilter ({ setCurrentPage, setKeyword, setSelectedCategory, setSelectedType, setSelectedGender, onLocationChange, setSortCriteria, anyFilterSelected, handleResetFilters }){
  const [resetSignal, setResetSignal] = useState(false);

  const handleSearch = (searchTerm) => {
    setKeyword(searchTerm);
    setCurrentPage(1);
  };

  const handleResetFiltersWithSignal = () => {
    handleResetFilters();
    setResetSignal(prev => !prev);  // Toggle the signal
  };

//   return (
//     <FilterContainer>
//       <DataEntryContainer>
//         <SearchField onSearch={handleSearch} width="265px" border="none" />
//         <SelectorCategory setSelectedCategory={setSelectedCategory} />
//         <SelectorGender setSelectedGender={setSelectedGender}/>
//         <SelectorType setSelectedType={setSelectedType} />
//         <SearchLocality onLocationChange={onLocationChange} />
//       </DataEntryContainer>

//       <SeparatingContainer />

//       <BottomContainer>
//         <RadioButtons setSortCriteria={setSortCriteria} />
//         {anyFilterSelected && (
//           <button onClick={handleResetFilters}>Reset Filters</button>
//         )}
//       </BottomContainer>
//     </FilterContainer>
//   )
// }

return (
  <FilterContainer>
    <DataEntryContainer>
      <SearchField onSearch={handleSearch} width="265px" border="none" />
      <SelectorCategory setSelectedCategory={setSelectedCategory} />
      <SelectorGender setSelectedGender={setSelectedGender}/>
      <SelectorType setSelectedType={setSelectedType} />
      <SearchLocality onLocationChange={onLocationChange} />
    </DataEntryContainer>

    <SeparatingContainer />

    <BottomContainer>
      <RadioButtons setSortCriteria={setSortCriteria} resetSignal={resetSignal} />
      {anyFilterSelected && (
        <button onClick={handleResetFiltersWithSignal}>Reset Filters</button>
      )}
    </BottomContainer>
  </FilterContainer>
)
}