import React from 'react';
import { Meta, Story } from '@storybook/react';
import Schedule from '../components/schedule';

export default {
  component: Schedule,
  title: 'Components/Schedule',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Schedule>;

const Template: Story<typeof Schedule> = () => <Schedule />;

export const Default = Template.bind({});
