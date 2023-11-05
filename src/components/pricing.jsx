import React from 'react';

const Pricing = ({ data, alternative }) => {
  return (
    <div className='md:flex mt-11 border-[#eeeeee] border border-t-0'>
      {data.map((item, i) => (
        <div
          key={i}
          className='flex flex-col text-gray w-full bg-white first:border-0 border-l-[1px] border-[#eeeeee]'
        >
          <>
            <div className='flex items-center justify-center bg-skyblue min-h-[90px]'>
              <p className='p-2 text-xl font-light tracking-widest text-center text-white'>
                {item.title}
              </p>
            </div>
            {!alternative && (
              <div className='flex justify-center flex-grow-[1]'>
                <p className='p-5 text-sm antialiased text-center'>
                  {item.subTitle}
                </p>
              </div>
            )}
            <div
              className={
                'text-sm antialiased p-2' +
                (!alternative ? ' bg-lightgray' : '')
              }
            >
              {item.details.map((detail, i) => (
                <p
                  key={i}
                  className={
                    'py-2 md:min-h-[22px] text-center' +
                    (alternative ? ' flex' : '')
                  }
                >
                  {detail.description != null && (
                    <span className='w-1/2'>
                      {detail.description} {!alternative && `minutes - `}
                    </span>
                  )}
                  {detail.price != null && (
                    <span className='w-1/2'>£{detail.price}</span>
                  )}
                </p>
              ))}
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

const PricingTitle = ({ title }) => {
  return (
    <>
      <h2 className='relative inline-block pr-3 mt-3 font-light tracking-wider uppercase bg-white text-md top-4'>
        {title}
      </h2>
      <div className='border-t-[1px] border-whitegray'></div>
    </>
  );
};

export { Pricing, PricingTitle };
