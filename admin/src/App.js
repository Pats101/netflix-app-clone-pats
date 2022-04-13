import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewUser from "./pages/new-user/NewUser";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/Dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext/AuthContext";
import NewMovie from "./pages/new-movie/NewMovie";

function App() {

  const { user } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={ user ? <Navigate to="/" /> : <Login /> }/>
          {user && 
            <Route path="/">
              <Route index element={ <Home /> } />
              <Route path="users">
                <Route index element={ <List /> } />
                <Route path=":userId" element={ <Single /> }/>
                <Route path="newUser" element={ <NewUser /> }></Route>
              </Route>
              <Route path="movies">
                <Route index element={ <List /> } />
                <Route path=":movieId" element={ <Single /> }/>
                <Route path="newMovie" element={ <NewMovie /> }></Route>
              </Route>
            </Route>
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
