import React from 'react';

import LegalPage from '../components/policies/LegalPage';

const privacySections = [
  {
    heading: 'Data Collection',
    text: `We collect information provided directly by users via forms, email correspondence, or other communication channels strictly for the purpose of providing requested services, enhancing user experience, and facilitating necessary communications.`,
  },
  {
    heading: 'Use of Information',
    text: `Personal user information collected by AI is utilized exclusively for internal purposes. It will never be disclosed, shared, sold, or rented to third parties without explicit and informed user consent, except where legally required by applicable laws.`,
  },
  {
    heading: 'Security',
    text: `Wellorgs AI is dedicated to implementing and maintaining rigorous security measures designed to protect user information. Despite these measures, users are reminded that no online data transmission can be guaranteed as completely secure. Therefore, users are advised to take personal precautions when sharing sensitive information online.`,
  },
  {
    heading: 'User Rights',
    text: `Users have the explicit right to access, review, request updates, corrections, or complete deletion of their personal information. Such requests must be directed to legal@wellorgs.com and will be promptly addressed.`,
  },
];

const contentSections = [
  {
    heading: 'Original Content',
    text: `All content published and accessible via www.wellorgs.com is originally created, curated, and exclusively owned by Wellorgs Infotech Pvt. Ltd. Any unauthorized copying, redistribution, modification, or misuse of this content is strictly forbidden.`,
  },
  {
    heading: 'Usage Permission',
    text: `For requests concerning the use, reproduction, or referencing of any content on our site, please contact us via email at legal@wellorgs.com. All requests must clearly outline the intended use, purpose, and any relevant details for our review and approval.`,
  },
  {
    heading: 'Content Accuracy',
    text: `Wellorgs AI takes significant efforts to ensure that all information presented on our site is accurate, up-to-date, and reliable. However, we make no warranties regarding the absolute completeness, correctness, or timeliness of all content. Users are encouraged and expected to independently verify critical or sensitive information prior to reliance.`,
  },
];

export default function Privacy() {
  return (
    <>
      <LegalPage
        title="Privacy Policy"
        subtitle="Our Privacy Policy outlines how we collect, use, and protect your personal information. Your privacy and security are our priorities."
        sections={privacySections}
        policies={true}
        showContact={false}
      />
      <LegalPage
        title="Content Policy"
        subtitle="Our Content Policy protects our original work and sets clear boundaries for how it can be used. Respect for ownership is expected."
        sections={contentSections}
        policies={true}
        className="pt-0"
      />
    </>
  );
}
