import React from "react";
import classNames from "classnames";

import './list.scss'
import Badge from "../Badge";
import removeSvg from '../../assets/img/icons8-удалить.svg'

const List = ({ items, isRemovable, onClick, onRemove}) => {

    const onRemoveList = (item) => {
     if (window.confirm("вы дествительно хотите удалить?")) {
    onRemove(item);
     }

    };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icons ? item.icons : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              src={removeSvg}
              alt=""
              className="list__remove-icon"
              onClick={onRemoveList}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
