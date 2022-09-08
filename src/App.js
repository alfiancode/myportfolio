import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import GuestBook from "./pages/GuestBook";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
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

        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />

        <Route
          path="/project"
          element={
            <Layout>
              <Project />
            </Layout>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
