import React from 'react';
import './css/App.css';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';

const App = () => (
    <div className="App">
    
        <BrowserRouter basename="/flight-control/">
            <div className="main">
                <Route exact path="/" component={Home}/>
            </div>
        </BrowserRouter>   
    </div>
);

export default App;
