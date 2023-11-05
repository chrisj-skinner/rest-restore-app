import React from 'react';
import Layout from '../components/layout';
import { Pricing, PricingTitle } from '../components/pricing';
import Content from '../assets/content/data.json';
import { Image, ImageCollection } from '../components/image';
import image01 from '../assets/images/sugaring-01.png';
import image02 from '../assets/images/sugaring-02.png';
import image03 from '../assets/images/sugaring-03.png';

const LowerBody1 = Content.treatments.sugaring.lowerBody1;
const LowerBody2 = Content.treatments.sugaring.lowerBody2;
const UpperBody = Content.treatments.sugaring.upperBody;

const Images = [
  {
    src: image01,
    alt: 'tamaras sugaring plastic bottled product',
  },
  {
    src: image02,
    alt: 'tamaras sugaring soothing oil bottled product',
  },
];

const SugaringPage = () => {
  return (
    <Layout>
      <div className='md:flex'>
        <div className='md:w-1/2'>
          <Image src={image03} alt='assortment of tropic facial products' />
        </div>
        <div className='text-sm md:w-1/2 md:pl-10'>
          <h1 className='my-10 text-lg font-light tracking-wide text-skyblue md:mt-0'>
            Sugar Paste 100% Natural, Vegan &amp; Fairtrade
          </h1>
          <p className='mb-5'>
            A{' '}
            <a
              href='https://tamarassugar.co.uk/'
              target='_blank'
              rel='noopener noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              100% natural
            </a>{' '}
            and eco friendly hair removal treatment. The sugar paste is applied
            towards the direction of hair growth to lift the hair up and then
            removed with the direction of hair growth to reduce the chance of
            hair breakage and ingrown hairs.
          </p>
          <p>
            Sugaring will leave your skin beautifully exfoliated and with
            regular 3-6 weekly treatments can lead to a reduction of regrowth.
          </p>
        </div>
      </div>
      <p className='mb-2 font-light tracking-wide text-center text-md mt-11'>
        Book 2 or more sugaring treatments and receive 10% off your total
        sugaring bill
      </p>
      <PricingTitle
        title='
        Lower Body'
      />
      <Pricing data={LowerBody1} alternative='true' />
      <Pricing data={LowerBody2} alternative='true' />
      <PricingTitle
        title='
        Upper Body'
      />
      <Pricing data={UpperBody} alternative='true' />
      <ImageCollection data={Images} className='my-11' />
    </Layout>
  );
};

export default SugaringPage;

export const Head = () => {
  return (
    <>
      <title>
        Sugaring | Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
