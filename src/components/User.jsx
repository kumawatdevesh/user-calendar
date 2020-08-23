import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../UI/Modal';
import Backdrop from '../UI/Backdrop';
import styles from './User.module.css';

const User = (props) => {

    const [showModal, setShowModal] = useState(false);

    const onClickItemHandler = () => {
        setShowModal(true);
    };

    return (
        <div>
            <div className={styles.user__details}>
                <div className={styles.user__details__components}>
                    <span>{props.user.real_name}</span>
                    <NavLink to="/" onClick={onClickItemHandler}>Details</NavLink>
                </div>
            </div>
            {showModal && <Modal user={props.user} onClick={() => setShowModal(false)} />}
            {showModal && <Backdrop onClick={() => setShowModal(false)} />}
        </div>
    )
};

export default User;