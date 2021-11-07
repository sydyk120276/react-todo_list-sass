import React, { useState, useEffect }  from "react";
import axios from 'axios'

import List from '../List'
import './listButton.scss'
import Badge from "../Badge";
import closeSvg from "../../assets/img/delete.svg";



const ListButton = ({ colors, onAdd }) => {

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectColor, setSelectColor] = useState(3)
  const [inputValue, setInputValue] = useState('')
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    if (Array.isArray(colors)) {
      setSelectColor(colors[0].id)
    }
  }, [colors]);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue("");
    setSelectColor(colors[0].id);
  }

  const addList = () => {
    if (!inputValue) {
      alert('Введите строку')
      return
    }
   setIsLoading(true);
   axios.post('http://localhost:3001/lists', { name: inputValue, colorId: selectColor}).then(({ data }) => {
     const color = colors.filter((color) => color.id === selectColor)[0].name;
     const listObj = { ...data, color: { name: color} }
        onAdd(listObj);
        onClose();
   }).finally(() => {
     setIsLoading(false);
   })


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
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                />
              </svg>
            ),
            name: "Добавить папку",
          },
        ]}
      />
      {visiblePopup && (
        <div className="list_add__popup">
          <img
            onClick={onClose}
            src={closeSvg}
            alt=""
            className="list_add__popup-close-btn"
          />
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Название списка"
          />
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
          <button onClick={addList} className="button">
            {loading ? 'Добавление...' : 'Добавить'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ListButton;
