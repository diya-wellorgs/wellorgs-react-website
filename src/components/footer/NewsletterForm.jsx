import React from 'react';

import Button from '../ui/Button';

const NewsletterForm = () => {
  return (
    <div>
      <p className="text-[18px] mb-3">Join our newsletter</p>
      <form className=" flex items-center justify-between px-1 py-1  rounded-md  bg-bg-secondary border border-gray-700 ">
        <input
          type="email"
          placeholder="name@email.com"
          className=" text-white border-none outline-none px-2  "
        />
        <Button
          text="Subscribe"
          className="rounded-sm"
        />
      </form>
    </div>
  );
};

export default NewsletterForm;
