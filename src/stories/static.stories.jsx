import React from 'react';
import AboutPage from '../pages/about';
import IndexPage from '../pages/index';
import ContactPage from '../pages/contact';
import LoyaltyPage from '../pages/loyalty';

export default {
  title: 'Pages/Static',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Landing = () => <IndexPage />;
export const About = () => <AboutPage />;
export const Contact = () => <ContactPage />;
export const Loyalty = () => <LoyaltyPage />;
