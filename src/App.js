import React from 'react';
import './css/App.css';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';


const App = () => (
    <div className="App">
    
        <Header />
        <BrowserRouter basename="/flightcontrol/">
            <div>
                <Route exact path="/" component={Home}/>
                <Route path={"/details"} component={Details}/>
            </div>
        </BrowserRouter>   
    </div>
);

export default App;
