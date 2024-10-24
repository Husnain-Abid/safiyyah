import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './LandingPage.css';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const images = [
        `${ASSET_PATHS.IMG_URL}/landing-page.png`, // First image
        `${ASSET_PATHS.IMG_URL}/landing-page-2.png` // Second image (add your second image URL here)
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
                setFade(false); // Reset fade after changing the image
            }, 1000); // Match this duration to the CSS transition time
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);


    const handleEnterClick = () => {
        setButtonClicked(true);
        setTimeout(() => {
            navigate("/home"); // Navigate to the home page
        }, 300); // Adjust duration to match the CSS transition time
    };

    return (
        <>
            <div className='landing-page'>
            <div className='landing'>
                <img 
                    src={images[currentImageIndex]} 
                    alt='Landing' 
                    className={`slide ${fade ? 'fade-out' : 'fade-in'}  ${currentImageIndex === 0 ? 'gray-scale' : ''} `} 
                />
                <button 
                    className={`enter-button ${buttonClicked ? 'clicked' : ''}`} 
                    onClick={handleEnterClick}
                >
                    Enter
                </button>
            </div>

            </div>
        </>
    )
}
