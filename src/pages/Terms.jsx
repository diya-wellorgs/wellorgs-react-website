import React from 'react';

import LegalPage from '../components/policies/LegalPage';

export default function Terms() {
  const sections = [
    {
      text: 'Acceptance of terms By accessing or using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms and conditions, please do not use our services.',
    },
    {
      heading: 'Services Provided',
      text: `Wellorgs AI specializes in providing customized AI software development and tailored automation solutions. Detailed information regarding the scope of services, responsibilities, and specific obligations will be clearly defined and communicated within individual client agreements.`,
    },
    {
      heading: 'Intellectual Property',
      text: `All content featured on this Site—including text, graphics, logos, images, videos, software, and any associated materials—is exclusively owned by Wellorgs AI or its authorized content suppliers. Unauthorized use, duplication, reproduction, or distribution is strictly prohibited and may result in legal action.`,
    },
    {
      heading: 'Limitations of Liability',
      text: `Wellorgs AI shall not bear responsibility or liability for any indirect, incidental, consequential, or special damages, including but not limited to loss of profits, data, or business opportunities arising from or related to the use of our Site or any of our services.`,
    },
    {
      heading: 'Modifications',
      text: `Wellorgs AI reserves the right to amend or update these Terms and Conditions at any time without prior notice. Updates will be communicated through posting on the Site, and continued use will signify your acceptance of the revised terms.`,
    },
    {
      heading: 'Termination of Access',
      text: `Wellorgs AI reserves the right to terminate access to the Site and its services without notice, particularly in cases of suspected misuse or violation of these Terms and Conditions.`,
    },
  ];

  return (
    <LegalPage
      title="Terms and conditions"
      subtitle="Our Terms and Conditions explain how you can access and use our services. Clear rules, fair use, no surprises."
      sections={sections}
      contactEmail="legal@wellorgs.com"
    />
  );
}
