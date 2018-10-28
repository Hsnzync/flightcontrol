import React, {Component} from 'react';
import '../css/App.css';
import Details from './Details';
import Header from './Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }

        this.activate = this.activate.bind(this);
        this.deActivate = this.deActivate.bind(this);

    }

    activate() {
        this.setState({
            isActive: true
        })
    }

    deActivate() {
        this.setState({
            isActive: false
        })
    }

    render () {
        return(
            <div>
                <Header />
                {!this.state.isActive ?
                    <div> 
                        <button className='entry_btn' onClick={this.activate}>Load Flights</button>
                        <p className="required_info">No flights loaded!</p>
                    </div>
                    :
                    <div>
                        <button className='entry_btn' onClick={this.deActivate}>Remove Flights</button>
                        <Details />
                    </div>}
            </div>
        );
    }
}

export default Home;
