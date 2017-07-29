import React from 'react';
import Header from './containers/Header';
import Main from './containers/Main';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Main />
			</div>
		)
	}
}

export default App
