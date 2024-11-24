import './App.css';
import Navbar from './Component/Navbar/navbar';
import Home from './Pages/Home/home';
import Video from './Pages/Video/video';
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Profile from './Pages/Profile/profile';
import VideoUpload from './Pages/VideoUpload/videoUpload';
import SignUp from './Pages/SignUp/signUp';
import Short from './Pages/Short/short';
import SocialMedia from './Pages/SocialMedia/socialMedia';
import Subscription from './Pages/Subscription/subscription';
import LikedVideo from './Pages/LikedVideo/likedVideo';
import Chat from '../src/Component/Chat/chat.jsx';
function App() {
  const [sideNavbar, setSideNavbar] = useState(true);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };
  const handleFriendSelect = (friendId) => {
    setSelectedFriendId(friendId);
  };
  const closeChat = () => {
    setSelectedFriendId(null); // Reset friendId to close chat
  };
  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} onFriendSelect={handleFriendSelect} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/socialMedia" element={<SocialMedia sideNavbar={sideNavbar} />} />
        <Route path="/short" element={<Short sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar} />} />
        <Route path="/:id/upload" element={<VideoUpload />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/subscription" element={<Subscription sideNavbar={sideNavbar} />} />
        <Route path="/likedVideo" element={<LikedVideo sideNavbar={sideNavbar} />} />
      </Routes>
      {selectedFriendId && <Chat friendId={selectedFriendId} closeChat={closeChat} />}
    </div>
  );
}
export default App;