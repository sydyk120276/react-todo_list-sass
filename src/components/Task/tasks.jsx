import React from "react";

const Task = ({ id, text }) => {
  return (
    <div key={id} className="task__items_row">
      <div className="checkbox">
        <input id={`task-${id}`} type="checkbox" />
        <label htmlFor={`task-${id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M9.87685428,15.4852814 L4.92710681,10.5355339 C4.53658252,10.1450096 3.90341754,10.1450096 3.51289325,10.5355339 C3.12236896,10.9260582 3.12236896,11.5592232 3.51289325,11.9497475 L9.1697475,17.6066017 C9.36500964,17.8018639 9.62093196,17.8994949 9.87685428,17.8994949 C10.1327766,17.8994949 10.3886989,17.8018639 10.5839611,17.6066017 L20.483456,7.70710678 C20.8739803,7.31658249 20.8739803,6.68341751 20.483456,6.29289322 C20.0929317,5.90236893 19.4597667,5.90236893 19.0692424,6.29289322 L9.87685428,15.4852814 Z"
            />
          </svg>
        </label>
      </div>
      <input readOnly value={text} />
      <div className="task__items_row-actions">
        <div>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="15px"
            height="15px"
          >
            <path
              d="M 23.90625 3.96875 C 22.859286 3.96875 21.813178 4.3743215 21 5.1875 L 5.40625 20.78125 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 11.21875 26.59375 L 26.8125 11 C 28.438857 9.373643 28.438857 6.813857 26.8125 5.1875 C 25.999322 4.3743215 24.953214 3.96875 23.90625 3.96875 z M 23.90625 5.875 C 24.409286 5.875 24.919428 6.1069285 25.40625 6.59375 C 26.379893 7.567393 26.379893 8.620107 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.893072 6.1069285 23.403214 5.875 23.90625 5.875 z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.533142 22.500659 9.4993415 21.466858 8.21875 20.8125 L 20.3125 8.71875 z M 6.9375 22.4375 C 8.1365842 22.923393 9.0766067 23.863416 9.5625 25.0625 L 6.28125 25.71875 L 6.9375 22.4375 z"
              color="#000000"
              overflow="visible"
              font-family="Bitstream Vera Sans"
            />
          </svg>
        </div>
        <div>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="11px"
            height="11px"
          >
            <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Task;
