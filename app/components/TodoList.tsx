"use client";
import React, { useState } from "react";
import Image from "next/image";
import { todoListData } from "../data/data";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  // lagra och uppdatera todolistan
  const [todos, setTodos] = useState<Todo[]>(todoListData);
  // lagra och uppdatera inputs
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  //handleDeleteTodo tar emot id:et för den todo som ska tas bort och använder filter
  //för att utesluta den todo från todos-listan med det matchande id:et. Därefter
  // uppdateras todos-listan med den nya filtrerade arrayen, vilket tar bort den todo med det angivna id:et från listan.
  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const checkedTodo = (id: number) => {
    const updateTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodo);
  };
  return (
    <div className="bg-white p-10 flex flex-col gap-5 relative">
      {todos.map((todo) => (
        <ul className=" flex flex-row justify-between" key={todo.id}>
          <input
            onChange={() => checkedTodo(todo.id)}
            type="checkbox"
            className="bg-purple-100 border-purple-300 text-purple-500 focus:ring-purple-200"
          ></input>

          <li className={` ${todo.completed ? "line-through" : ""}`}>
            {todo.text}
          </li>

          <Image
            onClick={() => deleteTodo(todo.id)}
            width={24}
            height={24}
            src="/icons/trash.png"
            alt="Picture of icons"
          />
        </ul>
      ))}
      <input
        className="p-4 text-xl tracking-wider  font-semibold drop-shadow-xl  focus:outline-none focus:ring focus:ring-violet-300 rounded-lg"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button
        onClick={addTodo}
        className=" bg-purple-400 rounded-full  p-4 text-xl tracking-wider text-white font-semibold drop-shadow-xl"
      >
        + New Task
      </button>
    </div>
  );
};

export default TodoList;
