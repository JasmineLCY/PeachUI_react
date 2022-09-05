import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import "./Input.scss";

interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  size?: "small" | "default" | "large";
  noBorder?: boolean;
  after?: string;
  addon?: string;
  onChange?: (event: ChangeEvent<HTMLElement>) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const { size, noBorder, after, addon, style, ...otherProps } = props;
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in props) {
    delete otherProps.defaultValue;
    otherProps.value = fixControlledValue(props.value);
  }
  return (
    <div
      className="peach-input-container"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "10px",
      }}
    >
      {/* {addon && (
        <div className="peach-input-container input-fix">{addon}</div>
      )} */}
      {addon && <span className={"input-fix input-fix-pre"}>{addon}</span>}
      <input
        className={`peach-input-container input-base input-base-${
          noBorder ? "noBorder" : ""
        }  input-base-${addon ? "addon" : ""} input-base-${
          after ? "after" : ""
        } input-size-${size} input-size-${size}-${
          addon ? "addon" : ""
        } input-size-${size}-${after ? "after" : ""}`}
        {...otherProps}
      />
      {after && (
        <div className="peach-input-container input-fix input-fix-suf">
          {after}
        </div>
      )}
    </div>
  );
};
