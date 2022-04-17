import axios from "axios";
import { 
    getUsersFailure, 
    getUsersStart, 
    getUsersSuccess,
    createUsersStart,
    createUsersSuccess,
    createUsersFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure 
} from "./UsersActions"

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/users",{
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};

// Create User
export const createUser = async (user, dispatch) => {
    dispatch(createUsersStart());
    try {
            const res = await axios.post("/users", user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createUsersSuccess(res.data));
    } catch (err) {
        dispatch(createUsersFailure());
    }
};

// Delete User
export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
            await axios.delete("/users/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};