// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.js";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./Testimonials.module.css";
import { IoMdQuote } from "react-icons/io";
import {
  Testimonial4,
  Testimonial5,
  Testimonial6,
  Testimonial7,
} from "../../assets/images";

const testimonials = [
  {
    profilePic: Testimonial4,
    name: "Testimonials",
    relationship: "Testimonials",
    review:
      "We have been impressed by the hospitality and patient care given by doctors and nurses. May  you and keep you safe.",
  },
  {
    profilePic: Testimonial5,
    name: "Testimonials",
    relationship: "Testimonials",
    review: "Testimonials",
  },
  {
    profilePic: Testimonial6,
    name: "Testimonials",
    relationship: "Testimonials",
    review: "Testimonials",
  },
  {
    profilePic: Testimonial7,
    name: "Testimonials",
    relationship: "Testimonials",
    review: "Testimonials",
  },
];
const Testimonials = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination]}
        className={styles.innerSwiperContainer}
      >
        {testimonials.map((testimonial) => {
          const { profilePic, name, relationship, review } = testimonial;
          return (
            <SwiperSlide className={styles.slide}>
              <div>
                <img src={profilePic} alt="Testimonial4" />
                <h5 className={styles.title}>{name}</h5>
                <p className={styles.relation}>{relationship}</p>
                <div className={styles.underline} />
                <IoMdQuote color="#12bc76" size={28} />
                <p className={styles.content}>{review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
