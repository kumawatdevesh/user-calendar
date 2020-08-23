import { GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_FAILED, GET_USERS_RESET } from '../../actions/types';
import users from '../../users';

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_LOADING, payload: null });
        dispatch({ type: GET_USERS_SUCCESS, payload: users.members })
    } catch (e) {
        dispatch({ type: GET_USERS_FAILED, payload: e.message });
    }
}