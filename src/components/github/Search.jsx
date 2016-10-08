import React, {Component} from 'react';

class Search extends Component {
  onSubmitHandler(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    if (username) {
      this.props.handleSubmit(username);
      this.refs.username.value = '';
    }
  }
  render() {
    return(
      <form className="form-group" onSubmit={this.onSubmitHandler.bind(this)}>
        <input className="form-control" ref="username" placeholder="Search user"></input>
      </form>
    )
  }
}

export default Search;
