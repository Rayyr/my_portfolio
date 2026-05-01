import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Clone Instagram",
    description: "A full-stack social media website solution with HTML,CSS,JS,and PHP.Features include user authentication, story processing, and user profile .",
    technologies: ["HTML", "CSS", "JS", "PHP"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Simple BookStore API",
    description: "A Backend library for managing books with CRUD operations using multitier architecture with RESTful API.",
    technologies: ["RESTful API", "Java Spark", "SQLite", "Docker","Postman","WSL2"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Rental Car Management System",
    description: "A comprehensive database system for managing car rentals with features like vehicle inventory, booking management, and customer tracking.",
    technologies: ["Java", "PostgreSQL", "Swing"],
    image: "/api/placeholder/400/250"
  }
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#FFFF00'}}>
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #FFFF00, #CCCC00)'}}>
                <div className="text-black text-2xl font-bold">
                  {project.title}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="font-medium text-sm" style={{color: '#FFFF00'}}>
                    View Project
                  </button>
                  <button className="font-medium text-sm" style={{color: '#CCCCCC'}}>
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center font-medium transition-colors"
            style={{color: '#FFFF00'}}
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
