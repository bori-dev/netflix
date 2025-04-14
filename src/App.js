import "./App.css";
import AppLayout from "./layout/AppLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies"> 
          <Route path=":id" element={<MovieDetail/>}/>
          <Route index  element={<MoviePage/>}/>
        </Route>
        {/* <Route path="/movies" element={<MoviePage/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/> */}
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
