import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../DataTableSource";
import { Link } from "react-router-dom";

const Datatable = () => {

    const actionColumn = [
        {field: "action", hearder: "Action", width: 200, renderCell:() => {
            return (
                <div className="cellAction">
                    <Link to="/users/trial" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            );
        },},
    ];
  return (
    <div className="datatable">
        <div className="dataTableTitle">
            Add New User
            <Link to="/users/new" className="link">
                Add New
            </Link>
        </div>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable