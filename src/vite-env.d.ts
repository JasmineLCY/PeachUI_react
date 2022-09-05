/// <reference types="vite/client" />
declare module "*.md" {
  const attributes: Record<string, unknown>;
  import React from "react";
  const Md: React.VFC;
  export { attributes, ReactComponent };
}
