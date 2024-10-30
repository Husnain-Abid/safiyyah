import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './LandingPage.css';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const images = [
        `${ASSET_PATHS.IMG_URL}/landing-page.jpeg`, // First image
        `${ASSET_PATHS.IMG_URL}/landing-page.jpeg` // Second image (add your second image URL here)
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(false);
            }, 1000); // Match this duration to the CSS transition time
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    const handleEnterClick = () => {
        setButtonClicked(true);
        setTimeout(() => {
            navigate("/home");
        }, 300);
    };

    return (
        <>
            <div className='landing-page'>
                <div className='landing'>
                    <img
                        src={images[currentImageIndex]}
                        alt='Landing'
                        className={`slide ${fade ? 'fade-out' : 'fade-in'} ${currentImageIndex === 0 ? 'gray-scale' : ''}`}
                    />
                    <button
                        className={`enter-button ${buttonClicked ? 'clicked' : ''}`}
                        onClick={handleEnterClick}
                    >
                        Enter
                    </button>

                    <h3 className={` ${currentImageIndex === 1 ? 'font-1' : 'font-2' }`}>
                        {currentImageIndex === 1 ? 'مرحباً' : 'Welcome'}
                    </h3>
                </div>
            </div>
        </>
    );
}
