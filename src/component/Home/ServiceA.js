import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import background_about from '../../img/background_about.jpg';
import './ServiceA.css';

function ServiceA() {
  const props = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0%)' },
    config: { tension: 120, friction: 14 },
  });

  return (
    <>
    <div className='serviceA-container'>
    
      <animated.div
        style={props}
        className='serviceA-text'
      >
        <h1 className='serviceA-title'>No need to go through it alone</h1>
        <p className='serviceA-description'>
          The goal of individual therapy is to inspire change and improve the
          quality of life through self-awareness and self-exploration.
        </p>

       
        <div className='serviceA-support-container'>
          <div className='serviceA-support-left'>
            <p>Support Line 24/7</p>
            <p className='serviceA-phone'>88 700 600</p>
          </div>

       
          <div className='serviceA-divider'></div>

          <div className='serviceA-support-right'>
            <p>Online Schedule</p>
            <p className='serviceA-booknow'>Book here</p>
          </div>
        </div>
      </animated.div>
    </div>
    </>
  );
}

export default ServiceA;
