import React, { Component } from 'react';
import './Flights.css';
import Request from 'superagent';
import _ from 'lodash';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

library.add(faBookmark)

class Flights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            passenger: false,
        };

        this.saveFlight = this.saveFlight.bind(this);
        
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

    saveFlight() {
        console.log("save flight here...")
    }

    render() {
        let flights = _.map(this.state.items, (flight) => {
            return (
              <div className='showData'>
                <div className="data-header">
                    <h2>Flight {flight.flightName}</h2>
                    <h6>{flight.scheduleDate}</h6>
                </div>

                <ul key={flight.id}>
                    <li><b>Terminal:</b> {flight.terminal}</li>
                    <li><b>Gate:</b> {flight.gate}</li>
                    <li><b>Departure time:</b> {flight.scheduleTime.slice(0,5)} am</li>
                    <li><b>Flightnumber:</b> {flight.flightNumber}</li>
                    <li className="save">
                        <button onClick={this.saveFlight}>
                            <FontAwesomeIcon icon="bookmark"></FontAwesomeIcon>Save</button>
                    </li>
                </ul>
              </div>
            );
        });

        var {isLoaded, items} = this.state

        if(!isLoaded) {
            return(
                <div>
                    <p className="required_info">Loading flights...</p>
                </div>
            );
        }

        else {
            return (
                <div className="results">
                    {flights}
                </div>
            ); 
        }
    }
}

export default Flights;
