import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Nave from '../Share/Nave/Nave';

const Main = () => {
    return (
        <div>
            <Nave></Nave>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;