import React from 'react';
import Layout from '../components/layout';
import Schedule from '../components/schedule';
import { Image } from '../components/image';
import image01 from '../assets/images/covid-safety.jpg';

const ContactPage = () => (
  <>
    <Layout>
      <div className='mb-11'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.3781053513312!2d-0.4017147108700108!3d51.700906242964436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764015aeb7531f%3A0x18ae52bedf617a63!2sHorseshoe%20Ln%2C%20Watford%20WD25%207JQ!5e0!3m2!1sen!2suk!4v1698853184036!5m2!1sen!2suk'
          width='100%'
          height='350'
          style={{ border: 0 }}
          loading='lazy'
        ></iframe>
      </div>
      <div className='text-sm md:flex mb-11'>
        <div className='md:w-1/2'>
          <h2 className='mb-3 font-light tracking-wider text-md'>Location</h2>
          <p className='mb-5'>
            Horseshoe Lane
            <br />
            Watford,
            <br />
            Hertfordshire,
            <br />
            WD25 7JQ
          </p>
          <h2 className='mb-3 font-light tracking-wider text-md'>
            Getting here
          </h2>
          <h3 className='font-bold'>Parking:</h3>
          <p className='mb-5'>On-site in the front drive</p>

          <h3 className='font-bold'>Bus Stop:</h3>
          <p className='mb-5'>320 (Across the road</p>
          <h3 className='font-bold'>Train Station:</h3>
          <p className='mb-5'>
            Garston (1.4 miles
            <br />
            Kings Langley (2.1 miles)
            <br />
            Bricket Wood (3.2 miles)
            <br />
          </p>
          <h3 className='font-bold'>Airport:</h3>
          <p className='mb-5'>Luton International (15.1 miles)</p>

          <h3 className='font-bold'>Taxis Service:</h3>
          <p className='mb-5'>
            <a
              href='https://a1taxicabs.co.uk/'
              target='_blank'
              rel='noreferrer'
              className='no-underline text-skyblue hover:underline'
            >
              A1 Taxis
            </a>{' '}
            – Watford
          </p>
        </div>
        <div className='md:w-1/2 md:ml-8 lg:ml-20'>
          <h2 className='mb-3 font-light tracking-wider text-md'>
            Opening Times
          </h2>
          <Schedule className='mb-5' />
          <p className='mb-5'>
            The active ingredient in Dew sanitiser, HOCL has been proven to kill
            SARS-COV-2 (COVID-19) in 30 seconds. The World Health Organisation
            (WHO) lists Hypochlorous acid as a “critical commodity for the
            purpose of PPE for health care facilities” throughout the world.
          </p>
          <h2 className='mb-3 font-light tracking-wider text-md'>Policy</h2>
          <h3 className='font-bold'>Cancellation Policy:</h3>
          <p className='mb-5'>
            24 hours notice is required for the cancellation of any treatments.
            Failure to do so may result in a 50% charge of your total treatment
            cost.
          </p>
          <h3 className='font-bold'>Gift Vouchers:</h3>
          <p className='mb-5'>
            Gift vouchers are available and are valid for 6 months. You can
            choose to buy a treatment or an amount.
          </p>
          <p className='mb-5'>
            A 50% deposit for treatments over £50 is required at time of
            booking. Please note: although cats do not go into the treatment
            room, they do live at this address.
          </p>
        </div>
      </div>
      <div className='md:flex'>
        <div className='sm:w-1/2'>
          <Image
            src={image01}
            alt='covid19 poster explaining salon safety requirements'
          />
        </div>
      </div>
    </Layout>
  </>
);
export default ContactPage;

export const Head = () => {
  return (
    <>
      <title>
        Contact | Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
