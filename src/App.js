import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './global.scss';
import './App.css';

import Home from './components/Home';
import Login from "./components/Login";
import Service from "./pages/Service/Service";
import Tracking from "./pages/Tracking/Tracking";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/service"
            element={
                <Service />
            }
          />
          <Route
            path="/tracking"
            element={
                <Tracking />
            }
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
