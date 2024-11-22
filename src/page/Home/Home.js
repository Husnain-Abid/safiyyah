import React, { useState } from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const imgRoute = ASSET_PATHS.IMG_URL



    const videoData = [

        {
            videoSrc: "video-player.mp4",
            thumbnail: "thumbnail_2",
            title: "Video 2",
            des: {
                heading: "The Moon Shot on iPhone",
                para: "The first bespoke campaign for Apple Middle East for Eid celebrates the most iconic symbol of the season. The moon. Captured by up and coming local photographers using iPhone.",
            }

        },
        {
            videoSrc: "video-player-2.mp4",
            thumbnail: "thumbnail_1",
            title: "Video 1",
            des: {
                heading: "Fireworks",
                para: `Part of a government-sponsored initiative to counter terrorism and change sentiments in Saudi Arabia. The film “Fireworks” got global acclaim as “one of the best non-profit commercials of the year”.`,
            }
        },
        {
            videoSrc: "video-player.mp4",
            thumbnail: "thumbnail_3",
            title: "Video 3",
            des: {
                heading: "MBC1 Comedy",
                para: `The idea for this campaign is that MBC1's content is so good that it stays with its viewers long after they’ve stopped watching. There was a spot for each TV genre – six in all. 

                The Comedy spot is about an airport announcement that gets derailed because the man can’t stop laughing.
                `,
            }

        },

    ];

    const resVideoData = [
        {
            videoSrc: "video-player.mp4",
            thumbnail: "thumbnail_2",
            title: "Video 1",
            des: {
                heading: "The Moon Shot on iPhone",
                para: "The first bespoke campaign for Apple Middle East for Eid celebrates the most iconic symbol of the season. The moon. Captured by up and coming local photographers using iPhone.",
            },
            c: "t_img_1"

        },
        {
            videoSrc: "video-player-2.mp4",
            thumbnail: "thumbnail_1",
            title: "Video 2",
            des: {
                heading: "Fireworks",
                para: `Part of a government-sponsored initiative to counter terrorism and change sentiments in Saudi Arabia. The film “Fireworks” got global acclaim as “one of the best non-profit commercials of the year”.`,
            },
            c: "t_img_2"

        },
        {
            videoSrc: "video-player.mp4",
            thumbnail: "thumbnail_3",
            title: "Video 3",
            des: {
                heading: "MBC1 Comedy",
                para: `The idea for this campaign is that MBC1's content is so good that it stays with its viewers long after they’ve stopped watching. There was a spot for each TV genre – six in all. 

                The Comedy spot is about an airport announcement that gets derailed because the man can’t stop laughing.
                `,
            },
            c: "t_img_3"
        },

    ];




    const [currentVideo, setCurrentVideo] = useState(videoData[0].videoSrc);
    const [currentDes, setCurrentDes] = useState(videoData[0].des);

    const handleVideoClick = (video) => {
        setCurrentVideo(video.videoSrc);
        setCurrentDes(video.des);
    };



    return (
        <>
            <Layout>
                <div className='content'>

                    <div className='section-1'>

                        <div className='box-2'>

                            <img src={`${imgRoute}/landing-page.jpeg`} alt='img_1'></img>

                        </div>

                        <div className='box-1'>
                            <h1>
                                I Craft Strategic Creative Content
                            </h1>
                            <p>
                                As a regional creative director with 20 years experience between agency and client side, I have spent my career crafting compelling and culturally relevant communications that resonate with diverse audiences.
                            </p>
                        </div>

                    </div>


                    <div className='section-2'>

                        <div className='box'>
                            <div className='card'>
                                <img src={`${imgRoute}/card_1.svg`} alt='logo' />
                                <h4>CREATIVE DIRECTOR</h4>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='card'>
                                <img src={`${imgRoute}/card_2.svg`} alt='logo' />
                                <h4>STRATEGIC THINKER</h4>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='card'>
                                <img src={`${imgRoute}/card_3.svg`} alt='logo' />
                                <h4>BILINGUAL WRITER</h4>
                            </div>
                        </div>

                    </div>


                    <div className='section-3'>

                        <h1>Some of My Work</h1>

                        <div className='box'>

                            <div className='box-1'>

                                {videoData.map((video, index) => (



                                    // <div className='thumbnail'>
                                    //     <img src={`${imgRoute}/thumbnail_1.png`} alt='img_1'></img>
                                    // </div>
                                    // <div className='thumbnail'>
                                    //     <img src={`${imgRoute}/thumbnail_2.png`} alt='img_2'></img>
                                    // </div>
                                    // <div className='thumbnail'>
                                    //     <img src={`${imgRoute}/thumbnail_3.png`} alt='img_3'></img>
                                    // </div>

                                    <div className='thumbnail' key={index}
                                        onClick={() => handleVideoClick(video)}>

                                        <img
                                            src={`${imgRoute}/${video.thumbnail}.png`}
                                            alt={`Thumbnail for ${video.title}`}
                                            style={{ width: "100px", cursor: "pointer" }}
                                        />

                                        {/* <div className="thumbnail-title">
                                            {video.title}
                                        </div> */}

                                        <div className="play-icon">
                                            <img src={`${imgRoute}/play.svg`} alt='img_1'></img>
                                        </div>



                                    </div>



                                ))}


                            </div>

                            <div className='box-2'>
                                <div className='video-player'>
                                    <video
                                        src={`${imgRoute}/${currentVideo}`} // Update with your video file name
                                        width="553"
                                        height="300"
                                        controls // Add controls if you want playback options
                                        style={{ maxWidth: '100%', height: 'auto' }} // Make it responsive   
                                        muted // This mutes the video
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                            </div>

                            <div className='box-3'>

                                <div className='light'>
                                    {/* <h1>{currentDes.heading}</h1> */}

                                    <p>{currentDes.para} </p> <br />

                                </div>


                                <form>

                                    <div className='help'>
                                        <label htmlFor="">Enter password for portfolio </label>
                                    </div>


                                    <div className="input-container">
                                        <input type="password" placeholder='Password' />
                                        <span className="icon">
                                            <img src={`${imgRoute}/eye.svg`} alt='img_1'></img>
                                        </span>
                                    </div>



                                    <button>Enter</button>

                                </form>






                            </div>






                        </div>


                    </div>


                    <div className='section-3-res'>

                        <h1>Some of My Work</h1>

                        <div className='box'>

                            <div className='box-2'>
                                <div className='video-player'>
                                    <video
                                        src={`${imgRoute}/${currentVideo}`} // Update with your video file name
                                        width="553"
                                        height="300"
                                        controls // Add controls if you want playback options
                                        style={{ maxWidth: '100%' }} // Make it responsive   
                                        muted // This mutes the video
                                    >
                                        Your browser does not support the video tag.
                                    </video>




                                </div>



                            </div>




                            <div className='box-1'>


                                {resVideoData.map((video, index) => (




                                    <div className='thumbnail' key={index}
                                        onClick={() => handleVideoClick(video)}>

                                        <img
                                            src={`${imgRoute}/${video.thumbnail}.png`}
                                            alt={`Thumbnail for ${video.title}`}
                                            style={{ width: "100px", cursor: "pointer" }}
                                            className={`${video.c} thumbnail_img`}
                                        />

                                        {/* <div className="thumbnail-title">
        {video.title}
    </div> */}

                                        <div className="play-icon">
                                            <img src={`${imgRoute}/play.svg`} className='play-icon_img' alt='img_1'></img>
                                        </div>



                                    </div>

                                ))}




                            </div>

                            <div className='box-3'>
                                <form>
                                    <div className='light'>
                                        {/* <h1>{currentDes.heading}</h1> */}

                                        <p>{currentDes.para} </p>
                                    </div>

                                    <button>Enter</button>

                                </form>

                            </div>





                        </div>


                    </div>




                    <div className='section-4'>

                        <h1>   Testimonials
                        </h1>



                        <div className='box'>
                            <div className='card'>
                                <h4>Dean Wei</h4>
                                <h4>Chief Creative Officer,  formerly Apple and Wieden + Kennedy</h4>
                                <p>“Safiyyah is a brilliant, intelligent and intuitive creative. She's strategic and clever but her real strength is in creating work that has emotional truth to it.
                                    She's a rare creative leader who can think about and shape the big picture while having amazing attention to detail to get the craft right. ”</p>
                            </div>

                            <div className='card'>
                                <h4>Ryan Reed </h4>
                                <h4>Chief Creative Officer and Partner, M&C Saatchi Middle East</h4>
                                <p>“On any challenging creative project my first question is always ‘Where’s Safiyyah?’ She is one of the smartest strategic creatives I’ve had the privilege of working with. Self-motivated and driven, she digs deeper to unearth brilliant insights and fresh perspectives on any brief.”</p>
                            </div>

                            <div className='card'>
                                <h4>Anas Sarraj</h4>
                                <h4>Creative Lead, the LEGO group, Denmark</h4>
                                <p>“Safiyyah has a unique blend of creative and strategic thinking enriched by diverse cultural influences. One of her standout qualities is her ability to ask the right questions when tackling work, understanding that sometimes the questions are more important than the answers. Imagine all this creative brilliance packaged into one person.”</p>
                            </div>
                        </div>

                    </div>




                    <div className='section-5'>

                        <h1>Worked With</h1>

                        <div className='social_box'>

                            <div className='box'>
                                <img src={`${imgRoute}/social_6.png`} alt='logo' />
                            </div>

                            <div className='box'>
                                <img src={`${imgRoute}/social_1.jpeg`} alt='logo' />
                            </div>

                            <div className='box'>
                                <img src={`${imgRoute}/social_2.png`} alt='logo' />
                            </div>

                            <div className='box'>
                                <img src={`${imgRoute}/social_3.png`} alt='logo' />
                            </div>
                            <div className='box'>
                                <img src={`${imgRoute}/social_4.png`} alt='logo' />
                            </div>
                            <div className='box'>
                                <img src={`${imgRoute}/social_5.png`} alt='logo' />
                            </div>

                        </div>

                    </div>



                    <div className='footer'>

                        <div className='box-1'>
                            <h1>Want to collaborate?</h1>

                            <p>I’m always looking for opportunities to create best in class, meaningful creative communications with ambitious organizations big and small, local and global and make work that resonates and leaves its mark on its audiences.</p>



                            <div>
                                <Link to="https://www.linkedin.com/in/safiyyah-abuhulayel/">
                                    <img src={`${imgRoute}/linkedin.svg`} alt='img_1'></img>
                                </Link>
                            </div>

                        </div>

                        <div className='box-2'>

                            <div className='form'>

                                <div className='input-row'>
                                    <label htmlFor="">Name</label>
                                    <div className='input-control'>
                                        <input type='text' placeholder='Enter' />
                                    </div>
                                </div>

                                <div className='input-row'>
                                    <label htmlFor="">Email</label>
                                    <div className='input-control'>
                                        <input type='email' placeholder='Enter' />
                                    </div>

                                </div>

                                <div className='input-row'>
                                    <label htmlFor="">Message</label>
                                    <div className='text-area-control'>
                                        <textarea placeholder='Enter discription'>
                                        </textarea>

                                    </div>
                                </div>

                                <div className='form-btn'>
                                    <button>Submit</button>

                                </div>


                                <div className='linkedIn-btn'>
                                    <h6>Connect on LinkedIn</h6>

                                    <div >

                                        <Link to="https://www.linkedin.com/in/safiyyah-abuhulayel/">

                                            <img src={`${imgRoute}/linkedin.svg`} alt='img_1'></img>
                                        </Link>


                                    </div>
                                </div>



                            </div>



                        </div>


                    </div>




                </div>
            </Layout >
        </>
    )
}
