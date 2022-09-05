import React, { useState } from "react";
import { Button, Input } from "../../lib/";
import { Demo } from "../Demo";
export const InputDemo = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <React.Fragment>
      <h1>Input示例</h1>
      <Demo title="基本使用">
        <Input />
      </Demo>
      <Demo title="size 尺寸">
        <>
          <Input size="small" placeholder="small input" />
          <Input size="default" placeholder="default input" />
          <Input size="large" placeholder="large input" />
        </>
      </Demo>
      <Demo title="禁用">
        <>
          <Input placeholder="normal" />
          <Input disabled placeholder="disabled" />
        </>
      </Demo>
      <Demo title="addon after 前后缀">
        <>
          <Input />
          <Input addon="addon" />
          <Input after="atferafter" />
          <Input addon="addonaddon" after="after" />
        </>
      </Demo>
      <Demo title="noBorder 无边框">
        <>
          <Input placeholder="normal" />
          <Input noBorder placeholder="noBorder" />
        </>
      </Demo>
      <Demo title="defaultValue">
        <>
          <Input defaultValue="defaultValue" />
        </>
      </Demo>
      <Demo title="受控">
        <>
          <Input value={value} onChange={handleChange} />
          <div
            style={{
              width: "300px",
              height: "100px",
              border: "1px solid black",
            }}
          >
            {value}
          </div>
        </>
      </Demo>
    </React.Fragment>
  );
};
