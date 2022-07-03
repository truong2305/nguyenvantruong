/** @format */

import "./homeheader.scss";
import avt from '../../assets/images/avt.jpg'
import TypicalBase from "../../components/typical/TypiacalBase";
function HomeHeader() {
  return (
    <div className='home-header'>
        <div className="container">
          <div className="row align-items-center text-center text-xl-start">
            <div className="col-xl-7 col-10 offset-1 offset-xl-0 mt-4 mt-xl-0">
              <h1 className="home-title mb-0">
                Hi, I'm Nguyen Van Truong
              <TypicalBase/>
              </h1>
              
            </div>
            <div className="col-xl-5 col-12">
              <div className="home-avt">
                <img src={avt} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HomeHeader;
