import React from 'react';

class SearchBox extends React.Component {
	render() {
		return (
			<form className="search-box {this.props.button ? search-box-with-submit : null}">
				<input type="text" placeholder={this.props.placeholder} />
				{this.props.button ? <button role="submit">{this.props.button}</button> : null }
			</form>
		);
	}
}

export default SearchBox;