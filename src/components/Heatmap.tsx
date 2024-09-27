import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { fetchMultipleStocks, StockHeatmapData } from '../utils/fetchMultipleStocks';

// ApexCharts requires dynamic import in Next.js due to SSR limitations
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Heatmap: React.FC = () => {
  const [stockData, setStockData] = useState<StockHeatmapData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMultipleStocks();
      setStockData(data);
    };

    getData();
  }, []);

  // Prepare the data for the Treemap chart
  const seriesData = stockData.map((stock) => ({
    x: stock.symbol,
    y: stock.value, // Stock value (can be price or any other metric)
  }));

  const chartOptions = {
    chart: {
      type: 'treemap',
      height: 350,
      theme: {
        mode: 'dark', // Enforcing dark mode for the chart
      },
    },
    title: {
      text: 'Stock Prices Treemap (Major Companies)',
      style: {
        color: '#FFFFFF',
      },
    },
    plotOptions: {
      treemap: {
        colorScale: {
          ranges: [
            { from: 0, to: 100, color: '#FF4560' }, // Low stock price (e.g., in red)
            { from: 100, to: 200, color: '#FEB019' }, // Medium stock price (e.g., in yellow)
            { from: 200, to: 300, color: '#00E396' }, // High stock price (e.g., in green)
            { from: 300, to: 5000, color: '#008FFB' }, // Very high stock price (e.g., in blue)
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFFFFF'], // Label color in white for dark mode
      },
    },
  };

  const series = [
    {
      name: 'Stock Prices',
      data: seriesData,
    },
  ];

  return (
    <div>
      {stockData.length ? (
        <Chart options={chartOptions} series={series} type="treemap" height={350} />
      ) : (
        <p>Loading treemap data...</p>
      )}
    </div>
  );
};

export default Heatmap;
