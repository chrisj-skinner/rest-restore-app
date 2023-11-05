import React from 'react';
import Layout from '../components/layout';
import { Image } from '../components/image';
import image01 from '../assets/images/siobhan-carey-restandrestore.jpg';

const AboutPage = () => {
  return (
    <Layout>
      <div className='md:flex'>
        <div className='text-sm'>
          <h1 className='my-5 text-lg font-light tracking-wide text-skyblue md:mt-0'>
            About Me
          </h1>
          <div className='mb-5 sm:mb-3 sm:mr-6 sm:float-left'>
            <Image src={image01} alt='assortment of tropic facial products' />
          </div>

          <p className='mb-5'>
            I have been in the beauty industry since 2006 and firstly obtained
            the{' '}
            <a
              href='https://www.cibtac.com/'
              target='_blank'
              rel='noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              CIBTAC
            </a>{' '}
            British qualification followed by the{' '}
            <a
              href='https://www.cidesco.com/'
              target='_blank'
              rel='noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              CIDESCO
            </a>{' '}
            international beauty qualification at the{' '}
            <a
              href='https://www.raycochrane.co.uk/'
              target='_blank'
              rel='noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              Ray Cochrane Beauty School
            </a>
            . I have a passion for natural products that truly work and take
            pride in all of my treatments.
          </p>
          <p className='mb-5'>
            I extended my qualifications in 2009 by completing a sports injury
            and massage course. This gave me a much better understanding of how
            to remove harder to reach muscle tension. I again furthered my
            qualifications in 2012 by completing a 3 year diploma course in
            Naturopathic Acupuncture.
          </p>
          <p className='mb-5'>
            I am striving towards becoming a more sustainable business every day
            and so, have chosen to become an Independent Tropic Ambassador.
          </p>
          <p className='mb-5'>
            Tropic not only sustainably source their ingredients, they also
            always strive to be at the forefront of natural ingredient research.
            I have been incredibly impressed with the effectiveness of their
            products and am proud to use their products in the treatment room
          </p>
          <p className='mb-5'>
            I am also trained in the art of sugaring as an incredibly effective
            hair removal treatment. So far, my clients have found sugaring to be
            gentler and longer lasting than traditional waxing.
          </p>

          <p className='mb-5'>
            With the uncertain times we are living in, I have also searched for
            the safest and strongest cleaner I could find and have found Dew, a
            Scottish company, that uses electrolysed water which is 99.995%
            effective at killing bacteria, viruses, fungi and spores whilst
            being kind to humans, pets, plants and the environment.
          </p>
          <p className='mb-5'>
            The active ingredient in Dew sanitiser, HOCL has been proven to kill
            SARS-COV-2 (COVID-19) in 30 seconds. The World Health Organisation
            (WHO) lists Hypochlorous acid as a “critical commodity for the
            purpose of PPE for health care facilities” throughout the world.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => {
  return (
    <>
      <title>
        About | Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
