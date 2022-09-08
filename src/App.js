import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import GuestBook from "./pages/GuestBook";

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
        <Route
          path="/guestbook"
          element={
            <Layout>
              <GuestBook />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
