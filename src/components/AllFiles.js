import React from 'react'
import BannerOne from './Banner-1/BannerOne'
import BannerTwo from './Banner-2/BannerTwo'
import BannerThree from './Banner-3/BannerThree'
import BannerFour from './Banner-4/BannerFour'
import BannerFive from './Banner-5/BannerFive'
import BannerSix from './Banner-6/BannerSix'
import BannerSeven from './Banner-7/BannerSeven'

const AllFiles = () => {
  return (
    <div>
          <div className="App">
         
          <div id='aboutUs' className="mainBannerContainer">
              <BannerOne />
          </div>
        </div>
        <div id='contactUs' className="secondMainBanner">
            <BannerTwo />
        </div>
         <div className="threeMainBanner">
            <BannerThree />
        </div>
        <div id='ourPartners' className="fourMainBanner">
            <BannerFour />
        </div>
        <div id='howitworks' className="fivMainBanner">
            <BannerFive />
        </div>
        <div id='whyLoveUs' className="SixMainBanner">
            <BannerSix />
        </div>
        <div id='whyRolexBook' className="SevenMainBanner">
            <BannerSeven />
        </div> 
      
    </div>
  )
}

export default AllFiles