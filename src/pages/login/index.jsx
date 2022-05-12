import { NavLink } from "react-router-dom";
import React, { Component,useEffect } from "react";
const Login=(props)=>{
    return <div key={props.location.key}>
        <div style={{fontSize:'64px',color:'red'}}>登录页面</div>
        <NavLink
            className={"App-link"}
            activeClassName={"App-active"}
            to={"/home"}
          >
            首页
          </NavLink>
    </div>
}



export default Login