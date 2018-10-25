import React from 'react';
import '../css/App.css';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="main"> 
        <Link className='entry_btn' to='/details'>Load Flights</Link>
    </div>
);

export default Home;
