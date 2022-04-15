import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./NewList.scss";
import { useContext, useEffect, useState } from "react";
import { getMovies } from "../../context/movieContext/MoviesAPICalls";
import { ListsContext } from "../../context/listContext/ListsContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createList } from "../../context/listContext/ListsAPICalls";
import { useNavigate } from "react-router-dom";

const NewList = () => {

  const [list,setList] = useState(null);
  const {dispatch} = useContext(ListsContext);
  const {movies, dispatch: dispatchMovie} = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() =>{
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  };


  return (
    <div className="newMovie">
        <Sidebar/>
        <div className="newMovieContainer">
          <Navbar/>
          <div className="top">
            <h1>New List</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form className="movieForm">
                <div className="movieLeft">
                  <div className="addMovieItem">
                    <label>Title</label>
                    <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange} />
                  </div>
                  <div className="addMovieItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Horror" name="genre" onChange={handleChange} />
                  </div>
                  <div className="addMovieItem">
                    <label>Type</label>
                    <select name="type" onChange={handleChange}>
                      <option>Type</option>
                      <option value="movie">Movie</option>
                      <option value="series">Series</option>
                    </select>
                  </div>
                </div>
                <div className="movieRight">
                  <div className="addMovieItem">
                    <label>Content</label>
                    <select multiple name="content" onChange={handleSelect} style={{ height: "230px" }}>
                      {movies.map((movie) => (
                        <option key={movie._id} value={movie._id}>{movie.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button onClick={handleSubmit}>Create Movie</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewList;