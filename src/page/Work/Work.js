import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Work.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='work'>






                    <div className='work-footer'>

                        <div className='box-1'>
                            <h1>Want to collaborate?</h1>

                            <p>I’m always looking for opportunities to create best in class, meaningful creative communications with ambitious organizations big and small, local and global 
                           and make work that resonates and leaves its mark on its audiences.
</p>


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
                                <div className='work-btn'>

                                    <button>Submit</button>
                                </div>

                                <div className='linkedIn-btn'>

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
