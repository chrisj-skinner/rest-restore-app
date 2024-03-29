import React from 'react';
import FacialsPage from '../pages/facials';
import MassagePage from '../pages/massage';
import SugaringPage from '../pages/sugaring';
import LoyaltyPage from '../pages/loyalty';

export default {
  title: 'Pages/Treatments',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Facials = () => <FacialsPage />;
export const Massage = () => <MassagePage />;
export const Sugaring = () => <SugaringPage />;
export const Loyalty = () => <LoyaltyPage />;
