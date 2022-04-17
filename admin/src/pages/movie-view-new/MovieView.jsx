import "./MovieView.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";

const MovieView = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  console.log(movie);
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="movieButtonContainer">
            <Link to="/movies/newMovie">
                <button className="movieAddButton">Create</button>
            </Link>
          </div>
          <div className="top">
            <div className="left">
              <h1 className="title">Movie</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">{movie.title}</h1>
                  <div className="detailItem">
                    <span className="itemKey">id:</span>
                    <span className="itemValue">{movie._id}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">genre:</span>
                    <span className="itemValue">{movie.genre}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">type:</span>
                    <span className="itemValue">{movie.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Movie Upload</h1>
            <form className="movieForm">
                <div className="movieFormLeft">
                    <label>Movie Title</label>
                    <input type="text" placeholder={movie.title} />
                    <label>Type</label>
                    <input type="text" placeholder={movie.type} />
                    <label>Genre</label>
                    <input type="text" placeholder={movie.genre} />
                </div>
                <div className="movieFormRight">
                    <button className="movieButton">Update</button>
                </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default MovieView;