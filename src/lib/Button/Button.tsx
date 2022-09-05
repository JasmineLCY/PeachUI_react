import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

type ThemeType = "button" | "link" | "text" | "outline";
type SizeType = "default" | "small" | "large";
type StatusType = "normal" | "info" | "success" | "warning" | "error";

export interface ButtonProps {
  theme?: ThemeType;
  size?: SizeType;
  status?: StatusType;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<
  ButtonProps & ButtonHTMLAttributes<HTMLElement>
> = ({
  theme = "button",
  size = "default",
  status = "normal",
  disabled = false,
  loading = false,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={(event) => {
        onClick && onClick(event);
      }}
      disabled={disabled}
      className={`peach-button peach-theme-${theme} peach-size-${size} peach-status-${status}`}
    >
      {loading && <span className="peach-loadingIndicator"></span>}
      {children}
    </button>
  );
};
