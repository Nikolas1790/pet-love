import { ContentContainer, Title } from "common/GiobalStyles";
import { NoticesContainer } from "./Notices.styled";
import NoticesList from "components/NoticesList/NoticesList";
import NoticesFilter from "components/NoticesFilter/NoticesFilter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noticesInf } from "../../redux/petLove/operations";
import { selectNoticesInf } from "../../redux/petLove/selector";
import { Pagination } from "components/Pagination/Pagination";

export default function Notices() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [locationId, setLocationId] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [keyWord, setKeyWord] = useState('');
  const dispatch = useDispatch();
  const noticesData = useSelector(selectNoticesInf);  


  const getCategory = (article) => {
    if (article === "Show all") {
      return '';
    }
    return article.toLowerCase();
  };


  useEffect(() => {
    const category = getCategory(selectedCategory);
    const species = getCategory(selectedType);
    const sex = getCategory(selectedGender);


    dispatch(noticesInf({keyWord,  byDate: true, page: currentPage, limit: 6, category, species, sex, locationId }));
  }, [dispatch, currentPage, keyWord, selectedCategory, selectedType, selectedGender, locationId]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const handleLocationChange = (selectedLocation) => {
    // Handle location change if needed
    setLocationId(selectedLocation.id)
    console.log('Selected location:', selectedLocation.id);
  };
  // console.log(keyWord)
  return (
    <ContentContainer>
      <NoticesContainer>
        <Title>Find your favorite pet</Title>

        <NoticesFilter 
          setCurrentPage={setCurrentPage} 
          setKeyWord={setKeyWord} 
          setSelectedCategory={setSelectedCategory}
          setSelectedType={setSelectedType}
          setSelectedGender={setSelectedGender}
          onLocationChange={handleLocationChange}
        />

        <div>
          <NoticesList noticesData={noticesData} />    
          <Pagination
            currentPage={noticesData.page}
            totalPages={noticesData.totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </NoticesContainer>
    </ContentContainer>
  );
}  