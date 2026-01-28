export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'the-dawn-of-commercial-space-travel',
    title: 'The Dawn of Commercial Space Travel: What to Expect in 2025',
    excerpt: 'As private companies race to make space tourism a reality, we explore what the next generation of space travelers can expect from their journey beyond Earth.',
    content: `
# The Dawn of Commercial Space Travel

The dream of space tourism is no longer a distant fantasy. With companies like SpaceX, Blue Origin, and Virgin Galactic leading the charge, ordinary citizens are now closer than ever to experiencing the wonder of space firsthand.

## The Current Landscape

The space tourism industry has seen unprecedented growth in recent years. What was once the exclusive domain of astronauts and billionaires is rapidly becoming accessible to a broader audience.

### Key Players in the Market

**SpaceX** has revolutionized the industry with its reusable rocket technology, dramatically reducing the cost of space travel. Their Starship program promises to make lunar tourism a reality within the next decade.

**Blue Origin** focuses on suborbital experiences, offering passengers a few minutes of weightlessness and breathtaking views of Earth's curvature.

**Virgin Galactic** has pioneered the space plane approach, providing a more airplane-like experience for those venturing to the edge of space.

## What Travelers Can Expect

### The Training Process

Before any space journey, passengers undergo rigorous training. This includes:

- Physical fitness assessments
- Zero-gravity simulation experiences
- Emergency procedure drills
- Psychological preparation

### The Journey Itself

The experience of leaving Earth's atmosphere is often described as life-changing. Travelers report a profound shift in perspective—a phenomenon known as the "Overview Effect"—upon seeing our planet from space.

## The Future Ahead

As technology continues to advance and costs decrease, space tourism will become increasingly accessible. By 2030, experts predict that orbital hotels and lunar excursions will be available to adventurous travelers willing to push the boundaries of human exploration.

The dawn of commercial space travel isn't just about tourism—it's about humanity taking its first steps toward becoming a multi-planetary species.
    `,
    coverImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80',
    category: 'Space Tourism',
    tags: ['Commercial Space', 'Tourism', 'SpaceX', 'Blue Origin'],
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
      role: 'Space Industry Analyst',
    },
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true,
  },
  {
    id: '2',
    slug: 'orbital-hotels-living-among-the-stars',
    title: 'Orbital Hotels: The Future of Luxury Accommodation',
    excerpt: 'From concept to construction, orbital hotels are transforming from science fiction into reality. Discover what awaits guests in these unprecedented luxury destinations.',
    content: `
# Orbital Hotels: Living Among the Stars

Imagine waking up to see Earth's sunrise 16 times a day, floating in weightlessness to your breakfast table, and looking out at the infinite cosmos from your private suite. This is the promise of orbital hotels.

## The Voyager Station Project

The Voyager Station, developed by Orbital Assembly Corporation, represents humanity's most ambitious hospitality venture. Designed to accommodate up to 400 guests, this rotating space station will simulate artificial gravity, making extended stays comfortable and accessible.

## Amenities Beyond Imagination

- Zero-gravity sports arena
- Earth observation decks
- Gourmet dining with views of the cosmos
- Spa and wellness facilities adapted for space
- Research and educational facilities

The future of luxury travel isn't just about destination—it's about transcending the very concept of earthbound experiences.
    `,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    category: 'Future Travel',
    tags: ['Orbital Hotels', 'Space Station', 'Luxury Travel'],
    author: {
      name: 'Marcus Webb',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      role: 'Travel Technology Writer',
    },
    publishedAt: '2024-01-10',
    readTime: 6,
    featured: true,
  },
  {
    id: '3',
    slug: 'mars-colonization-the-next-frontier',
    title: 'Mars Colonization: Humanity\'s Next Giant Leap',
    excerpt: 'With SpaceX\'s Starship nearing operational status, the dream of Mars colonization is closer than ever. Here\'s what scientists and engineers are planning for our future on the Red Planet.',
    content: `
# Mars Colonization: The Next Frontier

The Red Planet has captured human imagination for centuries. Now, for the first time in history, we have the technology and determination to make Martian settlement a reality.

## The Technical Challenges

### Atmosphere and Life Support

Mars's thin atmosphere, composed primarily of carbon dioxide, presents significant challenges for human habitation. Current research focuses on:

- In-situ resource utilization (ISRU) for oxygen production
- Pressurized habitat construction
- Radiation shielding solutions

### Transportation

SpaceX's Starship represents the most advanced transportation solution for Mars travel. With its fully reusable design, it promises to reduce the cost of Mars transit by orders of magnitude.

## The Timeline

- **2025-2027**: Unmanned cargo missions establish initial infrastructure
- **2028-2030**: First crewed missions arrive
- **2035+**: Permanent settlement begins

The journey to Mars isn't just a technological achievement—it's the beginning of humanity's transformation into an interplanetary civilization.
    `,
    coverImage: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&q=80',
    category: 'Science',
    tags: ['Mars', 'Colonization', 'SpaceX', 'Starship'],
    author: {
      name: 'Dr. James Liu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      role: 'Planetary Scientist',
    },
    publishedAt: '2024-01-05',
    readTime: 10,
    featured: true,
  },
  {
    id: '4',
    slug: 'zero-gravity-health-benefits',
    title: 'The Unexpected Health Benefits of Zero Gravity',
    excerpt: 'Recent research reveals surprising health applications for microgravity environments, from treating chronic pain to accelerating healing processes.',
    content: `
# The Unexpected Health Benefits of Zero Gravity

While we often hear about the health challenges of space travel, emerging research reveals that controlled microgravity exposure might offer therapeutic benefits for various conditions.

## Current Research Areas

### Pain Management

Patients with chronic back pain have reported significant relief after short-duration microgravity exposure. The absence of spinal compression allows for natural decompression and alignment.

### Cardiovascular Research

Studying the heart in microgravity provides unique insights into cardiovascular function, potentially leading to new treatments for heart conditions on Earth.

## The Future of Space Medicine

As space tourism becomes more accessible, we may see the emergence of "medical tourism" in orbit—specialized facilities offering treatments that are only possible in microgravity environments.
    `,
    coverImage: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1200&q=80',
    category: 'Science',
    tags: ['Health', 'Microgravity', 'Medicine', 'Research'],
    author: {
      name: 'Dr. Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      role: 'Space Medicine Researcher',
    },
    publishedAt: '2024-01-02',
    readTime: 5,
    featured: false,
  },
  {
    id: '5',
    slug: 'space-tourism-sustainability',
    title: 'Making Space Tourism Sustainable: The Green Rocket Revolution',
    excerpt: 'As the space industry grows, companies are pioneering eco-friendly propulsion systems and sustainable practices to minimize environmental impact.',
    content: `
# Making Space Tourism Sustainable

The growth of space tourism raises important questions about environmental responsibility. Industry leaders are now pioneering sustainable solutions for the next era of space travel.

## Green Propulsion Technologies

### Methane-Based Fuels

SpaceX's Raptor engines use methane, which can be synthesized from atmospheric CO2, creating a potential carbon-neutral fuel cycle.

### Electric Propulsion

For in-space maneuvers, ion engines and other electric propulsion systems offer highly efficient alternatives to chemical rockets.

## Industry Commitments

Leading space tourism companies have pledged to:

- Achieve carbon-neutral operations by 2030
- Invest in atmospheric research and monitoring
- Develop fully reusable launch systems
- Offset emissions through environmental programs

The future of space travel must be sustainable, ensuring that our exploration of the cosmos doesn't come at the cost of our home planet.
    `,
    coverImage: 'https://images.unsplash.com/photo-1516849841517-6e4b37c37e4c?w=1200&q=80',
    category: 'Technology',
    tags: ['Sustainability', 'Green Technology', 'Environment'],
    author: {
      name: 'Alexandra Foster',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
      role: 'Environmental Tech Journalist',
    },
    publishedAt: '2023-12-28',
    readTime: 7,
    featured: false,
  },
  {
    id: '6',
    slug: 'lunar-gateway-humanitys-outpost',
    title: 'Lunar Gateway: Humanity\'s First Permanent Moon Outpost',
    excerpt: 'NASA\'s Lunar Gateway station will serve as humanity\'s first permanent presence in lunar orbit, opening new possibilities for exploration and tourism.',
    content: `
# Lunar Gateway: Humanity's Outpost

The Lunar Gateway represents a revolutionary step in human space exploration—a permanent orbital station around the Moon that will serve as a staging point for lunar surface missions and beyond.

## What is the Gateway?

The Gateway is a small space station in lunar orbit, designed to:

- Support long-duration lunar surface missions
- Serve as a communications relay
- Enable deep space research
- Act as a waypoint for Mars missions

## International Collaboration

The Gateway is a truly international effort, with contributions from:

- NASA (United States)
- ESA (European Space Agency)
- JAXA (Japan)
- CSA (Canada)

## Tourism Potential

While initially focused on scientific missions, the Gateway could eventually welcome civilian visitors, offering unprecedented views of both the Moon and Earth.
    `,
    coverImage: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=1200&q=80',
    category: 'Space Tourism',
    tags: ['Lunar Gateway', 'Moon', 'NASA', 'Space Station'],
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
      role: 'Space Industry Analyst',
    },
    publishedAt: '2023-12-20',
    readTime: 6,
    featured: false,
  },
];

export const categories = [
  'All',
  'Space Tourism',
  'Future Travel',
  'Technology',
  'Science',
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return articles;
  return articles.filter(article => article.category === category);
}
