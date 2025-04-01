import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img
                  className="rounded-full w-64 h-64 object-cover mx-auto"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
                  alt="Profile"
                />
              </div>
              <div className="md:w-2/3 md:pl-12">
                <p className="text-lg text-gray-500">
                  I am a passionate Computer Science student with a strong foundation in full-stack development. 
                  Currently pursuing my degree at [Your University Name], I combine academic excellence with 
                  practical experience in building web applications.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  My journey in technology started with a curiosity about how things work on the internet, 
                  which led me to explore various programming languages and frameworks. I enjoy solving 
                  complex problems and creating user-friendly applications that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;