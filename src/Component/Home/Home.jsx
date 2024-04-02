import React from 'react';
import Banner from '../Banner/Banner';
import Description from '../Description/Description';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Description></Description>
        </div>
    );
};

export default Home;