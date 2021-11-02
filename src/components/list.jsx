import React from "react";

import './list.scss'

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li>
          <i>{item.icons ? item.icons : <i className={`group group--${item.color}`}></i>}</i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
