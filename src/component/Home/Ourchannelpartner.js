import React from 'react';
import './Ourchannelpartner.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; // Import autoplay CSS if necessary
import slide1 from '../../img/channel partner/slide1.png';
import slide2 from '../../img/channel partner/slide 2.png';
import slide3 from '../../img/channel partner/slide 3.png';
import slide4 from '../../img/channel partner/slide 4.png';

const Ourchannelpartner = () => {
  return (
    <>
      <h1 className='ourchannelpartner-heading'>
        our <span className='commanq-span'>channel</span> partner <span className='commanq-span'>inquiry</span>
      </h1>

      <div className='ourchnnelpartner-maindiv'>
        <div className='ourchnnelpartner-card-slider'>
          <Swiper className='swiper'
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module here
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Add autoplay configuration here
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className='swiper-slide'>
              <img src={slide1} alt="Neurology" />
              <div className='slide-content'>
                <h2>Mr. Sahil kakkar</h2>
                <p>Our channel partner from Mumbai.</p>
                {/* <button className='slide-button'>Learn More</button> */}
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide2} alt="Opthamology" />
              <div className='slide-content'>
                <h2>Mr. Rahul Sharma</h2>
                <p>Our channel partner from Noida.</p>
                {/* <button className='slide-button'>Learn More</button> */}
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide3} alt="Ambulance" />
              <div className='slide-content'>
                <h2>Mr. Rakesh Sahu</h2>
                <p>Our channel partner from Jaipur</p>
                {/* <button className='slide-button'>Learn More</button> */}
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide4} alt="Neurology" />
              <div className='slide-content'>
              <h2>Mr. Sachin Lawaniya</h2>
              <p>Our channel partner from Jaipur</p>
                {/* <button className='slide-button'>Learn More</button> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='ouchannelpartne-content'>
          <div className="ourchannel-partner">
            <h2>Join Our Network: Channel Partner Inquiry</h2>
            <p>Required fields are marked with an asterisk (*).</p>
            <form>
              <label htmlFor="name">First and Last name*</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />

              <label htmlFor="email">Email address*</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="Address">Address*</label>
              <input type="text" id="Address" name="Address" placeholder="Address" required />

              <label htmlFor="massage">Message</label>
              <textarea id="massage" name="massage" placeholder="Message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourchannelpartner;
