import './App.css';
import { tasks } from './dummyData';
import Tasks from './Tasks';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <Tasks items={tasks}/>
    </div>
  );
}

export default App;
