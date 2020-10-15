import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginRegister from './component/LoginRegister';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './component/Home';


class App extends Component  {

  constructor() {
    super()
  }


    render(){
      return (
        <div className="App">

<BrowserRouter>
                <Switch>
               
                <Route path="/login-register"  exact component={LoginRegister}  />
                <Route path="/"  exact component={Home}  />

</Switch>
</BrowserRouter>
  
    
     
    </div>
  );
}

}

export default App;
