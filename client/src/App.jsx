import "./App.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/netflix-app-clone-pats" element={ user ? <Home /> : <Navigate to="/netflix-app-clone-pats/register" replace/>} />
        <Route exact path="/netflix-app-clone-pats/register" element={ !user ? <Register /> : <Navigate to="/netflix-app-clone-pats" replace/>} />
        <Route exact path="/netflix-app-clone-pats/login" element={ !user ? <Login /> : <Navigate to="/netflix-app-clone-pats" replace/>} />
        { user && (
          <>
            <Route path="/netflix-app-clone-pats/movies" element={ <Home type="movie" /> } />
            <Route path="/netflix-app-clone-pats/series" element={ <Home type="series" /> } />
            <Route path="/netflix-app-clone-pats/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;