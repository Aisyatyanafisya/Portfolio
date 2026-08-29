import { WorkExperience, TechStackItem, ProjectItem, SkillCategory, EducationItem, ContactInfo } from '../types';

export const personalInfo = {
  name: 'Aisya Tyanafisya',
  title: 'Software Engineering Enthusiast',
  tagline: 'Bridging Artificial Intelligence, Computer Vision, and Modern Software Engineering.',
  bio: 'A passionate Software Engineering student with hands-on experience in building industrial AI monitoring systems, Computer Vision pipelines (ANPR & YOLO), data annotation pipelines, and full-stack applications. Dedicated to crafting reliable, user-centric software that solves real-world engineering challenges.',
  location: 'Indonesia',
  availability: 'Open to Software Engineering & AI Roles',
  stats: [
    { label: 'Dataset Processed', value: '10,000+ Imgs' },
    { label: 'Plate Accuracy', value: '>90%' },
    { label: 'IPB University GPA', value: '3.69 / 4.00' },
    { label: 'Mentoring Impact', value: 'Best Project Award' }
  ]
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
      'Guided a student to achieve "Best Project Award" in a coding bootcamp.'
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
    id: 'industrial-anpr-system',
    title: 'Industrial ANPR & Safety Monitoring System',
    category: 'AI & Web Development',
    tagline: 'Computer vision pipeline for automatic number plate recognition in heavy industry.',
    folderName: 'Industrial_ANPR_v2.0',
    date: '2025 – 2026',
    role: 'AI Engineer Intern',
    techStack: ['Python', 'YOLO', 'LLM API', 'OpenCV', 'Label Studio', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    overview: 'Engineered an end-to-end Automatic Number Plate Recognition (ANPR) safety system designed to monitor operational vehicle entries and compliance across industrial mining sites. Successfully achieved over 90% plate detection and OCR accuracy by evaluating comparative models under harsh dust, night, and rain conditions.',
    features: [
      'Real-time vehicle detection and license plate cropping using fine-tuned YOLO',
      'Dual-stage OCR benchmarking combining specialized computer vision models with LLM API validation',
      'Automated alert dispatcher when unpermitted vehicles enter safety-restricted zones',
      'Data preparation pipeline processing 10,000+ labeled images with Label Studio'
    ],
    metricsOrOutcomes: [
      '>90% Plate Recognition Accuracy achieved across testing sets',
      '10,000+ High-quality annotated images curated across 6 sub-projects',
      'Sub-second real-time inference latency for operational gates'
    ],
    highlights: [
      'Presented findings and accuracy metrics to cross-functional engineering teams',
      'Designed robust annotation guidelines preventing class imbalances'
    ],
    mockupType: 'anpr-ai'
  },
  {
    id: 'smart-vision-safety-dashboard',
    title: 'Smart Vision Inspection & Operations Hub',
    category: 'AI & Web Development',
    tagline: 'Web dashboard connecting edge cameras to live AI inference pipelines.',
    folderName: 'Vision_Ops_Hub',
    date: '2025',
    role: 'Full Stack & AI Engineer',
    techStack: ['Laravel', 'Python', 'MySQL', 'JavaScript', 'Tailwind CSS', 'YOLO'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    overview: 'A web-based operational command portal enabling site managers to inspect camera feeds, review flagged safety violations, view detected vehicle history, and manage access logs seamlessly in real time.',
    features: [
      'Live stream telemetry view with bounding boxes and confidence score overlay',
      'Automated violation snapshot archiving with timestamp and license plate tags',
      'Role-based access controls for security officers and site supervisors',
      'REST API endpoints in Laravel connecting Python inference workers'
    ],
    metricsOrOutcomes: [
      'Streamlined incident review time by 65%',
      'Handled concurrent multi-camera feeds with reliable logging'
    ],
    highlights: [
      'Modular microservice architecture separating inference from UI rendering'
    ],
    mockupType: 'web-app'
  },
  {
    id: 'ai-assisted-dataset-labeler',
    title: 'AI-Assisted Annotation & Dataset Pipeline',
    category: 'AI & Web Development',
    tagline: 'Automated data curation and preprocessing pipeline for computer vision models.',
    folderName: 'Auto_Dataset_Pipeline',
    date: '2024 – 2025',
    role: 'Lead Developer',
    techStack: ['Python', 'Label Studio API', 'PostgreSQL', 'Docker', 'Git'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    overview: 'A pipeline utility built to accelerate dataset preparation by applying pre-labeling heuristics, automated image augmentations (blur, contrast, rain filters), and format conversions between YOLO, COCO, and Pascal VOC.',
    features: [
      'Pre-annotation scripts saving manual labeling time by up to 40%',
      'Quality check validator identifying misaligned bounding boxes and duplicate frames',
      'Direct synchronization with Label Studio cloud workspace',
      'Automated train/validation/test split generation with distribution plots'
    ],
    metricsOrOutcomes: [
      'Cut dataset turnaround cycle from 3 weeks to 6 days',
      'Maintained consistent annotation standards across 6 distinct projects'
    ],
    highlights: [
      'Created comprehensive documentation for cross-team labelers'
    ],
    mockupType: 'cv-ocr'
  },

  // UI/UX
  {
    id: 'safety-ops-figma-system',
    title: 'Industrial Safety Monitoring UI Design System',
    category: 'UI/UX',
    tagline: 'High-contrast, accessible UI system for high-pressure control room environments.',
    folderName: 'Industrial_UI_Kit',
    date: '2025',
    role: 'UI/UX Designer & Researcher',
    techStack: ['Figma', 'Design Tokens', 'User Research', 'Prototyping'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    overview: 'Designed a specialized dark and light control room dashboard interface tailored for 24/7 industrial surveillance. Focused on low cognitive load, rapid error identification, and tactile accessibility.',
    features: [
      'Comprehensive component library with 120+ responsive Figma components',
      'Color-coded safety alert taxonomy adhering to ISO industrial standards',
      'Interactive prototype tested with field operators and security personnel',
      'Responsive adaptations for widescreen multi-monitor setups and rugged tablets'
    ],
    metricsOrOutcomes: [
      '100% component reusability across web and tablet views',
      'Tested with 8 operators with a 92% System Usability Scale (SUS) rating'
    ],
    highlights: [
      'Created thorough design tokens for colors, typography, and elevation'
    ],
    mockupType: 'ui-design'
  },
  {
    id: 'timedoor-edutech-ui',
    title: 'EduTech CodeLab Platform Interface',
    category: 'UI/UX',
    tagline: 'Gamified and welcoming computational learning environment for young coders.',
    folderName: 'CodeLab_Edu_UI',
    date: '2024',
    role: 'Product Designer',
    techStack: ['Figma', 'Interactive Prototyping', 'Design Thinking'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    overview: 'Crafted an intuitive, friendly educational interface inspired by visual programming. Designed to demystify complex Python syntax for young learners and highlight project achievement milestones.',
    features: [
      'Visual code explorer with interactive block-to-Python transition tooltips',
      'Gamified badge & achievement celebration modal pop-ups',
      'Mentor feedback panel with inline annotation stickers and encouragement notes'
    ],
    metricsOrOutcomes: [
      'Directly informed Timedoor project curriculum presentation designs',
      'Boosted student project submission satisfaction'
    ],
    highlights: [
      'Conducted empathy interviews with young students and coding instructors'
    ],
    mockupType: 'ui-design'
  },
  {
    id: 'smart-annotation-studio-ui',
    title: 'Vision Studio Annotation Tool UX',
    category: 'UI/UX',
    tagline: 'Streamlined desktop workspace interface for fast bounding-box labeling.',
    folderName: 'Vision_Studio_UX',
    date: '2024',
    role: 'UI/UX Designer',
    techStack: ['Figma', 'Wireframing', 'User Testing'],
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
    overview: 'A minimalist tool workspace prototype designed to reduce wrist fatigue and maximize keyboard-driven workflow efficiency for data annotators working on high-volume image batches.',
    features: [
      'Keyboard shortcut HUD with instant visual feedback',
      'Smart zoom magnifier and contrast adjust sliders for dark surveillance frames',
      'Batch progress overview and anomaly inspector drawers'
    ],
    metricsOrOutcomes: [
      'Designed to reduce repetitive clicks per image annotation by ~30%'
    ],
    highlights: [
      'Focused on ergonomic UI spacing and clean visual hierarchy'
    ],
    mockupType: 'ui-design'
  },

  // Data Analyst
  {
    id: 'vehicle-safety-powerbi',
    title: 'Operational Vehicle & Safety Telemetry Analytics',
    category: 'Data Analyst',
    tagline: 'Interactive Power BI reporting system visualizing fleet movement and ANPR metrics.',
    folderName: 'Vehicle_Telemetry_BI',
    date: '2025',
    role: 'Data Analyst & BI Developer',
    techStack: ['Power BI', 'DAX', 'PostgreSQL', 'SQL', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    overview: 'Built an analytical reporting suite that ingests ANPR camera logs, vehicle classifications, and zone permissions to uncover traffic bottlenecks, peak operational hours, and unauthorized gate access trends.',
    features: [
      'Interactive time-series heatmap showcasing peak hourly traffic volume',
      'Anomaly detection drill-through for unregistered plate occurrences',
      'Custom DAX measures for average gate clearance turnaround and violation rates',
      'Automated scheduled refresh connected directly to PostgreSQL staging views'
    ],
    metricsOrOutcomes: [
      'Analyzed 50,000+ historical vehicle transit records',
      'Identified peak bottleneck intervals enabling 20% faster gate transitions'
    ],
    highlights: [
      'Built reusable star-schema data models and documented DAX measures'
    ],
    mockupType: 'dashboard'
  },
  {
    id: 'model-accuracy-tableau',
    title: 'Computer Vision Model Evaluation & Benchmark Dashboard',
    category: 'Data Analyst',
    tagline: 'Tableau visual intelligence tracking precision, recall, and environmental stress tests.',
    folderName: 'Model_Benchmarking_Tableau',
    date: '2025',
    role: 'Data Analyst',
    techStack: ['Tableau', 'Python', 'Pandas', 'SQL'],
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    overview: 'Created an executive and engineering evaluation dashboard in Tableau to compare ANPR and OCR model iterations across 6 environmental conditions (daylight, heavy rain, night glare, dust, high velocity, and tilt).',
    features: [
      'Interactive confusion matrix and PR curve visualizers for each YOLO checkpoint',
      'Environmental sensitivity matrix pinpointing OCR failure modes',
      'Dataset distribution analyzer verifying balance across 10,000+ annotated images',
      'Executive summary cards highlighting sprint-over-sprint accuracy improvements'
    ],
    metricsOrOutcomes: [
      'Directly guided model fine-tuning hyperparameters resulting in >90% benchmark accuracy',
      'Provided transparent visual reporting for engineering leads and management'
    ],
    highlights: [
      'Automated Python scripts to parse inference log files into clean tabular data'
    ],
    mockupType: 'dashboard'
  },
  {
    id: 'edutech-student-analytics',
    title: 'Student Computational Thinking & Milestone Analytics',
    category: 'Data Analyst',
    tagline: 'Educational data exploration identifying learning curves and project mastery patterns.',
    folderName: 'Student_Learning_Insights',
    date: '2024 – 2025',
    role: 'Coding Mentor & Analyst',
    techStack: ['Python', 'Pandas', 'Tableau', 'Microsoft Office'],
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    overview: 'Aggregated student exercise completion rates, debugging times, and quiz metrics to identify common cognitive roadblocks in Python programming loops and algorithms.',
    features: [
      'Curriculum difficulty heatmaps highlighting concepts needing extra instructional support',
      'Individual student mastery scorecards tracking project progress',
      'Predictive indicators for students needing 1-on-1 mentorship interventions'
    ],
    metricsOrOutcomes: [
      'Helped increase course completion rate to 94%',
      'Supported student trajectory leading to "Best Project Award" victory'
    ],
    highlights: [
      'Presented data-backed curriculum adjustment recommendations to academic leads'
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
      { name: 'Python', context: 'Data pipelines, PyTorch, OpenCV & script automation', proficiency: 92 },
      { name: 'Machine Learning', context: 'Supervised learning, classification & benchmarking', proficiency: 88 },
      { name: 'Computer Vision', context: 'Object detection, OCR & image processing', proficiency: 90 },
      { name: 'Data Analysis', context: 'Exploratory data analysis, statistics & cleaning', proficiency: 88 },
      { name: 'SQL', context: 'Complex queries, schema design & joins', proficiency: 85 },
      { name: 'API Integration', context: 'RESTful endpoints, LLM API & backend hooks', proficiency: 86 },
      { name: 'Git', context: 'Branching, PRs, version control & collaboration', proficiency: 90 },
      { name: 'YOLO', context: 'Model fine-tuning, inference & bounding box optimization', proficiency: 92 }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    type: 'soft',
    description: 'Interpersonal, cognitive, and collaborative strengths powering team success.',
    icon: 'Sparkles',
    items: [
      { name: 'Collaboration', context: 'Working effectively across cross-functional engineering teams', proficiency: 95 },
      { name: 'Problem Solving', context: 'Deconstructing complex operational challenges into modular solutions', proficiency: 92 },
      { name: 'Analytical Thinking', context: 'Data-driven decision making and systematic root cause analysis', proficiency: 94 },
      { name: 'Communication', context: 'Explaining AI metrics and system designs clearly to stakeholders', proficiency: 90 },
      { name: 'Documentation', context: 'Writing clear workflow guidelines, architecture specs & annotation SOPs', proficiency: 92 }
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
      { name: 'Bahasa Indonesia', level: 'Native', context: 'Native proficiency in verbal and written communication' },
      { name: 'English', level: 'Professional Working Proficiency', context: 'Fluent in technical documentation, presentations, and collaborative communication' }
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
      'Focusing on Computer Vision, AI-driven applications, Database Engineering, and Software Architecture.',
      'Active in hands-on practical software development projects, technical mentorship, and industry internship programs.',
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
      'Major in Natural Sciences (IPA), strengthening foundation in mathematics, logical reasoning, and analytical thinking.',
      'Active participant in scientific learning and foundational computer science clubs.'
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
