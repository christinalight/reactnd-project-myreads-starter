import React, {Component} from 'react';


class SearchResults extends Component{
  state = {
    value: '',
  };
  handleChange = event => {

    const val = event.target.value;
    this.setState({value: val }, () => {
      this.props.onSearch(val);
    });
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" autoFocus value={this.state.value} placeholder="search author or title" onChange={this.handleChange} /> 
      </div>
    );
  }

}

export default SearchResults;