import React from 'react';

import Card from '../components/card';

export default {
  component: Card,
  title: 'Components/Card',
  parameters: {
    layout: 'fullscreen',
  },
};
// TODO: Explore: https://storybook.js.org/docs/react/writing-stories/stories-for-multiple-components
const Template = (args) => <Card {...args} />;

export const Single = Template.bind({});
// export const Multiple = Template.bind({});
// Multiple.decorators = [
//   (Story) => (
//     <>
//       <div className='md:bg-skyblue'>
//         <Story />
//         <div className='flex bg-aquamarine flex-col text-gray first:ml-0 ml-[1px] w-full'>
//           <div className='flex items-center justify-center bg-skyblue p-3 min-h-[90px]'>
//             <p className='text-white text-2xl font-thin tracking-widest text-center'>Rest & Restore</p>
//           </div>
//           <div className='flex justify-center flex-grow-[1]'>
//             <p className='text-center p-3'>A tailored introduction to the Tropic range focusing on deeply</p>
//           </div>
//           <div className='flex items-center justify-center h-[46px] bg-lightgray'>
//             <p>25 minutes – £25</p>
//           </div>
//         </div>
//         <Story />
//       </div>
//     </>
//   ),
// ];
