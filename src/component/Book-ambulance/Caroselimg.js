import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../img/book-ambulance.png'
import slide2 from '../../img/ambulance.jpg'
import slide3 from '../../img/ambulance1.jpg'

import React from 'react'

const Caroselimg = () => {
  return (
    <Carousel>
    <div>
        <img src={slide1} />
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
    <img src={slide2} />

        {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
    <img src={slide3} />

        {/* <p className="legend">Legend 3</p> */}
    </div>
</Carousel>
  )
}
;
export default Caroselimg