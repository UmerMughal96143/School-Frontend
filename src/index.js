import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore , applyMiddleware , combineReducers} from 'redux';
import { AuthLogin } from './redux/reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {StudentLogin} from './redux/student-reducer';
import {Assignments} from './redux/teacher-reducer';


const logger = createLogger();
const rootReducer = combineReducers({AuthLogin ,StudentLogin , Assignments})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
