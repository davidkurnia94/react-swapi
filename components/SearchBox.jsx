import React from 'react';

class SearchBox extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			searchText: ''
		}
	}

	render() {
		return (
			<form className="search-box">
				<input type="text" value={this.state.searchText} placeholder={this.props.placeholder} onChange={this.handleChange} />
				{this.props.button ? <button role="submit" disabled={ this.state.searchText ? false : true }>{this.props.button}</button> : null }
			</form>
		);
	}

	handleChange(e) {
		this.setState({
			searchText: e.target.value
		})
	}
}

export default SearchBox;