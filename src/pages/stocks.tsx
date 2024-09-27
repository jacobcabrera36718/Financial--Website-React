import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import StockTable from '../components/StockTable';
import StockChart from '../components/StockChart';
import { Stock } from '../types/Stock';
import styles from '../styles/Stocks.module.css';

// Dummy data for demonstration
const dummyStocks: Stock[] = [
  { symbol: 'AAPL', price: 150.25, change: 1.5, volume: 100000 },
  { symbol: 'GOOG', price: 2800.10, change: -0.75, volume: 250000 },
  { symbol: 'AMZN', price: 3405.15, change: 0.8, volume: 150000 },
  { symbol: 'TSLA', price: 720.35, change: -1.25, volume: 100000 },
];

const dummyMarketData = {
  sp500: 4185.47,
  sp500Change: 0.75,
  nasdaq: 14016.81,
  nasdaqChange: -0.5,
  djia: 34035.99,
  djiaChange: 0.9,
};

const Stocks: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>(dummyStocks);
  const [marketData, setMarketData] = useState(dummyMarketData);

  // In a real application, you would fetch real data here
  useEffect(() => {
    // Fetch real-time stock data and update state
    // setStocks(fetchedStocks);
    // setMarketData(fetchedMarketData);
  }, []);

  const renderIndicator = (name: string, value: number, change: number) => (
    <div className={styles.indicator}>
      <h3>{name}</h3>
      <p>{value.toFixed(2)}</p>
      <p className={change >= 0 ? styles.positive : styles.negative}>
        {change >= 0 ? '+' : ''}{change.toFixed(2)}%
      </p>
    </div>
  );

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Stock Market Overview</h1>
        
        <div className={styles.marketIndicators}>
          {renderIndicator('S&P 500', marketData.sp500, marketData.sp500Change)}
          {renderIndicator('NASDAQ', marketData.nasdaq, marketData.nasdaqChange)}
          {renderIndicator('Dow Jones', marketData.djia, marketData.djiaChange)}
        </div>

        <div className={styles.chartContainer}>
          <h2>S&P 500 Performance</h2>
          <StockChart width={800} ratio={1} />
        </div>

        <div className={styles.tableContainer}>
          <h2>Top Stocks</h2>
          <StockTable stocks={stocks} />
        </div>
      </div>
    </Layout>
  );
};

export default Stocks;