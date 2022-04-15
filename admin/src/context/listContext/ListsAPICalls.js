import axios from "axios";
import { 
    getListsStart, 
    getListsSuccess, 
    getListsFailure, 
    deleteListsStart, 
    deleteListsSuccess, 
    deleteListsFailure, 
    createListsStart, 
    createListsSuccess, 
    createListsFailure
} from "./ListsActions";

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("/lists",{
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
};

// Create List
export const createList = async (list, dispatch) => {
    dispatch(createListsStart());
    try {
            const res = await axios.post("/lists", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListsSuccess(res.data));
    } catch (err) {
        dispatch(createListsFailure());
    }
};

// Delete Movie
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListsStart());
    try {
            await axios.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListsSuccess(id));
    } catch (err) {
        dispatch(deleteListsFailure());
    }
};