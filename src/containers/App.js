import React, {Component}from 'react';
import TdForm from './../components/tdform.js'
import TdList from './../compenents/tdlist.js'
import './App.css';

class TdApp extends Component {
  render(){
    return (
      <div>
        <h1>What do you need to do?</h1>
        <TdForm />
        < TdList />
      </div>
    );
  }
}

export default TdApp;
