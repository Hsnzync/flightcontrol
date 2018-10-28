import React from 'react';
import '../css/App.css';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
		<ul>
			<li className="title">Schiphol Flight Control</li>
			<li className="nav-item">
				<Link to="">My flights</Link>
			</li>
		</ul>
	</header>
);

export default Header;