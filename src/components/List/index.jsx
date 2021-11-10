import React from "react";
import classNames from "classnames";
import axios from 'axios'

import './list.scss'
import Badge from "../Badge";
import removeSvg from '../../assets/img/delete.svg'

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activItem }) => {
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
          className={classNames(item.className, { active: item.active 
            ? item.active
            : activItem && activItem.id === item.id})}
          onClick={onClickItem ? () => onClickItem(item) : null}
        >
          <i>{item.icons ? item.icons : <Badge color={item.color.name} />}</i>
          <span>{item.name}{item.tasks && ` (${item.tasks.length})`}</span>
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
