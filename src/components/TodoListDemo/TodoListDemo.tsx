import React, { useState } from "react";
import { TodoList } from "../../lib/";
import { Demo } from "../Demo";
export const TodoListDemo = () => {
  return (
    <React.Fragment>
      <h1>TodoList示例</h1>
      <Demo title="基本使用">
        <TodoList></TodoList>
      </Demo>
    </React.Fragment>
  );
};
