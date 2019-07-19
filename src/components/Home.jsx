import React, {Component} from 'react';
import Flights from './Flights/Flights';
import Header from './Header/Header';
import '../css/Global.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div>
                <Header />
                {/* search func */}
                <Flights />  
            </div>
        );
    }
}

export default Home;
