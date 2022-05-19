import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routeList from "./path"
import Layout from "../pages/layout";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Login from '@/pages/login'
const Router = (props) => {
  const { pathname } = useLocation()
  const [currentCompnent, serCurrentCompnent] = useState(1)
  useEffect(() => {
    let componentItem = 1
    if (pathname !== '/login') {
      componentItem = 2
    }
    serCurrentCompnent(componentItem)
  }, [pathname])
  return (
    <div>
      {
        currentCompnent === 1 ? (
          <Switch>
            <Route
              path={"/login"}
              component={Login}
            ></Route>
          </Switch>
        ) : (<Layout>
          <Switch>
            {routeList.map((v) => {
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
        </Layout>)
      }

    </div>

  );
}

export default Router;