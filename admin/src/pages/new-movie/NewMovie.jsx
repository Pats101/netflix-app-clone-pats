import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./NewMovie.scss";
import { useState } from "react";

const NewMovie = () => {

  const [movie,setMovie] = useState(null);
  const [img,setImg] = useState(null);
  const [imgTitle,setImgTitle] = useState(null);
  const [imgSm,setImgSm] = useState(null);
  const [trailer,setTrailer] = useState(null);
  const [video,setVideo] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({...movie, [e.target.name]: value });
  };
  console.log(img); 

  const [file,setFile] = useState("");
  return (
    <div className="newMovie">
        <Sidebar/>
        <div className="newMovieContainer">
          <Navbar/>
          <div className="top">
            <h1>New Movie</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                name="img" 
                src={file 
                  ? URL.createObjectURL(file) 
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
                alt="" 
                onChange={e=>setImg(e.target.files[0])} 
              />
            </div>
            <div className="right">
              <form className="movieForm">
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input 
                    type="file" 
                    id="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{display: "none"}}
                  />
                </div>
                <div className="addMovieItem">
                  <label>Title Image</label>
                  <input type="file" id="imgTitle" name="imgTitle" onChange={e=>setImgTitle(e.target.files[0])} />
                </div>
                <div className="addMovieItem">
                  <label>Thumbnail Image</label>
                  <input type="file" id="imgSm" name="imgSm" onChange={e=>setImgSm(e.target.files[0])} />
                </div>
                <div className="addMovieItem">
                  <label>Title</label>
                  <input type="text" placeholder="Resident Evil" name="title" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Description</label>
                  <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Year</label>
                  <input type="text" placeholder="2012" name="year" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Genre</label>
                  <input type="text" placeholder="Horror" name="genre" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Duration</label>
                  <input type="text" placeholder="Duration" name="duration" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Limit</label>
                  <input type="text" placeholder="18" name="limit" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Is Series?</label>
                  <select name="isSeries" id="isSeries" onChange={handleChange}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
                <div className="addMovieItem">
                  <label>Trailer</label>
                  <input type="file" name="trailer" onChange={e=>setTrailer(e.target.files[0])} />
                </div>
                <div className="addMovieItem">
                  <label>Video</label>
                  <input type="file" name="video" onChange={e=>setVideo(e.target.files[0])} />
                </div>
                <button>Create New Movie</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewMovie;