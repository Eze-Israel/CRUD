import { useEffect,useRef,useState } from "react";
import { v4 as uuidv4 } from 'uuid'


export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    });
    const [todo, setTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});
    const toggeleRef = useRef(null)
    // const [isVisible, setIsVisible] = useState(true)
    
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    function handleInputChange(e) {
      setTodo(e.target.value);
    }
  
    function handleEditInputChange(e) {
      setCurrentTodo({ ...currentTodo, text: e.target.value });
      console.log(currentTodo);
    }
    const storeIDndText = {
      id: uuidv4(),
      text: todo.trim(),
    }
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      if (todo !== "") {
        setTodos([
             storeIDndText,    ...todos,
        ]);
      }
  
      setTodo("");
    }
  
    function handleEditFormSubmit(e) {
      e.preventDefault();
  
      handleUpdateTodo(currentTodo.id, currentTodo);
    }
  
    function handleDeleteClick(id) {
      const removeItem = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(removeItem);
    }
  
    function handleUpdateTodo(id, updatedTodo) {
      const updatedItem = todos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
      });
      setIsEditing(false);
      setTodos(updatedItem);
    }
  
    function handleEditClick(todo) {
      setIsEditing(true);
      setCurrentTodo({ ...todo });
    }
    const handleCheck = (id) => {
    const checked = todos.map(todu => todu.id === id ? {...todu, completed: !todu.completed} : todu)
    setTodos(checked)
    localStorage.setItem('todos', JSON.stringify(checked))
    
  }

  // const hideDetails = () => {
  //    toggeleRef.current.style.display =  'none' 
      
  // }

  // const showDetails = () => {
  //   toggeleRef.current.style.display = "table-row"
  // }

  const crudApp = todos.map(todu => (
   
    <tr key={todu.id} ref={toggeleRef} >
      <td >
        <input 
          type="checkbox" 
          value={todu.completed}
          onChange={() => handleCheck(todu.id)}
        />
      </td>
      <td style={{textDecoration: todu.completed ? 'line-through' : "none"}}>
        {todu.text}
      </td>
      {console.log(todu)}
    
      <td>
      <button onClick={() => handleEditClick(todu)} className="bg-orange-300 @apply px-2 py-1 text-blue-400 hover:text-blue-900">Edit</button>
      </td>
      
      <td>
      <button onClick={() => handleDeleteClick(todu.id)} 
      className="bg-red-400 @apply px-2 py-1 text-red-500 hover:text-red-700"
      >Delete</button>
      
      </td>
      <td>
      {/* <button onClick={() => hideDetails(todu.id)} className="bg-gray-500 px-2 py-1">Hide Details</button> */}
     
      </td>
    </tr>
    

    ))
    
    

    return (
      <div className="bg-orange-100">
        {isEditing ? (
          <form onSubmit={handleEditFormSubmit} className="shadow-inner shadow-md shadow-gray-400 p-4 text-center" >
            <h2 className="bg-gray-400">Edit Todo</h2>
            <label htmlFor="editTodo">Edit todo: </label>
            <input
              name="editTodo"
              type="text"
              placeholder="Edit todo"
              value={currentTodo.text}
              onChange={handleEditInputChange}
              className="border border-gray-900 border-dashed @apply hover:border-dotted "
            />
           
            <button type="submit" className="bg-blue-200 px-2 py-1">Update</button>
            <button onClick={() => setIsEditing(false)} className="bg-blue-500 px-2 py-1">Cancel</button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit} className="shadow-inner shadow-md shadow-gray-400 p-2 text-center">
             
            <h2 className="bg-gray-700 p-2 font-bold underline text-center text-blue-100">Create, Read, Update, Delete</h2>
            <label htmlFor="todo">Add todo: </label>
            <input
              name="todo"
              type="text"
              placeholder="Create a new todo"
              value={todo}
              onChange={handleInputChange}
              className="border border-gray-900 border-dashed @apply hover:border-dotted "
            />
            <button type="submit" className="bg-green-100 px-2 py-1">Add</button>
            {/* <button onClick={showDetails} className="bg-yellow-100 px-2 py-1 ">Show Details</button> */}
          </form>
        )}
        { todos.length ? (
              <table className="text mx-auto">
          <tbody>
             {crudApp}
          </tbody>
        </table>
       
        
          ) : (
            <p className="border-2 boder-solid boder-gray-600 
            rounded-full bg-red-600 px-2 py-12 text-xl text-center mt-10"
            > Your Todolist is empty please Use the Add button and input data and the checkbox to indicate completed task </p>
          )
        }
      </div>
    );
  }


//   `
//  <style>

// @media and screen (min-width:screen-md){
// .h2{
// text-red-600
// }
// }




//  </style>
// `
  