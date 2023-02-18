import TodoInputText from './components/TodoInputText/TodoInputText';
import TodoListHeader from './components/TodoListHeader/TodoListHeader';
import TodoListItems from './components/TodoListItems/TodoListItems';

function App() {
  return (
    <div className="App">
      <TodoListHeader />
      <TodoInputText />
      <TodoListItems />
    </div>
  );
}

export default App;
