import css from './Transactions.module.css';
import { getColor } from 'components/getColor';

const TransactionHistory = ({transactions}) => {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr style={{backgroundColor: getColor()}}>
            <th className={css['col-1']}>Type</th>
            <th className={css['col-2']}>Amount</th>
            <th className={css['col-3']}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className={css['col-1']}>{transaction.type}</td>
              <td className={css['col-2']}>{transaction.amount}</td>
              <td className={css['col-3']}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default TransactionHistory;