import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import ExtraPart from './Extra/ExtraPart';
import Categories from './Category/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <ExtraPart></ExtraPart>
        </div>
    );
};

export default Home;