/** @format */

import './logo.scss'
function Logo() {
  return (
    <div className='logo'>
      <a href='/' >
        <h1 className='logo-name mb-0'>
          <div className='d-flex align-items-center'>
          MyBlog
          <div className='logo-dot'></div>
          </div>
          
          <span data-nosnippet className="d-block">Nguyen Van Truong</span>
        </h1>
      </a>
    </div>
  );
}

export default Logo