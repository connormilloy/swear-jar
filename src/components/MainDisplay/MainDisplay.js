import { useState } from 'react';
import STYLES from './MainDisplay.module.css';
import Jar from '../Jar';
import Spinner from '../Spinner';
import PaymentLink from "../PaymentLink/PaymentLink";

const MainDisplay = () => {
    const [appState, setAppState] = useState('jar');
    const [swearJarAmount, setSwearJarAmount] = useState(0);

    const handleJarClick = () => {
        setAppState('loading');
        setSwearJarAmount(+(Math.random() * (1 - 0.3) + 0.3).toFixed(2));
        setTimeout(() => {
            setAppState('payment');
        }, 1000)
    }

    return (
        <div className={STYLES.MainDisplay}>
            {appState === 'jar' && (
                <Jar width={160} fill="#B0C4DE" stroke="#333" strokeWidth={2} onClick={handleJarClick} />
            )}
            {appState === 'loading' && (
                <Spinner size={100} />
            )}
            {appState === 'payment' && (
                <div className={STYLES.Payment}>
                    <Jar width={160} fill="#B0C4DE" stroke="#333" strokeWidth={2} amountDue={swearJarAmount} />
                    <PaymentLink amountDue={swearJarAmount}/>
                </div>
            )}
        </div>
    )
}

export default MainDisplay;