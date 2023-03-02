import './App.scss';
import About from './components/about/About';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='Portfolio' element={<Home />}/>
          <Route path='Portfolio/about' element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
