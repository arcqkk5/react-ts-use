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
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHendler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHendler = (id: number) => {
    const shoudRemove = window.confirm("Delete?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
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
