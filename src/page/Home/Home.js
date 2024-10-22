import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Home.css';

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




                    <div className='section-4'>

                        <h1>   Testimonials
                        </h1>



                        <div className='box'>
                            <div className='card'>
                                <h4>Card title</h4>
                                <p>Lorem ipsum dolor sit amet, co</p>
                            </div>

                            <div className='card'>
                                <h4>Card title</h4>
                                <p>Lorem ipsum dolor sit amet, co</p>
                            </div>

                            <div className='card'>
                                <h4>Card title</h4>
                                <p>Lorem ipsum dolor sit amet, co</p>
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

                            </div>



                        </div>


                    </div>




                </div>
            </Layout >
        </>
    )
}
