import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import About from './pages/About';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoList />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
