import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import './App.css';

function App() {
  return (
  <div>
    <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
  </div>
  );
}

export default App;
