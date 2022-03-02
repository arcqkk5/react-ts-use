import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px1">
        <a href="/" className="brand-logo">
          react-typescript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">ToDo list</a>
          </li>
          <li>
            <a href="/">Information</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
