import { NavLink } from "react-router-dom";
import React from "react";
const Home=(props)=>{
    return <div>
        <div style={{fontSize:'64px',color:'#000'}}>首页</div>
        <NavLink
            className={"App-link"}
            activeClassName={"App-active"}
            to={"/login"}
          >
             <span style={{color:'#000'}}>登录</span>   
          </NavLink>
          <NavLink
            className={"App-link"}
            activeClassName={"App-active"}
            to={"/content"}
          >
           <span style={{color:'#000'}}>内容</span>   
          </NavLink>
    </div>
}

export default Home