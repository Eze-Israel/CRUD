import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
// Precious Todo/Crud created


  function Crud() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [task, setTask] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    const newObj = {
      id: uuidv4(),
      item: task,
      completed: false
    }
    setTodoList([newObj, ...todoList])
    localStorage.setItem('todos', JSON.stringify([newObj, ...todoList]))
    setTask("")
  }

  const handleCheck = (id) => {
    const checked = todoList.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    setTodoList(checked)
    localStorage.setItem('todos', JSON.stringify(checked))
  }

  const handleDelete = (id) => {
    const deletedTask = todoList.filter(item => item.id !== id)
    setTodoList(deletedTask)
    localStorage.setItem('todos', JSON.stringify(deletedTask))
  }

  const renderedList = todoList.map(todo => (
    <tr key={todo.id}>
      <td>
        <input 
          type="checkbox" 
          value={todo.completed}
          onChange={() => handleCheck(todo.id)}
        />
      </td>
      <td style={{textDecoration: todo.completed ? 'line-through' : "none"}}>
        {todo.item}
      </td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </td>
    </tr>
  ))
  return (
    <>
    <form onSubmit={handleAdd}>
      <label htmlFor="task">Task</label>
      <input 
        type="text" 
        id="task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button>Add</button>
    </form>
      <h1>Todo List</h1>
      {todoList.length ? (
        <table>
          <tbody>
            {renderedList}
          </tbody>
        </table>
      ) : (
        <p>Your Task List is empty. Please add tasks!</p>
      )} 
     
    </>
  )
}

export default Crud
