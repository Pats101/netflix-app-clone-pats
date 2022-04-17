import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import NewUser from "./pages/new-user/NewUser";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/Dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext/AuthContext";
import NewMovie from "./pages/new-movie/NewMovie";
import Lists from "./pages/lists/Lists";
import ListView from "./pages/lists-view-new/ListView";
import NewList from "./pages/new-list/NewList";
import MovieView from "./pages/movie-view-new/MovieView";
import ListOfUsers from "./pages/list-users/ListOfUsers";
import UserView from "./pages/user-view-new/UserView";

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
                <Route index element={ <ListOfUsers /> } />
                <Route path=":userId" element={ <UserView /> }/>
                <Route path="newUser" element={ <NewUser /> }></Route>
              </Route>
              <Route path="movies">
                <Route index element={ <List /> } />
                <Route path=":movieId" element={ <MovieView /> }/>
                <Route path="newMovie" element={ <NewMovie /> }></Route>
              </Route>
              <Route path="lists">
                <Route index element={ <Lists /> } />
                <Route path=":listId" element={ <ListView /> }/>
                <Route path="newList" element={ <NewList /> }></Route>
              </Route>
            </Route>
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
