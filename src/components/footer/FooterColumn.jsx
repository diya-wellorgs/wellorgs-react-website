import React from 'react';

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
