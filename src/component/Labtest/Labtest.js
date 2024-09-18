import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md'; // Import Cart Icon
import './Labtest.css';
import { IoSearchCircleSharp } from "react-icons/io5";

const labTestsData = [
    { name: 'Vitamin D (25-OH)', price: '₹1000' },
    { name: 'Thyroid Panel - FREE (FT3, FT4 & TSH)', price: '₹1000' },
    { name: 'Glucose Fasting (FBS) - Sodium Fluoride', price: '₹1000' },
    // Add more test items as needed
];

const Labtest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTests, setFilteredTests] = useState(labTestsData);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        const results = labTestsData.filter(test =>
            test.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredTests(results);
    };

    return (
        <>
            <div className='labtest-banner'>
                <div className='choose-location'>
                    <p>Location</p>
                    <div className='location'>
                        <select className='select-location'>
                            <option value="volvo">Select location</option>
                            <option value="jaipur">Jaipur</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="delhi">Delhi</option>
                        </select>
                    </div>
                </div>

                <div className='choose-labtest'>
                    <span className='search-icon'>
                        <IoSearchCircleSharp />

                    </span>
                    <input
                        className='labtest-search'
                        type='search'
                        placeholder='Search for lab tests'
                        id='labtest-search'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* Lab Tests Section */}
            <div className="labtest-list">
                <div className="labtest-header">
                    <h2>Popular Lab Tests</h2>
                    <div className="cart-container">
                        <MdShoppingCart className="cart-icon" />
                        <button className="view-cart-button">View Cart</button>
                    </div>
                </div>
                {filteredTests.length > 0 ? (
                    filteredTests.map((test, index) => (
                        <div key={index} className="test-item">
                            <p className='test-name'>{test.name}</p>
                            <p className='rate-caddtocart'>
                                <span>{test.price}</span>
                                <button className='labtest-button'>Add to cart</button>

                            </p>

                        </div>
                    ))
                ) : (
                    <p className="no-results">No results found</p>
                )}
            </div>
        </>
    );
};

export default Labtest;