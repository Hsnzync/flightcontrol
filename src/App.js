import React from 'react';
import './css/Global.css';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import Overview from './components/Overview/Overview';

const App = () => (
    <div className="App">
    
        <BrowserRouter basename="/flightcontrol/">
            <div className="main">
                <Route exact path="/" component={Home}/>
                <Route exact path="/overview" component={Overview}/>
            </div>
        </BrowserRouter>   
    </div>
);

export default App;
