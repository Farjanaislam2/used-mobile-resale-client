import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import ExtraPart from './Extra/ExtraPart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertisement></Advertisement>
            <ExtraPart></ExtraPart>
        </div>
    );
};

export default Home;