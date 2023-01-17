import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

  return (
    <div>
        <h1>Flames, on the side of my face, breathing-breathl- heaving breaths. Heaving breaths... Heathing...</h1>
        <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default TodoList