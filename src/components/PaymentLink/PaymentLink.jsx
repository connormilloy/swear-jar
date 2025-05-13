import paypalLogo from '../../images/paypal-logo.png'
import STYLES from './PaymentLink.module.css';
const PaymentLink = ({ amountDue }) => {
    return (
        <div className={STYLES.PaymentLink}>
            <a href={`https://paypal.me/ConnorMilloy/${amountDue}`} target="_blank" rel="noopener noreferrer">
                <img className={STYLES.PaypalLogo} src={paypalLogo} alt="PayPal Logo" />
            </a>
        </div>
    );
};

export default PaymentLink;