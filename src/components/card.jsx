import React from 'react';

const Card = (args) => {
  return (
    <>
      <div className='flex flex-col text-gray first:ml-0 ml-[1px] w-full'>
        <div className='flex items-center justify-center bg-skyblue p-3 min-h-[90px]'>
          <p className='text-white text-2xl font-thin tracking-widest text-center'>
            Rest & Restore Back, Face and Scalp
          </p>
        </div>
        <div className='flex justify-center flex-grow-[1]'>
          <p className='text-center p-3'>
            A tailored introduction to the Tropic range focusing on deeply cleansing and using appropriate serums for
            your concerns
          </p>
        </div>
        <div className='flex items-center justify-center h-[46px] bg-lightgray'>
          <p>25 minutes – £25</p>
        </div>
      </div>
    </>
  );
};

export default Card;
