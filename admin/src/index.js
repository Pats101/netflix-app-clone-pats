import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListsContextProvider } from "./context/listContext/ListsContext";
import { UsersContextProvider } from "./context/userContext/UsersContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <MovieContextProvider>
          <ListsContextProvider>
            <UsersContextProvider>
              <App /> 
            </UsersContextProvider>
          </ListsContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
