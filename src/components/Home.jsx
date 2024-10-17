import React from 'react'
import vg from "../assets/images.2.jfif";
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>Bharat</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className='home2' >
                <img src={vg} alt="notebook" />
                <div>
                    <p>We are your one and only solution to the tech problems you face every day. We are a leading tech company whose aim is to increase the problem-solving ability in children.</p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Your company description should include all of the basic details about your company. You don't need to go into granular detail in a company description, but you should give an overview of what you do, how your company is structured, and the vision you have for the future.
                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay: "0.3s"}}>
                            <AiFillGoogleCircle />
                            <p>Google</p>

                        </div>
                        <div style={{animationDelay: "0.5s"}}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>

                        </div>
                        <div style={{animationDelay: "0.7s"}}>
                            <AiFillYoutube />
                            <p>Youtube</p>

                        </div>
                        <div style={{animationDelay: "1s"}}>
                            <AiFillInstagram />
                            <p>Instagram</p>

                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}



export default Home;
