import React, { useState }  from "react";

import List from '../List/list'
import './listButton.scss'
import Badge from "../Badge";


const ListButton = ({ colors }) => {

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectColor, setSelectColor] = useState(colors[0].id)

  return (
    <div className="list_add">
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: "list__add-button",
            icons: (
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12px"
                height="12px"
              >
                <path
                  fill-rule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                />
              </svg>
            ),
            name: "Добавить папку",
          },
        ]}
        isRemovable
      />
      {visiblePopup && (
        <div className="list_add__popup">
          <input className="field" type="text" placeholder="Название списка" />
          <div className="list_add__popup-colors">
            {colors.map((color) => (
              <Badge
              onClick={() => setSelectColor(color.id)}
               key={color.id}
               color={color.name}
               className={selectColor === color.id && 'active'}
               />
            ))}
          </div>
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default ListButton;
