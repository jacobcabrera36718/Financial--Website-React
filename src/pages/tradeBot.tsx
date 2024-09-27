import React from 'react';
import Layout from '../components/Layout';

const TradeBot: React.FC = () => {
  return (
    <Layout>
    <div style={{ padding: '2rem' }}>
      <h1>Automated Trading Bot</h1>
      <p>
        This page will allow users to configure and launch an automated trading
        bot that trades based on predefined rules and market signals.
      </p>
    </div>
    </Layout>
  );
};

export default TradeBot;
