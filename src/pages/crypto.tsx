import React from 'react';
import Layout from '../components/Layout';

const Crypto: React.FC = () => {
  return (
    <Layout>
    <div style={{ padding: '2rem' }}>
      <h1>Cryptocurrency Market</h1>
      <p>
        This page will provide real-time data on cryptocurrency prices, market
        trends, and other relevant information in the world of digital assets.
      </p>
    </div>
    </Layout>
  );
};

export default Crypto;
