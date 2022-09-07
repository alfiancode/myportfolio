import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto m-10 max-w-sm">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
