import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
