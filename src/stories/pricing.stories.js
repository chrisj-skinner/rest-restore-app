import React from 'react';

import { Pricing } from '../components/pricing';

const MockDefaultPricing = [
  {
    title: 'Relax Massage',
    subTitle: 'A relaxing massage to melt away the daily stresses of life',
    details: [
      { description: '25', price: '31' },
      { description: '40', price: '42.50' },
      { description: '55', price: '52.50' },
    ],
  },
  {
    title: 'Deep Tissue',
    subTitle:
      'Designed to work on the deeper layers of muscle to release harder to reach tension.',
    details: [
      { description: '25', price: '31' },
      { description: '40', price: '42.50' },
      { description: '55', price: '52.50' },
    ],
  },
];

const MockAlternativePricing = [
  {
    title: 'Brazilian',
    subTitle: '',
    details: [
      { description: 'Maintenance (every 3-6 weeks)', price: '36' },
      { description: 'Over 6 weeks', price: '42' },
    ],
  },
  {
    title: 'Hollywood',
    subTitle: '',
    details: [
      { description: 'Maintenance (every 3-6 weeks)', price: '36' },
      { description: 'Over 6 weeks', price: '42' },
    ],
  },
];

export default {
  component: Pricing,
  title: 'Components/Pricing',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <Pricing data={MockDefaultPricing} />;

export const Alternative = () => (
  <Pricing data={MockAlternativePricing} alternative='true' />
);
