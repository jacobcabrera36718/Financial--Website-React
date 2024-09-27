import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Stock } from '../types/Stock';
import StockChart from '../components/StockChart';
import Heatmap from '../components/Heatmap'
import TopIndexCharts from '../components/indexfund_charts';


// Example list of stocks (you'd replace this with real data from an API)
const dummyStocks: Stock[] = [
  { symbol: 'AAPL', price: 150.25, change: 1.5, volume: 100000 },
  { symbol: 'GOOG', price: 2800.10, change: -0.75, volume: 250000 },
  { symbol: 'AMZN', price: 3405.15, change: 0.8, volume: 150000 },
  { symbol: 'TSLA', price: 720.35, change: -1.25, volume: 100000 },
];

const Home: React.FC = () => {
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>(dummyStocks);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const searchResult = dummyStocks.filter((stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStocks(searchResult);
  };

  return (
    <Layout> 
      <div>
      <h1>Tesla (TSLA) Stock Chart</h1>
      <StockChart />
    </div>
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-center text-3xl font-bold p-6">
        Stock Treemap of Major Companies
      </h1>
      <Heatmap />
    </div>
    </Layout>
  );
};

export default Home;