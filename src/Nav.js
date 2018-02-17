import React from "react";

export default ({ items }) => (
  <nav className="Nav u-container">
    <ul className="Nav-list">
      {items.map((item, index) => (
        <li key={item.text} className="Nav-item">
          <a href={item.href} className="Nav-item-link">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
