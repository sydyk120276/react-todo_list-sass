import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, useHistory } from "react-router-dom";

import { List, Task, ListButton } from './components'





const App = () => {
  const [lists, setLists] = useState(null)
  const [colors, setColors] = useState(null)
  const [activeItem, setActiveItem] = useState(null)
  let history = useHistory()

useEffect(() => {
  axios("http://localhost:3001/lists?_expand=color&_embed=tasks").then(
    ({ data }) => {
      setLists(data);
    }
  );
  axios("http://localhost:3001/colors").then(({ data }) => {
    setColors(data);
  })
}, [])

  const addList = (obj) => {
    const newList = [
      ...lists,
      obj
    ]
    setLists(newList)
  }

const editTitle = (id, title) => {
  const newList = lists.map(task => {
    if (task.id === id) {
      task.name = title
    }
    return task
  })
  setLists(newList)
}


const onAddTask = (listId, taskObj) => {
  const newList = lists.map(item => {
    if (item.id === listId) {
      item.tasks = [...item.tasks, taskObj]
    }
    return item
  })
  setLists(newList)
}

    const onRemoveTask = (listId, taskId ) => {
      if (window.confirm("вы дествительно хотите удалить?")) {
          const newList = lists.map((item) => {
            if (item.id === listId) {
              item.tasks = item.tasks.filter(task => task.id !== taskId)
            }
            return item;
          });
            setLists(newList);
        axios.delete(`http://localhost:3001/tasks/${taskId}`).catch(() => {
          alert("Не удалось удалить задачу")
        });
      }
    };

    const onEditTask = (listId, taskObj) => {
      const newTaskText = (window.prompt("Текст задачи", taskObj.text))

      if (!newTaskText) {
        return
      }

        const newList = lists.map((item) => {
          if (item.id === listId) {
            item.tasks = item.tasks.map((task) => {
              if (task.id === taskObj.id) {
             task.id = newTaskText
              }
              return task
            });
          }
          return item;
        });
        setLists(newList);
        axios
          .patch(`http://localhost:3001/tasks/${taskObj.id}`, {
            text: newTaskText
          })
          .catch(() => {
            alert("Не удалось дополнить задачу");
          });
      }


        const onCompleteTask = (listId, taskId, completed) => {
          const newList = lists.map((list) => {
            if (list.id === listId) {
              list.tasks = list.tasks.map((task) => {
                if (task.id === taskId) {
                  task.completed = completed;
                }
                return task;
              });
            }
            return list;
          });
          setLists(newList);
          axios
            .patch("http://localhost:3001/tasks/" + taskId, {
              completed,
            })
            .catch(() => {
              alert("Не удалось обновить задачу");
            });
        };


  useEffect(() => {
    const listId = history.location.pathname.split("lists/")[1];
    if (lists) {
      const list = lists.find((list) => list.id === Number(listId));
      setActiveItem(list);
    }
  }, [lists, history.location.pathname]);



  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          onClickItem={() => {
            history.push("/");
          }}
          items={[
            {
              active: !activeItem,
              icons: (
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18px"
                  height="18px"
                >
                  <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
                </svg>
              ),

              name: "Все задачи",
            },
          ]}
        />
        {lists ? (
          <List
            items={lists}
            onRemove={(id) => {
              const newLists = lists.filter((item) => item.id !== id);
              setLists(newLists);
            }}
            onClickItem={(list) => {
              history.push(`/lists/${list.id}`);
              setActiveItem(list);
            }}
            activeItem={activeItem}
            isRemovable
          />
        ) : (
          "Загрузка..."
        )}

        <ListButton onAdd={addList} colors={colors} />
      </div>

      <div className="todo__task">
        <Route exact path="/">
          {lists &&
            lists.map((list) => (
              <Task
                key={list.id}
                list={list}
                onEditTitle={editTitle}
                onAddTask={onAddTask}
                onRemoveTask={onRemoveTask}
                onEditTask={onEditTask}
                onCompleteTask={onCompleteTask}
                besSagolovki
              />
            ))}
        </Route>
        <Route path="/lists/:id">
          {lists && activeItem && (
            <Task
              list={activeItem}
              onEditTitle={editTitle}
              onAddTask={onAddTask}
              onRemoveTask={onRemoveTask}
              onEditTask={onEditTask}
              onCompleteTask={onCompleteTask}
            />
          )}
        </Route>
      </div>
    </div>
  );
}

export default App;
