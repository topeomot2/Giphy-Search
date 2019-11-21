import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.searchText.length >= 3) {
      this.setState({
        pending: true
      });
      this.props.searchApi(this.state.searchText);
    }
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit} method="POST">
          <div className="SearchBox-header">Giphy Search</div>
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <input
                name="searchText"
                id="searchText"
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Text"
                value={this.state.searchText}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row justify-content-center m-2">
            <button type="submit" className="m-2 btn btn-secondary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
