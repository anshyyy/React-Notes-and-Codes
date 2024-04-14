import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'
import { useState,useEffect } from 'react'

function App() {
  const [todos,setTodos] = useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:3000/").then(async(response)=>{
  //     const json = await response.json();
  //     setTodos(json.data);
  //   });
  // })
  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>     
    </div>
  )
}

export default App
