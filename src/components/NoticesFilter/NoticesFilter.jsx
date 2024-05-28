import SearchField from "components/SearchField/SearchField";
import { DataEntryContainer, FilterContainer } from "./NoticesFilter.styled";
import SelectorCategory from "components/Selectors/SelectorCategory/SelectorCategory";
import SelectorGender from "components/Selectors/SelectorGender/SelectorGender";
import SelectorType from "components/Selectors/SelectType/SelectType";

export default function NoticesFilter ({ setCurrentPage, setKeyWord, selectedArticle, setSelectedArticle }){

  const handleSearch = (searchTerm) => {
    setKeyWord(searchTerm);
    setCurrentPage(1);
  };

  return (
    <FilterContainer>
      <DataEntryContainer>
        <SearchField onSearch={handleSearch} width="265px" border="none" />
        <SelectorCategory selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} />
        <SelectorGender />
        <SelectorType />
      </DataEntryContainer>
    </FilterContainer>
  )
}