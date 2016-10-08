import React, {Component} from 'react';
import Nav from './github/Nav.jsx';
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

    render() {
      return(
        <div className="container-fluid">
          <div className="row">
            <Nav />
          </div>
          <div className="row">
            {this.state.username}
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
