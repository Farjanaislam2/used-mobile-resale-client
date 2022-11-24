import React from 'react';
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";


const ExtraPart = () => {
    return (
        <div className='flex justify-between mt-10 p-10 rounded-lg bg-green-200'>
            <div>
                <h1 className='text-2xl font-bold'>LET'S STAY IN TOUCH</h1>
                <p>Get updates on sales specials and more</p>
            </div>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
<p>Enter your email</p>
            </div>
            <div className='flex'>

                <h2 className='mx-5'>Follow Us</h2>
                <p><FaGoogle/> <FaTwitter /> <FaFacebook/></p>
                
            </div>
        </div>
    );
};

export default ExtraPart;