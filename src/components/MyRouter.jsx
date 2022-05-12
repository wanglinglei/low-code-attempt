import React, { Component } from "react";
import { Redirect,Route ,Switch } from "react-router-dom";

class MyRouter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
        <div>
              <Switch>
                {this.props.router.map((v) => {
                  
                  return (
                    <Route
                    exact={v.exact}
                  
                      key={v.path}
                      path={v.path}
                      render={(props) => <v.component {...props}></v.component>}
                    ></Route>
                  )
                })}
                <Redirect to={"/login"} from="*"></Redirect>
              </Switch>
              </div>
      
    );
  }
}

export default MyRouter;
