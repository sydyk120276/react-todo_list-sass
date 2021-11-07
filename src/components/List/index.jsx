import React from "react";
import classNames from "classnames";
import axios from 'axios'

import './list.scss'
import Badge from "../Badge";
import removeSvg from '../../assets/img/delete.svg'

const List = ({ items, isRemovable, onClick, onRemove }) => {
console.log(items)
    const onRemoveList = (item) => {
     if (window.confirm("вы дествительно хотите удалить?")) {
       axios.delete(`http://localhost:3001/lists/${item.id}`).then(() => {
       onRemove(item.id);
       })
     }
    }

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icons ? item.icons : <Badge color={item.color.name} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              src={removeSvg}
              alt=""
              className="list__remove-icon"
              onClick={() => onRemoveList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
