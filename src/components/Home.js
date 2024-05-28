import React, { useState } from 'react';
import Navbar from './Navbar';
import './components.css';
import image from '../assets/check.svg';

const Home = () => {
    const [pageviews, setPageviews] = useState(100000); // Initial value for pageviews
    const [price, setPrice] = useState(16); // Initial value for price

    const handleSliderChange = (event) => {
        const newPageviews = event.target.value * 10000; // Adjusting range for pageviews
        setPageviews(newPageviews);
        updatePrice(newPageviews);
    };

    const updatePrice = (newPageviews) => {
        // Example pricing logic: $16 for every 100K pageviews
        const basePrice = 16;
        const calculatedPrice = (newPageviews / 100000) * basePrice;
        setPrice(calculatedPrice.toFixed(2)); // Update price with 2 decimal places
    };

    return (
        <>
            {/* <Navbar /> */}
            {/*Overall Layout */}
            <div className="pricing-section">
                <h1>Simple, traffic-based pricing</h1>
                <p>Sign-up for our 30-day trial. No credit card required.</p>
            </div>
            <div className="pricing-container">
                <div className="pricing-card">
                    <div className="pricing-header">
                        <span>{pageviews.toLocaleString()} PAGEVIEWS</span>
                        <span className="price text-bold">${price} <span>/ month</span></span>
                    </div>
                    <div className="slider-container">
                        <input
                            id="myRange"
                            type="range"
                            min="1"
                            max="100"
                            value={pageviews / 10000}
                            onChange={handleSliderChange}
                            className="slider"
                        />
                    </div>
                    <div className="billing-toggle">
                        <span>Monthly Billing</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider-toggle"></span>
                        </label>
                        <span>Yearly Billing <span className="discount">25% discount</span></span>
                    </div>
                    <hr style={{ marginTop: '50px', marginBottom: '20px' }} />
                    <div className="row">
                        <div className="col-6">
                            <ul className="features-list">
                                <li>
                                    <img className="margin" src={image} alt="check" />
                                    Unlimited websites
                                </li>
                                <li>
                                    <img className="margin" src={image} alt="check" />
                                    100% data ownership
                                </li>
                                <li>
                                    <img className="margin" src={image} alt="check" />
                                    Email reports
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <button className="trial-button my-4">Start my trial</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
