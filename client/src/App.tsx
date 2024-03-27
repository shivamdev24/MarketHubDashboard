import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./component/dashboard/Dashboard"
import Product from "./component/dashboard/Product";
import Contact from "./component/dashboard/Contact";
import Sale from "./component/dashboard/Sale";
import Feedback from "./component/dashboard/Feedback";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
