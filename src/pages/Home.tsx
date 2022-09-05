import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

const Feature = (props: { icon: string; text1: string; text2: string }) => {
  const { icon, text1, text2 } = props;
  return (
    <>
      <div className="item">
        <svg className="icon">
          <use xlinkHref={icon}></use>
        </svg>
        <div className="text">
          <h3>{text1}</h3>
          <p>{text2}</p>
        </div>
      </div>
    </>
  );
};

const Home: React.FC<{}> = () => {
  return (
    <>
      <div className="topnavAndBanner">
        <Header />
        <div className="banner">
          <h1>Peach UI</h1>
          <h2 style={{ color: "dimgrey", fontSize: "2.4em" }}>Peach UI</h2>
          <p className="actions">
            <a href="https://github.com/jasminelcy">Github</a>
            <Link
              to="/doc"
              style={{
                backgroundColor: "palevioletred",
                borderRadius: "5px",
                color: "white",
                fontSize: "22px",
                fontWeight: "bolder",
                padding: "10px 25px",
              }}
            >
              开始
            </Link>
          </p>
        </div>
      </div>
      <div className="features">
        <Feature
          icon="#icon-taozi"
          text1="基于 React"
          text2="使用了 React Hooks 编写"
        ></Feature>
        <Feature
          icon="#icon-taozi"
          text1="基于 TypeScript"
          text2="源码采用 TypeScript"
        ></Feature>
        <Feature
          icon="#icon-taozi"
          text1="代码易读"
          text2="每个组件代码都易于阅读"
        ></Feature>
      </div>
    </>
  );
};

export default Home;
