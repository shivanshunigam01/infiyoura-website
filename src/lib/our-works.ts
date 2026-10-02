export type OurWorkProject = {
  title: string;
  category: string;
  url: string;
  tech: readonly string[];
  description: string;
  features: readonly string[];
  /** Path under /public/projects */
  previewImage?: string;
};

export const OUR_WORK_CATEGORY_STYLES: Record<string, string> = {
  Automobile: "bg-orange-500/20 text-orange-200 ring-1 ring-orange-500/35",
  EV: "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/35",
  Corporate: "bg-zinc-500/25 text-zinc-200 ring-1 ring-white/15",
  Finance: "bg-amber-500/20 text-amber-100 ring-1 ring-amber-500/35",
  Tools: "bg-violet-500/20 text-violet-200 ring-1 ring-violet-500/35",
  Travel: "bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-500/35",
  SaaS: "bg-sky-500/20 text-sky-200 ring-1 ring-sky-500/35",
  Healthcare: "bg-rose-500/20 text-rose-200 ring-1 ring-rose-500/35",
  Insurance: "bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-500/35",
  Enterprise: "bg-fuchsia-500/20 text-fuchsia-200 ring-1 ring-fuchsia-500/35",
};

export const OUR_WORKS_PROJECTS: readonly OurWorkProject[] = [
  {
    title: "Travelodeal UK",
    category: "Travel",
    previewImage: "/projects/travelodeal-uk.png",
    url: "https://www.travelodeal.co.uk/",
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "TypeScript", "REST APIs", "AWS", "DevOps"],
    description:
      "Travel-domain product for the UK market—holiday discovery, offers, and booking-oriented flows. Work spans the full stack and cloud delivery for a live production travel platform.",
    features: [
      "Travel & holiday-focused customer journeys",
      "Modern React / Next.js frontend with scalable APIs",
      "Cloud-hosted deployment and DevOps practices",
      "Performance-oriented delivery for a public travel site",
    ],
  },
  {
    title: "Punya Autowheels Platform",
    category: "Automobile",
    previewImage: "/projects/punya.png",
    url: "https://www.punyaautowheels.com/",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "AWS"],
    description:
      "Full-scale digital platform for an automobile dealership—vehicle showcasing, customer inquiries, and lead management with performance, scalability, and SEO.",
    features: [
      "Dynamic vehicle listing with detailed specifications",
      "Lead generation with inquiry tracking",
      "SEO-optimized architecture",
      "Scalable backend APIs",
    ],
  },
  {
    title: "Vikramshila Automobiles",
    category: "Automobile",
    previewImage: "/projects/vikramshila.png",
    url: "https://www.vikramshilaautomobiles.com/",
    tech: ["React.js", "Next.js", "Node.js"],
    description:
      "High-performance dealership website focused on customer engagement and conversion with structured navigation and optimized rendering.",
    features: [
      "Structured vehicle catalog",
      "Integrated inquiry and contact system",
      "Optimized frontend rendering",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "Patliputra VinFast",
    category: "EV",
    previewImage: "/projects/patliputravinfast.png",
    url: "https://patliputravinfast.in/",
    tech: ["Next.js", "React.js", "REST APIs"],
    description:
      "Modern EV dealership platform promoting electric mobility through an engaging interface, brand storytelling, and seamless user interaction.",
    features: [
      "EV product showcase with modern UI/UX",
      "Lead capture and inquiry system",
      "High-performance Next.js rendering",
      "Clean, minimal design",
    ],
  },
  {
    title: "Patliputra Group",
    category: "Corporate",
    previewImage: "/projects/patliputragroup.png",
    url: "https://patliputragroup.com/",
    tech: ["React.js", "Node.js"],
    description:
      "Corporate website representing multiple business verticals—structured content delivery, brand positioning, and scalable architecture.",
    features: [
      "Multi-business structured layout",
      "SEO-friendly page architecture",
      "Clean navigation and UI consistency",
      "Scalable, maintainable frontend",
    ],
  },
  {
    title: "Nanak Accountants",
    category: "Finance",
    previewImage: "/projects/nanak-accountants.png",
    url: "https://nanakaccountants.com.au/",
    tech: ["Next.js", "React.js"],
    description:
      "Professional accounting services platform for an international client—trust, clarity, conversion, and local SEO.",
    features: [
      "Professional minimal UI",
      "Service-focused content architecture",
      "SEO for local visibility",
      "Contact and consultation integration",
    ],
  },
  {
    title: "Amar Jyoti Upload System",
    category: "Tools",
    previewImage: "/projects/amarjyoti.png",
    url: "https://amarjyoti-flax.vercel.app/upload",
    tech: ["React.js", "Node.js", "Cloud Storage"],
    description:
      "Secure document upload system for managing user submissions with validation, storage handling, and a simple UI.",
    features: [
      "Secure file upload system",
      "Backend storage integration",
      "Input validation and error handling",
      "Lightweight, fast UI",
    ],
  },
  {
    title: "ZForce EV",
    category: "EV",
    previewImage: "/projects/zforceev.png",
    url: "https://www.zforceev.com/",
    tech: ["Next.js", "React.js"],
    description:
      "Visually engaging EV platform showcasing next-generation electric mobility with animations, performance, and responsive design.",
    features: [
      "Interactive product showcase",
      "Smooth animations and transitions",
      "Responsive modern UI",
      "Performance-optimized frontend",
    ],
  },
  {
    title: "Luxury Bus Rental",
    category: "Travel",
    previewImage: "/projects/luxury-bus-rental.png",
    url: "https://www.luxurybusrental.in/",
    tech: ["React.js", "Node.js"],
    description:
      "Lead-generation platform for luxury transportation—conversion-first layout to maximize booking inquiries.",
    features: [
      "Booking and inquiry system",
      "Structured service listings",
      "Mobile-optimized UI",
      "Conversion-focused layout",
    ],
  },
  {
    title: "Derxo Platform",
    category: "SaaS",
    previewImage: "/projects/derxo.png",
    url: "https://www.derxo.com/",
    tech: ["Next.js", "Node.js"],
    description:
      "Scalable SaaS platform with modular architecture and API-driven data handling built for flexibility and growth.",
    features: [
      "API-driven architecture",
      "Clean, scalable UI",
      "Modular frontend structure",
      "Optimized performance",
    ],
  },
  {
    title: "True Hospitals",
    category: "Healthcare",
    previewImage: "/projects/true-hospitals.png",
    url: "https://truehospitals.com/",
    tech: ["React.js", "Next.js"],
    description:
      "Healthcare platform streamlining patient interaction and hospital services with accessible, structured content.",
    features: [
      "Service and department listings",
      "Informational pages for patients",
      "Responsive UI",
      "Clean, accessible design",
    ],
  },
  {
    title: "Zentrosure",
    category: "Insurance",
    url: "https://zentrosure.com/",
    tech: ["Node.js", "React.js", "MySQL"],
    description:
      "Insurance-tech platform for structured data, policy listings, and user interactions with secure backend architecture.",
    features: [
      "Insurance product management",
      "Secure backend system",
      "API integrations",
      "Scalable architecture",
    ],
  },
  {
    title: "Cashivanand",
    category: "Finance",
    url: "https://cashivanand.com/",
    tech: ["React.js", "Node.js"],
    description:
      "Financial services platform with clean UI, structured navigation, and lead generation optimized for SEO.",
    features: [
      "Financial service presentation",
      "Lead generation system",
      "Clean minimal UI",
      "SEO-friendly architecture",
    ],
  },
  {
    title: "Zentroverse",
    category: "Enterprise",
    previewImage: "/projects/zentroverse.png",
    url: "https://www.zentroverse.com",
    tech: ["React.js", "Node.js", "AWS", "DevOps"],
    description:
      "Large-scale enterprise platform with multiple modules, role-based access, complex workflows, and scalable infrastructure.",
    features: [
      "Multi-module enterprise architecture",
      "Role-based access control",
      "Scalable backend system",
      "API integrations and automation",
    ],
  },
  {
    title: "Neuro Vihar Digital",
    category: "Healthcare",
    previewImage: "/projects/neuro-vihar.png",
    url: "https://neuro-vihar-digital-58.vercel.app/",
    tech: ["Next.js", "React.js"],
    description:
      "Modern healthcare interface focusing on usability, performance, and clean design for all users.",
    features: [
      "Responsive UI design",
      "Fast performance",
      "Clean minimal interface",
      "Structured content delivery",
    ],
  },
] as const;
