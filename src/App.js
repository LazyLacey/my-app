import React, { Component } from 'react';
import './style.css';
import Workdesk from './containers/Workdesk';
import { BrowserRouter, Redirect, Link, Switch } from "react-router-dom";
import {Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/dc' component={Workdesk}/>
          <Route exact path='/marvel' component={Workdesk}/>
          <Route path='/' component={() => <Redirect to='dc'/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
