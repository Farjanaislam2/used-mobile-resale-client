import React from 'react';

const Banner = () => {
    return (
        <div className="hero m-auto mt-10" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?size=626&ext=jpg&ga=GA1.2.1819645791.1666648323&semt=sph")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">What Can I Fix For You Today</h1>
      <p className="mb-5 text-white">Quick Afordable & certified cell phone <br/> repair service at your door </p>
      <button className="btn btn-primary text-greent-700 font-bold">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;