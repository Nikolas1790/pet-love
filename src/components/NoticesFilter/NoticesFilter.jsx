import SearchField from "components/SearchField/SearchField";
import { DataEntryContainer, FilterContainer } from "./NoticesFilter.styled";
import SelectorCategory from "components/Selectors/SelectorCategory/SelectorCategory";
import SelectorGender from "components/Selectors/SelectorGender/SelectorGender";
import SelectorType from "components/Selectors/SelectType/SelectType";

export default function NoticesFilter ({ setCurrentPage, setKeyWord, setSelectedCategory, setSelectedType }){

  const handleSearch = (searchTerm) => {
    setKeyWord(searchTerm);
    setCurrentPage(1);
  };

  return (
    <FilterContainer>
      <DataEntryContainer>
        <SearchField onSearch={handleSearch} width="265px" border="none" />
        <SelectorCategory setSelectedCategory={setSelectedCategory} />
        <SelectorGender />
        <SelectorType setSelectedType={setSelectedType} />
      </DataEntryContainer>
    </FilterContainer>
  )
}