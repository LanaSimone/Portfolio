const projects = [
  {
    id: 1,
    name: "Smart Application Assistant",
    description:
      "A full-stack job application tracker that allows users to manage applications, update statuses, and filter/search records.",
    image: "/project1.png",
    tech: ["React", "Node.js", "Express", "SQLite"],
    features: [
      "User authentication (JWT)",
      "CRUD operations for applications",
      "Search, filter, and sorting",
      "Status tracking (Applied, Interviewing, Offer, Rejected)",
    ],
    live: "https://smart-application-assistant.vercel.app/",
    github: "https://github.com/YOUR_USERNAME/job-application-tracker",
  },
  {
    id: 2,
    name: "Mood Library",
    description:
      "A full-stack mood-based music library that allows users to organize songs into mood-based playlists.",
    image: "/project2.png",
    tech: ["React", "Node.js", "Express", "SQLite"],
    features: [
      "Add songs with mood categorization",
      "Browse mood-based playlists",
      "Multi-page React app with routing",
      "Persistent data with SQLite",
    ],
    live: "YOUR_LIVE_LINK",
    github: "https://github.com/YOUR_USERNAME/mood-library",
  },
];

export default projects;