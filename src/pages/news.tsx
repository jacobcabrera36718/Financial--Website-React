import React from 'react';
import Layout from '../components/Layout';

const News: React.FC = () => {
  return (
    <Layout>
    <div style={{ padding: '2rem' }}>
      <h1>Latest News</h1>
      <section>
        <article>
          <h2>Article 1</h2>
          <p>This is a sample news article.</p>
        </article>

        <article>
          <h2>Article 2</h2>
          <p>This is another sample news article.</p>
        </article>
      </section>
    </div>
    </Layout>
  );
};

export default News;
