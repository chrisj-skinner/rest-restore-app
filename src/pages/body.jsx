import React from 'react';
import Layout from '../components/layout';
import Card from '../components/card';
import image01 from '../images/body-treatments-01.png';
import image02 from '../images/body-treatments-02.png';
import image03 from '../images/body-treatments-03.png';
import { Link } from 'gatsby';

const BodyPage = () => {
  return (
    <Layout>
      <main className='px-11'>
        <div className='md:flex my-11'>
          <div className='md:w-1/2'>
            <img src={image01} alt='therapeutic back massage treatment' className='p-2 md:pr-10' />
          </div>
          <div className='md:w-1/2 text-sm'>
            <h1 className='text-lg text-skyblue my-6 md:mt-0 font-light tracking-wide'>Body Treatments</h1>
            <p className='mb-5'>
              Looking for the ultimate in body treatments? The following body treatments will leave you and your skin
              feeling refreshed, relaxed and restored.
            </p>
            <p className='mb-5'>
              If you are looking for more concentration on your back then the
              <strong> Restorative Back Cleanse</strong> is designed for you. The 55 minute treatment includes: a back
              cleanse, exfoliation, serum application, massage, mask and finished with a moisturising balm. This
              treatment also includes a leg massage whilst the mask is on the back so you get the most out of your
              treatment.
            </p>
            <p className='mb-5'>
              If you want to escape and truly relax, then choose this very special treatment
              <strong> Rest &amp; Restore Back, Face and Scalp</strong>. A full 30 minutes will be spent your back to
              cleanse, exfoliate and massage away any stress. This is then followed by a 55 minute restorative facial
              which includes a relaxing scalp massage.
            </p>
          </div>
        </div>

        <div className='md:flex my-11 border-[#eeeeee] border border-t-0'>
          {BodyTreatments.map((treatment, i) => (
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

export default BodyPage;

const BodyTreatments = [
  {
    title: 'Restorative Back Cleanse',
    subTitle: 'A facial for the back, designed to deeply cleanse, nourish and heal the skin. (includes a leg massage).',
    variants: [{ duration: '55', price: '50' }],
  },
  {
    title: 'Rest & Restore Back, Face and Scalp',
    subTitle:
      'The most pampering of all the treatments. Includes: back cleanse, exfoliation and massage, restorative facial and scalp massage.',
    variants: [{ duration: '1hr 25', price: '64' }],
  },
];
