import React from 'react';
import Layout from '../components/layout';
import Card from '../components/card';
import image01 from '../images/sugaring-01.png';
import image02 from '../images/sugaring-02.png';
import image03 from '../images/sugaring-03.png';

const SugaringPage = () => {
  return (
    <Layout>
      <main className='px-11'>
        <div className='md:flex my-11'>
          <div className='md:w-1/2'>
            <img src={image01} alt='assortment of tropic facial products' className='p-2 md:pr-10' />
          </div>
          <div className='md:w-1/2 text-sm'>
            <h1 className='text-lg text-skyblue my-10 md:mt-0 font-light tracking-wide'>
              Sugar Paste 100% Natural, Vegan &amp; Fairtrade
            </h1>
            <p className='mb-5'>
              A{' '}
              <a
                href='https://tamarassugar.co.uk/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-skyblue no-underline hover:underline'
              >
                100% natural
              </a>{' '}
              and eco friendly hair removal treatment. The sugar paste is applied towards the direction of hair growth
              to lift the hair up and then removed with the direction of hair growth to reduce the chance of hair
              breakage and ingrown hairs.
            </p>
            <p>
              Sugaring will leave your skin beautifully exfoliated and with regular 3-6 weekly treatments can lead to a
              reduction of regrowth.
            </p>
          </div>
        </div>
        <div className='md:flex my-11 border-[#eeeeee] border border-t-0'>
          {SugaringTreatments.map((treatment, i) => (
            <Card key={i} data={treatment} />
          ))}
        </div>
        <div className='md:flex justify-between my-11'>
          <div className=''>
            <img src={image02} alt='herbs and ground massages products' className='p-2' />
          </div>
          <div className=''>
            <img src={image03} alt='massage body oil spray' className='p-2' />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SugaringPage;

const SugaringTreatments = [
  {
    title: 'Mini Restorative Facial',
    subTitle:
      'A tailored introduction to the Tropic range focusing on deeply cleansing and using appropriate serums for your concerns.',
    variants: [{ duration: '25', price: '25' }],
  },
  {
    title: 'Restorative Facial',
    subTitle: 'Includes a double cleanse and exfoliation.',
    variants: [{ duration: '55', price: '42' }],
  },
  {
    title: 'Rest & Restore Back, Face and Scalp',
    subTitle:
      'A tailored introduction to the Tropic range focusing on deeply cleansing and using appropriate serums for your concerns',
    variants: [{ duration: '1hr 25', price: '25' }],
  },
];
