import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/user-actions/index';
import Users from '../components/Users';

const UserRouter = (props) => {

    useEffect(() => {
        props.getUsers();
    }, []);

    const renderUsers = () => {
        const { getUsersReducers } = props;

        if (getUsersReducers.loading) {
            return <h1>Loading ...</h1>
        } else if (getUsersReducers.success.ok) {
            return <Users users={getUsersReducers.success.data} />
        } else if (getUsersReducers.failure.error) {
            return <h1>{getUsersReducers.failure.message}</h1>
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Hello Users</h1>
            {renderUsers()}
        </div>
    )
};

const mapStateToProps = ({ usersReducers }) => {

    const { users: { get: getUsersReducers } } = usersReducers;

    return {
        getUsersReducers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(actionCreators.getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRouter);