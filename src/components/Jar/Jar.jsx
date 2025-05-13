import React from 'react';
import STYLES from './Jar.module.css';

const Jar = ({ width = 160, fill = '#B0C4DE', stroke = '#333', strokeWidth = 2, onClick, amountDue }) => (
    <div className={STYLES.JarContainer}>
        <svg
            width={width}
            className={STYLES.Jar}
            height={(width * 1.2)}  // Not too tall or squat
            viewBox="0 0 160 192"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            {/* Lid */}
            <rect x="40" y="10" width="80" height="14" rx="3" fill={fill} stroke={stroke} strokeWidth={strokeWidth}/>

            {/* Neck */}
            <rect x="48" y="24" width="64" height="12" rx="3" fill="#D3D3D3" stroke={stroke} strokeWidth={strokeWidth}/>

            {/* Body */}
            <rect x="25" y="36" width="110" height="140" rx="20" fill={fill} stroke={stroke} strokeWidth={strokeWidth}/>
        </svg>
        {amountDue && (
            <span className={STYLES.JarAmount}>£{amountDue}</span>
        )}
    </div>
);

export default Jar;
