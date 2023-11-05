import React from 'react';
import Layout from '../components/layout';

const DisclaimerPage = () => {
  return (
    <Layout>
      <div className='text-sm md:w-2/4'>
        <p className='mb-5'>
          Rest and Restore is committed to keeping this website up to date and
          accurate. Should you nevertheless encounter anything that is incorrect
          or out of date, we would appreciate it if you could let us know.
          Please indicate where on the website you read the information. We will
          then look at this as soon as possible. Please send your response by
          email to:{' '}
          <a
            href='mailto:restandrestoreuk@gmail.com'
            className='text-skyblue hover:underline'
          >
            restandrestoreuk@gmail.com
          </a>
          .
        </p>
        <p className='mb-5'>
          We are not liable for loss as a result of inaccuracies or
          incompleteness, nor for loss resulting from problems caused by or
          inherent to the dissemination of information through the internet,
          such as disruptions or interruptions. When using web forms, we strive
          to limit the number of required fields to a minimum. For any loss
          suffered as a result of the use of data, advice or ideas provided by
          or on behalf of Rest and Restore via this website, Rest and Restore
          accepts no liability.
        </p>
        <p className='mb-5'>
          Responses and privacy inquiries submitted by email or using a web form
          will be treated in the same way as letters. This means that you can
          expect a response from us within a period of 1 month at the latest. In
          the case of complex requests, we will let you know within 1 month if
          we need a maximum of 3 months.
        </p>
        <p className='mb-5'>
          Any personal data you provide us with in the context of your response
          or request for information will only be used in accordance with our
          privacy statement.
        </p>
        <p className='mb-5'>
          Rest and Restore shall make every reasonable effort to protect its
          systems against any form of unlawful use. Rest and Restore shall
          implement appropriate technical and organisational measures to this
          end, taking into account, among other things, the state of the art.
          However, it shall not be liable for any loss whatsoever, direct and/or
          indirect, suffered by a user of the website, which arises as a result
          of the unlawful use of its systems by a third party.
        </p>
        <p className='mb-5'>
          Rest and Restore accepts no responsibility for the content of websites
          to which or from which a hyperlink or other reference is made.
          Products or services offered by third parties shall be subject to the
          applicable terms and conditions of those third parties.
        </p>
        <p className='mb-5'>
          All intellectual property rights to content on this website are vested
          in third parties who have placed the content themselves or from whom
          Rest and Restore has obtained a user license.
        </p>
        <p className='mb-5'>
          Copying, disseminating and any other use of these materials is not
          permitted without the written permission of Rest and Restore, except
          and only insofar as otherwise stipulated in regulations of mandatory
          law (such as the right to quote), unless specific content dictates
          otherwise.
        </p>
        <p className='mb-5'>
          If you have any questions or problems with the accessibility of the
          website, please do not hesitate to contact us.
        </p>
      </div>
    </Layout>
  );
};

export default DisclaimerPage;
