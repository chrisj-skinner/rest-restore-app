import React from 'react';

const Schedule = () => {
  return (
    <>
      <table className='text-gray text-sm table-fixed w-full border-collapse border-neutral-200 border-l-skyblue border border-l-2'>
        <tbody>
          <tr className='bg-lightgray'>
            <td className='p-3 border-neutral-200 border-r border-b'>Tue – Fri:</td>
            <td className='p-3 border-neutral-200 border-b'>10:00 – 19:00</td>
          </tr>
          <tr>
            <td className='p-3 border-neutral-200 border-r border-b'>Sat:</td>
            <td className='p-3 border-neutral-200 border-b'>10:00 – 16:00</td>
          </tr>
          <tr className='bg-lightgray'>
            <td className='p-3 border-neutral-200 border-r border-b'>Sun – Mon:</td>
            <td className='p-3'>Closed</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Schedule;
