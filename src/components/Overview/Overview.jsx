import React, { Component } from 'react';
import '../Flights/Flights.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

import firebase from 'firebase';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt)

class Overview extends Component {
    constructor() {
        super();

        if (!firebase.apps.length) {
            this.app = firebase.initializeApp({
                apiKey: "AIzaSyCjy5L1dSXmtJb9osVzLw5WovXtdNt5F0w",
                authDomain: "flight-control-caec4.firebaseapp.com",
                databaseURL: "https://flight-control-caec4.firebaseio.com",
                projectId: "flight-control-caec4",
                storageBucket: "",
                messagingSenderId: "369670033697"
            });
        }

        // this.database = this.app.database().ref('/flight');

        this.state = {
            flights: []
        }

    }

    componentWillMount() {

        let flightsRef = this.app.database().ref('flight');
        flightsRef.on('child_added', snapshot => {
            let flight = {
                id: snapshot.val(),
                name: snapshot.val(),
                date: snapshot.val(),
                terminal: snapshot.val(),
                gate: snapshot.val(),
                time: snapshot.val(),
                number: snapshot.val()
            }
            this.setState({
                flights: [flight].concat(this.state.flights)
            });
        })

        // this.database.on('value', snap => {
        //     this.setState({
        //         name: snap.val(),
        //         date: snap.val(),
        //         terminal: snap.val(),
        //         gate: snap.val(),
        //         time: snap.val(),
        //         number: snap.val()
        //     });
        // });
    }

    addFlight(e) {
        e.preventDefault();
        this.app.database().ref('flight').push(this.inputEl.value);
        this.inputEl.value = '';
    }

    render() {
        return(
            <div>
            <Header />
                <h1>My saved flights</h1>

                
                            
                {this.state.flights.map(flight =>
                <div className='showData' key={flight.id}>
                    <div className="data-header">
                        <h2>Flight {flight.name}</h2>
                        <h6></h6>
                    </div>
                    {console.log(flight.name)}
                    <ul>
                        <li><b>Terminal:</b></li>
                        <li><b>Gate:</b> </li>
                        <li><b>Departure time:</b> </li>
                        <li><b>Flightnumber:</b> </li>
                        <li className="delete">
                            <button>
                                <FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon>Delete</button>
                        </li>
                    </ul>
                </div>
              )}

            </div>
        );
    }
}

export default Overview;