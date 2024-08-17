import TodoApp from "./components/TodoApp"
import Animation from "./components/Animation"


const App = () => {
  return (
    <>
    <div className="shadow-inner shadow-md shadow-gray-400 p-12">
       <h1 className="text-3xl font-bold  text-center bg-blue-100  ">
      CRUD APP
    </h1>
      <TodoApp />
    </div>
    <Animation />
    </>
  )
}

export default App