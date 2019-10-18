import React, { useState } from "react";
import { BrowserRouter as Router, Route,withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
function App(appProps) {
 return (
     <div className="App">
       <Route exact path="/" component={Login} />
       {/*
         Build a PrivateRoute component that will
         display BubblePage when you're authenticated
       */}
        <Route
         exact
         path='/colors'
         render={props => protectedRoute(BubblePage, {...props,...appProps})}
       />
     </div>
 );
}
function protectedRoute(Component, props) {
 if (localStorage.getItem('payload')) {
   return <Component {...props} />;
 }
 return <Redirect to='/' />;
}
export default withRouter(App);
