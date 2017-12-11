import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom'; 
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">

          <nav>
            <NavLink to="/Users" activeClassName="Selected"> Users </NavLink>
            <NavLink to="/Courses" activeClassName="Selected"> Courses </NavLink>
          </nav>
          <Switch>
            <Route path="/Users" component={Users}/>
            <Route path ="/Courses" component={Courses}/>
            <Redirect from="/all-courses" to="Courses"/>
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
