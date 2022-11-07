import React from 'react';
import Layout from '../components/layout';
import Card from '../components/card';
import image01 from '../images/massage-01.png';
import image02 from '../images/massage-02.png';
import image03 from '../images/massage-03.png';
import { Link } from 'gatsby';

const MassagePage = () => {
  return (
    <Layout>
      <main className='px-11'>
        <div className='md:flex my-11'>
          <div className='md:w-1/2'>
            <img src={image01} alt='therapeutic back massage treatment' className='p-2 md:pr-10' />
          </div>
          <div className='md:w-1/2 text-sm'>
            <h1 className='text-lg text-skyblue my-10 md:mt-0 font-light tracking-wide'>Massages</h1>
            <p className='mb-5'>All massages are performed using Eve Taylors 100% natural pre blended massage oils.</p>
            <p className='mb-5'>
              Choose between a light pressured or a deep tissue massage, or if you prefer something in between – just
              ask!
            </p>
            <p className='mb-5'>
              If you would like a little more pampering, look into the{' '}
              <Link to='./facials' className='text-skyblue no-underline hover:underline'>
                Restorative Back Cleanse
              </Link>{' '}
              or for a truly indulgent experience look no further than the{' '}
              <Link to='./facials' className='text-skyblue no-underline hover:underline'>
                Rest And Restore
              </Link>
              &nbsp;Back, Face and Scalp&nbsp;treatment.
            </p>
          </div>
        </div>
        <div className='md:flex my-11 border-[#eeeeee] border border-t-0'>
          {MassageTreatments.map((treatment, i) => (
            <Card key={i} data={treatment} />
          ))}
        </div>
        <div className='md:flex justify-between my-11'>
          <div>
            <img src={image02} alt='closed tubs of tropic facial products' className='p-2 md:pr-10' />
          </div>
          <div>
            <img src={image03} alt='open tubs of tropic facial products' className='p-2 md:pr-10' />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MassagePage;

const MassageTreatments = [
  {
    title: 'Relax Massage',
    subTitle: 'A relaxing massage to melt away the daily stresses of life.',
    variants: [
      { duration: '25', price: '25' },
      { duration: '40', price: '34' },
      { duration: '55', price: '42' },
    ],
  },
  {
    title: 'Restorative Facial',
    subTitle: 'Includes a double cleanse and exfoliation.',
    variants: [
      { duration: '25', price: '25' },
      { duration: '40', price: '34' },
      { duration: '55', price: '42' },
    ],
  },
];
