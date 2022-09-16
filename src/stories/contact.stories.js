import React from 'react';

import Contact from '../pages/contact';

export default {
  component: Contact,
  title: 'Components/Contact',
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
