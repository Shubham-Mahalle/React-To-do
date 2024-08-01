import './App.css';
import Doing from './components/Doing';
import Todolist from './components/Todolist';

function App() {
  return (
    <>
    <div className='main-outer-div'>
       <h1 id='Heading'>To-do app</h1>
       <Todolist/>
    </div>
    </>
    

  );
}

export default App;
