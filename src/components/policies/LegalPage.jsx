import React from 'react';

import GradientText from '../ui/GradientText';

export default function LegalPage({
  title,
  subtitle,
  sections,
  contactEmail,
  showContact = true,
  className,
  legal = { legal },
}) {
  return (
    <div
      className={`min-h-screen  mx-auto bg-black text-white flex flex-col items-center text-justify text-[16px] ${className ? 'pt-2' : 'pt-28'}`}
    >
      {/* Title */}
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <GradientText
          title={title}
          subheading={subtitle}
          policies={true}
          legal={legal}
        />
      </div>

      {/* Content Sections */}
      <div className="max-w-[700px] mx-auto">
        <div className=" space-y-8 mt-10 text-gray-300">
          {sections.map((section, idx) => (
            <div key={idx}>
              <p>
                {section.heading && (
                  <span className="font-semibold  mb-2">
                    {section.heading}:{' '}
                  </span>
                )}
                {section.text}
              </p>

              {section.list && (
                <ul className="list-disc list-inside space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white my-8 "></div>

        {/* Contact Section */}
        {showContact && (
          <div className=" w-full text-left ">
            <h2 className="text-white font-semibold mb-3 text-[28px]">
              Contact Us
            </h2>
            <p className="text-[#febe31]">
              If you have any questions or concerns about our Privacy Policy or
              the handling of your personal information, please contact us at{' '}
              <a
                href={`mailto:${contactEmail}`}
                className="underline hover:text-yellow-300"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
