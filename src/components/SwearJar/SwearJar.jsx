import STYLES from './SwearJar.module.css';
import Header from '../Header';
import MainDisplay from "../MainDisplay/MainDisplay";

const SwearJar = () => {
    return (
        <div className={STYLES.SwearJar}>
            <Header />
            <MainDisplay />
        </div>
    );
}

export default SwearJar;