import { NavLink } from "react-router-dom";
import React from "react";
const Login=(props)=>{
    return <div>
        <div style={{fontSize:'64px',color:'#634411'}}>内容页面</div>
        <NavLink
            className={"App-link"}
            activeClassName={"App-active"}
            to={"/home"}
          >
            <span style={{color:'#000'}}>首页</span>
          </NavLink>
    </div>
}



export default Login