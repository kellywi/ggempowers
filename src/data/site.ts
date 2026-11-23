// All bracketed text is a placeholder, not approved business copy.
export const site = {
  name: 'GG Empowers',
  description: '[Add a short description of GG Empowers, who you serve, and how you help.]',
  hero: {
    heading: '[Your empowering headline goes here.]',
    body: '[Introduce GG Empowers: who you support, what you offer, and the change you help people create.]',
  },
  primaryCta: { label: 'Explore offerings', href: '#offerings' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
  about: {
    heading: '[A personal introduction. A shared purpose.]',
    body: '[Tell your story here. Introduce the person behind GG Empowers, your approach, and what matters most to your work.]',
    detail: '[Add your background and relevant experience using only details you want to share.]',
  },
  // Put your own photos in public/images/, then supply their paths and descriptive alt text.
  heroImage: { src: '', alt: '' },
  aboutImage: { src: '', alt: '' },
  offerings: [
    { title: '[Offering name]', description: '[Describe this offering, who it is for, and what to expect.]', cta: 'Ask about this offering', href: '#contact' },
    { title: '[Offering name]', description: '[Describe another way to work with GG Empowers.]', cta: 'Ask about this offering', href: '#contact' },
    { title: '[Offering name]', description: '[Describe a third offering, or remove this entry if it is not needed.]', cta: 'Ask about this offering', href: '#contact' },
  ],
  contact: { heading: '[Let’s start a conversation.]', body: '[Add a welcoming invitation to contact GG Empowers.]', email: '' },
  // Example shape: { label: 'Instagram', href: 'https://www.instagram.com/YOUR_HANDLE/' }
  socials: [] as { label: string; href: string }[],
};
