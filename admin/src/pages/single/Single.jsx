import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { Link, useLocation } from "react-router-dom";

const Single = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  console.log(movie);
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="movieButtonContainer">
            <Link to="/new">
                <button className="movieAddButton">Create</button>
            </Link>
          </div>
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Movie</h1>
              <div className="item">
                <img 
                  src={movie.img}
                  alt="" 
                  className="itemImg" />
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
                      <span className="itemKey">year:</span>
                      <span className="itemValue">{movie.year}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">limit:</span>
                      <span className="itemValue">{movie.limit}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">desc:</span>
                      <span className="itemValue">{movie.desc}</span>
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
                    <label>Year</label>
                    <input type="text" placeholder={movie.year} />
                    <label>Genre</label>
                    <input type="text" placeholder={movie.genre} />
                    <label>Limit</label>
                    <input type="text" placeholder={movie.limit} />
                    <label>Trailer</label>
                    <input type="file" placeholder={movie.trailer} />
                    <label>Video</label>
                    <input type="file" placeholder={movie.video} />
                    <label>Desc</label>
                    <input type="text" placeholder={movie.desc} />
                </div>
                <div className="movieFormRight">
                    <div className="movieUpload">
                        <img 
                            src={movie.img}
                            alt="" 
                            className="movieUploadImg"/>
                            <label for="file">
                                <PublishOutlinedIcon />
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="movieButton">Update</button>
                </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Single