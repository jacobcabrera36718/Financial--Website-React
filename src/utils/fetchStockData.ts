import axios from 'axios';

export interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export const fetchStockData = async (): Promise<StockData[]> => {
  const apiKey = 'QEX7BUV19R2OFSFF'; // Replace with your actual API key
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const timeSeries = response.data['Time Series (Daily)'];

    return Object.keys(timeSeries).map(date => ({
      date,
      open: parseFloat(timeSeries[date]['1. open']),
      high: parseFloat(timeSeries[date]['2. high']),
      low: parseFloat(timeSeries[date]['3. low']),
      close: parseFloat(timeSeries[date]['4. close']),
    })).slice(0, 30); // Get last 30 days of data
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
};
