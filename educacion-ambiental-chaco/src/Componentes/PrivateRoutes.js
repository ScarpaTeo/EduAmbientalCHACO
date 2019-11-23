import React from 'react'
import {Redirect,BrowserRouter, Route, Switch } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    
    let content=localStorage.getItem('token')
    let mostrar
    if(content!=null){
        mostrar=true
    }
    return (
      <Route
        {...rest}
        render={props =>

          mostrar ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute