import React from 'react';
import styles from './nextpagebutton.module.css'
const NextPageBtn = (props) => {
    return (
        <div className={styles.buttonWrapper}>
            <a href={props.href}>{props.children}</a>
        </div>
    );
}

export default NextPageBtn;
