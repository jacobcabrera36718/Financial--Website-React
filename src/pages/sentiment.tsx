import React from 'react';
import Layout from '../components/Layout';

const Sentiment: React.FC = () => {
  return (
    <Layout>
    <div style={{ padding: '2rem' }}>
      <h1>Market Sentiment Analysis</h1>
      <p>
        This page will display real-time market sentiment analysis using various
        data points to gauge the overall sentiment towards stocks, crypto, and
        other assets.
      </p>
    </div>
    </Layout>
  );
};

export default Sentiment;
