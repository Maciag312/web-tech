import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route,   BrowserRouter as Router  , Switch} from "react-router-dom";
import Greeter from './Greeter'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/apple">
          <Greeter fruit="Apple" eaten="Core" color="green"></Greeter>
        </Route>
        <Route path="/banana">
          <Greeter fruit="Banana" eaten="Skin" color="yellow" ></Greeter>
        </Route>
        <Route path="/orange">
          <Greeter fruit="Orange" eaten="Peel" color="orange" ></Greeter>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
