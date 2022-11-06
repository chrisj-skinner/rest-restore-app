import React from 'react';

const Card = ({ data: treatment }) => {
  return (
    <div className='flex flex-col text-gray w-full bg-white first:border-0 border-l-[1px] border-[#eeeeee]'>
      <div className='flex items-center justify-center bg-skyblue min-h-[90px]'>
        <p className='text-white text-xl font-light tracking-widest text-center p-2'>{treatment.title}</p>
      </div>
      <div className='flex justify-center flex-grow-[1]'>
        <p className='text-center p-5 text-sm antialiased'>{treatment.subTitle}</p>
      </div>
      <div className=' bg-lightgray text-sm antialiased p-3'>
        <ul className='md:flex items-center justify-center flex-col text-center'>
          {treatment.variants.map((variant, i) => (
            <li key={i} className='my-2 md:min-h-[22px]'>
              {variant.duration != null && <span>{variant.duration} minutes -</span>}
              {variant.price != null && <span> £{variant.price}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
