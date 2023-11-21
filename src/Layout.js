import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import "./Layout.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movielist from "./Components/Movielist/Movielist";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";
import TvList from "./Components/TvList/TvList";
import TvDetail from "./Pages/TvDetail/TvDetail";
import TrendingMovieList from "./Components/TrendingMovieList/TrendingMovieList";
import TrendingDetail from "./Pages/TrendingDetail/TrendingDetail";
import Footer from "./Components/Footer/Footer";

function Layout() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<MovieDetail />}></Route>
            <Route path="movies/:type" element={<Movielist />}></Route>
            <Route path="tv/:type/tv/:id" element={<TvDetail />}></Route>
            <Route path="tv/:type" element={<TvList />}></Route>
            <Route
              path="trending/movie/day/trending/movie/day/:id"
              element={<TrendingDetail />}
            ></Route>
            <Route
              path="trending/movie/day/"
              element={<TrendingMovieList />}
            ></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default Layout;
