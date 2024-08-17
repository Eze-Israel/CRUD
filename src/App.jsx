import TodoApp from "./components/TodoApp"
import Animation from "./components/Animation"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
    <div className="shadow-inner shadow-md shadow-gray-400 p-5">
       <h1 className="text-3xl font-bold  text-center bg-blue-100 p-0 ">
      CRUD APP
    </h1>
      <TodoApp />
    </div>
    <Animation />
    <Footer />
    </>
  )
}

export default App