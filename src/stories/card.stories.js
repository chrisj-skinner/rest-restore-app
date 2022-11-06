import React from 'react';

import Card from '../components/card';

const MockTreatments = [
  {
    title: 'Mini Restorative Facial',
    subTitle:
      'A tailored introduction to the Tropic range focusing on deeply cleansing and using appropriate serums for your concerns.',
    variants: [
      {
        duration: '25',
        price: '25',
      },
      {},
      {},
    ],
  },
  {
    title: 'Restorative Facial',
    subTitle: 'Includes a double cleanse and exfoliation.',
    variants: [{ duration: '15', price: '15' }, { duration: '55', price: '42' }, , { duration: '1hr 20', price: '60' }],
  },
  {
    title: 'Rest & Restore Back, Face and Scalp',
    subTitle:
      'A tailored introduction to the Tropic range focusing on deeply cleansing and using appropriate serums for your concerns',
    variants: [{ duration: '1hr 25', price: '50' }, { duration: '2hr 90', price: '25' }, {}],
  },
];

export default {
  component: Card,
  title: 'Components/Card',
  parameters: {
    layout: 'fullscreen',
  },
};
const Template = (args) => (
  <div className='md:flex border-[#eeeeee] border border-t-0'>
    {args.treatments.map((treatment, i) => (
      <Card key={i} data={treatment} />
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  treatments: MockTreatments,
};
