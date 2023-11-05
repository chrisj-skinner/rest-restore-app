import React from 'react';
import Layout from '../components/layout';
import { Pricing, PricingTitle } from '../components/pricing';
import Content from '../assets/content/data.json';
import { ImageCollection } from '../components/image';
import image02 from '../assets/images/massage-02.png';
import image03 from '../assets/images/massage-03.png';

const Facials = Content.treatments.facials;
const Massage = Content.treatments.massage;
const LowerBody1 = Content.treatments.sugaring.lowerBody1;
const LowerBody2 = Content.treatments.sugaring.lowerBody2;
const UpperBody = Content.treatments.sugaring.upperBody;

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

const LoyaltyPage = () => {
  return (
    <Layout>
      <h1 className='my-10 text-lg font-light tracking-wide'>Loyalty</h1>

      <PricingTitle
        title='
        Facial Treatments'
      />
      <Pricing data={Facials} />
      <PricingTitle
        title='
        Massages'
      />
      <Pricing data={Massage} />
      <PricingTitle
        title='
        Lower Body Sugaring'
      />
      <Pricing data={LowerBody1} alternative='true' />
      <Pricing data={LowerBody2} alternative='true' />
      <PricingTitle
        title='
        Upper Body Sugaring'
      />
      <Pricing data={UpperBody} alternative='true' />
      <ImageCollection data={Images} className='my-11' />
    </Layout>
  );
};

export default LoyaltyPage;

export const Head = () => {
  return (
    <>
      <title>
        Loyalty | Rest and Restore Beauty Treatments – Abbots Langley & Watford
      </title>
    </>
  );
};
