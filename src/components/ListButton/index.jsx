import React, { useState }  from "react";

import List from '../List/list'
import './listButton.scss'
import Badge from "../Badge";
import closeSvg from "../../assets/img/icons8-удалить.svg";


const ListButton = ({ colors, onAdd }) => {

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectColor, setSelectColor] = useState(colors[0].id)
  const [inputValue, setInputValue] = useState('')

  const addList = () => {
    if (!inputValue) {
      alert('Введите строку')
      return
    }
    const namecolor = colors.filter(color => color.id === selectColor)[0].name
    onAdd({ id: Math.random(), name: inputValue, color: namecolor });
    setVisiblePopup(false)
  }

  return (
    <div className="list_add">
      <List
        onClick={() => setVisiblePopup(true)}
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
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt=""
            className="list_add__popup-close-btn"
          />
          <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className="field" type="text" placeholder="Название списка" />
          <div className="list_add__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => setSelectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectColor === color.id && "active"}
              />
            ))}
          </div>
          <button onClick={addList} className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default ListButton;