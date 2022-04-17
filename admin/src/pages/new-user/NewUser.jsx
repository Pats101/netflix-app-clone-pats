import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./NewUser.scss";
import { useContext, useState } from "react";
import { UsersContext } from "../../context/userContext/UsersContext";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { createUser } from "../../context/userContext/UsersAPICalls";
import { useNavigate } from "react-router-dom";

const NewUser = () => {

  
  const [user,setUser] = useState(null);
  const {dispatch} = useContext(UsersContext);
  const [profilePic,setProfilePic] = useState(null);
  
  const [uploaded,setUploaded] = useState(0);
  const [file,setFile] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) =>{
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/user/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changes", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done!");
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUser((prev) => {
            return { ...prev, [item.label]: downloadURL };
          });
          setUploaded((prev) => prev + 1);
        });
      }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: file, label: "profilePic" },
      { file: profilePic, label: "profilePic" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
    navigate("/users");
    
  };
  console.log(user);
  return (
    <div className="newUser">
        <Sidebar/>
        <div className="newUserContainer">
          <Navbar/>
          <div className="top">
            <h1>New User</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img 
              src={file 
                ? URL.createObjectURL(file) 
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
              alt="" />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Profile Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input 
                    type="file" 
                    id="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{display: "none"}}
                  />
                </div>
                <div className="addMovieItem">
                  <label>Username</label>
                  <input type="text" placeholder="username" name="username" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Email</label>
                  <input type="email" placeholder="email" name="email" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Password</label>
                  <input type="password" placeholder="password" name="password" onChange={handleChange} />
                </div>
                <div className="addMovieItem">
                  <label>Is Admin?</label>
                  <select name="isAdmin" id="isAdmin" onChange={handleChange} >
                    <option>Type</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
                {uploaded === 1 ? (
                  <button onClick={handleSubmit}>Create User</button>
                ) : (
                  <button onClick={handleUpload}>Upload User</button>
                )}                
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewUser;