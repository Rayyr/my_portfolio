import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#FFFF00'}}>
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              
                 I am a Computer Engineering student with a strong interest in both 
                software and hardware systems. I enjoy building practical solutions that
                 combine modern web technologies with embedded and low-level design. 
                 Through my studies and projects,  I love turning complex problems into simple, beautiful, and 
              intuitive solutions.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My expertise includes Web development like React,PHP,HTML,CSS,APIs, also Digital Design and embedded systems. 
              I'm always learning and staying up-to-date with the latest trends.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
                React
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
                JS
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
                HTML
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
                CSS
              </span>
                    <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
                PHP
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
                APIs
              </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
               RTL
              </span>
                    <span className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#FFFF00', color: '#000'}}>
               DV
              </span>
            </div>
            <Link 
              href="/about" 
              className="inline-flex items-center font-medium transition-colors"
              style={{color: '#FFFF00'}}
            >
              Learn More About Me
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full flex items-center justify-center mx-auto" style={{background: 'linear-gradient(to bottom right, #FFFF00, #CCCC00)'}}>
                <div className="text-black text-6xl font-bold">
                  RK
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
