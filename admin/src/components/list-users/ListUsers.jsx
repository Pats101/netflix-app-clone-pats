import "./ListUsers.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../context/userContext/UsersContext";
import { getUsers } from "../../context/userContext/UsersAPICalls";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const ListUsers = () => {
    const { users, dispatch } = useContext(UsersContext);

    useEffect(() => {
        getUsers(dispatch);
    },[dispatch]);

    console.log(users);

    const handleDelete = (id) => {
        // deleteUser(id,dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: "username", headerName: "UserName", width: 250 },
        { field: "email", headerName: "Email", width: 150 },
        { field: "isAdmin", headerName: "isAdmin", width: 150 },
        { 
            field: "action", 
            hearder: "Action", 
            width: 150, 
            renderCell:(params) => {
                return (
                    <div className="cellAction">
                        <Link to={'/users/'+params.row._id} state={{ user: params.row }}>
                            <RemoveRedEyeOutlinedIcon className="viewButton"></RemoveRedEyeOutlinedIcon>
                        </Link>
                        <DeleteOutlineOutlinedIcon 
                            className="deleteButton"
                            style={{outline: 'none'}}  
                            onClick={() => handleDelete(params.row._id)}>
                        </DeleteOutlineOutlinedIcon>
                    </div>
                );
            },
        },
      ];    

  return (
      <div className="datatable">
        <div className="dataTableTitle">
            Add New list
            <Link to="/users/newUser" className="link">
                Add New
            </Link>
        </div>
        <DataGrid
            className="datagrid"
            disableSelectionOnClick
            rows={users}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(r) => r._id}
        />
    </div>
  )
}

export default ListUsers;