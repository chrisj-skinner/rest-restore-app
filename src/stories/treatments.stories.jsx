import React from 'react';
import FacialsPage from '../pages/facials';
import MassagePage from '../pages/massage';
import BodyPage from '../pages/body';
import SugaringPage from '../pages/sugaring';

export default {
  title: 'Pages/Treatments',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Facials = () => <FacialsPage />;
export const Massage = () => <MassagePage />;
export const Body = () => <BodyPage />;
export const Sugaring = () => <SugaringPage />;
