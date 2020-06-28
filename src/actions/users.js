import {FETCH_USERS} from "../types/types";
import jsonUser from "../apis/jsonUser";

export const fetchUsers = () => async (dispatch) => {
    const response = await jsonUser.get('/posts');

    dispatch({
        type: FETCH_USERS,
        payload: response.data
    })
};