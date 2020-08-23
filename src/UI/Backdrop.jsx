import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {

    const cancelClickHandler = () => {
        props.onClick();
    }

    return (
        <div className={styles.container} onClick={cancelClickHandler}>

        </div>
    )
};

export default Backdrop;