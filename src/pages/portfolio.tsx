import React from 'react';
import Layout from '../components/Layout';

const Portfolio: React.FC = () => {
  return (
    <Layout>
    <div style={{ padding: '2rem' }}>
      <h1>Your Investment Portfolio</h1>
      <p>
        This page will allow users to track their investment portfolios,
        displaying asset allocations, performance over time, and more.
      </p>
    </div>
    </Layout>
  );
};

export default Portfolio;
