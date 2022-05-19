import React, { Component, useEffect } from "react";
import "./css/index.css";
import Components from "./components/components";
import Preview from "./components/preview";
const Home = (props) => {
  return (
    <div className="home-page">
      <div className="header" style={{ fontSize: "64px", color: "blue" }}>
        low code space
      </div>
      <div className="home-container">
        <div className="component-container">
          <div>组件区</div>
          <Components />
        </div>
        <div className="preview-container">
          <div>预览区</div>
          <Preview />
        </div>
        <div className="setting-container">
          <div>配置区</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
