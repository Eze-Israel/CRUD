
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'This App was created to handle/manage Todolist ',
        1000,  
        'Click on Add, to add a todo to your list',
        1000,
        'Check the boxes when a todo is executed or completed ',
        1000,
        'Click on  the Edit button to edit a todolist  ',
        1000,
        'Click on Update to update your edited todolist ',
        1000,
        'Create, Read, Update, Delete (CRUD)',
        1000,
        'Developed and Deployed  Using React.js + Vite, TailwindCSS, localStorage for persistence and other dependencies',
        1000
      ]}
      wrapper="div"
      speed={10}
      style={{ fontSize: '1.5em', display: 'flex', justifyContent: 'center',}}
      repeat={Infinity}
      className= 'bg-blue-700 text  text-white text-center px-2 py-5'
    />
  );
};
export default Animation