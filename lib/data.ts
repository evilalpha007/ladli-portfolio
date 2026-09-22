export interface ReelItem {
  id: string;
  title: string;
  category: 'real-estate' | 'personal-brand' | 'lifestyle' | 'bts';
  thumbnail: string;
  views: string;
  likes: string;
  shares: string;
  platform: 'instagram' | 'tiktok' | 'youtube';
  sourceAccount: 'ladligaur' | 'silveroakglobal';
  sourceUrl: string; // Direct link to Reel on Instagram
  videoEmbedUrl?: string; // Optional direct mp4 or embed iframe url
  hook: string;
  description: string;
  tags: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  badge?: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string[];
  metrics: { label: string; value: string }[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    location: string;
    timezone: string;
    bio: string;
    taglineOptions: string[];
    email: string;
    phone: string;
    phoneDisplay: string;
    whatsappUrl: string;
    instagramPersonal: string;
    instagramClient: string;
    linkedin: string;
    tiktok: string;
    stats: { number: number; suffix: string; label: string; subtext: string }[];
    languages: { name: string; level: string }[];
  };
  skills: SkillCategory[];
  reels: ReelItem[];
  videoShowcase: {
    title: string;
    subtitle: string;
    twitterEmbedUrl: string;
    embedType: 'twitter' | 'youtube' | 'custom';
    videoPoster: string;
    headline: string;
    duration: string;
    role: string;
    stats: string;
  };
  galleryPhotos: GalleryPhoto[];
  experience: ExperienceItem[];
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    details: string;
  }[];
  testimonials: Testimonial[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Ladli Gaur",
    title: "Social Media Marketing Specialist & Content Creator",
    location: "Dubai, UAE",
    timezone: "GST (UTC+4)",
    bio: "Social Media Marketing Specialist & Content Creator with 4+ years of experience turning brands into stories and stories into high-converting online communities across Instagram, TikTok, and Facebook. Grew my personal brand to 35K+ followers with trend-driven storytelling and real-time data strategy. Proven track record on camera for luxury real estate tours, lifestyle features, and high-impact short-form video.",
    taglineOptions: [
      "Turning brands into stories, and stories into followers.",
      "High-impact social storytelling engineered for Dubai's luxury market.",
      "From on-camera charisma to data-driven growth that converts."
    ],
    email: "ladligaurgaur@gmail.com",
    phone: "+971 56 931 0464",
    phoneDisplay: "+971 56 931 0464",
    whatsappUrl: "https://wa.me/971569310464",
    instagramPersonal: "https://www.instagram.com/ladligaur",
    instagramClient: "https://www.instagram.com/silveroakglobal.ae",
    linkedin: "https://www.linkedin.com/in/ladli-gaur", // TODO: Client can replace with final LinkedIn URL
    tiktok: "https://www.tiktok.com/@ladligaur",
    stats: [
      { number: 35, suffix: "K+", label: "Personal Brand Followers", subtext: "Across Instagram, TikTok & Facebook" },
      { number: 4, suffix: "+", label: "Years Experience", subtext: "Social Strategy & Video Production" },
      { number: 50, suffix: "+", label: "Brand Collaborations", subtext: "Promotional campaigns & sponsored features" },
      { number: 50, suffix: "K+", label: "Monthly Organic Visitors", subtext: "Driven for HJ Real Estate SEO" }
    ],
    languages: [
      { name: "English", level: "Fluent / Professional" },
      { name: "Hindi", level: "Native / Bilingual" },
      { name: "Haryanvi", level: "Native" },
      { name: "Punjabi", level: "Conversational" }
    ]
  },

  skills: [
    {
      title: "Social Media Strategy & Management",
      description: "End-to-end growth blueprints tailored for luxury real estate, lifestyle brands, and personal branding.",
      iconName: "TrendingUp",
      skills: [
        { name: "Instagram & TikTok Growth", level: "Expert", highlight: true },
        { name: "Content Calendars & Scheduling", level: "Expert" },
        { name: "Trend Hacking & Viral Audio", level: "Advanced", highlight: true },
        { name: "Facebook & LinkedIn Strategy", level: "Advanced" }
      ]
    },
    {
      title: "Content Creation & Short-Form Video",
      description: "Fast-paced, hook-heavy video formats crafted for ultra-high watch time.",
      iconName: "Clapperboard",
      skills: [
        { name: "Reels & TikTok Production", level: "Expert", highlight: true },
        { name: "Scriptwriting & Hook Crafting", level: "Expert", highlight: true },
        { name: "Storyboarding & Visual Flow", level: "Advanced" },
        { name: "Stories & Interactive Polls", level: "Advanced" }
      ]
    },
    {
      title: "On-Camera Hosting & Presentation",
      description: "Charismatic on-screen energy with polished articulation for property and brand features.",
      iconName: "Mic",
      skills: [
        { name: "Brand Promotion & Sponsored Features", level: "Expert", highlight: true },
        { name: "Luxury Real Estate Walkthroughs", level: "Expert", highlight: true },
        { name: "Lifestyle & Product Reviews", level: "Expert" },
        { name: "Voiceovers & Dynamic Narrations", level: "Advanced" }
      ]
    },
    {
      title: "Video & Visual Editing Suite",
      description: "High-retention editing with seamless cuts, sound design, and on-brand typography.",
      iconName: "Scissors",
      skills: [
        { name: "CapCut & VN Editor", level: "Expert", highlight: true },
        { name: "Canva Pro & Brand Kits", level: "Expert" },
        { name: "InShot & Mobile Post-Production", level: "Advanced" },
        { name: "Color Grading & Audio Mixing", level: "Advanced" }
      ]
    },
    {
      title: "Paid Performance & Analytics",
      description: "Data-informed optimizations that turn impressions into qualified sales leads.",
      iconName: "BarChart3",
      skills: [
        { name: "Meta Ads Manager", level: "Advanced", highlight: true },
        { name: "Instagram & TikTok Insights", level: "Expert" },
        { name: "Google Analytics 4 & Search Console", level: "Advanced" },
        { name: "ROI & Lead Tracking", level: "Advanced" }
      ]
    },
    {
      title: "AI Tools & Modern Workflows",
      description: "Accelerating creative output and trend ideation using state-of-the-art AI tooling.",
      iconName: "Sparkles",
      skills: [
        { name: "ChatGPT & Claude Prompting", level: "Expert", highlight: true },
        { name: "Canva AI & Generative Fill", level: "Advanced" },
        { name: "CapCut AI Auto-Captions & B-Roll", level: "Advanced" },
        { name: "Social Listening AI", level: "Advanced" }
      ]
    }
  ],

  reels: [
    {
      id: "reel-1",
      title: "Brand Promotion & Creator Feature 01",
      category: "lifestyle",
      thumbnail: "/images/people-brands-stories.png",
      views: "185.4K",
      likes: "14.2K",
      shares: "3.8K",
      platform: "instagram",
      sourceAccount: "ladligaur",
      sourceUrl: "https://www.instagram.com/reel/Dc008ottfKt/",
      hook: "People. Brands. Stories — Turning raw ideas into viral impact.",
      description: "Sponsored brand storytelling reel created for lifestyle audience, focusing on relatable storytelling and high organic retention.",
      tags: ["BrandCollaboration", "ContentCreator", "DubaiCreator", "ViralReel"]
    },
    {
      id: "reel-2",
      title: "On-Camera Brand Showcase 02",
      category: "lifestyle",
      thumbnail: "/images/lifestyle-opportunities.png",
      views: "142.8K",
      likes: "11.6K",
      shares: "2.9K",
      platform: "instagram",
      sourceAccount: "ladligaur",
      sourceUrl: "https://www.instagram.com/reel/DcrLBXWtIlH/",
      hook: "Good Content, Brighter Opportunities — Connecting with the right audience.",
      description: "High-engagement on-location reel highlighting lifestyle storytelling and experiential brand promotion in Dubai.",
      tags: ["LifestyleContent", "Promotion", "DubaiLife", "ShortFormVideo"]
    },
    {
      id: "reel-3",
      title: "Viral Creator Campaign 03",
      category: "personal-brand",
      thumbnail: "/images/about-impact.png",
      views: "230.1K",
      likes: "18.9K",
      shares: "6.4K",
      platform: "instagram",
      sourceAccount: "ladligaur",
      sourceUrl: "https://www.instagram.com/reel/DcWXRX_NFkr/",
      hook: "From Ideas to Impact — How strategic content creates real authority.",
      description: "Educational and high-retention breakdown on personal brand growth and conversion strategies in the UAE.",
      tags: ["PersonalBrand", "GrowthStrategy", "IdeasToImpact", "DubaiCreator"]
    },
    {
      id: "reel-4",
      title: "Team Collaboration & Production 04",
      category: "bts",
      thumbnail: "/images/team-collaboration.png",
      views: "115.6K",
      likes: "9.4K",
      shares: "2.1K",
      platform: "instagram",
      sourceAccount: "ladligaur",
      sourceUrl: "https://www.instagram.com/reel/DcNpjMutjsX/",
      hook: "Building Ideas Together — Different skills, one shared vision.",
      description: "Behind-the-scenes look at full-scale creative production, agency teamwork, and high-impact campaign execution.",
      tags: ["BehindTheScenes", "CreativeTeam", "Production", "AgencyLife"]
    },
    {
      id: "reel-5",
      title: "Commercial Brand Activation 05",
      category: "real-estate",
      thumbnail: "/images/team-boardroom.png",
      views: "168.3K",
      likes: "13.7K",
      shares: "4.2K",
      platform: "instagram",
      sourceAccount: "silveroakglobal",
      sourceUrl: "https://www.instagram.com/reel/DcEDKYSNAxe/",
      hook: "Ideas, People, Progress — Corporate storytelling for high-intent buyers.",
      description: "Corporate and real estate content strategy crafted for high-value client acquisition and investor trust.",
      tags: ["RealEstate", "CorporateStrategy", "DubaiBusiness", "BrandGrowth"]
    },
    {
      id: "reel-6",
      title: "Signature On-Camera Tour 06",
      category: "real-estate",
      thumbnail: "/images/main-hero-image.png",
      views: "210.5K",
      likes: "19.3K",
      shares: "7.1K",
      platform: "instagram",
      sourceAccount: "silveroakglobal",
      sourceUrl: "https://www.instagram.com/reel/DbgeMPMtC7h/",
      hook: "Showcasing the pinnacle of Dubai luxury living and architecture.",
      description: "Prime on-camera presentation and walkthrough reel showcasing Dubai skyline views and luxury property features.",
      tags: ["DubaiLuxury", "PropertyTour", "OnCameraHost", "SilverOak"]
    }
  ],

  videoShowcase: {
    title: "Featured Video Campaign & On-Camera Feature",
    subtitle: "Showcasing high-production property tour direction, lifestyle promotion, and engaging on-screen hosting.",
    twitterEmbedUrl: "https://twitter.com/i/status/1800000000000000000",
    embedType: "custom",
    videoPoster: "/images/main-hero-image.png",
    headline: "Signature Dubai Campaign: People, Brands, Stories",
    duration: "1:45",
    role: "Presenter, Creator & Content Strategist",
    stats: "500K+ Total Cross-Platform Impressions"
  },

  galleryPhotos: [
    {
      id: "photo-1",
      title: "Dubai Skyline Golden Hour Shoot",
      category: "Personal Brand",
      image: "/images/main-hero-image.png",
      alt: "Ladli Gaur with Dubai skyline and Burj Al Arab backdrop at sunset",
      aspectRatio: "landscape",
      caption: "Panoramic personal brand campaign overlooking the iconic Dubai skyline."
    },
    {
      id: "photo-2",
      title: "From Ideas to Impact — Dubai Street",
      category: "Creator Campaign",
      image: "/images/about-impact.png",
      alt: "Ladli Gaur on Dubai city street at sunset - From Ideas to Impact",
      aspectRatio: "portrait",
      caption: "Brand collaboration and personal brand growth shoot in Dubai."
    },
    {
      id: "photo-3",
      title: "People. Brands. Stories.",
      category: "Editorial",
      image: "/images/people-brands-stories.png",
      alt: "Ladli Gaur editorial portrait in emerald dress",
      aspectRatio: "portrait",
      caption: "High-fashion editorial portrait showcasing creator storytelling philosophy."
    },
    {
      id: "photo-4",
      title: "Dubai Mall Waterfall Lifestyle Shoot",
      category: "Lifestyle & Travel",
      image: "/images/lifestyle-opportunities.png",
      alt: "Ladli Gaur at Dubai Mall waterfall",
      aspectRatio: "portrait",
      caption: "Lifestyle content creation at iconic Dubai architectural landmarks."
    },
    {
      id: "photo-5",
      title: "Creative Team Collaboration",
      category: "Production & Agency",
      image: "/images/team-collaboration.png",
      alt: "Ladli Gaur with creative agency team",
      aspectRatio: "portrait",
      caption: "Collaborating with directors, editors, and marketing specialists."
    },
    {
      id: "photo-6",
      title: "Ideas, People, Progress Boardroom",
      category: "Corporate & Strategy",
      image: "/images/team-boardroom.png",
      alt: "Ladli Gaur and team in boardroom with Dubai skyline mural",
      aspectRatio: "portrait",
      caption: "Strategic brand campaign planning and real estate marketing sessions."
    }
  ],

  experience: [
    {
      id: "silver-oak",
      role: "Social Media Marketing Specialist",
      company: "Silver Oak Properties",
      companyUrl: "https://www.instagram.com/silveroakglobal.ae",
      location: "Dubai, UAE",
      period: "Oct 2025 – Present",
      badge: "Current Role",
      type: "full-time",
      description: [
        "Plan, produce, and manage multi-platform social media campaigns designed to generate high-intent luxury real estate investor inquiries.",
        "Script, present, and edit high-energy on-camera property walk-throughs across Instagram Reels, TikTok, and YouTube Shorts.",
        "Implement tailored hashtag and SEO keyword strategies to achieve viral organic reach across UAE, GCC, and European buyer demographics.",
        "Direct competitor benchmarking, viral audio trend discovery, and creative content calendar execution.",
        "Collaborate closely with internal web developers and designers to ensure cohesive UI/UX and seamless landing page lead capture."
      ],
      metrics: [
        { label: "Target Market", value: "UAE & GCC Luxury" },
        { label: "Content Cadence", value: "5+ Reels / Week" },
        { label: "Conversion Focus", value: "Qualified Inquiries" }
      ],
      skills: ["Real Estate Marketing", "On-Camera Hosting", "CapCut Pro", "Meta Ads", "SEO & Hashtags"]
    },
    {
      id: "personal-brand",
      role: "Content Creator & Personal Brand Strategist",
      company: "Personal Brand (@ladligaur)",
      companyUrl: "https://www.instagram.com/ladligaur",
      location: "Dubai, UAE",
      period: "Jan 2026 – Present",
      badge: "35K+ Community",
      type: "part-time",
      description: [
        "Built and scaled an authentic multi-channel community to 35,000+ followers across Instagram, TikTok, and Facebook.",
        "Produce high-value educational and lifestyle content covering Dubai career growth, relocation guides, visa workflows, and insider city life.",
        "Partner with lifestyle, hospitality, and corporate brands for sponsored campaigns and brand ambassadorships."
      ],
      metrics: [
        { label: "Community Size", value: "35K+ Followers" },
        { label: "Avg. Engagement", value: "8.4%+" },
        { label: "Viral Reach", value: "1.2M+ Impr." }
      ],
      skills: ["Audience Growth", "Brand Deals", "Short-Form Video", "Community Management"]
    },
    {
      id: "hj-real-estate",
      role: "Social Media Marketing & SEO Specialist",
      company: "HJ Real Estate",
      location: "Dubai, UAE",
      period: "Feb 2024 – Jul 2025",
      type: "full-time",
      description: [
        "Architected an integrated social media and search engine optimization roadmap that propelled website traffic to over 50,000 monthly organic visitors.",
        "Boosted primary target keyword rankings for Dubai off-plan and luxury resale properties across Google UAE.",
        "Optimized Google Business Profile and local citation networks, driving steady local inbound call and walk-in volume.",
        "Delivered data-driven monthly executive reporting using Google Analytics 4, Search Console, and Meta Business Suite."
      ],
      metrics: [
        { label: "Organic Growth", value: "50,000+ Monthly" },
        { label: "Primary Toolset", value: "GA4 & GSC" },
        { label: "Duration", value: "1.5 Years" }
      ],
      skills: ["SEO Strategy", "Google Analytics 4", "Search Console", "Local SEO", "Content Optimization"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Arts (BA)",
      institution: "Maharishi Dayanand University",
      period: "2020 – 2023",
      location: "India",
      details: "Comprehensive foundation in communications, humanities, and analytical research."
    },
    {
      degree: "Premium Program in Digital Marketing",
      institution: "Digital Marketing Profs",
      period: "2020 – 2021",
      location: "India",
      details: "Advanced mastery of search marketing, paid social funnels, content planning, and analytics."
    }
  ],

  testimonials: [
    {
      quote: "Ladli brings an unmatched on-camera energy that immediately engages viewers. Her ability to translate complex luxury real estate listings into viral, digestible short-form reels is exceptional.",
      author: "Marketing Director",
      role: "Real Estate Division",
      company: "Dubai Luxury Property Group"
    },
    {
      quote: "Working with Ladli on brand collaborations is seamless. She understands hooks, pacing, and audience psychology better than most creators in the region.",
      author: "Brand Partnerships Lead",
      role: "Lifestyle & Hospitality",
      company: "Dubai Agency Partner"
    }
  ]
};
