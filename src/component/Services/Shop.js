import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Shop.css'; 
import shop1 from '../../img/shop-1.webp'
import shop2 from '../../img/shop-2.png'
import shop3 from '../../img/shop-3.jpg'
import shop4 from '../../img/shop-4.jpg'

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Swisse Beauty Vegan Collagen Builder",
      price: "₹1000",
      image: shop1, 
    },
    {
      id: 2,
      name: "Swisse Beauty Vegan Collagen Builder",
      price: "₹1000",
      image: shop2,
    },
    {
      id: 3,
      name: "Swisse Beauty Vegan Collagen Builder",
      price: "₹1000",
      image: shop3,
    },
    {
      id: 4,
      name: "Swisse Beauty Vegan Collagen Builder",
      price: "₹1000",
      image: shop4,
    },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="top-deals-arrow top-deals-next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="top-deals-arrow top-deals-prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="top-deals-container">
      <div className="top-deals-search-section">
        <div className="top-deals-search-bar">
          <select className="top-deals-location-select">
            <option>Bengaluru - 384702</option>
          </select>
          <input
            type="text"
            placeholder="Search for surgeries"
            className="top-deals-search-input"
          />
          <button className="top-deals-search-button">Search</button>
        </div>
      </div>

      <div className='top-deals-section'>
        <h2 className="top-deals-section-title">Top Deals</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="top-deals-product-card">
              <div className="top-deals-card-content">
                <img
                  src={product.image}
                  alt={product.name}
                  className="top-deals-product-image"
                />
                <h3 className="top-deals-product-name">{product.name}</h3>
               <div className='shop-flex'>
               <p className="top-deals-product-price">{product.price}</p>
               <button className="top-deals-add-to-cart">Add to cart</button>

               </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
