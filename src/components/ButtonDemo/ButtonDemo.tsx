import React, { useState } from "react";
import { Button } from "../../lib";
import { Demo } from "../Demo";
import "./ButtonDemo.scss";
export const ButtonDemo = () => {
  return (
    <React.Fragment>
      <h1>Button示例</h1>
      <Demo title="theme 主题">
        <>
          <Button>default theme</Button>
          <Button theme="button">button theme</Button>
          <Button theme="link">link theme</Button>
          <Button theme="text">text theme</Button>
          <Button theme="outline">outline theme</Button>
        </>
      </Demo>

      <Demo title="size 尺寸">
        <>
          <div>
            <Button>default</Button>
            <Button theme="button">default button</Button>
            <Button theme="link">default link</Button>
            <Button theme="text">default text</Button>
            <Button theme="outline">default outline</Button>
          </div>
          <div>
            <Button theme="button" size="small">
              small button
            </Button>
            <Button theme="link" size="small">
              small link
            </Button>
            <Button theme="text" size="small">
              small text
            </Button>
            <Button theme="outline" size="small">
              samll outline
            </Button>
          </div>
          <div>
            <Button theme="button" size="large">
              large button
            </Button>
            <Button theme="link" size="large">
              large link
            </Button>
            <Button theme="text" size="large">
              large text
            </Button>
            <Button theme="outline" size="large">
              large outline
            </Button>
          </div>
        </>
      </Demo>

      <Demo title="status 状态">
        <>
          <Button>nomal status</Button>
          <Button status="info">info status</Button>
          <Button status="success">success status</Button>
          <Button status="warning">warning status</Button>
          <Button status="error">error status</Button>
        </>
      </Demo>
      <Demo title="loading 加载状态">
        <>
          <Button loading>default button</Button>
          <Button status="info" loading>
            info status
          </Button>
          <Button status="success" loading>
            success status
          </Button>
          <Button status="warning" loading>
            warning status
          </Button>
          <Button status="error" loading>
            error status
          </Button>
        </>
      </Demo>
      <Demo title="disabled 禁用">
        <>
          <Button disabled>default button</Button>
          <Button status="info" disabled>
            info status
          </Button>
          <Button status="success" disabled>
            success status
          </Button>
          <Button status="warning" disabled>
            warning status
          </Button>
          <Button status="error" disabled>
            error status
          </Button>
        </>
      </Demo>
    </React.Fragment>
  );
};
