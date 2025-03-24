import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-400">
            <Image
              src="/profile.jpg"
              alt="Ibra Niang"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Ibra Niang</h1>
            <h2 className="text-xl text-gray-400 mb-8">Software Engineer & AI Enthusiast</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate software engineer with a deep interest in artificial intelligence 
                and machine learning. My work focuses on developing innovative solutions that bridge 
                the gap between cutting-edge AI technology and practical applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Interests</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="bg-gray-800 p-3 rounded-lg">Artificial Intelligence</li>
                <li className="bg-gray-800 p-3 rounded-lg">Machine Learning</li>
                <li className="bg-gray-800 p-3 rounded-lg">Full Stack Development</li>
                <li className="bg-gray-800 p-3 rounded-lg">Cloud Computing</li>
                <li className="bg-gray-800 p-3 rounded-lg">System Design</li>
                <li className="bg-gray-800 p-3 rounded-lg">Data Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
