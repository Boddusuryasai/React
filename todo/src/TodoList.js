import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export const TodoList = ({ todos, handleEdit, handleDelete, handleCheck }) => {
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEditEnter = (event, todo, editValue) => {
    if (event.key === "Enter") {
      handleEdit(todo, editValue);
      setEditId(null);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 ">
        <div className=" w-full mx-auto overflow-auto">
          <ul className="flex flex-col items-center ">
            {todos &&
              todos.map((todo, i) => (
                <React.Fragment key={i}>
                  {editId === i ? (
                    <li className="flex flex-row gap-6 justify-between py-2 px-4 mb-3">
                      <input
                        type="text"
                        value={editValue}
                        onChange={(event) => setEditValue(event.target.value)}
                        onKeyPress={(event) =>
                          handleEditEnter(event, i, editValue)
                        }
                        className="w-[300px] py-2 pl-4 focus:outline-none rounded-3xl"
                      />
                    </li>
                  ) : (
                    <li
                      className="flex flex-row gap-6 justify-between min-w-[300px] py-2 px-4 mb-3 bg-[#155A82] text-white rounded-3xl scale-95 shadow-[0px_4px_7px_#29b0ff] hover:scale-100 delay-75"
                      key={i}
                    >
                      <div className="round">
                        <input
                          type="checkbox"
                          id={i}
                          checked={todo.checked}
                          onChange={() => handleCheck(i)}
                        />
                        <label htmlFor={i}></label>
                      </div>
                      {todo.name}
                      <div className="flex gap-2 justify-center items-center ">
                        <AiFillDelete
                          className="hover:text-sky-600 text-red-600"
                          onClick={() => handleDelete(i)}
                        ></AiFillDelete>
                        <AiFillEdit
                          className="hover:text-sky-600 text-green-500"
                          onClick={() => {
                            setEditId(i);
                            setEditValue(todo.name);
                          }}
                        ></AiFillEdit>
                      </div>
                    </li>
                  )}
                </React.Fragment>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};