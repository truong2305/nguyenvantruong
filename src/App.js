/** @format */

import "./app.scss";
import TheFooter from "./common/footer/TheFooter";
import TheHeader from "./common/header/TheHeader";
import Home from "./views/home/Home"
import Blog from "./views/blog/Blog"
import Profile from "./views/profile/Profile"
import { useEffect } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Admin from "./views/admin/Admin";
import Gallery from "./views/gallery/Gallery";
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
        case '/gallery.html':
        document.title = "Gallery | MyBlog";
        break;
      default:
          document.title = "Nguyễn Văn Trường | MyBlog"
          break

    }
  }, [location]);
  return (
    <div className='App'>
      <main className='main d-flex'>
      <TheHeader/>
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog.html' element={<Blog/>} />
            <Route path='/profile.html' element={<Profile/>} />
            <Route path='/gallery.html' element={<Gallery/>} />
            <Route path='/admin.html' element={<Admin/>} />
          </Routes>
        </div>
      </main>
      <TheFooter />
    </div>
  );
}

export default App;
