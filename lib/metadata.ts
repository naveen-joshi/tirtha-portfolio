// SEO Metadata Configuration
export const siteMetadata = {
  title: 'Tirtha Portfolio | Professional Graphic Designer',
  description: 'Tirtha is a professional graphic designer specializing in branding, logo design, print design, ad design, and digital media with an earthy, minimalist aesthetic.',
  siteUrl: 'https://tirtha-portfolio.vercel.app', // Update with your actual domain
  siteName: 'Tirtha Portfolio',
  language: 'en-US',
  locale: 'en_US',
  type: 'website',
  creator: 'Tirtha',
  publisher: 'Tirtha',
  authors: [{ name: 'Tirtha', url: 'https://tirtha-portfolio.vercel.app' }],
  keywords: [
    'graphic designer',
    'logo designer',
    'brand identity designer',
    'print designer',
    'ad designer',
    'promotional campaign designer',
    'book cover designer',
    'social media designer',
    'illustration artist',
    'minimalist design',
    'earthy design palette',
    'professional graphic design',
    'visual identity',
    'branding specialist',
    'creative designer',
    'UI/UX design',
    'typography',
    'visual communication',
    'design portfolio',
    'freelance designer'
  ],
  category: 'design',
  themeColor: '#D8CFBC',
  mobileAlternate: {
    media: 'only screen and (max-width: 640px)',
    href: 'https://tirtha-portfolio.vercel.app'
  },
  openGraph: {
    title: 'Tirtha Portfolio | Professional Graphic Designer',
    description: 'Professional graphic design services including branding, logo design, print design, ad campaigns, and digital media with an earthy, minimalist aesthetic.',
    url: 'https://tirtha-portfolio.vercel.app',
    siteName: 'Tirtha Portfolio',
    images: [
      {
        url: 'https://tirtha-portfolio.vercel.app/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Tirtha Portfolio Preview'
      }
    ],
    locale: 'en_US',
    type: 'website' as 'website'
  },
  twitter: {
    card: 'summary_large_image' as 'summary_large_image',
    title: 'Tirtha Portfolio | Professional Graphic Designer',
    description: 'Professional graphic design services including branding, logo design, print design, ad campaigns, and digital media.',
    images: ['https://tirtha-portfolio.vercel.app/twitter-image.jpg'], // You'll need to create this image
    creator: '@tirthadesign' // Update with actual Twitter handle
  }
};

// SEO Metadata for specific pages
export const pageMetadata = {
  home: {
    title: 'Tirtha Portfolio | Professional Graphic Designer',
    description: 'Tirtha is a professional graphic designer specializing in branding, logo design, print design, ad design, and digital media with an earthy, minimalist aesthetic.',
    keywords: ['graphic designer', 'logo designer', 'brand identity designer', 'print designer', 'ad designer']
  },
  about: {
    title: 'About Tirtha | Professional Graphic Designer',
    description: 'Learn about Tirtha, a professional graphic designer with expertise in branding, logo design, print design, and digital media. Download resume and view design philosophy.',
    keywords: ['graphic designer bio', 'design experience', 'design philosophy', 'professional designer', 'design portfolio']
  },
  portfolio: {
    title: 'Design Portfolio | Tirtha - Professional Graphic Designer',
    description: 'Explore Tirtha\'s graphic design portfolio featuring branding, logo design, print design, ad campaigns, book covers, illustrations, and digital media projects.',
    keywords: ['design portfolio', 'graphic design projects', 'branding examples', 'logo design samples', 'print design portfolio']
  },
  contact: {
    title: 'Contact Tirtha | Professional Graphic Designer',
    description: 'Get in touch with Tirtha for professional graphic design services including branding, logo design, print design, and digital media projects.',
    keywords: ['hire graphic designer', 'contact designer', 'design services', 'freelance designer', 'design consultation']
  }
};

// Generate structured data for rich results
export function generateStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': url,
    'headline': 'Tirtha - Professional Graphic Designer',
    'about': {
      '@type': 'Person',
      'name': 'Tirtha',
      'description': 'Professional graphic designer specializing in branding, logo design, print design, and digital media',
      'jobTitle': 'Graphic Designer',
      'knowsAbout': ['Graphic Design', 'Branding', 'Logo Design', 'Print Design', 'Ad Design', 'Digital Media'],
      'sameAs': [
        'https://www.behance.net/tirthadesign',
        'https://www.linkedin.com/in/tirthadesign',
        'https://twitter.com/tirthadesign',
        'https://www.instagram.com/tirthadesign'
      ]
    },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'CreativeWork',
            'name': 'The Oven Story',
            'description': 'Brand identity for a bakery cum dessert boutique',
            'creator': {
              '@type': 'Person',
              'name': 'Tirtha'
            }
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'CreativeWork',
            'name': 'Label Shaaf',
            'description': 'Sustainable fashion brand identity',
            'creator': {
              '@type': 'Person',
              'name': 'Tirtha'
            }
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'CreativeWork',
            'name': 'BYD',
            'description': 'Modern logo redesign for automotive company',
            'creator': {
              '@type': 'Person',
              'name': 'Tirtha'
            }
          }
        }
      ]
    }
  };
}
