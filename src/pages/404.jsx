import React from 'react';
import Layout from '../components/layout';
import { ImageCollection } from '../components/image';
import image02 from '../assets/images/massage-02.png';
import image03 from '../assets/images/massage-03.png';

const Images = [
  {
    src: image02,
    alt: 'closed tubs of tropic facial products',
  },
  {
    src: image03,
    alt: 'open tubs of tropic facial products',
  },
];

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className='pr-3 my-20 font-light tracking-wider text-center uppercase bg-white md:my-80 text-md '>
        404 - opps something went wrong
      </h1>
      <ImageCollection data={Images} className='my-11' />
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
