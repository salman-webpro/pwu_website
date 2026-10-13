// Site-wide facts. Anything repeated across pages (phone, email, cutoff) lives here
// and is referenced from other content files, never retyped.

export const site = {
  name: "Print Wave USA",
  legalName: "Print Wave USA LLC",
  tagline: "Print for businesses that need consistent execution.",
  description:
    "Print Wave USA turns repeat business printing into a system. Approve your print once, reorder it forever.",
  phone: { display: "+1-310-904-9869", href: "tel:+13109049869" },
  email: "support@printwaveusa.com",
  cutoff: { short: "4 PM ET", long: "4:00 PM ET", pacific: "1:00 PM Pacific" },
  areaServed: "Los Angeles",
  skipLink: "Skip to content",
  // TODO(design): swap for an SVG export when available.
  logo: { src: "/brand/logo.png", alt: "Print Wave USA", width: 1626, height: 1000 },
  social: {
    // TODO(content): real social URLs
    instagram: { label: "Print Wave USA on Instagram", href: "#" },
    x: { label: "Print Wave USA on X", href: "#" },
  },
} as const;
