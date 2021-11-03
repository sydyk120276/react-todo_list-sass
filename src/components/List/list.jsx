import React from "react";
import classNames from "classnames";

import './list.scss'
import Badge from "../Badge";

const List = ({ items, isRemovable, onClick, className }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, {'active': item.active})}>
          <i>
            {item.icons ? (
              item.icons
            ) : (
              <Badge color={item.color} />
            )}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
