import './App.css';
import { TodoProvider } from './components/TodoContext/TodoContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <TodoProvider> 
      <AppUI />
    </TodoProvider>

  );
}

export default App;
