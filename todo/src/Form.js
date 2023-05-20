import React, { useState} from "react";

export const Form = ({ addNewTodo }) => {
  const [todoName, setTodoName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTodo(todoName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className=" body-font relative">
          <div className="container px-5 py-8 ">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                Create Todo
              </h1>
            </div>

            <div className="flex flex-row justify-center items-center flex-wrap m-2 ">
              <div className="p-2 ">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Todo Name"
                    className="w-full bg-gray-100  shadow-[0px_4px_15px_#29b0ff] placeholder:text-white placeholder:pl-3 bg-opacity-50 rounded-2xl outline-none  focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={todoName}
                    onChange={(event) => setTodoName(event.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 ">
                <button
                  type="submit"
                  className="flex mx-auto text-white shadow-[0px_4px_15px_#29b0ff]  border rounded-3xl py-2 px-4 focus:outline-none hover:bg-sky-900  text-md "
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};