import "./Lists.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ListLists from "../../components/list-lists/ListLists";

const Lists = () => {
  return (
    <div className="lists">
        <Sidebar />
        <div className="listsContainer">
          <Navbar />
          <ListLists />
        </div>
    </div>
  )
}

export default Lists;