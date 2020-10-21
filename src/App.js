import React, { useState } from 'react';
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
import {TeacherMenu} from './components/teacher/menu';
import {Smenu} from './components/student/menu';
import {GetAssignmentStd} from './components/student/student';
import { UploadAssign } from './components/student/upload-assign';
import MarkAssignment from './components/teacher/mark';
import {Teacher} from './components/teacher/teacher'




function App() {
  const [token  , setToken] = useState('')
  
    const tokenFunc = (token) => {
      setToken(token);
    }
  

  return (
    <div className="App">
      <NavBar token = {token} />

      <Switch>
        <Route exact path="/signin" render={(props) => <Signin {...props} tokenFunc={tokenFunc} />} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/adminpage" component={AdminPage} />
        <Route exact path="/add-teacher" component={AddTeacher} />
        <Route exact path="/admin-menu" component={Menu} />
        <Route exact path="/teacher-menu" component={TeacherMenu} />
        <Route exact path="/student-menu" component={Smenu} />
        <Route exact path="/stdassign" component={GetAssignmentStd} />
        <Route exact path="/uplassign" component={UploadAssign} />
        <Route exact path="/markassign" component={MarkAssignment} />
        <Route exact path="/teacher" component={Teacher} />
      </Switch>
    </div>
  );
}

export default App;
