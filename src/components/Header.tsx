import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const Navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        display: "block",
        backgroundColor: "transparent",
      }}
    >
      <div className="header">
        <svg
          className="icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            Navigate("/");
          }}
        >
          <use xlinkHref="#icon-taozi"></use>
        </svg>
        <ul className="menu">
          <Link
            to="/doc"
            style={{ fontWeight: "bolder", color: "palevioletred" }}
          >
            文档
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
