import React from 'react';
import { Image, ImageCollection } from '../components/image';
import image01 from '../assets/images/sugaring-01.png';
import image02 from '../assets/images/sugaring-02.png';

const MockCollection = [
  {
    src: image01,
    alt: 'tamaras sugaring plastic bottled product',
  },
  {
    src: image02,
    alt: 'tamaras sugaring soothing oil bottled product',
  },
];

export default {
  component: Image,
  title: 'Components/Image',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Single = () => (
  <Image src={image01} alt='assortment of tropic facial products' />
);

export const Collection = () => (
  <div className='flex'>
    <ImageCollection data={MockCollection} />
  </div>
);
