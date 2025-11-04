import React from 'react';

import LegalPage from '../components/policies/LegalPage';

export default function Legal() {
  const sections = [
    {
      heading: 'Company Identification',
      text: `This document pertains explicitly to Wellorgs Infotech Pvt. Ltd., also referred to as "Wellorgs AI," "the Company," "we," or "us." All references to Wellorgs AI within this document directly imply Wellorgs Infotech Pvt. Ltd.`,
    },
    {
      heading: 'Intellectual Property and Licensing Terms',
      text: `All custom AI software, automation solutions, scripts, codes, methodologies, documentation, and related technologies developed by Wellorgs AI remain the sole and exclusive intellectual property of Wellorgs Infotech Pvt. Ltd. unless fully purchased and explicitly transferred via written agreement.`,
    },
    {
      text: `Clients who have fully purchased the software, including source code and full rights, may freely use, modify, distribute, and resell the software without restrictions, as long as such purchase is clearly detailed in a signed, written agreement.`,
    },
    {
      text: `Clients who have not purchased full ownership rights receive a limited, non-exclusive, non-transferable license to use Products solely for internal business operations as defined within individual agreements.`,
    },
    {
      heading: 'Resale and Redistribution Prohibition',
      text: `Unless explicitly stated in a fully executed purchase agreement, clients agree not to resell, sublicense, distribute, transfer, or commercially exploit Products developed by Wellorgs AI. Unauthorized resale or transfer constitutes a violation of these terms.`,
    },
    {
      heading: 'Restrictions on Misuse and Misrepresentation',
      text: `Individuals or entities not formally engaged or employed by Wellorgs Infotech Pvt. Ltd. must not:`,
    },
    {
      list: [
        'Claim affiliation with Wellorgs Infotech Pvt. Ltd. or Wellorgs AI online, offline, or in professional documentation.',
        'Use the company’s name, trademarks, logos, or proprietary information without prior written consent.',
        'Publish unauthorized, misleading, or defamatory content about Wellorgs Infotech Pvt. Ltd. or its employees on any public or online platform.',
      ],
    },
    {
      text: 'Violations may result in legal actions including cease-and-desist notices, removal orders, and claims for damages. ',
    },
    {
      heading: 'Data Protection and Privacy Obligations',
      text: `Clients and users acknowledge the proprietary nature of all data handled by Wellorgs AI’s software or services. Unauthorized access, misuse, or redistribution of data without explicit written permission is strictly prohibited and may lead to legal penalties.`,
    },
    {
      heading: 'Liability and Indemnification',
      text: `Clients agree to comply with applicable laws when using Wellorgs AI Products. Wellorgs Infotech Pvt. Ltd. disclaims liability arising from unauthorized or improper use by clients or third parties.`,
    },
    {
      text: `Clients agree to idemnify and hold harmless Wellorgs Infotech Pvt. Ltd. and its affiliates, officers, directors, employees, and representatives from claims,damages, losses, liabilities, costs, and expenses arising from violations of these terms.`,
    },
    {
      heading: 'Enforcement and Violations',
      text: `Wellorgs Infotech Pvt. Ltd. rigorously protects its intellectual property and enforces these terms. Violations may lead to termination of services and legal action.`,
    },
    {
      text: `Amendments and Modifications, Wellorgs Infotech Pvt. Ltd. may modify these terms without prior notice. Continued use of services signifies acceptance of revised terms.`,
    },
  ];

  return (
    <LegalPage
      title="Legal"
      subtitle="Our Legal Policy defines the rights, responsibilities, and restrictions for using our software and name. Protecting our work and your trust is non-negotiable."
      sections={sections}
      contactEmail="legal@wellorgs.com"
    />
  );
}
