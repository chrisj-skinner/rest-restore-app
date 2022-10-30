import React from 'react';

const Card = (data) => {
  console.log(data);
  return (
    <>
      <div className='flex flex-col text-gray first:ml-0 ml-[1px] w-full'>
        <div className='flex items-center justify-center bg-skyblue min-h-[90px]'>
          <p className='text-white text-xl font-thin tracking-widest text-center'>{data.title}</p>
        </div>
        <div className='flex justify-center flex-grow-[1]'>
          <p className='text-center p-3 text-sm antialiased'>{data.subTitle}</p>
        </div>
        <div className='flex items-center justify-center h-[46px] bg-lightgray text-sm antialiased'>
          <p>
            {data.duration} minutes – £{data.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
