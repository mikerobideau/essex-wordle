import {FunctionComponent} from "react";

import styles from './key.module.scss';

interface KeyProps {
    char: string;
    onClick: () => void;
    color: string;
}

const Key: FunctionComponent<KeyProps> = ({char, onClick, color}) => {
    const getColorStyle = (color: string) => {
        switch (color) {
            case 'green':
                return styles.green;
            case 'amber':
                return styles.amber;
            case 'gray':
                return styles.gray;
            default:
                return null;
        }
    }

    return (
        <div className={`${styles.key} ${getColorStyle(color)}`} onClick={onClick}>{char}</div>
    )
}

export default Key;