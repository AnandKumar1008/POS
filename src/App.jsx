import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Folder/HomePage";
import POSPage from "./Folder/POSPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pos" element={<POSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
