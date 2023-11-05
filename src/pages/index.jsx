import * as React from 'react';
import Layout from '../components/layout';
import Schedule from '../components/schedule';
import image01 from '../assets/images/restandrestore.jpeg';
import image02 from '../assets/images/contact-location.png';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div className='md:flex '>
      <div className='md:w-[65%] relative md:mb-0 mb-11'>
        <img
          src={image01}
          alt='assortment of tropic facial products'
          className='inline-block'
        />
        <p className='absolute w-full p-3 tracking-wider text-white opacity-80 bg-black/50 bottom-6'>
          Rest and Restore Beauty Treatments – Abbots Langley & Watford
        </p>
      </div>
      <div className='text-sm md:w-[35%] lg:ml-20 md:ml-8'>
        <h2 className='mb-3 text-base font-light tracking-wider uppercase'>
          Contact
        </h2>
        <div className='flex items-center '>
          <img
            src={image02}
            alt='assortment of tropic facial products'
            className='m-0 mr-4'
          />{' '}
          <p>
            <a
              href='https://www.google.co.uk/maps/place/Horseshoe+Ln,+Watford+WD25+7JQ/@51.7009062,-0.4015216,18z/data=!3m1!4b1!4m5!3m4!1s0x48764015aeb7531f:0x18ae52bedf617a63!8m2!3d51.7008643!4d-0.4006386'
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              Abbots Langley, Watford, WD25 7JQ
            </a>
          </p>
        </div>
        <h2 className='mt-10 mb-4 text-base font-light tracking-wider uppercase'>
          Opening times
        </h2>
        <Schedule />
      </div>
    </div>
    <div className='flex lg:w-[65%] lg:pr-10 mt-11'>
      <div className='pr-5 text-sm'>
        <h3 className='mb-2 font-bold'>About</h3>
        <p className='mb-5'>
          Siobhan has been in the beauty industry since 2006, a{' '}
          <a
            href='http://cidesco.com/qualifications/'
            target='_blank'
            rel='noreferrer'
          >
            CIDESCO
          </a>{' '}
          Certified Beautician, Sports Injury Therapist and Naturopathic
          Acupuncturist.
        </p>
        <Link
          to='./about'
          className='no-underline text-skyblue hover:underline'
        >
          More about Siobhan
        </Link>
      </div>
      <div className='pr-5 text-sm'>
        <h3 className='mb-2 font-bold'>Beauty Treatments</h3>
        <p className='mb-5'>
          Using Top Quality Award Winning 100% naturally derived skin care
          products, I offer a range of beauty treatments including facials,
          massage and sugaring hair removal.
        </p>
      </div>
      <div className='pr-5 text-sm'>
        <h3 className='mb-2 font-bold'>Location</h3>
        <p className='mb-5'>
          A unique home based heath and beauty treatment room for women only
          located in the quiet suburbs of Abbots Langley, just outside Watford.
        </p>
        <a
          href='https://www.google.co.uk/maps/place/Horseshoe+Ln,+Watford+WD25+7JQ/@51.7009062,-0.4015216,18z/data=!3m1!4b1!4m5!3m4!1s0x48764015aeb7531f:0x18ae52bedf617a63!8m2!3d51.7008643!4d-0.4006386'
          target='_blank'
          rel='noreferrer'
          className='no-underline text-skyblue hover:underline'
        >
          Location
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>
        Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
