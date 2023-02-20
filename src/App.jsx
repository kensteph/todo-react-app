import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import About from './pages/About';

const App = () => (
  <div className="App">
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoList />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  </div>
);

export default App;
