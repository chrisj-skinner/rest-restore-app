import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <>
      <div className='p-3 bg-lightgray w-fit'>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

const ImageCollection = ({ data, className }) => {
  return (
    <div className={'justify-between md:flex ' + className}>
      {data.map((item, index) => (
        <div className='even:mt-6 md:even:mt-0' key={index}>
          <Image src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export { Image, ImageCollection };
