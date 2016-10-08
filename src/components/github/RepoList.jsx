import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component {
  render() {
    return(
      <ul className="list-group">
        {this.props.userRepo.map(repo => {
          return <Repo repo={repo} />
        })}
      </ul>
    )
  }
}

export default RepoList;
