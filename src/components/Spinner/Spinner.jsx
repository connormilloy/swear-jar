import React from 'react';
import STYLES from './Spinner.module.css';

const Spinner = ({ size = 40, color = '#333' }) => (
    <svg
        className={STYLES.Spinner}
        width={size}
        height={size}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"

    >
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="90"
            strokeDashoffset="60"
        />
    </svg>
);

export default Spinner;
