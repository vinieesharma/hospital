import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Hero.module.css";
import whiteCurve from "../../img/white_bottom_wave_02.png";
// import whiteCurve from "../../
const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springProps = useSpring({
    backgroundPositionY: offsetY * 0.3,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <div>
      <animated.div
        className={styles.heroContainer}
        style={{
          ...springProps,
          backgroundImage: `url("https://cliniq.bold-themes.com/curves/wp-content/uploads/sites/4/2021/08/background_08.jpg")`,
        }}
      >
        <div className={styles.innerHeroContainer}>
          <div className={styles.heroContent}>
            <h1>Covid-19 Testing and Vaccination</h1>
            <h4>
              We offer a full range of services and minor emergency services
            </h4>
<a href="/labtest" >
<button className={`${styles.btn} ${styles.btnGreen}`}>
              Labtest
            </button>
</a>

         
          
          </div>
        </div>
        <div className={styles.curve}>
          <img src={whiteCurve} alt="whiteCurve" />
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
