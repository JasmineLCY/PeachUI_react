import React, { ReactNode, useEffect, useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Button } from "../lib";
import hljs from "highlight.js";
import "highlight.js/styles/dark.css";
import "./Demo.scss";

export const Demo = (prop: { title: string; children: ReactNode }) => {
  const [visible, setVisible] = useState(true);
  const { title, children } = prop;
  const code = reactElementToJSXString(children, {
    useFragmentShortSyntax: true,
    showFunctions: true,
  });
  useEffect(() => {
    document.querySelectorAll("pre").forEach((block) => {
      try {
        hljs.highlightBlock(block);
      } catch (e) {
        console.log(e);
      }
    });
  });

  return (
    <div className="demo">
      <h2 style={{ color: "gray" }}>{title}</h2>
      <div className="demo-component">{children}</div>
      <div className="demo-actions">
        <Button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "隐藏代码" : "显示代码"}
        </Button>
      </div>
      {visible && (
        <div className="demo-code">
          <pre className="language-jsx">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
