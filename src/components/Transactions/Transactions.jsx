import css from './Transactions.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css['column-1']}>Type</th>
          <th className={css['column-2']}>Amount</th>
          <th className={css['column-3']}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td className={css['column-1']}>{transaction.type}</td>
            <td className={css['column-2']}>{transaction.amount}</td>
            <td className={css['column-3']}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string
    })
  ),
};

export default TransactionHistory;