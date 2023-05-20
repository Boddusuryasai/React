import React, { useReducer } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

const todoReducer = (state,action)=>{
    switch(action.type){
        case "ADD_TODO":{
            return [...state,{
                name:action.todoname,
                ischecked: false,
              }]
        }
        case "DELETE_TODO":{
            const newTodos = state.filter((_,i)=>i!==action.index)
            return newTodos
        }
        case "EDIT_TODO" :{
            const copy=[...state]
           copy[action.index]={...copy[action.index],name:action.editValue}
            return copy
        }
        case "UPDATE_CHECK" :{
            const copy=[...state]
           copy[action.index]={...copy[action.index],ischecked:!copy[action.index].ischecked}
            return copy
        }
    }
     
}

function Main() {

 const [todos, dispatch] = useReducer(todoReducer, [])


  const addNewTodo = (todoname) => {
          dispatch({type:"ADD_TODO", todoname:todoname})
  };

  const handleEdit = (i, value) => {
    dispatch({type:"EDIT_TODO", index:i ,editValue:value})
  };

  const handleDelete = (i) => {
    dispatch({type:"DELETE_TODO", index:i})
  };

  const handleCheck = (i) => {
        dispatch({type:"UPDATE_CHECK" , index:i})
  };

  return (
    <div className="flex justify-center items-center h-screen font-[Poppins]">
      <div className="flex flex-col  items-center justify-center bg-[#046A91] shadow-2xl w-[400px] mx-auto py-6 rounded-3xl  ">
        <Form addNewTodo={addNewTodo} />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
}

export default Main;