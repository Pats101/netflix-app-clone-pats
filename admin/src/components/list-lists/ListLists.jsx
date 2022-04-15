import "./ListLists.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListsContext } from "../../context/listContext/ListsContext";
import { deleteList, getLists } from "../../context/listContext/ListsAPICalls";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const ListLists = () => {
    const { lists, dispatch } = useContext(ListsContext);

    useEffect(() => {
        getLists(dispatch);
    },[dispatch]);

    console.log(lists);

    const handleDelete = (id) => {
        deleteList(id,dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: "title", headerName: "title", width: 250 },
        { field: "genre", headerName: "Genre", width: 150 },
        { field: "type", headerName: "type", width: 150 },
        { 
            field: "action", 
            hearder: "Action", 
            width: 150, 
            renderCell:(params) => {
                return (
                    <div className="cellAction">
                        <Link to={'/lists/'+params.row._id} state={{ list: params.row }}>
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
            <Link to="/lists/newList" className="link">
                Add New
            </Link>
        </div>
        <DataGrid
            className="datagrid"
            disableSelectionOnClick
            rows={lists}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(r) => r._id}
        />
    </div>
  )
}

export default ListLists;