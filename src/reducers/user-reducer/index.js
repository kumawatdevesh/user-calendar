import { GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_FAILED, GET_USERS_RESET } from '../../actions/types';

const INITIAL_STATE = {
    users: {
        get: {
            loading: false,
            reset: false,
            success: {
                ok: false,
                data: null,
            },
            failure: {
                error: false,
                message: '',
            },
        }
    }
};

const getUsersReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS_LOADING:
            return {
                ...state,
                users: {
                    ...state.users,
                    get: {
                        ...state.users.get,
                        loading: true,
                        reset: false,
                        success: {
                            ...state.users.get.success,
                            ok: false,
                        },
                        failure: {
                            error: false,
                            message: '',
                        },
                    },
                },
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: {
                    ...state.users,
                    get: {
                        ...state.users.get,
                        loading: false,
                        reset: false,
                        success: {
                            ...state.users.get.success,
                            ok: true,
                            data: action.payload,
                        },
                        failure: {
                            error: false,
                            message: '',
                        },
                    },
                },
            };
        case GET_USERS_FAILED:
            return {
                ...state,
                users: {
                    ...state.users,
                    get: {
                        ...state.users.get,
                        loading: false,
                        reset: false,
                        success: {
                            ...state.users.get.success,
                            ok: false,
                            data: null,
                        },
                        failure: {
                            error: true,
                            message: action.payload.message,
                        },
                    },
                },
            };
        case GET_USERS_RESET:
            return {
                ...state,
                users: {
                    ...state.users.get,
                    get: {
                        ...INITIAL_STATE.users.get,
                        reset: true,
                    },
                },
            }
    }
    return state;
}

export default getUsersReducers;