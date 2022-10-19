import React, { useState } from "react";
import { MehOutlined } from "@ant-design/icons";
import { AutoComplete } from "../../lib";
import { Demo } from "../Demo";
import './AutoCompleteDemo.css'

const testData = [
  { label: "abca", value: "abca" },
  { label: "aaad", value: "a" },
  { label: "abbcd", value: "abc" },
  { label: "bcdd", value: "bcd" },
];

const NotFound = () => {
  return (
    <>
      <span>
        <MehOutlined /> 没有匹配到哦
      </span>
    </>
  );
};

export const AutoCompleteDemo = () => {
  return (
    <React.Fragment>
      <h1>TodoList示例</h1>
      <Demo title="基本使用">
        <AutoComplete options={testData}></AutoComplete>
      </Demo>
      <Demo title="自定义notfound样式">
        <AutoComplete options={testData} notFoundContent={<NotFound/>}></AutoComplete>
      </Demo>
      <Demo title="自定义匹配高亮样式">
        <AutoComplete options={testData} highLightClassName="myHighLight"></AutoComplete>
      </Demo>
    </React.Fragment>
  );
};
