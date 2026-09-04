import { WorkExperience, TechStackItem, ProjectItem, SkillCategory, EducationItem, ContactInfo } from '../types';
import profilePic from "../assets/pp.jpg"; 
import anprPic from "../assets/ANPR.png";
import scangagePic from "../assets/scangage.png";
import comotLangsungPic from "../assets/comlang.png";
import telagaSaranganPic from "../assets/telaga.png";
import caffeIndMobilePic from "../assets/caffeind_mob.png";
import caffeIndWebPic from "../assets/caffeind_web.png";
import azureFitnessPic from "../assets/azure.png";
import luxoraPic from "../assets/luxora.png";
import globalVideoGameSalesPic from "../assets/global_vidgames.png";
import tokoMajuJayaPic from "../assets/majujaya.png";

export const personalInfo = {
  name: 'Aisya Tyanafisya',
  title: 'Software Engineering Enthusiast',
  tagline: 'Bridging Artificial Intelligence, Computer Vision, and Modern Software Engineering.',
  bio: 'A passionate Software Engineering student with hands-on experience in building industrial AI monitoring systems, Computer Vision pipelines (ANPR & YOLO), data annotation pipelines, and full-stack applications. Dedicated to crafting reliable, user-centric software that solves real-world engineering challenges.',
  location: 'Indonesia',
  availability: 'Open to Software Engineering & AI Roles',
  downloadCV: 'https://drive.google.com/drive/folders/1oO-Dar6L2Ity7ZN6zaYxTasrZ2Qc4yqz?usp=sharing',
  profilePic: profilePic
  };

export const workExperiences: WorkExperience[] = [
  {
    id: 'pt-indo-tambangraya-megah',
    company: 'PT Indo Tambangraya Megah',
    role: 'AI Engineer Intern',
    period: 'June 2025 – June 2026',
    location: 'Indonesia',
    type: 'Internship',
    highlights: [
      'Developed AI-based applications for safety monitoring (ANPR) integrated into industrial operational systems.',
      'Handled end-to-end data preparation for 10,000+ images across 6 projects, including data collection, annotation using Label Studio, and labeling to train and improve AI model robustness.',
      'Performed data processing and pipeline management to ensure clean, structured datasets ready for model training across varying environmental conditions.',
      'Achieved >90% plate recognition accuracy by evaluating and comparing multiple computer vision and OCR approaches including LLM-based models.',
      'Documented AI workflows and system designs, and collaborated with cross-functional teams to ensure AI components met operational reliability requirements.'
    ],
    skillsUsed: ['Computer Vision', 'ANPR', 'YOLO', 'LLM API', 'Label Studio', 'Python', 'Data Annotation', 'System Design']
  },
  {
    id: 'timedoor-academy',
    company: 'Timedoor Academy',
    role: 'Coding Mentor',
    period: 'September 2024 – May 2025',
    location: 'Indonesia',
    type: 'Mentorship',
    highlights: [
      'Mentored students in Python programming and computational thinking through project-based learning.',
      'Guided a student to achieve "Best Project Award" in a coding bootcamp.',
      'Communicated regularly with parents to report student progress and align learning expectations, building trust and strengthening long-term engagement.',
      'Persuaded 30+ prospective students to enroll in Timedoor Academy courses through effective communication and demonstration of program value.',
      'Adapted teaching methods to accommodate diverse learning paces and styles among young students, improving comprehension and retention of coding concepts.'
    ],
    skillsUsed: ['Python', 'Computational Thinking', 'Mentoring', 'Problem Solving', 'Curriculum Guidance', 'Code Review']
  }
];

export const techStackData: TechStackItem[] = [
  {
    id: 'llm-api',
    name: 'LLM API',
    category: 'AI & ML',
    icon: 'Sparkles',
    description: 'Generative AI & Multimodal OCR/Vision integration',
    color: '#FF84BA',
    bgLight: '#FFF4F4'
  },
  {
    id: 'yolo',
    name: 'YOLO',
    category: 'AI & ML',
    icon: 'Scan',
    description: 'Real-time object detection & ANPR license plate parsing',
    color: '#F9B2D7',
    bgLight: '#FFF4F4'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    icon: 'Terminal',
    description: 'Core language for AI, data processing, and scripting',
    color: '#3B82F6',
    bgLight: '#CFECF3'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Languages',
    icon: 'FileCode',
    description: 'Interactive web applications and client-side logic',
    color: '#F59E0B',
    bgLight: '#FFF4F4'
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Languages',
    icon: 'Code2',
    description: 'Semantic structure and accessible web layouts',
    color: '#EA580C',
    bgLight: '#FFF4F4'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Languages',
    icon: 'Palette',
    description: 'Responsive styling, animations, and modern UI design',
    color: '#06B6D4',
    bgLight: '#CFECF3'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases',
    icon: 'Database',
    description: 'Robust relational database for structured datasets',
    color: '#2563EB',
    bgLight: '#CFECF3'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Databases',
    icon: 'Server',
    description: 'High-performance SQL database for applications',
    color: '#0284C7',
    bgLight: '#CFECF3'
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Frameworks',
    icon: 'Layers',
    description: 'Full-featured PHP framework for backend web APIs',
    color: '#EF4444',
    bgLight: '#FFF4F4'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tools & Analytics',
    icon: 'GitBranch',
    description: 'Version control, branch management, and CI/CD collaboration',
    color: '#E11D48',
    bgLight: '#FFF4F4'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'Tools & Analytics',
    icon: 'BarChart3',
    description: 'Business intelligence and interactive visual dashboards',
    color: '#7C3AED',
    bgLight: '#FFF4F4'
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'Tools & Analytics',
    icon: 'PieChart',
    description: 'Enterprise data visualization and DAX modeling',
    color: '#D97706',
    bgLight: '#FFF4F4'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Tools & Analytics',
    icon: 'Figma',
    description: 'UI/UX interface prototyping and design systems',
    color: '#FF84BA',
    bgLight: '#FFF4F4'
  }
];

export const projectItems: ProjectItem[] = [
  // AI & Web Development
  {
    id: 'anpr-system',
    title: 'Automatic Number Plate Recognition (ANPR)',
    category: 'AI & Web Development',
    tagline: 'Computer vision pipeline for automatic number plate recognition in coal mining industry.',
    folderName: 'ANPR',
    date: '2026',
    role: 'AI Engineer Intern',
    techStack: ['Python', 'YOLO', 'LLM API', 'OpenCV', 'Label Studio', 'PostgreSQL'],
    imageUrl: anprPic,
    overview: 'Engineered an end-to-end Automatic Number Plate Recognition (ANPR) safety system designed to monitor operational vehicle entries and compliance across industrial mining sites. Successfully achieved over 90% plate detection and OCR accuracy by evaluating comparative models under harsh dust, night, and rain conditions.',
    features: [
      'Real-time vehicle detection and license plate recognition using fine-tuned YOLOv11',
      'Auto-reconnect mechanism for CCTV/RTSP streams to maintain uptime after disconnection',
      'Web-based monitoring dashboard (HTML, CSS, JavaScript) for live recognition results and system logs',
      'MySQL database backend for storing and managing real-time detection results and logs',
      'Benchmarked OCR approaches by comparing an LLM-based model (GPT-4o-mini) against Tesseract, EasyOCR, and other traditional engines',
      'Data preparation pipeline processing 2,000+ labeled images with Label Studio'
    ],
    metricsOrOutcomes: [
      '>90% plate recognition accuracy achieved across testing sets',
      '2,000+ high-quality annotated images curated across 6 sub-projects',
      'Improved OCR robustness under varying lighting and environmental conditions via LLM-based validation'
    ],
    highlights: [
      'Designed and validating model performance across multiple real-world scenarios for production reliability',
      'Presented benchmarking results (LLM vs. Tesseract vs. EasyOCR) and accuracy metrics to cross-functional engineering teams',
      'Designed robust annotation guidelines preventing class imbalances'
    ],
    mockupType: 'anpr-ai'
  },
  {
    id: 'scangage-odd-even-detector',
    title: 'ScanGage: Automated License Plate & Odd-Even Rule Detection System',
    category: 'AI & Web Development',
    tagline: 'Computer vision web tool for real-time vehicle license plate scanning and odd-even traffic compliance checking.',
    folderName: 'scangage',
    date: '2025',
    role: 'Project Manager & Frontend Developer',
    techStack: ['Python', 'YOLOv8', 'OpenCV / OCR', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: scangagePic,
    overview: 'Developed an automated vehicle license plate recognition and verification platform for an academic Computer Vision course. ScanGage processes uploaded imagery or camera feeds to detect vehicle license plates, extract registration characters, and instantly determine odd-even traffic compliance based on the final digit.',
    features: [
      'Automated license plate localization and bounding box detection using a trained YOLOv8 model',
      'Character extraction and Optical Character Recognition (OCR) pipeline to parse registration strings',
      'Rule validation logic that identifies the final numeric digit to classify vehicles into odd or even categories',
      'Interactive web-based user interface allowing seamless image/video input and immediate visual inspection overlay',
      'Result summary dashboard showing detection confidence, recognized plate text, and real-time rule verdict'
    ],
    metricsOrOutcomes: [
      'Successfully built and delivered an end-to-end computer vision pipeline fulfilling all course evaluation criteria',
      'Coordinated a cross-functional campus team from model integration to user-facing frontend development'
    ],
    highlights: [
      'Led project milestones as Project Manager while designing the interactive frontend evaluation dashboard',
      'Bridge-engineered raw computer vision inference outputs into intuitive visual status badges (Ganjil / Genap) for end users'
    ],
    mockupType: 'cv-ocr'
  },
  {
    id: 'comot-langsung',
    title: 'Comot Langsung - Landing Page for Thrift Clothing Business',
    category: 'AI & Web Development',
    tagline: 'Landing Page for Thrift/Vintage Clothing Business.',
    folderName: 'comot_langsung',
    date: '2024',
    role: 'Project Manager & Frontend Developer',
    techStack: ['CSS', 'JavaScript', 'HTML', 'PHP', 'Laravel', 'MySQL'],
    imageUrl: comotLangsungPic,
    overview: 'A web-based product catalog and company profile landing page built for a thrift/vintage clothing business owner, translating direct client requirements into a functional, user-friendly interface to showcase their products and brand online.',
    features: [
      'Company profile landing page showcasing the thrift store\'s brand and product catalog',
      'Requirements gathered directly through stakeholder engagement with the business owner',
      'Full-stack development using HTML, CSS, and JavaScript for the frontend and Laravel with MySQL for the backend and database',
      'Responsive, user-friendly interface tailored to the client\'s business needs'
    ],
    metricsOrOutcomes: [
      'Delivered a functional product catalog aligned with the client\'s branding and business goals',
      'Successfully managed project scope, timeline, and delivery as Project Manager'
    ],
    highlights: [
      'Led end-to-end client communication, translating business requirements into technical specifications',
      'Balanced project management and hands-on frontend development responsibilities'
    ],
    mockupType: 'cv-ocr'
  },

  // UI/UX
  {
    id: 'telaga-sarangan-ar-experience',
    title: 'Telaga Sarangan: Folklore Interactive AR Mobile App',
    category: 'UI/UX',
    tagline: 'Gamified cultural storytelling and interactive AR interface tailored for young learners.',
    folderName: 'Telaga_Sarangan_AR',
    date: '2025',
    role: 'UI/UX Designer',
    techStack: ['Figma', 'User Persona', 'Mobile UI Design', 'Interactive Prototyping', 'Usability Testing'],
    imageUrl: telagaSaranganPic,
    overview: 'Designed a playful and immersive mobile user interface for an Augmented Reality folklore experience depicting the legend of Telaga Sarangan. Tailored specifically for student personas (elementary to high school), the visual system blends vibrant sky-blue aesthetics, 3D character illustrations, and structured bite-sized modal cards to make cultural heritage education engaging and accessible.',
    features: [
      'Friendly onboarding flow showcasing progressive 3D visual storytelling (Egg to Dragon folklore transformation)',
      'Clean vertical home menu with clear CTAs for AR launch, story library, and app guidelines',
      'Curved modal overlay system for readable historical narratives and structured usage tutorials',
      'Persistent bottom-sheet audio narrative controllers with interactive playback states',
      'Unobtrusive AR HUD overlay with minimal back-navigation and direct sound toggles for focused 3D camera engagement'
    ],
    metricsOrOutcomes: [
      'Developed 2 distinct user personas (elementary student & high school creative) directly driving the visual language and font legibility choices',
      'Completed a cohesive high-fidelity design system covering 12+ screen states from splash screen to AR overlay cards',
      'Validated 100% user comprehension on AR camera controls through prototype walkthrough testing with target age groups'
    ],
    highlights: [
      'Solved visual fatigue in traditional history learning by replacing dense text with scannable modal cards and integrated audio guides',
      'Created child-friendly tactile UI components using soft-cornered pill buttons and playful thematic illustrations'
    ],
    mockupType: 'ui-design'
  },
  {
    id: 'comot-langsung-vintage-ecommerce',
    title: 'Comot Langsung: Vintage Thrift Web & Direct-Order Interface',
    category: 'UI/UX',
    tagline: 'Retro-modern e-commerce web interface tailored for seamless WhatsApp direct ordering and vintage curation.',
    folderName: 'Comot_Langsung_Web',
    date: '2025',
    role: 'UI/UX Designer',
    techStack: ['Figma', 'Web UI Design', 'Design Systems', 'Stakeholder Alignment', 'Interactive Prototyping'],
    imageUrl: comotLangsungPic,
    overview: 'Designed a comprehensive web storefront and ordering interface for Comot Langsung, an online vintage apparel and thrift store. Collaborated closely with the business owner to translate stakeholder requirements into a functional e-commerce journey that blends raw street/vintage aesthetic branding with a streamlined direct-to-WhatsApp order and QRIS payment verification flow.',
    features: [
      'Vintage-styled landing page showcasing curated drop collections, new arrivals, and brand value propositions',
      'Structured shop catalog with multi-column product grids and category-based filtering',
      'Product detail page featuring responsive image thumbnail galleries, condition badges, and size specifications',
      'Hybrid checkout interface supporting form input, QRIS digital payment prompt, and direct WhatsApp order confirmation routing',
      'End-to-end user account portal covering authentication (Sign In/Sign Up states), profile management, and order history tracking',
      'Dedicated informational pages including responsive store location map (Contact Us) and brand narrative layout (About Us)'
    ],
    metricsOrOutcomes: [
      'Architected an end-to-end Figma UI kit and page architecture spanning 16+ distinct desktop screens and validation modal states',
      'Reduced customer checkout friction by mapping a direct order flow connecting web product selections straight to WhatsApp chat threads',
      'Aligned 100% of the UI design system with stakeholder business needs—balancing raw thrift aesthetics with legible utility navigation'
    ],
    highlights: [
      'Established a high-contrast vintage color scheme (charcoal dark footers, warm accents, and clean product display grids)',
      'Standardized form feedback modals (success/error alerts) across sign-in, profile editing, and checkout submission points'
    ],
    mockupType: 'ui-design'
  },
  {
    id: 'caffe-ind-mobile-experience',
    title: 'Caffe-Ind: Smart Ordering & Caffeine Intake Reminder App',
    category: 'UI/UX',
    tagline: 'Bridging specialty coffee ordering with mindful daily caffeine limit monitoring and community engagement.',
    folderName: 'Caffe_Ind_Mobile',
    date: '2025',
    role: 'UI/UX Designer',
    techStack: ['Figma', 'Mobile UI Design', 'Data Visualization', 'Interaction Design', 'Interactive Prototyping'],
    imageUrl: caffeIndMobilePic,
    overview: 'Designed a comprehensive mobile application in collaboration with coffee shop partner KOPInTOUCH. Caffe-Ind merges beverage ordering with a daily intake monitoring companion, helping users enjoy their favorite coffee while keeping track of their daily caffeine levels through intuitive consumption charts, real-time limit reminders, and an integrated coffee community forum.',
    features: [
      'Onboarding & authentication suite featuring guided coffee persona selection and account setup',
      'Catalog & order flow integrated with digital payment prompts and quick-scan pickup QR codes',
      'Daily caffeine dashboard with color-coded pie charts, intake trends, and threshold limit warnings to prevent overconsumption',
      'Drink intake logging flow with automatic caffeine calculation based on the ordered menu',
      'Interactive community discussion forum featuring category filtering, topic threads, and peer comment interactions',
      'Account & profile management covering loyalty badges, profile editing, security settings, and order history tracking'
    ],
    metricsOrOutcomes: [
      'Designed 30+ comprehensive high-fidelity mobile screens covering end-to-end edge states, modals, and sub-flows',
      'Translated daily caffeine safety thresholds into scannable charts and clear reminder alerts without disrupting the ordering experience',
      'Established a bold visual identity using signature crimson/maroon tones balanced with clean, high-contrast readable layouts'
    ],
    highlights: [
      'Engineered intuitive data visualization widgets and alert badges that notify users before reaching their daily caffeine threshold',
      'Built a balanced app ecosystem combining commercial coffee ordering with mindful health reminder utilities and social community features'
    ],
    mockupType: 'ui-design'
  },
  {
    id: 'caffe-ind-web-platform',
    title: 'Caffe-Ind: Responsive Web Platform for Coffee Ordering & Caffeine Tracking',
    category: 'UI/UX',
    tagline: 'Cross-platform desktop companion for mindful caffeine monitoring and seamless beverage ordering.',
    folderName: 'Caffe_Ind_Web',
    date: '2025',
    role: 'UI/UX Designer',
    techStack: ['Figma', 'Web UI Design', 'Responsive Layout', 'Design Systems', 'Interactive Prototyping'],
    imageUrl: caffeIndWebPic,
    overview: 'Designed a full-featured desktop web counterpart for Caffe-Ind in partnership with KOPInTOUCH. The web platform mirrors the mobile ecosystem, extending the experience to desktop browsers with spacious layouts, complete ordering flows, interactive caffeine monitoring dashboards, and community forum pages while preserving a unified brand identity across both platforms.',
    features: [
      'Hero landing page showcasing brand storytelling, partner collaboration highlights, and direct mobile app download links',
      'Responsive digital menu views offering both compact list view and expansive visual grid layouts with caffeine content tags',
      'Expanded desktop caffeine analytics dashboard displaying daily intake pie charts, weekly trends, and threshold limit indicators',
      'Integrated community discussion hub with multi-column thread feeds, comment sections, and topic search',
      'Full desktop authentication suite (Sign In/Out, Register, and Password Reset) with modular center-card layouts',
      'Dedicated user portal for logging daily drinks, viewing KOPInTOUCH order histories, and editing profile preferences'
    ],
    metricsOrOutcomes: [
      'Architected an expansive multi-page desktop UI system maintaining 100% visual and token consistency with the mobile application',
      'Optimized data visualization components for widescreen viewports without compromising readability of caffeine threshold charts',
      'Successfully mapped multi-step ordering and drink-logging journeys into intuitive, wide-grid desktop interactions'
    ],
    highlights: [
      'Maintained cohesive cross-device design language using signature crimson/maroon branding, patterned headers, and high-contrast cards',
      'Translated mobile bottom-sheet dialogues into spacious modal windows and structured side-by-side desktop form layouts'
    ],
    mockupType: 'ui-design'
  },
  {
    id: 'azure-gym-fitness-tracker',
    title: 'Azure: Smart Gym Companion & Machine Tutorial UI',
    category: 'UI/UX',
    tagline: 'Streamlined workout companion featuring gym machine scanning guides and live repetition tracking.',
    folderName: 'Azure_Fitness_App',
    date: '2025',
    role: 'UI/UX Designer',
    techStack: ['Figma', 'Mobile UI Design', 'Fitness Tech UI', 'Workout Tracking Interface', 'Interactive Prototyping'],
    imageUrl: azureFitnessPic,
    overview: 'Designed an intuitive mobile fitness app called Azure, built to assist gym-goers with machine orientation and workout tracking. The interface allows users to scan gym equipment to access step-by-step visual usage tutorials, paired with real-time repetition counting, set trackers, and comprehensive daily metric summaries on the home dashboard.',
    features: [
      'Immersive photo-driven onboarding and glassmorphism authentication flow with personal goal setup',
      'Home dashboard summarizing daily fitness metrics, active calories, sleep, and workout streaks',
      'Equipment scanner UI with full-screen camera view and visual tutorial states for proper exercise execution',
      'Workout execution screens featuring set-by-set repetition counters, warm-up intervals, and completion feedback',
      'Activity & Goals tracking tabs displaying weekly progress charts, targeted muscle splits, and scheduled routines',
      'Integrated gym membership selection, payment status confirmation, settings, and social fitness feed'
    ],
    metricsOrOutcomes: [
      'Crafted an end-to-end mobile design system with 25+ detailed UI screens and interactive workout states',
      'Engineered an ergonomic exercise tracking interface optimized for quick one-handed adjustments during intense workout sets',
      'Balanced dark gym photography aesthetics with high-visibility cyan/teal UI elements for readable indoor use'
    ],
    highlights: [
      'Structured clear, glanceable repetition and set countdown cards positioned cleanly below exercise visual guides',
      'Maintained cohesive glassmorphism and gradient accents across splash, onboarding cards, and workout completion dialogs'
    ],
    mockupType: 'ui-design'
  },
  {
    id: 'luxora-property-booking-app',
    title: 'Luxora: Hotel & Apartment Accommodation Booking App',
    category: 'UI/UX',
    tagline: 'Modern, serene mobile hospitality interface designed for frictionless stay discovery and reservations.',
    folderName: 'Luxora_Booking_App',
    date: '2024',
    role: 'UI/UX Designer',
    techStack: ['Figma', 'Mobile UI Design', 'Design Systems', 'Flow Mapping', 'Prototyping'],
    imageUrl: luxoraPic,
    overview: 'Designed a mobile accommodation booking interface created as a UI/UX certification course project. Luxora streamlines the process of discovering, comparing, and reserving boutique hotels and serviced apartments through an organic sage-green aesthetic, clean card architecture, and an intuitive end-to-end booking journey.',
    features: [
      'Onboarding walkthrough featuring flat custom illustrations and social login authentication (Sign In & Sign Up)',
      'Discovery homepage with category filters, curated top stays, and location-based recommendation banners',
      'Comprehensive search filter interface supporting check-in date selection, guest counter, star rating, and price sliders',
      'Multi-tab property detail views covering high-res imagery, amenity checklists, location maps, and room selection cards',
      'Streamlined booking and checkout confirmation flow ending in a clear digital payment success screen',
      'Dedicated user dashboard tabs including saved wishlist/favorites, active booking tickets, customer reviews, and profile management'
    ],
    metricsOrOutcomes: [
      'Architected an end-to-end mobile design flow spanning 24+ consistent high-fidelity screens',
      'Successfully fulfilled all UI/UX course project requirements with emphasis on visual hierarchy and usability heuristics',
      'Created a calm, accessible visual identity centered around natural sage-green tones and readable typography'
    ],
    highlights: [
      'Maintained strong typographic hierarchy and whitespace balance across dense property specification and pricing screens',
      'Designed modular property card components adaptable for horizontal scroll carousels, vertical listings, and wishlist grids'
    ],
    mockupType: 'ui-design'
  },
    

  // Data Analyst
  {
    id: 'global-video-game-sales-analysis',
    title: 'Global Video Game Sales Analysis Dashboard',
    category: 'Data Analyst',
    tagline: 'Tableau dashboard exploring global video game sales trends from 1980-2020.',
    folderName: 'video_game_sales',
    date: '2025',
    role: 'Data Analyst',
    techStack: ['Tableau', 'Data Visualization', 'Data Analysis'],
    imageUrl: globalVideoGameSalesPic,
    overview: 'An interactive Tableau dashboard analyzing a Kaggle dataset of 16,598 video game titles released between 1980 and 2020, exploring genre popularity, platform performance, and global sales trends over time.',
    features: [
      'KPI summary highlighting top genre (Action) and total games released',
      'Time-series comparison of global sales trends across PS-PS4 console generations',
      'Bubble chart ranking top 10 genres by global sales volume',
      'Bar chart comparison of total global sales across all gaming platforms',
      'Treemap visualization of top 3 genres and game release counts by year',
      'Filterable, detailed game list table with genre, publisher, and platform breakdown'
    ],
    metricsOrOutcomes: [
      'Analyzed 16,598 games released between 1980-2020',
      'Identified Action as the dominant genre with 3,316 titles',
      'Visualized sales lifecycle trends across 6 console generations (PS to PS4)'
    ],
    highlights: [
      'Built a dark-themed, executive-style dashboard layout optimized for readability of dense data',
      'Combined trend, distribution, and hierarchical (treemap) visualizations to tell a cohesive sales story'
    ],
    mockupType: 'dashboard'
  },
  {
    id: 'toko-maju-jaya-sales-dashboard',
    title: 'Toko Maju Jaya - Retail Sales Analytics Dashboard',
    category: 'Data Analyst',
    tagline: 'Interactive Power BI dashboard analyzing multi-store retail sales performance.',
    folderName: 'toko_maju_jaya',
    date: '2025',
    role: 'Data Analyst',
    techStack: ['Power BI', 'Data Visualization', 'Data Analysis'],
    imageUrl: tokoMajuJayaPic,
    overview: 'An interactive Power BI dashboard built from a Kaggle retail dataset to analyze sales performance across three stores (Toko A, B, C), tracking revenue trends, product correlation, and workforce impact on sales.',
    features: [
      'KPI summary cards displaying total products sold and total revenue',
      'Monthly sales trend visualization broken down by store',
      'Annual sales distribution comparison across all three stores',
      'Correlation analysis between product availability and total sales',
      'Correlation analysis between employee headcount and sales performance',
      'Detailed monthly revenue and expense breakdown table per store'
    ],
    metricsOrOutcomes: [
      'Analyzed 46K total units sold and Rp19.60M in total revenue',
      'Tracked Rp128.11M in cumulative operational expenses across stores',
      'Identified sales distribution split of ~36% / 32% / 32% across the three stores'
    ],
    highlights: [
      'Designed a multi-panel dashboard layout balancing KPIs, trends, and correlation insights on a single view',
      'Built custom data visualizations to support cross-filtering between store, month, and product metrics'
    ],
    mockupType: 'dashboard'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'hard-skills',
    title: 'Hard Skills',
    type: 'hard',
    description: 'Core technical proficiencies in software engineering, AI, and computer vision.',
    icon: 'Cpu',
    items: [
      { name: 'Python'},
      { name: 'Machine Learning'},
      { name: 'Computer Vision'},
      { name: 'Data Analysis'},
      { name: 'SQL'},
      { name: 'API Integration'},
      { name: 'Git'},
      { name: 'YOLO'},
      { name: 'Web Development'},
      { name: 'UI/UX Design'}
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    type: 'soft',
    description: 'Interpersonal, cognitive, and collaborative strengths powering team success.',
    icon: 'Sparkles',
    items: [
      { name: 'Collaboration'},
      { name: 'Problem Solving'},
      { name: 'Analytical Thinking'},
      { name: 'Communication'},
      { name: 'Documentation'},
      { name: 'Leadership'},
      { name: 'Adaptability'},
      { name: 'Time Management'},
      { name: 'Critical Thinking'},
      { name: 'Creativity'}
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    type: 'tools',
    description: 'Industry-standard IDEs, cloud suites, and analytics platforms used daily.',
    icon: 'Wrench',
    items: [
      { name: 'Visual Studio Code', context: 'Primary code editor with extensions & debugger' },
      { name: 'Git', context: 'CLI & GitHub version control workflows' },
      { name: 'Windows Environment', context: 'Daily OS for development and system testing' },
      { name: 'Tableau', context: 'Interactive BI dashboard creation and visual metrics' },
      { name: 'Power BI', context: 'DAX modeling, ETL reporting & dashboard distribution' },
      { name: 'Microsoft Office', context: 'Excel data handling, PowerPoint presentations' },
      { name: 'Google Workspace', context: 'Collaborative docs, sheets & shared drives' },
      { name: 'Jupyter Notebook', context: 'Exploratory data analysis and model experimentation' },
      { name: 'Google Colab', context: 'Cloud GPU model training and quick prototyping' },
      { name: 'Figma', context: 'UI wireframing, component design systems & prototypes' }
    ]
  },
  {
    id: 'languages',
    title: 'Languages',
    type: 'languages',
    description: 'Linguistic proficiencies for international and local collaboration.',
    icon: 'Globe',
    items: [
      { name: 'Bahasa Indonesia (Native)', level: 'Native', context: 'Native proficiency in verbal and written communication' },
      { name: 'English (Professional Working Proficiency)', level: 'Professional Working Proficiency', context: 'Fluent in technical documentation, presentations, and collaborative communication' }
    ]
  }
];

export const educations: EducationItem[] = [
  {
    id: 'ipb-university',
    institution: 'College of Vocational Studies IPB University',
    degree: 'Bachelor of Applied Software Engineering',
    field: 'Software Engineering',
    period: '2022 – 2026',
    score: '3.69',
    scoreLabel: 'GPA: 3.69 / 4.00',
    location: 'Bogor, Indonesia',
    highlights: [
      'Active in Micro IT Community and volunteered in various campus events.',
      'Maintained consistent high academic standing (GPA 3.69/4.00) with strong practical course evaluations.'
    ]
  },
  {
    id: 'sman-8-tangsel',
    institution: 'SMAN 8 Tangerang Selatan',
    degree: 'Senior High School Diploma',
    field: 'Science',
    period: '2019 – 2022',
    score: '86',
    scoreLabel: 'Final Grade: 86 / 100',
    location: 'South Tangerang, Indonesia',
    highlights: [
      'Major in Natural Sciences (IPA)',
      'Active member of a nature and outdoor exploration organization.'
    ]
  }
];

export const contactInfo: ContactInfo = {
  email: 'tyanafisyaaisya@gmail.com',
  whatsapp: '085817840877',
  whatsappRaw: '6285817840877',
  instagram: 'aisyatyanafisya',
  instagramUrl: 'https://instagram.com/aisyatyanafisya',
  linkedin: 'linkedin.com/in/aisya-tyanafisya',
  linkedinUrl: 'https://www.linkedin.com/in/aisya-tyanafisya',
  github: 'github.com/Aisyatyanafisya',
  githubUrl: 'https://github.com/Aisyatyanafisya'
};
