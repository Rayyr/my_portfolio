export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-yellow-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Hi, I'm <span style={{color: '#000000'}}>Raya Khasati</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
           Computer Engineer
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
         Passionate about building practical solutions that combine creativity and technology. Interested in both software development and hardware systems,
          with a focus on creating efficient and useful applications using different frameworks and tools .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="/contact" 
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors border-2"
              style={{borderColor: '#FFFF00'}}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
