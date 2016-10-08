import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} alt=""
                className="thumbnail" />
            </div>
            <div className="col-md-8">

              <div className="col-md-12">
                <span className="label label-primary ">{this.props.userData.public_repos} Repos</span>
                <span className="label label-success">{this.props.userData.public_gists} Gists</span>
                <span className="label label-warning">{this.props.userData.followers} Followers</span>
                <span className="label label-danger">{this.props.userData.following} Following</span>
              </div>
              <hr />
              <div className="col-md-12">
                <ul className="list-group">
                  <li className="list-group-item">Username: {this.props.userData.login}</li>
                  <li className="list-group-item">Location: {this.props.userData.location}</li>
                  <li className="list-group-item">Email Address: {this.props.userData.email}</li>
                </ul>
              </div>
              <br />
              <a href={this.props.userData.html_url} className="btn btn-primary">View user's profile</a>
            </div>
          </div>

          <RepoList userRepo={this.props.userRepo} />
        </div>
      </div>
    )
  }
}

export default Profile;
