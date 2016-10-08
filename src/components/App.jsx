import React, {Component} from 'react';
import axios from 'axios';
import Nav from './github/Nav.jsx';
import Profile from './github/Profile.jsx';
import {github} from '../../config.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'cespinalt',
            userData: [],
            userRepo: [],
            perPage: 5,
        }
    }

    getUserData() {
        axios.get(`https://api.github.com/users/${this.state.username}`,{
          params: {
            client_id: this.props.clientId,
            client_secret: this.props.clientSecret,
          }
        })
        .then(res => {
          this.setState({userData: res.data});
          console.log(res.data);
        })
        .catch(err => {
          this.setState({username: null});
        })
    }

    getUserRepo() {
        axios.get(`https://api.github.com/users/${this.state.username}/repos`,{
          params: {
            client_id: this.props.clientId,
            client_secret: this.props.clientSecret,
          }
        })
        .then(res => {
          this.setState({userRepo: res.data});
          console.log(res.data);
        })
        .catch(err => {
          this.setState({username: null});
        })
    }

    componentDidMount() {
      this.getUserData();
      this.getUserRepo();
    }

    render() {
      return(
        <div className="container-fluid">
          <div className="row">
            <Nav />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Profile {...this.state} />
            </div>
          </div>
        </div>
      )
    }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string,
};

App.defaultProps = {
  clientId: github.clientId,
  clientSecret: github.clientSecret,
};

export default App;
