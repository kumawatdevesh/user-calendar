import React from 'react';
import styles from './Modal.module.css';
import { NavLink } from 'react-router-dom';

const Modal = (props) => {

    const cancelModalHandler = () => {
        props.onClick();
    };

    return (
        <div className={styles.container}>
            {props.user.activity_periods.map(i => {
                return (
                    <div key={Math.random()}>
                        <p>Start Time: {i.start_time}</p>
                        <p>End Time: {i.end_time}</p>
                    </div>
                )
            })}
            <NavLink to={{ pathname: `/calendar`, state: { activities: props.user.activity_periods } }} > View All</NavLink>
            <div className={styles.cancel__button} onClick={cancelModalHandler}>X</div>
        </div >
    )
};

export default Modal;