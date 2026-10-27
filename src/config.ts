export const siteConfig = {
  name: "Gavin Duke",
  title: "IT Support & Networking",
  description:
    "Practical experience in user support, access management, software configuration, and home networking, plus independent iOS and web projects.",
  accentColor: "#1d4ed8",
  social: {
    // Add only confirmed public contact details approved for publication.
    email: "gavinaduke@icloud.com",
    linkedin: "https://www.linkedin.com/in/gavin-duke/",
    twitter: "",
    github: "https://github.com/gavin-duke",
  },
  aboutMe: [
    "I'm building a career in IT support and networking. My experience comes from supporting users, configuring software and home networks, and troubleshooting problems hands-on.",
    "That includes Discord member support and bot configuration, independent iOS and web projects, and roles that required communication, documentation, and problem-solving.",
    "I plan to pursue a Computer Networking AAS at Kellogg Community College, potentially starting in Spring 2027.",
  ],
  handsOn: {
    title: "Hands-On Technical Troubleshooting",
    description:
      "Personal and informal technical work, on my own equipment and for family members.",
    items: [
      {
        title: "Windows maintenance and recovery",
        description:
          "Installed software and troubleshot operating system stability and performance issues on personal Windows systems, using diagnostics, recovery and maintenance utilities, Device Manager, and system settings.",
      },
      {
        title: "Home network",
        description:
          "Configured a home network on Frontier 2 Gig fiber with eero Pro 7 mesh hardware, covering router settings, wired and wireless connections, and device connectivity. Recorded speed tests of 2.61 Gbps download and 2.65 Gbps upload.",
      },
      {
        title: "Family and smart-home support",
        description:
          "Provided informal support for family members, including restoring Wi-Fi connectivity after a household Wi-Fi reset by reconnecting smart lights, a robotic vacuum, and a Google Nest thermostat, and reconfiguring the thermostat's heating controls.",
      },
    ],
  },
  skills: [
    "User Support & Ticketing",
    "Account Access & Permissions",
    "Wi-Fi & Device Troubleshooting",
    "Software & Bot Configuration",
    "Windows, macOS & iOS",
    "Web Development",
    "Application Testing",
    "AI-Assisted Workflows",
  ],
  projects: [
    {
      name: "SetShift",
      subtitle: "Native iOS Fitness Application",
      status: "In Development",
      description:
        "Building a native iOS fitness app with SwiftUI and AI-assisted development tools. Work includes testing features, investigating bugs, refining interface behavior, and iterating on workout tracking and progress functionality.",
      // Leave blank until a public destination is supplied and approved.
      link: "",
      screenshots: [
        {
          src: "/projects/setshift/01-home.png",
          alt: "SetShift home screen with the heading “Make today count.” and a Resume workout card for a Chest & Back focus session.",
          width: 1206,
          height: 2622,
          frame: "iphone",
        },
        {
          src: "/projects/setshift/02-progress.png",
          alt: "SetShift Progress screen showing a Back Squat history chart with a selected 185 lb × 8 set.",
          width: 1206,
          height: 2622,
          frame: "iphone",
        },
        {
          src: "/projects/setshift/03-workout.png",
          alt: "SetShift active workout screen for Dumbbell Bench Press with completed sets, weight and rep controls, and a Log set 3 button.",
          width: 1206,
          height: 2622,
          frame: "iphone",
        },
      ],
      skills: [
        "Software Testing",
        "Troubleshooting",
        "Debugging",
        "Technical Problem-Solving",
      ],
    },
    {
      name: "SmallTown Sites",
      subtitle: "Small Business Websites & Digital Services",
      status: "Independent Project",
      description:
        "Building SmallTown Sites, an independent digital-services business focused on helping local businesses attract customers, capture opportunities, and streamline communication. Services include responsive website development, local SEO, quote capture, missed-call text-back, and automated customer follow-ups. SmallTown Sites offers individual services and customizable bundles without requiring businesses to purchase a new website.",
      link: "",
      screenshots: [
        {
          src: "/projects/smalltown-sites/homepage.png",
          alt: "SmallTown Sites homepage showing responsive website design and customer inquiry features.",
          width: 2560,
          height: 1420,
          frame: "macbook",
        },
      ],
      skills: [
        "Web Development",
        "Responsive Design",
        "Lead Capture",
        "Technical Troubleshooting",
      ],
    },
  ],
  experience: [
    {
      group: "",
      company: "Stock Trading Discord Community | Approximately 200,000 Members",
      title: "Community Moderator & Member Support",
      dateRange: "Volunteer / Remote | February 2022 – July 2023",
      bullets: [
        "Handled member support tickets involving subscription verification, access permissions, and Discord role assignments.",
        "Troubleshot missing membership roles and helped paying subscribers access restricted channels.",
        "Installed and configured existing third-party Discord bots, including commands, permissions, roles, and server settings.",
        "Guided members through server navigation and answered account, platform, and general support questions.",
      ],
    },
  ],
  otherExperience: {
    heading: "Additional Professional Experience",
    roles: [
      {
        title: "In-Home Caregiver",
        company: "AAA Advantage Home Care",
        dateRange: "June 2026 – Present",
        description:
          "Provide dependable one-on-one care, coordinating daily responsibilities and adapting to individual needs.",
      },
      {
        title: "Lead Teacher",
        company: "The Vine Early Learning Center",
        dateRange: "July 2023 – May 2026",
        description:
          "Managed daily operations and documentation, communicated regularly with parents and staff, and balanced competing priorities.",
      },
      {
        title: "Lead Custodian",
        company: "Pansophia Academy",
        dateRange: "July 2022 – May 2023",
        description:
          "Trained team members, delegated responsibilities, and reported facility issues and maintenance needs to school personnel.",
      },
      {
        title: "Evening Custodian",
        company: "Insight Hospital & Medical Center",
        dateRange: "November 2020 – June 2022",
        description:
          "Worked independently in a hospital, following established procedures and escalating issues when necessary.",
      },
    ],
  },
  education: [
    {
      school: "Coldwater High School",
      degree: "High School Diploma",
      dateRange: "Graduated 2018",
      achievements: ["GPA: 3.7"],
    },
    {
      school: "Branch Area Careers Center (BACC)",
      degree: "CAD/CAM Studies — Two‑Year Career & Technical Education Program",
      dateRange: "2016 – 2018",
      achievements: [
        "Studied AutoCAD and Autodesk Inventor, gaining hands-on experience in 2D drafting, parametric 3D modeling, and mechanical assembly design. Created individual engine components and assembled them into an interactive 3D mechanism using assembly constraints and moving parts.",
      ],
    },
  ],
};
