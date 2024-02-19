import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './global.scss';
import './App.css';

import Home from './components/Home';
import Login from "./components/Login";
import Service from "./pages/Service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Service />
              </>
            }
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
