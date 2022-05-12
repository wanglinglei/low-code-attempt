import { NavLink,withRouter } from "react-router-dom";
import React, { Component,useEffect } from "react";
const Home=(props)=>{
    return <div>
        <div style={{fontSize:'64px',color:'blue'}}>首页</div>
        <NavLink
            className={"App-link"}
            activeClassName={"App-active"}
            to={"/login"}
          >
            登录
          </NavLink>
    </div>
}



export default Home