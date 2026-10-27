export const siteConfig = {
  name: "Gavin Duke",
  title: "IT Support & Networking",
  description:
    "Self-taught technology enthusiast with practical experience in user support, access management, software configuration, and independent technical projects.",
  accentColor: "#1d4ed8",
  social: {
    // Add only confirmed public contact details approved for publication.
    email: "gavinaduke@icloud.com",
    linkedin: "https://www.linkedin.com/in/gavin-duke/",
    twitter: "",
    github: "https://github.com/gavin-duke",
  },
  aboutMe: [
    "I'm working toward a career in IT support and networking, building on hands-on experience supporting users, configuring software, and troubleshooting technical issues.",
    "My background includes managing Discord support requests, configuring permissions and third-party bots, developing independent iOS and web projects, and working in roles that required communication, documentation, and problem-solving.",
    "I'm continuing to develop my knowledge of computer systems and networking, with plans to pursue a Computer Networking AAS at Kellogg Community College.",
  ],
  handsOn: {
    title: "Hands-On Technical Troubleshooting",
    description:
      "Provided informal technical support for family members, troubleshooting home Wi-Fi connectivity, configuring routers, and restoring connections for smart-home devices. Experience includes Google Nest thermostats, smart lighting, robotic vacuums, and basic network settings.",
  },
  skills: [
    "User Support & Ticketing",
    "Account Access & Permissions",
    "Wi-Fi & Device Troubleshooting",
    "Software & Bot Configuration",
    "macOS & iOS",
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
        "Developing a native iOS fitness application using SwiftUI and AI-assisted development tools. Hands-on work includes testing application features, investigating bugs, refining interface behavior, and iterating on workout tracking and progress functionality.",
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
        "Software testing",
        "Troubleshooting",
        "Debugging",
        "Technical problem-solving",
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
        "Web development",
        "Responsive design",
        "Lead capture",
        "Technical troubleshooting",
      ],
    },
  ],
  experience: [
    {
      group: "",
      company: "Stock Trading Discord Community | Approximately 200,000 Members",
      title: "Community Moderator & Member Support",
      dateRange: "Volunteer / Remote | Approximately 1 year",
      bullets: [
        "Handled member support tickets involving subscription verification, access permissions, and Discord role assignments.",
        "Troubleshot missing membership roles and helped paying subscribers access restricted channels.",
        "Installed and configured existing third-party Discord bots, including commands, permissions, roles, and server settings.",
        "Guided members through server navigation, helping them locate relevant channels and resources.",
        "Assisted users with account-related questions, platform functionality, and general support requests.",
      ],
    },
    {
      group: "Additional Professional Experience",
      company: "AAA Advantage Home Care",
      title: "In-Home Caregiver",
      dateRange: "June 2026 – Present",
      bullets: [
        "Coordinate daily responsibilities, adapt to individual needs, and provide dependable one-on-one assistance.",
      ],
    },
    {
      group: "",
      company: "The Vine Early Learning Center",
      title: "Lead Teacher",
      dateRange: "July 2023 – May 2026",
      bullets: [
        "Managed daily operations, maintained accurate documentation, and communicated regularly with parents and staff.",
        "Coordinated competing priorities while addressing questions and adapting to changing situations.",
      ],
    },
    {
      group: "",
      company: "Pansophia Academy",
      title: "Lead Custodian",
      dateRange: "July 2022 – May 2023",
      bullets: [
        "Trained team members, delegated responsibilities, and coordinated operational priorities with school personnel.",
        "Identified facility issues, communicated maintenance needs, and supported organized daily operations.",
      ],
    },
    {
      group: "",
      company: "Insight Hospital & Medical Center",
      title: "Evening Custodian",
      dateRange: "November 2020 – June 2022",
      bullets: [
        "Worked independently in a hospital environment, following established procedures and escalating issues when necessary.",
      ],
    },
  ],
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
    {
      school: "Kellogg Community College",
      degree: "Computer Networking AAS",
      dateRange: "Planned, prospective Spring 2027 start",
      achievements: [],
    },
  ],
};
