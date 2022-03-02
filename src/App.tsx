import React from "react";
import { Navbar } from "./components/navbar";
import { ToDoForm } from "./components/todoForm";
import { useState } from "react";
import { ToDoList } from "./components/todoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHendler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      complited: false,
    };
    // setTodos([newTodo, ...todos])
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHendler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  };

  const removeHendler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <ToDoForm onAdd={addHendler} />

        <ToDoList
          todos={todos}
          onToggle={toggleHendler}
          onRemove={removeHendler}
        />
      </div>
    </>
  );
};

export default App;
