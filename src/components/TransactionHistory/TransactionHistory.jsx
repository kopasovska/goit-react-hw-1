import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
 return (
    <table className={css.transactionTable}>
        <thead className={css.transactionTableHeader}>
            <tr>
            <th className={css.transactionTableTh}>Type</th>
            <th className={css.transactionTableTh}>Amount</th>
            <th className={css.transactionTableTh}>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => {
        return (<tr key={item.id} className={css.transactionTableTr}>
                    <td className={css.transactionTableTd}>{item.type}</td>
                    <td className={css.transactionTableTd}>{item.amount}</td>
                    <td className={css.transactionTableTd}>{item.currency}</td>
                </tr>);
      })}          
        </tbody>
    </table>
 )
}

export default TransactionHistory;