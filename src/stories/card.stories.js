import React from 'react';

import Card from '../components/card';

const MockData = [
  {
    title: 'Mini Restorative Facial',
    subTitle:
      'A tailored introduction to the Tropic range focusing on deeply cleansing and using appropriate serums for your concerns.',
    duration: '25',
    price: '25',
  },
  {
    title: 'Restorative Facial',
    subTitle: 'Includes a double cleanse and exfoliation.',
    duration: '55',
    price: '42',
  },
  {
    title: 'Rest & Restore Back, Face and Scalp',
    subTitle:
      'A tailored introduction to the Tropic range focusing on deeply cleansing and using appropriate serums for your concerns',
    duration: '1hr 25',
    price: '25',
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
  <div className='md:flex'>
    {args.data.map((_, i) => (
      <Card {...args.data[i]} />
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: MockData,
};
