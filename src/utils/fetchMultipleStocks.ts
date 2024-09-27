import axios from 'axios';

export interface StockHeatmapData {
  symbol: string;
  value: number;
}

const companies = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN']; // Add more companies as needed

export const fetchMultipleStocks = async (): Promise<StockHeatmapData[]> => {
  const apiKey = 'QEX7BUV19R2OFSFF'; // Replace with your actual API key
  const promises = companies.map(async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    
    try {
      const response = await axios.get(url);
      const timeSeries = response.data['Time Series (Daily)'];
      const latestDate = Object.keys(timeSeries)[0]; // Most recent date
      const latestClose = parseFloat(timeSeries[latestDate]['4. close']);

      return {
        symbol,
        value: latestClose, // Could calculate percentage change, etc.
      };
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
      return { symbol, value: 0 };
    }
  });

  return Promise.all(promises);
};
