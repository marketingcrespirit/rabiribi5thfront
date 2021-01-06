import React from 'react';
import styles from './pagebreak.module.css'

import image from '../public/assets/images/pb_02.png'

const Pagebreak_2 = () => {
    return (
        <div className={styles.pageBreak}>
            <img src={image} />
        </div>
    );
}

export default Pagebreak_2;
