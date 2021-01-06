import React from 'react';
import styles from './pagebreak.module.css'
import image from '../public/assets/images/pb_01.png'

const Pagebreak_1 = () => {
    return (
        <div className={styles.pageBreak}>
            <img src={image} />
        </div>
    );
}

export default Pagebreak_1;
