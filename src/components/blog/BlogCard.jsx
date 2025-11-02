import React from 'react';

const BlogCard = ({ image, category, title }) => {
  return (
    <div className="bg-[#0e0e0e] rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-md overflow-hidden p-5 flex flex-col">
      <div className="aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full  object-cover rounded-xl hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <span className="text-xs px-2 py-1 bg-neutral-900 border border-neutral-700 text-gray-300 rounded-md w-fit">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-white leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
