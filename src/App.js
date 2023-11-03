import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
        </Routes>
      </BrowserRouter>
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
