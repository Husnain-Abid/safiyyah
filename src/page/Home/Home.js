import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='content'>

                    <div className='section-1'>

                        <div className='box-2'>

                            <img src={`${imgRoute}/img_1.png`} alt='img_1'></img>

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
                                <div className='thumbnail'>
                                    <img src={`${imgRoute}/thumbnail_1.png`} alt='img_1'></img>
                                </div>
                                <div className='thumbnail'>
                                    <img src={`${imgRoute}/thumbnail_2.png`} alt='img_2'></img>
                                </div>
                                <div className='thumbnail'>
                                    <img src={`${imgRoute}/thumbnail_3.png`} alt='img_3'></img>
                                </div>
                            </div>

                            <div className='box-2'>
                                <div className='video-player'>
                                    <video
                                        src={`${imgRoute}/video-player.mp4`} // Update with your video file name
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
                                    <h1>The Moon Shot on Iphone</h1>

                                    <p>The first bespoke campaign for Apple Middle East for Eid celebrates the most iconic symbol of the season. The moon. Captured by up and coming local photographers using iPhone. </p>

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


                                    <p>If you would like access to my full portfolio and don’t have a password use the <Link to="/contact"> contact form </Link>  to get in touch.</p>

                                    <button>Take me to portfolio</button>

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
                                        src={`${imgRoute}/video-player.mp4`} // Update with your video file name
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




                            <div className='box-1'>
                                <div className='thumbnail'>
                                    <img src={`${imgRoute}/thumbnail_1.png`} className='t_img_1' alt='img_1'></img>
                                </div>
                                <div className='thumbnail'>
                                    <img src={`${imgRoute}/thumbnail_2.png`} className='t_img_2' alt='img_2'></img>
                                </div>
                                <div className='thumbnail'>
                                    <img src={`${imgRoute}/thumbnail_3.png`} className='t_img_3' alt='img_3'></img>
                                </div>
                            </div>

                            <div className='box-3'>
                                <form>
                                    <div className='light'>
                                        <h1>The Moon Shot on Iphone</h1>

                                        <p>The first bespoke campaign for Apple Middle East for Eid celebrates the most iconic symbol of the season. The moon. Captured by up and coming local photographers using iPhone. </p>

                                    </div>

                                    <button>Password for full portfolio</button>

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
                                <img src={`${imgRoute}/social_1.svg`} alt='logo' />
                            </div>

                            <div className='box'>
                                <img src={`${imgRoute}/social_2.svg`} alt='logo' />
                            </div>

                            <div className='box'>
                                <img src={`${imgRoute}/social_3.svg`} alt='logo' />
                            </div>
                            <div className='box'>
                                <img src={`${imgRoute}/social_4.svg`} alt='logo' />
                            </div>
                            <div className='box'>
                                <img src={`${imgRoute}/social_5.svg`} alt='logo' />
                            </div>
                            <div className='box'>
                                <img src={`${imgRoute}/social_6.svg`} alt='logo' />
                            </div>
                        </div>

                    </div>



                    <div className='footer'>

                        <div className='box-1'>
                            <h1>Want to collaborate?</h1>

                            <p>I’m always looking for opportunities to create best in class, meaningful creative communications with ambitious organizations big and small, local and global and make work that resonates and leaves its mark on its audiences.</p>



                            <div>
                                <img src={`${imgRoute}/linkedin.svg`} alt='img_1'></img>
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
                                        <img src={`${imgRoute}/linkedin.svg`} alt='img_1'></img>

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
