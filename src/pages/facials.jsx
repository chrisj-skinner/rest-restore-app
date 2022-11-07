import React from 'react';
import Layout from '../components/layout';
import Card from '../components/card';
import image01 from '../images/tropic-facial-01.png';
import image02 from '../images/tropic-facial-02.png';
import image03 from '../images/tropic-facial-03.png';

const FacialPage = () => {
  return (
    <Layout>
      <main className='px-11'>
        <div className='md:flex my-11'>
          <div className='md:w-1/2'>
            <img src={image01} alt='assortment of tropic facial products' className='p-2 md:pr-10' />
          </div>
          <div className='md:w-1/2 text-sm'>
            <h1 className='text-lg text-skyblue my-10 md:mt-0 font-light tracking-wide'>Facial Treatments</h1>
            <p className='mb-5'>
              All Facial treatments are performed using{' '}
              <a
                href='http://www.tropicskincare.com/siobhancarey'
                target='_blank'
                rel='noopener noreferrer'
                className='text-skyblue no-underline hover:underline'
              >
                Tropic
              </a>
              , award winning, natural skin care. All the ingredients used in the products feed the skin with the
              nutrients it needs. Packed with anti oxidants, vitamins and minerals and designed to penetrate the skin’s
              lower layers.
            </p>
            <p className='mb-5'>
              <a
                href='http://www.tropicskincare.com/siobhancarey'
                target='_blank'
                rel='noopener noreferrer'
                className='text-skyblue no-underline hover:underline'
              >
                Tropic
              </a>{' '}
              skin care will leave your skin hydrated, nourished and deeply cleansed. Each facial will start with a skin
              analysis so that the facial will be tailored to your skin’s needs and requirements.
            </p>
            <p className='mb-5'>
              If you would like to learn more about the tropic range{' '}
              <a
                href='http://www.tropicskincare.com/siobhancarey'
                target='_blank'
                rel='noopener noreferrer'
                className='text-skyblue no-underline hover:underline'
              >
                click here
              </a>
              .
            </p>
            <p className='mb-5'>
              The Restorative facial, includes a double cleanse and exfoliation to thoroughly remove impurities from the
              skin. A choice of 3 (or all) masks will then be applied and whilst the mask is feeding your skin with the
              nutrients and drawing out impurities a scalp massage is then performed to help release any tension you
              maybe holding. Now all the cleansing is completed its time to start feeding the skin the nutrients it
              needs starting with toner, eye cream and serum and moisturiser. Next the facial massage is then performed
              using acupressure and lymphatic drainage techniques to brighten and plump the skin. The facial will then
              end with a refreshing spritz of toner.
            </p>
            <p>Facial also includes décolleté, neck and shoulders.</p>
          </div>
        </div>
        <div className='md:flex my-11 border-[#eeeeee] border border-t-0'>
          {FacialTreatments.map((treatment, i) => (
            <Card key={i} data={treatment} />
          ))}
        </div>
        <div className='md:flex justify-between my-11'>
          <div>
            <img src={image02} alt='herbs and ground massages products' className='p-2 md:pr-10' />
          </div>
          <div>
            <img src={image03} alt='massage body oil spray' className='p-2 md:pr-10' />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default FacialPage;

const FacialTreatments = [
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
