import React from 'react';
import SearchBox from '../components/SearchBox';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<section className="hero-section">		
					<div className="main-container">
						<section className="hero_heading-area mb-30">
							<h1>SWAPI</h1>
							<h3>The all-in-one Star Wars Repository you will ever need.</h3>
						</section>
						<section className="hero_search-area">
							<SearchBox placeholder="Search for characters, maps, planets, etc." button="Search" />
						</section>
					</div>
				</section>
			</div>
		)
	}
}

export default Home