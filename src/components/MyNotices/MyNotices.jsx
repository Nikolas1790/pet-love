import { useState } from 'react';
import { Container, NoticesList, Tab, Tabs } from './MyNotices.styled';
import NoticesItem from 'components/NoticesItem/NoticesItem';
import { useSelector } from 'react-redux';
import { selectFavoritePets, selectNoticesInf } from '../../redux/petLove/selector';

export default function MyNotices() {
  const [activeTab, setActiveTab] = useState('favorites');
  let favoritesList = useSelector(selectFavoritePets);
  let noticesInf = useSelector(selectNoticesInf);
  // console.log(favoritesList)

  console.log(noticesInf)

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <Container>
      <Tabs>
        <Tab isActive={activeTab === 'favorites'} onClick={() => handleTabClick('favorites')}>
          My favorite pets
        </Tab>
        <Tab isActive={activeTab === 'viewed'} onClick={() => handleTabClick('viewed')}>
          Viewed
        </Tab>
      </Tabs>

      <NoticesList>
        {activeTab === 'favorites' && favoritesList.map((notice) => (
          <NoticesItem key={notice.id} card={notice} />
        ))}
        {activeTab === 'viewed' && (
          <p>ppppppp</p>
        )}
      </NoticesList>
    </Container>
  );
}