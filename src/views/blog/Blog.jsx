/** @format */

import './blog.scss'
import Title from "../../common/title/Title";

function Blog() {
  return (
    <section>
      <Title title='My blog' />
        <div className='row'>
          <div className='col-4 mb-4'>
            <div className='content'>
              <div className='content-images'>
                <img src='https://preview.colorlib.com/theme/amado/img/product-img/xproduct6.jpg.pagespeed.ic.rEtT6rBVsY.webp' alt='demo ảnh' />
              </div>
              <div className='line'></div>
              <div className="d-flex justify-content-between">
                <div>
                <div className='content-time'><small>just now</small></div>
                <div className='content-caption'>
                    <p>toi vua di lam ve kha la mẹt</p>
                </div>
                </div>
                <div>
                    <div className="content-like">
                        like
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
