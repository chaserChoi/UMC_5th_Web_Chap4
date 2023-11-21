import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import TVs from "./pages/TVs";
import TVDetail from "./pages/TVDetail";

function App() {
  return (
    <div className="root-wrap">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:title" element={<MovieDetail />} />
          <Route path="/tvs" element={<TVs />} />
          <Route path="/tvs/:name" element={<TVDetail />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

// function Home() {
//   return <h1>Home</h1>;
// }

// function Movie() {
//   return <h1>Movie</h1>;
// }

// function TV() {
//   return <h1>TV Shows</h1>;
// }

// function Celebrity() {
//   return <h1>Celebrity</h1>;
// }

export default App;
