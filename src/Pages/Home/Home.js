import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import ExtraPart from './Extra/ExtraPart';

const Home = () => {
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <ExtraPart></ExtraPart>
        </div>
    );
};

export default Home;