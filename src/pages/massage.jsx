import React from 'react';
import Layout from '../components/layout';
import { Pricing } from '../components/pricing';
import Content from '../assets/content/data.json';
import { Image, ImageCollection } from '../components/image';
import image01 from '../assets/images/massage-01.png';
import image02 from '../assets/images/massage-02.png';
import image03 from '../assets/images/massage-03.png';
import { Link } from 'gatsby';

const Massage = Content.treatments.massage;

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

const MassagePage = () => {
  return (
    <Layout>
      <div className='md:flex'>
        <div className='md:w-1/2'>
          <Image src={image01} alt='therapeutic back massage treatment' />
        </div>
        <div className='text-sm md:w-1/2 md:pl-10'>
          <h1 className='my-10 text-lg font-light tracking-wide text-skyblue md:mt-0'>
            Massages
          </h1>
          <p className='mb-5'>
            All massages are performed using Eve Taylors 100% natural pre
            blended aromatherapy massage oils.
          </p>
          <p className='mb-5'>
            Choose between a light pressured or a deep tissue massage, or if you
            prefer something in between – just ask!
          </p>
          <p className='mb-5'>
            If you would like a little more pampering look no further than the{' '}
            <Link
              to='./facials'
              className='no-underline text-skyblue hover:underline'
            >
              Rest And Restore
            </Link>{' '}
            Back, Face and Scalp treatment.
          </p>
        </div>
      </div>
      <Pricing data={Massage} />
      <ImageCollection data={Images} className='my-11' />
    </Layout>
  );
};

export default MassagePage;

export const Head = () => {
  return (
    <>
      <title>
        Massage | Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
