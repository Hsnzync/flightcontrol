import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<header>
				<ul>
					<li className="title">
						<Link to="/">Schiphol Flight Control</Link>
					</li>
					<div className="nav_section">
						<li>
							<Link to="/overview">My overview</Link>
						</li>
						<li>
							<button className='entry_btn'>
								<Link to="/">Plan flight</Link>
							</button>
						</li>
					</div>
				</ul>
			</header>
		);
	}
}


export default Header;