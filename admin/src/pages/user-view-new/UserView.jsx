import "./UserView.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";

const UserView = () => {
  const location = useLocation();
  const user = location.state?.user;
  console.log(user);
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="movieButtonContainer">
            <Link to="/users/newUser">
                <button className="movieAddButton">Create</button>
            </Link>
          </div>
          <div className="top">
            <div className="left">
              <h1 className="title">User</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">{user.username}</h1>
                  <div className="detailItem">
                    <span className="itemKey">id:</span>
                    <span className="itemValue">{user._id}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">email:</span>
                    <span className="itemValue">{user.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">isAdmin:</span>
                    <span className="itemValue">{user.isAdmin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Movie Upload</h1>
            <form className="movieForm">
                <div className="movieFormLeft">
                    <label>User Name</label>
                    <input type="text" placeholder={user.username} />
                    <label>Email</label>
                    <input type="text" placeholder={user.email} />
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

export default UserView;