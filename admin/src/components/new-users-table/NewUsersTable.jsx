import "./NewUsersTable.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import axios from "axios";

const NewUsersTable = () => {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(()=>{
    const getNewUsers = async () => {
      try {
        const res = await axios.get("users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
          },
        });
        // console.log(res)
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="newUsersTable">
      <span className="newUserT">New Join Members</span>
      <ul className="newUserTList">
        {newUsers.map((user) => (
          <li className="newUserTListItem">
            <img 
              src={user.profilePic || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} 
              alt="" 
              className="newUserTImg"/>
              <div className="newUserTUser">
                <span className="newUserTUsername">{user.username}</span>
              </div>
              <button className="newUserTButton">
                <VisibilityIcon className="newUserTIcon" />
                Display
              </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewUsersTable