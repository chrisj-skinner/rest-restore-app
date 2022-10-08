import React from 'react';

import Footer from '../components/footer';

export default {
  component: Footer,
  title: 'Components/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
