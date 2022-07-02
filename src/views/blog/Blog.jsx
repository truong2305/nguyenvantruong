/** @format */

import './blog.scss'
import Title from "../../common/title/Title";

function Blog() {
  return (
    <section>
      <Title title='My blog' />
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-12 mb-4 col-lg-6 col-xl-4'>
            <div className='content'>
              <div className='content-images'>
                <img src='https://preview.colorlib.com/theme/amado/img/product-img/xproduct6.jpg.pagespeed.ic.rEtT6rBVsY.webp' alt='demo ảnh' />
              </div>
              <div className='line'></div>
              <div className="d-flex justify-content-between">
                <div>
                <div className='content-time'><small>Yesterday, 23h 21p</small></div>
                <div className='content-caption'>
                    <p>xin chào</p>
                </div>
                </div>
                <div>
                    <div className="content-like">
                    <i className="fas fa-thumbs-up"></i>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
