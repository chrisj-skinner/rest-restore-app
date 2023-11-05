import React from 'react';

const Schedule = ({ className }) => {
  return (
    <table
      className={
        'text-gray text-sm table-fixed w-full border-collapse border-neutral-200 border-l-skyblue border border-l-2 ' +
        className
      }
    >
      <tbody>
        <tr className='bg-lightgray'>
          <td className='p-3 border-b border-r border-neutral-200'>
            Tue – Fri:
          </td>
          <td className='p-3 border-b border-neutral-200'>10:00 – 19:00</td>
        </tr>
        <tr>
          <td className='p-3 border-b border-r border-neutral-200'>Sat:</td>
          <td className='p-3 border-b border-neutral-200'>10:00 – 16:00</td>
        </tr>
        <tr className='bg-lightgray'>
          <td className='p-3 border-b border-r border-neutral-200'>
            Sun – Mon:
          </td>
          <td className='p-3'>Closed</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Schedule;
