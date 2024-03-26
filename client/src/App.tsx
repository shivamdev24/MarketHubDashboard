import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./component/dashboard/Dashboard"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route path="/email" element={<Dashboard />} />
          <Route path="/sale" element={<Dashboard />} />
          <Route path="/feedback" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
