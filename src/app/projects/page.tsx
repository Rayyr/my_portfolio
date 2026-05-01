const projects = [
  {
    id: 1,
    title: "Clone Instagram",
    description: "A full-stack social media website implemented by using HTML,CSS(Tailwind),JavaScript,PHP and MySQL database . Features include Authentication and user managment, Posts & Content Sharing , Stories processing , Social Interactions like comments , likes and saves,User Interaction & Discovery features like search and explore other users, Relational features like follow/unfollow .",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL", "Apache", "XAMPP"],
    features: [
      "Security Features as User authentication and authorization,validation",
      "Posts & Content Sharing",
      "Stories processing",
      "Social Interactions like comments,likes and saves,",
      "User Interaction & Discovery",
      "Relational features",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/___clone_instagram___",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Car Rental Management System",
    description: "A backend system for managing car rentals with features like Customer Management,vehicle inventory and booking management. Built with Java Swing, PostgreSQL.",
    technologies: ["Java", "Swing", "PostgreSQL"],
    features: [
      "Vehicle Management",
      "Booking & Reservations",
      "Customer Management",
      "Rental Transactions",
      "Reports & Queries",
      "Payment Management",
      "Data Integrity & Constraints"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/DataBaseProject_Car_Rental_System",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Simple BookStore API",
    description: "A backend dockerized system which implements CRUD operations as microservices using multi tier architecture for Book library using Java Spark.",
    technologies: ["Java", "Spark", "RESTful API", "Postman", "Docker", "WSL2", "microservices", "SQLite", "Multi-tier Architecture"],
    features: [
      "CRUD Operations",
      "Order & Checkout System",
      "API Design Features",
      "Containerization with Docker",
      "Multi-tier Architecture"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/DOS_microservices_project",
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Furniture Store",
    description: "A frontend website for a furniture store using HTML,CSS,Bootstrap,and JavaScript.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    features: [
      "Interactive Elements",
      "User Experience",
    ],
    liveUrl: "https://rayyr.github.io/FS-CSS_finalproject/",
    githubUrl: "https://github.com/Rayyr/FS-CSS_finalproject",
    image: "/api/placeholder/600/400"
  },
    {
    id: 5,
    title: "To Do List",
    description: "A simple to-do list application built with HTML/CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "local Storage"],
    features: [
      "Task addition",
      "Task deletion",
      "Task persistence with local storage"
    ],
    liveUrl: "https://rayyr.github.io/to-do-list/",
    githubUrl: "https://github.com/Rayyr/to-do-list",
    image: "/api/placeholder/600/400"
  },

  {
    id: 6,
    title: "Chat system",
    description: "Network-based chat application using Java Socket Programming, supporting peer-to-peer messaging, real-time timestamping, and file transfer functionality.",
    technologies: ["Java", "Socket Programming", "Multithreading", "File I/O", "Network Programming", "GUI", "Swing"],
    features: [
      "Real-time messaging",
      "Private chat",
      "Message history",
      "Logging",
      "Status tracking",
      "File sharing",
      "Concurrency",
      "Client-server architecture",
      "Peer-to-peer messaging"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/netProject",
    image: "/api/placeholder/600/400"
  },
  {
    id: 7,
    title: "Square Movement Controller",
    description: "A MIPS assembly program to control a square on a bitmap display using keyboard input and memory-mapped I/O.",
    technologies: ["MIPS Assembly", "Memory-mapped I/O", "Bitmap Display", "Keyboard Input Buffer", "MARS Simulator"],
    features: [
      "Square movement control",
      "Bitmap display rendering",
      "Keyboard input handling",
      "Memory-mapped I/O operations for display",
      "System calls for I/O operations"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/controlled_square_via_arrows",
    image: "/api/placeholder/600/400"
  },
  {
    id: 8,
    title: "Simple Piano",
    description: "A MIPS-based piano simulation using MARS, featuring keyboard input handling, bitmap display visualization, and asynchronous sound generation.",
    technologies: ["MIPS Assembly", "Memory-mapped I/O", "Bitmap Display", "Keyboard Input Buffer", "MARS Simulator"],
    features: [
      "Piano key simulation",
      "Bitmap display visualization",
      "Asynchronous sound generation",
      "Keyboard input handling",
      "Memory-mapped I/O operations for display",
      "System calls for I/O operations"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/mips_simple_piano",
    image: "/api/placeholder/600/400"
  },

  {
    id: 9,
    title: "Keys logger",
    description: "A keys logger programme built with C++.",
    technologies: ["C++", "Windows API", "File I/O"],
    features: [
      "Key logging functionality",
      "Windows API integration",
      "File I/O operations"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/keys_logger",
    image: "/api/placeholder/600/400"
  },

  {    
    id: 10,
    title: "Connect 4 Game",
    description: "Built a Connect 4 game in Java using Swing, featuring interactive GUI components and event-driven gameplay logic.",
    technologies: ["Java", "Swing","Event-driven programming","GUI"],
    features: [
      "Interactive GUI components",
      "Event-driven gameplay logic"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Rayyr/connect-4-game-",
    image: "/api/placeholder/600/400"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFF00' }}>
            My Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge
            and an opportunity to learn and grow as a developer.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #FFFF00, #CCCC00)' }}>
                    <div className="text-black text-xl font-bold text-center px-4">
                      {project.title}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFFF00' }}>
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3" style={{ color: '#FFFF00' }}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3" style={{ color: '#FFFF00' }}>
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    {(project.id===4 || project.id===5)&&(
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 rounded-lg font-medium transition-colors"
                      style={{ backgroundColor: '#FFFF00', color: '#000' }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    )}
                     
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFFF00' }}>
            Interested in Working Together?
          </h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-lg font-medium transition-colors"
            style={{ backgroundColor: '#FFFF00', color: '#000' }}
          >
            Let's Talk
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
