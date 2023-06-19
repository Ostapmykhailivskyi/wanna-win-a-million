import React from "react";

import "./styles.css";

interface propsType {
  callback: () => void;
  popupOpened: boolean;
}

function Header({ callback, popupOpened }: propsType) {
  return (
    <header>
      <button
        type="button"
        className={`menu-btn ${popupOpened ? "active-burger" : ""}`}
        onClick={callback}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
