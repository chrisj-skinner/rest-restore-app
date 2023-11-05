import React from 'react';
import Layout from '../components/layout';
import { Pricing } from '../components/pricing';
import Content from '../assets/content/data.json';
import { Image, ImageCollection } from '../components/image';
import image01 from '../assets/images/tropic-facial-01.png';
import image02 from '../assets/images/tropic-facial-02.png';
import image03 from '../assets/images/tropic-facial-03.png';

const Facials = Content.treatments.facials;

const Images = [
  {
    src: image02,
    alt: 'herbs and ground massages products',
  },
  {
    src: image03,
    alt: 'massage body oil spray',
  },
];

const FacialPage = () => {
  return (
    <Layout>
      <div className='md:flex'>
        <div className='md:w-1/2'>
          <Image src={image01} alt='assortment of tropic facial products' />
        </div>
        <div className='text-sm md:w-1/2 md:pl-10'>
          <h1 className='my-10 text-lg font-light tracking-wide text-skyblue md:mt-0'>
            Facial Treatments
          </h1>
          <p className='mb-5'>
            All Facial treatments are performed using{' '}
            <a
              href='http://www.tropicskincare.com/siobhancarey'
              target='_blank'
              rel='noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              Tropic
            </a>
            , award winning, natural skin care. All the ingredients used in the
            products feed the skin with the nutrients it needs. Packed with anti
            oxidants, vitamins and minerals and designed to penetrate the skin’s
            lower layers.
          </p>
          <p className='mb-5'>
            <a
              href='http://www.tropicskincare.com/siobhancarey'
              target='_blank'
              rel='noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              Tropic
            </a>{' '}
            skin care will leave your skin hydrated, nourished and deeply
            cleansed. Each facial will start with a skin analysis so that the
            facial will be tailored to your skin’s needs and requirements.
          </p>
          <p className='mb-5'>
            If you would like to learn more about the tropic range please{' '}
            <a
              href='http://www.tropicskincare.com/siobhancarey'
              target='_blank'
              rel='noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              click here
            </a>
            .
          </p>
          <p className='mb-5'>
            The Restorative facial, includes a double cleanse and exfoliation to
            thoroughly remove impurities from the skin. A choice of 3 (or all)
            masks will then be applied and whilst the mask is feeding your skin
            with the nutrients and drawing out impurities a scalp massage is
            then performed to help release any tension you maybe holding. Now
            all the cleansing is completed its time to start feeding the skin
            the nutrients it needs starting with toner, eye cream and serum and
            moisturiser. Next the facial massage is then performed using
            acupressure and lymphatic drainage techniques to brighten and plump
            the skin. The facial will then end with a refreshing spritz of
            toner.
          </p>
          <p>Facial also includes décolleté, neck and shoulders.</p>
        </div>
      </div>
      <Pricing data={Facials} />
      <ImageCollection data={Images} className='my-11' />
    </Layout>
  );
};

export default FacialPage;

export const Head = () => {
  return (
    <>
      <title>
        Facials | Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
