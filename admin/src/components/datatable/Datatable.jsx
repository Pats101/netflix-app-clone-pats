import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/MoviesAPICalls";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Datatable = () => {
    const { movies, dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    },[dispatch]);

    console.log(movies);

    const handleDelete = (id) => {
        deleteMovie(id,dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 100 },
        { field: 'movie', headerName: 'Movie', width: 150, 
            renderCell: (params)=> {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "genre", headerName: "Genre", width: 120 },
        { field: "year", headerName: "Year", width: 120 },
        { field: "limit", headerName: "Limit", width: 120 },
        { field: "isSeries", headerName: "isSeries", width: 120 },
        { 
            field: "action", 
            hearder: "Action", 
            width: 150, 
            renderCell:(params) => {
                return (
                    <div className="cellAction">
                        <Link to={'/movies/'+params.row._id} state={{ movie: params.row }}>
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
            Add New User
            <Link to="/movies/newMovie" className="link">
                Add New
            </Link>
        </div>
        <DataGrid
            className="datagrid"
            disableSelectionOnClick
            rows={movies}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(r) => r._id}
        />
    </div>
  )
}

export default Datatable;