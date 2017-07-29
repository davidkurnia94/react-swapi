import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header className="main-header">
				<div className="main-header_container">
					<div className="main-logo">
						<h3>SWAPI</h3>
					</div>
					<nav className="main-navigation">
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/characters/'>Characters</Link></li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}	
}

export default Header;