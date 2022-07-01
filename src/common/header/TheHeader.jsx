/** @format */

import Logo from "../logo/Logo";
import "./header.scss";
import { NavLink } from "react-router-dom";

function TheHeader() {
  return (
    <header className="border-end">
      <Logo />
      <nav className='amado-nav  d-flex flex-column justify-content-between'>
        <ul>
          <li >
            <NavLink to="/" exact="true" >Home</NavLink>
          </li>
          <li>
            <NavLink to='blog.html'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='chat.html'>Chat</NavLink>
          </li>
          <li>
            <NavLink to='profile.html'>Account</NavLink>
          </li>
        </ul>
       <div>
        <h6 className="mb-5">Updating...</h6>
       <h6 className="follow">Follow</h6>
       <nav>
       <ul className="d-flex justify-content-between mt-3 icon">
          <li><a href="https://www.facebook.com/truongnv2305" target='_blank' rel="noreferrer"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/nvt230500/" target='_blank' rel="noreferrer"><i class="fab fa-tiktok"></i></a></li>
          <li><a href="https://www.tiktok.com/@nguyenvantruong2305" target='_blank' rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
        </ul>
       </nav> 
       <h6 className="mt-5 ">199 <span className="views">views</span></h6>
       </div>
      </nav>
    </header>
  );
}

export default TheHeader;
