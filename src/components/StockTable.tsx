import React from 'react';
import { Stock } from '../types/Stock';
import styles from '../styles/StockTable.module.css';

interface StockTableProps {
  stocks: Stock[];
}

const StockTable: React.FC<StockTableProps> = ({ stocks }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.stockTable}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>${stock.price.toFixed(2)}</td>
              <td className={stock.change >= 0 ? styles.positiveChange : styles.negativeChange}>
                {stock.change >= 0 ? `+${stock.change.toFixed(2)}` : stock.change.toFixed(2)}%
              </td>
              <td>{stock.volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
