"use client";
import React from "react";
import Form from "@/src/components/Form";
import Header from "@/src/components/Header";
import TODOHero from "@/src/components/TODOHero";
import TODOList from "@/src/components/TODOList";
const crypto = require('crypto');

function Home() {
  // todos holds curr value of state, setTodos updates the state
  const [todos, setTodos] = React.useState([]);

  const todosCompleted = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;
  const totalTodos = todos.length;

  

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todosCompleted={todosCompleted} totalTodos ={totalTodos}/>
      <Form setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  )
}
export default Home;