import * as React from 'react';
import {FunctionComponent} from "react";

import Key from "../Key";

import styles from './keyboard.module.scss';

interface KeyboardProps {
    onClick: (key: string) => void;
}

const Keyboard: FunctionComponent<KeyboardProps> = ({onClick}) => {
    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3 = ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'];
    const rows = [row1, row2, row3];

    return (
        <div className={styles.keyboardContainer}>
            <div className={styles.keyboard}>
                { rows.map(row => (
                    <div className={styles.keyboardRow}>
                        { row.map(key => <Key onClick={() => onClick(key) } char={key} /> )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Keyboard;