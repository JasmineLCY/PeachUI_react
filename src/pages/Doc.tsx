import React, { useEffect } from "react";
import Header from "../components/Header";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ReactComponent as Intro } from "../markdown/intro.md";
import { ReactComponent as Install } from "../markdown/install.md";
import { ReactComponent as GetStarted } from "../markdown/get-started.md";
import "./Doc.css";
import { ButtonDemo } from "../components/ButtonDemo/ButtonDemo";
import { TodoListDemo } from "../components/TodoListDemo/TodoListDemo";
import { InputDemo } from "../components/InputDemo/InputDemo";
import { AutoCompleteDemo } from "../components/AutoCompleteDemo/AutoCompleteDemo";

const Doc: React.FC<{}> = () => {
  const location = useLocation();
  return (
    <div className="wrapper">
      <div className="content">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <div className="ol">
            <div
              className="li"
              style={
                location.pathname === "/doc"
                  ? { background: "palevioletred" }
                  : {}
              }
            >
              <Link to="/doc">介绍</Link>
            </div>
            <div
              className="li"
              style={
                location.pathname === "/doc/install"
                  ? { background: "palevioletred" }
                  : {}
              }
            >
              <Link to="/doc/install">安装</Link>
            </div>
            <div
              className="li"
              style={
                location.pathname === "/doc/get-started"
                  ? { background: "palevioletred" }
                  : {}
              }
            >
              <Link to="/doc/get-started">开始使用</Link>
            </div>
          </div>
          <h2>组件列表</h2>
          <div className="ol">
            <div
              className="li"
              style={
                location.pathname === "/doc/button"
                  ? { background: "palevioletred" }
                  : {}
              }
            >
              <Link to="/doc/button">Button 组件</Link>
            </div>
            <div
              className="li"
              style={
                location.pathname === "/doc/input"
                  ? { background: "palevioletred" }
                  : {}
              }
            >
              <Link to="/doc/input">Input 组件</Link>
            </div>
            <div
              className="li"
              style={
                location.pathname === "/doc/totolist"
                  ? { background: "palevioletred" }
                  : {}
              }
            >
              <Link to="/doc/totolist">Todolist 组件</Link>
            </div>
            <div
              className="li"
              style={
                location.pathname === "/doc/autocomplete"
                  ? { background: "palevioletred" }
                  : {}
              }
            >
              <Link to="/doc/autocomplete">AutoComplete 组件</Link>
            </div>
          </div>
        </aside>
        <main className={"markdown-body"} style={{ overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/install" element={<Install />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/button" element={<ButtonDemo />} />
            <Route path="/totolist" element={<TodoListDemo />} />
            <Route path="/input" element={<InputDemo />} />
            <Route path='/autocomplete' element={<AutoCompleteDemo/>}/>
          </Routes>
        </main>
      </div>
      <Header />
    </div>
  );
};

export default Doc;
