import "./ListView.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";

const ListView = () => {
  const location = useLocation();
  const list = location.state?.list;
  console.log(list);
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="movieButtonContainer">
            <Link to="/lists/newList">
                <button className="movieAddButton">Create</button>
            </Link>
          </div>
          <div className="top">
            <div className="left">
              <h1 className="title">List</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">{list.title}</h1>
                  <div className="detailItem">
                    <span className="itemKey">id:</span>
                    <span className="itemValue">{list._id}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">genre:</span>
                    <span className="itemValue">{list.genre}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">type:</span>
                    <span className="itemValue">{list.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">List Upload</h1>
            <form className="movieForm">
                <div className="movieFormLeft">
                    <label>List Title</label>
                    <input type="text" placeholder={list.title} />
                    <label>Type</label>
                    <input type="text" placeholder={list.type} />
                    <label>Genre</label>
                    <input type="text" placeholder={list.genre} />
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

export default ListView;