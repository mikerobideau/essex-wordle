import {FunctionComponent} from "react";

import styles from './navbar.module.scss';

const NavBar: FunctionComponent = () => {
    return <div className={styles.navbar}>
        <img className={styles.logo} src="img/hornet.png" />
        <div className={styles.title}>ESSEX WORDLE</div>
    </div>
};

export default NavBar;