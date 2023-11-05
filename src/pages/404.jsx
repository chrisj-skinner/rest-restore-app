import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className='text-sm text-center'>404 - opps something went wrong</div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => {
  return (
    <>
      <title>
        404 | Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
