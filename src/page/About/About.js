import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './About.css';

export default function Home() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='about'>

                    {/* section 1 start  */}

                    <div className='about-section'>

                        <div className='box-1'>
                            <div className='img_container'>
                                <img src={`${imgRoute}/about_img.png`} alt='img_1'></img>

                            </div>

                        </div>

                        <div className='box-2'>
                            <h1>
                                Welcome to my hybrid world
                            </h1>
                            <p>
                                Born to a Saudi father and an English mother, I navigated between East and West from a young age. Growing up in Saudi Arabia, I developed a deep understanding of a rich and often complex culture, honing my sensitivity to cultural nuances and global perspectives. This unique background has allowed me to expertly bridge diverse cultural contexts for multinational brands, balancing tone of voice, cultural sensitivity, and brand equity. This ability has been a defining and valuable skill throughout my career. </p>
                            <p>
     My career spans a diverse range of brands—from hyper-local to global—where I have consistently crafted stories that connect people with brands. I’m driven my the desire to create impactful and authentic ideas that truly resonate with diverse audiences. I love travel, culture, podcasts, books, fashion and interesting people.                            
    
                                </p>

                                <div>

                                    <button>Download my CV</button>
                                </div>
                                
                        </div>
                            
                    </div>

                    {/* section 1 end  */}


                    {/* footer start  */}

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

                    {/* footer end  */}



                </div>
            </Layout >
        </>
    )
}
