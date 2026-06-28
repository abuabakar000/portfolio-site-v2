import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'abubakarkhawaja74@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi, I am reaching out to you because...',

    oldPortfolio: '#',
    upworkProfile: '#',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/abuabakar000' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/abu-bakar-khawaja-dev' },
    { name: 'facebook', url: '#' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Responsive Design',
            icon: '/logo/responsive.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'REST APIs',
            icon: '/logo/api.svg',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Outreach OS',
        slug: 'outreach-os',
        techStack: ['Next.js', 'REST APIs', 'Outscraper API', 'Tailwind CSS'],
        thumbnail: '/projects/outreach-os/outreachos-thumbnail.webp',
        longThumbnail: '/projects/outreach-os/outreachos-thumbnail.webp',
        images: [
            '/projects/outreach-os/pic1.webp',
            '/projects/outreach-os/pic2.webp',
            '/projects/outreach-os/pic3.webp',
            '/projects/outreach-os/pic4.webp',
            '/projects/outreach-os/pic5.webp',
        ],
        description: `
        OutreachOS is an all-in-one sales automation platform built for modern outreach teams. <br/><br/>

        It scrapes targeted business leads from Google Maps using the Outscraper API, pulling names, phone numbers, emails, and locations automatically. <br/><br/>

        All extracted data is delivered in a clean, structured Excel sheet — ready to use instantly. <br/><br/>

        A built-in AI-powered website generator takes that sheet and populates a master Next.js template, creating hundreds of personalized landing pages in seconds. <br/><br/>

        Each lead gets their own unique slug under one domain, making outreach feel personal at scale. <br/><br/>

        The integrated CRM lets you import your lead sheet and manage your entire pipeline from one place. <br/><br/>

        Cold call, send SMS, track lead status, and schedule follow-ups — without ever switching tools. <br/><br/>

        From scraping to closing, OutreachOS automates every step of the sales journey.
        `,
        role: `
        Lead Full-Stack Developer <br/>
        Designed and developed the entire automation flow:
        <ul>
          <li>– Integrated Outscraper REST APIs for reliable and fast lead harvesting.</li>
          <li>– Built Excel workbook parsing and mapping scripts.</li>
          <li>– Coded the CRM communication dashboard for dialing, sending SMS, and follow-ups.</li>
          <li>– Configured the dynamic client-site generation routing engine.</li>
        </ul>
        `,
    },
    {
        title: 'Inex Labs',
        slug: 'inex',
        techStack: ['Next.js', 'Tailwind CSS', 'Node.js'],
        thumbnail: '/projects/inex/inex-thumbnail.webp',
        longThumbnail: '/projects/inex/inex-thumbnail.webp',
        images: [
            '/projects/inex/pic1.jpg',
            '/projects/inex/pic2.jpg',
            '/projects/inex/pic3.jpg',
            '/projects/inex/pic4.jpg',
        ],
        description: `
        Inex Labs is a modern, high-performance agency website built to showcase engineering services, portfolios, and cases. 
        It is designed with an emphasis on speed, clean layout, and pixel-perfect responsiveness. <br/><br/>
        
        Key Features:<br/>
        <ul>
          <li>› Service Portfolio: Dynamic layouts showcasing corporate and design solutions.</li>
          <li>› Responsive Design: Fully optimized experience across all mobile, tablet, and desktop viewports.</li>
          <li>› High Performance: Leveraging Next.js static rendering and optimized image assets.</li>
        </ul>
        `,
        role: `
        Lead Full-Stack Developer <br/>
        Owned the frontend layout engineering and API integration:
        <ul>
          <li>– Built the entire frontend architecture using Next.js and Tailwind CSS.</li>
          <li>– Designed and coded reusable UI sections for the agency catalog.</li>
          <li>– Configured contact form processors and email notification endpoints.</li>
        </ul>
        `,
    },
    {
        title: 'The Good Burger',
        slug: 'the-good-burger',
        techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
        thumbnail: '/projects/the-good-burger/pic1.webp',
        longThumbnail: '/projects/the-good-burger/pic1.webp',
        images: [
            '/projects/the-good-burger/pic2.webp',
            '/projects/the-good-burger/pic3.webp',
            '/projects/the-good-burger/pic4.webp',
            '/projects/the-good-burger/pic5.webp',
            '/projects/the-good-burger/pic6.webp',
        ],
        description: `
        The Good Burger is a high-fidelity, interactive menu and ordering site designed for a premium Mexican joint. 
        It provides users with an immersive dark-theme ordering flow, food item customization, and smooth visual feedback. <br/><br/>
 
        Key Features:<br/>
        <ul>
          <li>› Interactive Food Selector: Interactive interface to customize ingredients and add items.</li>
          <li>› Micro-interactions: Smooth visual feedback on hovering and clicking elements.</li>
          <li>› Mobile First: Beautiful mobile menu layouts for customers ordering on-the-go.</li>
        </ul>
        `,
        role: `
        Frontend Developer <br/>
        Created the interactive web experience:
        <ul>
          <li>– Styled a custom dark theme and responsive UI components using Tailwind CSS.</li>
          <li>– Programmed smooth page and item transitions utilizing Framer Motion.</li>
          <li>– Implemented cart addition, ingredient selection, and calculation logic.</li>
        </ul>
        `,
    },
    {
        title: 'Resume.ai',
        slug: 'resume-ai',
        techStack: ['Next.js', 'REST APIs', 'AI Generation', 'Tailwind CSS'],
        thumbnail: '/projects/resume-ai/pic1.webp',
        longThumbnail: '/projects/resume-ai/pic1.webp',
        images: [
            '/projects/resume-ai/pic2.webp',
            '/projects/resume-ai/pic3.webp',
            '/projects/resume-ai/pic5.webp',
            '/projects/resume-ai/pic6.webp',
        ],
        description: `
        Resume.ai is an intelligent CV writer and optimizer platform. 
        By utilizing artificial intelligence and natural language models, it parses user profiles to generate highly professional, ATS-optimized cv copy and layout configurations. <br/><br/>
 
        Key Features:<br/>
        <ul>
          <li>› AI Copywriter: Automatically completes, refines, and improves bullet points for work experience.</li>
          <li>› Instant Previews: Generates structured, beautifully formatted CV previews in real-time.</li>
          <li>› Template Engine: Swap layout styles instantly with tailwind-configured resume themes.</li>
        </ul>
        `,
        role: `
        Full-Stack Developer <br/>
        Built the backend integrations and frontend UI:
        <ul>
          <li>– Integrated REST APIs with AI language models to generate tailored cv content.</li>
          <li>– Coded the real-time resume compiler and state sync.</li>
          <li>– Designed flexible, printing-optimized CV layouts.</li>
        </ul>
    },
    {
        title: "Citrini's Den",
        slug: 'citrinis-den',
        techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        thumbnail: '/projects/furry-site/thumb.webp',
        longThumbnail: '/projects/furry-site/thumb.webp',
        images: [
            '/projects/furry-site/1.webp',
            '/projects/furry-site/2.webp',
            '/projects/furry-site/3.webp',
            '/projects/furry-site/4.webp',
        ],
        description: `
        Citrini's Den is an interactive and cozy furry-themed web application designed as a personal space and community hub. <br/><br/>
 
        Key Features:<br/>
        <ul>
          <li>› Interactive Mini-game: Features a fun, custom "fursona vibe of the day" egg-tapping game.</li>
          <li>› Custom Art Gallery: A responsive, beautifully laid out collection showcase for art references and community assets.</li>
          <li>› Boop Message System: An interactive "Let's Be Friends" contact form allowing visitors to send customizable friendly boops.</li>
        </ul>
        `,
        role: `
        Lead Frontend Developer <br/>
        Engineered the interactive features and animations:
        <ul>
          <li>– Built the interactive egg-tapping mini-game utilizing Framer Motion for smooth transitions.</li>
          <li>– Coded the custom "Boop" contact form with real-time field validation and animated paws feedback.</li>
          <li>– Implemented the custom theme styling and art gallery layout using Tailwind CSS.</li>
        </ul>
        `,
    },
    {
        title: 'DevCollab',
        slug: 'dev-collab',
        techStack: ['React', 'Tailwind CSS', 'Node.js', 'Socket.io'],
        thumbnail: '/projects/dev-collab/pic1.webp',
        longThumbnail: '/projects/dev-collab/pic1.webp',
        images: [
            '/projects/dev-collab/pic2.webp',
            '/projects/dev-collab/pic3.webp',
            '/projects/dev-collab/pic4.webp',
            '/projects/dev-collab/pic5.webp',
        ],
        description: `
        DevCollab is a social media and matchmaking network designed specifically for developers—styled like Instagram but built for coding portfolios. 
        Developers can showcase projects, post repository snippets, follow fellow engineers, and message collaborators. <br/><br/>
 
        Key Features:<br/>
        <ul>
          <li>› Developer Social Feed: Share progress updates, screenshots, and repository links.</li>
          <li>› Matchmaking & Collab: Connect with developers having complementary stack skills for projects.</li>
          <li>› Real-time Updates: Active feeds and instant chat messaging.</li>
        </ul>
        `,
        role: `
        Lead Full-Stack Developer <br/>
        Developed the end-to-end social network architecture:
        <ul>
          <li>– Built feed, posts, and like/comment backend APIs with Node.js and Express.</li>
          <li>– Engineered custom user profile systems that query and parse GitHub repositories.</li>
          <li>– Created the frontend application using React and Tailwind CSS.</li>
          <li>– Added socket-based instant messaging features.</li>
        </ul>
        `,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Inex Labs',
        duration: 'Sep 2025 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Innov8',
        duration: 'Oct 2024 - Jul 2025',
    },
    {
        title: 'Junior Developer',
        company: 'Saffran Labs',
        duration: 'Jul 2024 - Sep 2024',
    },
];
