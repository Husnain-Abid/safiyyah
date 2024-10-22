import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Contact.css';

export default function Contact() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='content'>

                 

                    <div className='content-section-3'>

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
                                    <img src={`${imgRoute}/video-player.png`} alt='img_1'></img>
                                </div>
                            </div>

                            <div className='box-3'>

                                <div className='light'>
                                    <h1>Last Light</h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do eiusm tem dolor sit amet, consectetur.</p>

                                </div>


                                <form>

                                    <div className='help'>
                                        <label htmlFor="">Enter password for portfolio   </label> <div> <img src={`${imgRoute}/Help.svg`} alt='img_3'></img> </div>
                                    </div>


                                    <div className="input-container">
                                        <input type="password" placeholder='Password' />
                                        <span className="icon">
                                            <img src={`${imgRoute}/eye.svg`} alt='img_1'></img>
                                        </span>
                                    </div>


                                    <p>If you would like access to my full portfolio and don’t have a password use the contact form to get in touch.</p>

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
                                    <img src={`${imgRoute}/video-player.png`} alt='img_1'></img>
                                </div>
                            </div>

                            <div className='box-3'>

                                <div className='light'>
                                    <h1>Last Light</h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do eiusm tem dolor sit amet, consectetur.</p>

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

                                    <div className='help'>
                                        <label htmlFor="">Enter password for portfolio   </label> <div> <img src={`${imgRoute}/Help.svg`} alt='img_3'></img> </div>
                                    </div>


                                    <div className="input-container">
                                        <input type="password" placeholder='Password' />
                                        <span className="icon">
                                            <img src={`${imgRoute}/eye.svg`} alt='img_1'></img>
                                        </span>
                                    </div>


                                    <p>If you would like access to my full portfolio and don’t have a password use the contact form to get in touch.</p>

                                    <button>Take me to portfolio</button>

                                </form>

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

                                <button>Submit</button>

                            </div>



                        </div>


                    </div>




                </div>
            </Layout >
        </>
    )
}
