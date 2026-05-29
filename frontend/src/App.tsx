import React from 'react';
import useFixproContext from './components/context/useFixproContext';
import { Outlet } from 'react-router';
import CustomCursor from './components/elements/CustomCursor';
import SideBar from './components/elements/SideBar';
// import ChatPopup from './components/elements/ChatPopup';
import SearchProp from './components/elements/SearchProp';
import ScrollToTop from './components/elements/ScrollToTop';
import VideoPopup from './components/elements/VideoPopup';
import MobileNav from './components/elements/MobileNav';

const App: React.FC = () => {
  const { isMobileManu, isSearch, showVideoPopup } = useFixproContext();
  return (
    <div className={`custom-cursor ${isMobileManu ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
      <CustomCursor enabled />
      <Outlet />
      <SideBar />
      <MobileNav />
      {/* <ChatPopup /> */}
      <SearchProp />
      <ScrollToTop />
      {showVideoPopup && <VideoPopup />}
    </div>
  );
};

export default App;