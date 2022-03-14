import {FunctionComponent} from "react";

import styles from './key.module.scss';

interface KeyProps {
    char: string;
    onClick: () => void;
}

const Key: FunctionComponent<KeyProps> = ({char, onClick}) => {
    return (
        <div className={styles.key} onClick={onClick}>{char}</div>
    )
}

export default Key;