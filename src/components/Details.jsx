import React, { Component } from 'react';
import '../css/App.css';
import {Link} from 'react-router-dom';
import Request from 'superagent';
import _ from 'lodash';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'

library.add(faRunning)

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            passenger: false,
        };

        this.showSelected = this.showSelected.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
        Request
            .get("https://api.schiphol.nl/public-flights/flights?app_id=84d73276&app_key=f9177c625c6b99c31938170e49299455")
            .set('Accept','application/json')
            .set('ResourceVersion','v3')
            .then((response) => {
                this.setState({
                    items: response.body.flights,
                    isLoaded: true
                });
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.passenger : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    showSelected(event) {
        this.setState({
            showComponent: event.target.checked
        });
    }

    render() {

        let flights = _.map(this.state.items, (flight) => {
            return (
              <div className='showData'>
                <h2>Flight - {flight.flightName}</h2>
                <ul key={flight.id}>
                    <li><b>Terminal:</b> {flight.terminal}</li>
                    <li><b>Gate:</b> {flight.gate}</li>
                    <li><b>Schedule Date:</b> {flight.scheduleDate}</li>
                    <li><b>Schedule Time:</b> {flight.scheduleTime}</li>
                    <li><b>Flightnumber:</b> {flight.flightNumber}</li>
                    <li className="omw"><b>On my Way:</b>
                        <label htmlFor={items} className="customLabel">{items}</label>
                        <div className="inputBox">
                            <input 
                                className="customCheckbox"
                                name='passenger'
                                value={items} 
                                id="option" 
                                type="checkbox"
                                checked={this.state.passenger}
                                onChange={this.handleInputChange}
                                onClick={this.showSelected}
                            />
                        </div>
                    </li>
                </ul>
              </div>
            );
        });

        var {isLoaded, items} = this.state

        if(!isLoaded) {
            return(
                <div className="main">
                    <span className="load-section">Loading flights...</span>
                </div>
            );
        }

        else {
            return (
                <div className="main">
                    <Link className='entry_btn' to='/'>Remove Flights</Link>
                    
                    {flights}
                </div>
            ); 
        }
    }
}

export default Details;
