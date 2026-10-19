import type { InfoPage } from "@/types";

// Legal copy for /privacy and /terms, taken word for word from the PDFs supplied by Print Wave USA
// (PrintWave_Privacy_Policy_Merged_CA_v2.pdf and PrintWave_Terms_and_Privacy_Merged_CA_v8.pdf).
// Don't reword this text without sign-off: it's a legal document.

export const privacyPage: InfoPage = {
  slug: "privacy",
  eyebrow: "Privacy Policy",
  title: "Privacy Policy",
  description: "How Print Wave USA LLC collects, uses, discloses, and protects your personal information.",
  effectiveDate: "Effective Date: January 1, 2025",
  body: [
    "This Privacy Policy explains how Print Wave USA LLC (“PrintWave,” “Company,” “we,” “our,” or “us”) collects, uses, discloses, and protects personal information in connection with your access to and use of www.printwaveusa.com and related services. This Policy incorporates industry-standard privacy practices reflected by leading print providers and complies with applicable California and U.S. privacy laws, including the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA).",
  ],
  sections: [
    {
      heading: "Information We Collect",
      intro: ["We may collect personal information including, but not limited to:"],
      bullets: [
        "Identifiers (name, business name, email address, phone number, billing and shipping address)",
        "Commercial information (order history, invoices, transaction records, payment status)",
        "Internet and device data (IP address, browser type, operating system, access logs, cookies, analytics data)",
        "Customer-submitted content (artwork, designs, logos, instructions, files)",
        "Communications with customer service or sales representatives",
        "Inferences derived from interactions for operational improvement and fraud prevention",
      ],
      outro: ["We do not knowingly collect personal information from children under the age of 13."],
    },
    {
      heading: "Business & Operational Use",
      intro: ["Personal information is collected and used for legitimate business purposes, including:"],
      bullets: [
        "Processing, fulfilling, and administering orders",
        "Managing accounts and customer communications",
        "Fraud detection, abuse prevention, and security monitoring",
        "Website analytics, functionality improvement, and performance optimization",
        "Legal compliance, dispute resolution, chargeback defense, and recordkeeping",
        "Enforcing our Terms of Usage and protecting Company rights",
      ],
    },
    {
      heading: "Disclosure of Information",
      intro: ["We may disclose personal information as reasonably necessary to:"],
      bullets: [
        "Payment processors, banks, and financial institutions",
        "Shipping carriers, freight providers, and logistics partners",
        "Website hosting providers, analytics vendors, and IT service providers",
        "Professional advisors (legal counsel, accountants, auditors, insurers)",
        "Government authorities, courts, or regulators when required or permitted by law",
        "Protect the rights, property, security, or operations of PrintWave",
      ],
      outro: ["PrintWave does not sell personal information as defined under California law."],
    },
    {
      heading: "Cookies & Tracking Technologies",
      intro: [
        "We may use cookies, pixels, log files, and similar technologies to operate the Site, analyze traffic, remember preferences, prevent fraud, and improve user experience. Users may control cookies through browser settings; however, disabling cookies may affect Site functionality.",
      ],
    },
    {
      heading: "Sensitive Personal Information",
      intro: [
        "Sensitive personal information is used only as reasonably necessary to provide services, ensure security, process payments, or comply with legal obligations, as permitted under CPRA.",
      ],
    },
    {
      heading: "Data Retention",
      intro: ["We retain personal information for as long as reasonably necessary to:"],
      bullets: [
        "Fulfill business and contractual purposes",
        "Comply with legal, tax, and regulatory obligations",
        "Defend against disputes, chargebacks, or claims",
        "Prevent fraud and misuse",
      ],
      outro: ["Retention periods may extend beyond account closure where permitted by law."],
    },
    {
      heading: "Your California Privacy Rights",
      intro: ["California residents have the right to:"],
      bullets: [
        "Know the categories and specific pieces of personal information collected",
        "Request correction or deletion of personal information, subject to legal exceptions",
        "Obtain information about data disclosure practices",
        "Limit use of sensitive personal information where applicable",
        "Not be discriminated against for exercising privacy rights",
      ],
      outro: [
        "Requests may be denied where permitted by law, including when data is necessary for security, fraud prevention, legal compliance, or enforcement of agreements.",
      ],
    },
    {
      heading: "Third-Party Websites & Services",
      intro: [
        "The Site may contain links to third-party websites or integrate with third-party services. PrintWave is not responsible for the privacy practices, security, or content of third parties. Use of third-party services is at your own risk.",
      ],
    },
    {
      heading: "Security Measures",
      intro: [
        "PrintWave implements commercially reasonable administrative, technical, and physical safeguards to protect personal information. However, no system is completely secure, and PrintWave disclaims liability for unauthorized access beyond its reasonable control.",
      ],
    },
    {
      heading: "Children’s Privacy",
      intro: [
        "This Site is not intended for children under the age of 13. PrintWave does not knowingly collect personal information from children under 13 and will delete such information if discovered, in compliance with COPPA.",
      ],
    },
    {
      heading: "Policy Updates",
      intro: [
        "PrintWave reserves the right to modify this Privacy Policy at any time. Updates will be posted on the Site with a revised effective date. Continued use of the Site constitutes acceptance of the updated Policy.",
      ],
    },
    {
      heading: "Contact Information",
      intro: ["Print Wave USA LLC", "Email: support@printwaveusa.com", "Website: www.printwaveusa.com"],
    },
  ],
};

export const termsPage: InfoPage = {
  slug: "terms",
  eyebrow: "Terms of Usage",
  title: "Terms of Usage",
  description: "The terms that govern your use of www.printwaveusa.com and services from Print Wave USA LLC.",
  body: [
    "These Terms of Usage govern your access and use of www.printwaveusa.com and any services provided by Print Wave USA LLC (“PrintWave,” “Company,” “we,” or “our”). By accessing the Site, placing an order, or using any services, you agree to be bound by these Terms and all incorporated policies, including the Privacy Policy.",
    "PrintWave reserves the right to modify these Terms at any time without notice. Continued use of the Site constitutes acceptance of any changes.",
  ],
  sections: [
    {
      heading: "General",
      intro: [
        "All transactions are governed by the laws of the State of California. PrintWave is not responsible for delays or damages caused by acts of God, equipment failure, governmental actions, war, embargo, labor disputes, cyber incidents, or supply chain disruptions.",
      ],
    },
    {
      heading: "Use of Site & Prohibited Activities",
      intro: [
        "You agree to use the Site responsibly and in compliance with all applicable laws. You may not use the Site to transmit spam, scrape data, deploy bots, attempt unauthorized access, upload unlawful or offensive content, or interfere with Site security or performance. PrintWave may suspend or terminate access for violations.",
      ],
    },
    {
      heading: "Ownership of Site Content",
      intro: [
        "All Site content, including text, graphics, layouts, tools, and code, is the exclusive property of PrintWave or its licensors and protected by intellectual property laws. Use is permitted solely for placing and fulfilling orders. Unauthorized copying or distribution is prohibited.",
      ],
    },
    {
      heading: "Order Acceptance",
      intro: [
        "All orders are subject to acceptance by PrintWave. We may refuse, cancel, or limit any order at our discretion, including for pricing errors or suspected fraud.",
      ],
    },
    {
      heading: "Pricing & Currency",
      intro: [
        "All prices are listed in U.S. dollars. Prices may change prior to acceptance. Once an order enters production, pricing is final. PrintWave may modify accepted payment methods at any time.",
      ],
    },
    {
      heading: "Production Times",
      intro: ["All production, turnaround, and delivery timelines are estimates only and not guaranteed."],
    },
    {
      heading: "Inspection & Acceptance",
      intro: [
        "Buyer must inspect products upon delivery. Minor cosmetic variations inherent to digital printing, materials, or shipping are not defects.",
      ],
    },
    {
      heading: "No Refunds / No Returns",
      intro: [
        "Due to the custom nature of our products, all sales are final. No refunds, exchanges, or store credit are provided once an order is accepted or production begins.",
      ],
    },
    {
      heading: "Order Defects",
      intro: [
        "Claims for defects or shortages must be submitted in writing within two (2) business days of delivery. PrintWave may correct production errors at its discretion. No refunds will be issued.",
      ],
    },
    {
      heading: "Customer Content & Intellectual Property",
      intro: [
        "Buyer warrants ownership or authorization of all submitted content and grants PrintWave a limited license to use it for order fulfillment.",
      ],
    },
    {
      heading: "Indemnification",
      intro: [
        "Buyer agrees to indemnify, defend, and hold harmless PrintWave from claims arising from Buyer-provided content, intellectual property infringement, misuse of products, violation of these Terms, or payment disputes.",
      ],
    },
    {
      heading: "Chargebacks & Payment Disputes",
      intro: [
        "If Buyer initiates a chargeback or payment dispute without first contacting PrintWave, Buyer is responsible for all related costs, including chargeback fees, administrative expenses, shipping, collections, legal fees, and unforeseen costs. PrintWave may charge the original payment method or invoice Buyer.",
      ],
    },
    {
      heading: "Shipping",
      intro: [
        "Shipping is F.O.B. Origin. Risk of loss transfers upon shipment. PrintWave is not responsible for carrier delays, loss, or damage.",
      ],
    },
    {
      heading: "Disclaimer of Website Warranties",
      intro: [
        "The Site and all materials are provided “as is” and “as available.” PrintWave makes no warranties regarding Site accuracy, availability, or uninterrupted operation.",
      ],
    },
    {
      heading: "Limitation of Liability",
      intro: [
        "To the maximum extent permitted by California law, PrintWave shall not be liable for indirect, incidental, consequential, or punitive damages. Total liability shall not exceed the amount paid for the order.",
      ],
    },
    {
      heading: "Termination",
      intro: ["PrintWave may suspend or terminate Site access or services at any time for violations or harmful conduct."],
    },
    {
      heading: "Client Appreciation Program",
      intro: [
        "PrintWave may, at its sole discretion, issue a weekly $100 Client Appreciation Award to an eligible customer. This is a discretionary goodwill program and not a lottery, sweepstakes, or contest.",
      ],
    },
    {
      heading: "Children’s Privacy",
      intro: [
        "This Site is not intended for children under 13. PrintWave does not knowingly collect personal information from children under 13.",
      ],
    },
    {
      heading: "Third-Party Links",
      intro: [
        "PrintWave is not responsible for third-party websites or services linked from this Site. Use is at the user’s own risk.",
      ],
    },
    {
      heading: "Privacy Policy",
      intro: [
        "Personal information is collected, used, retained, and disclosed in accordance with California privacy laws (CCPA/CPRA). The Privacy Policy is incorporated by reference.",
      ],
    },
    {
      heading: "California Consumer Rights",
      intro: ["Nothing in these Terms limits rights provided under applicable California consumer protection laws."],
    },
  ],
};
