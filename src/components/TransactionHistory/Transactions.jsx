import Transaction from "./Transaction";
import styles from "./Transaction.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory} id="transaction">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <Transaction {...item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
