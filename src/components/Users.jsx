import React from 'react';
import User from './User';

const Users = (props) => {

    const { users } = props;

    if (users.length === 0) {
        return <h1>No users!!!</h1>
    }

    return users.map((i, index) => <User key={index} user={i} />)

};

export default Users;