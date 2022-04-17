import "./ListOfUsers.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableUsers from "../../components/datatable-users/DatatableUsers";

const ListOfUsers = () => {
  return (
    <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <DatatableUsers />
        </div>
    </div>
  )
}

export default ListOfUsers;