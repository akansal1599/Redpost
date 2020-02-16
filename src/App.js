import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import UserHome from "./containers/UserHome/UserHome";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            <UserHome/>
        </Layout>
      </div>
    );
  }
}

export default App;

