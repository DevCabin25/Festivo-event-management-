import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Share/Navber';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet/>

        </div>
    );
};

export default Root;