export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#FFFF00' }}>
            About Me
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-64 h-64 rounded-full flex items-center justify-center mx-auto" style={{ background: 'linear-gradient(to bottom right, #FFFF00, #CCCC00)' }}>
                <div className="text-black text-6xl font-bold">
                  RK
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FFFF00' }}>
                Raya Khasati
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Computer Engineering Student
              </p>
              <p className="text-gray-300 mb-6">
                I am a Computer Engineering student with a strong interest in both
                software and hardware systems. I enjoy building practical solutions that
                combine modern web technologies with embedded and low-level design.
                Through my studies and projects, I have developed skills in programming,
                problem-solving, and system design, and I am always looking to learn
                and explore new technologies.
              </p>
              <p className="text-gray-300 mb-6">
                My journey started with curiosity about how both software and hardware work
                behind the scenes. Since then, I’ve been developing my skills in web development alongside
                system design and embedded systems, while keeping up with modern technologies and best practices.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#FFFF00' }}>
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-4 gap-8">

              
              <div className="text-center ">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFF00' }}>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    C
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    C++
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Java
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFF00' }}>
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    React
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    PHP
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    HTML5/CSS3
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    JavaScript
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFF00' }}>
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Express.js
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    MongoDB
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    REST APIs
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    SQL
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Postman
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Docker
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFF00' }}>
                  Hardware Design
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Verilog
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    System Verilog
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    VHDL
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    RTL
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    DV
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    UVM
                  </span>
                     <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Digital Design
                  </span>
                     <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Computer Architecture
                  </span>
                     <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#FFFF00', color: '#000' }}>
                    Assembly Language
                  </span>
                </div>
              </div>


            </div>
          </div>



          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#FFFF00' }}>
              Experience
            </h2>
            <div className="space-y-8">
              <div className="pl-8" style={{ borderLeft: '4px solid #FFFF00' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFFF00' }}>
                  Design Verification Intern
                </h3>
                <p className="text-gray-300 mb-2">Orion VLSI Technologies | July 2025 - Septemper 2025</p>
                <p className="text-gray-300">
                 Design Verification Intern experienced in validating RTL designs using SystemVerilog and 
                 UVM, with a focus on simulation, debugging, coverage, and ensuring design 
                 reliability through structured verification and documentation.
                </p>
              </div>
 
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#FFFF00' }}>
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              I'm always interested in hearing about new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate !
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#FFFF00', color: '#000' }}
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
