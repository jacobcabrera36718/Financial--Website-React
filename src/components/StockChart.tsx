import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Required to load ApexCharts without SSR
import { fetchStockData, StockData } from '../utils/fetchStockData';

// ApexCharts requires dynamic import in Next.js due to SSR limitations
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const StockChart: React.FC = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchStockData();
      setStockData(data);
    };

    getData();
  }, []);

  const chartOptions = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    xaxis: {
      type: 'category',
      labels: { formatter: (val: string) => new Date(val).toLocaleDateString() },
    },
    yaxis: {
      tooltip: { enabled: true },
    },
  };

  const chartSeries = [
    {
      name: 'TSLA',
      data: stockData.map((day) => ({
        x: day.date,
        y: [day.open, day.high, day.low, day.close],
      })),
    },
  ];

  return (
    <div>
      {stockData.length ? (
        <Chart options={chartOptions} series={chartSeries} type="candlestick" height={350} />
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockChart;
