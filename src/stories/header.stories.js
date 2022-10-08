import React from 'react';

import Header from '../components/header';

export default {
  component: Header,
  title: 'Components/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
