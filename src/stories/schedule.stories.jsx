import React from 'react';
import Schedule from '../components/schedule';

export default {
  component: Schedule,
  title: 'Components/Schedule',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <Schedule />;

export const Default = Template.bind({});
