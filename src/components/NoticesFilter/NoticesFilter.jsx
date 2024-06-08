import SearchField from "components/SearchField/SearchField";
import { DataEntryContainer, FilterContainer, SeparatingContainer } from "./NoticesFilter.styled";
import SelectorCategory from "components/Selectors/SelectorCategory/SelectorCategory";
import SelectorGender from "components/Selectors/SelectorGender/SelectorGender";
import SelectorType from "components/Selectors/SelectType/SelectType";
import SearchLocality from "components/SearchLocality/SearchLocality";
import RadioButtons from "components/RadioButtons/RadioButtons";

export default function NoticesFilter ({ setCurrentPage, setKeyWord, setSelectedCategory, setSelectedType, setSelectedGender, onLocationChange, setSortCriteria }){

  const handleSearch = (searchTerm) => {
    setKeyWord(searchTerm);
    setCurrentPage(1);
  };
  
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

      <RadioButtons setSortCriteria={setSortCriteria} />
    </FilterContainer>
  )
}