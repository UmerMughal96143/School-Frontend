import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/navbar/navbar';
import Signin from './components/signin/signin';
import {Switch , Route } from 'react-router-dom';
import Signup from "./components/signup/signup";
import HomePage from './components/home/home';
import {AdminPage} from "./components/admin/admin";
import {AddTeacher} from './components/admin/add-teacher';
import Menu from './components/admin/menu';





function App() {

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/adminpage" component={AdminPage} />
        <Route exact path="/add-teacher" component={AddTeacher} />
        <Route exact path="/admin-menu" component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
