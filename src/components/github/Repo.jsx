import React, {Component} from 'react';

class Repo extends Component {
  render() {
    const repo = this.props.repo;
    return(
      <li className="list-group-item" key={repo.id}>
        <a href={repo.html_url}>{repo.name}</a>: {repo.description}
        </li>
    )
  }
}


export default Repo;
