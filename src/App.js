/** @format */

import "./app.scss";
import TheFooter from "./common/footer/TheFooter";
import TheHeader from "./common/header/TheHeader";
import Home from "./views/home/Home"
import Blog from "./views/blog/Blog"
import Chat from "./views/chat/Chat"
import Profile from "./views/profile/Profile"
import { useEffect } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
function App() {
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        document.title = "Nguyễn Văn Trường | MyBlog";
        break;
      case '/profile.html':
        document.title = "Profile | MyBlog";
        break;
      case '/blog.html':
        document.title = "Blog | MyBlog";
        break;
      case '/chat.html':
          document.title = "Chat | MyBlog";
          break;
      default:
          document.title = "Nguyễn Văn Trường | MyBlog"
          break

    }
  }, [location]);
  return (
    <div className='App'>
      <main className='main d-flex'>
        <TheHeader />
        <div className='main-content d-none d-sm-block'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog.html' element={<Blog/>} />
            <Route path='/chat.html' element={<Chat/>} />
            <Route path='/profile.html' element={<Profile/>} />
          </Routes>
        </div>
      </main>
      <TheFooter />
    </div>
  );
}

export default App;
