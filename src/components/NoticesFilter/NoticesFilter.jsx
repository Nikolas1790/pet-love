import SearchField from "components/SearchField/SearchField";
import { DataEntryContainer, FilterContainer } from "./NoticesFilter.styled";
import SelectorCategory from "components/Selectors/SelectorCategory/SelectorCategory";
import SelectorGender from "components/Selectors/SelectorGender/SelectorGender";
import SelectorType from "components/Selectors/SelectType/SelectType";
import SearchLocality from "components/SearchLocality/SearchLocality";

export default function NoticesFilter ({ setCurrentPage, setKeyWord, setSelectedCategory, setSelectedType, setSelectedGender }){

  const handleSearch = (searchTerm) => {
    setKeyWord(searchTerm);
    setCurrentPage(1);
  };

  const handleLocationChange = (selectedLocation) => {
    // Handle location change if needed
    console.log('Selected location:', selectedLocation);
  };
  
  return (
    <FilterContainer>
      <DataEntryContainer>
        <SearchField onSearch={handleSearch} width="265px" border="none" />
        <SelectorCategory setSelectedCategory={setSelectedCategory} />
        <SelectorGender setSelectedGender={setSelectedGender}/>
        <SelectorType setSelectedType={setSelectedType} />
        <SearchLocality onLocationChange={handleLocationChange} />
      </DataEntryContainer>
    </FilterContainer>
  )
}