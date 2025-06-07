import React from 'react';
import { Mail, Linkedin, MapPin, Phone, User, Briefcase, GraduationCap, Code, FolderOpen, Award, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
        
        {/* Header Section */}
        <header className="flex items-center gap-8 mb-12">
          <div className="w-48 h-48 rounded-full border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <img 
              src="./public/me.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-5xl font-bold mb-2">REZA GHAVIPOUR</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Backend Developer</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Mashhad, Iran</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:bghavipor@gmail.com" className="hover:underline">bghavipor@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+98 939 701 1659</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                <a href="https://linkedin.com/in/reza-ghavipor-56b350239" className="hover:underline">linkedin.com/in/reza-ghavipor-56b350239</a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="grid gap-8">
          {/* Profile Summary Section */}
          <section className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6" />
              <h2 className="text-2xl font-bold">PROFILE SUMMARY</h2>
            </div>
            <p>Backend developer with over 3 years of professional experience in building scalable backend systems using Node.js and modern frameworks like NestJS. Proficient in designing RESTful APIs, working with PostgreSQL and Redis, and implementing microservice architectures using RabbitMQ. Strong advocate of clean code, SOLID principles, and team collaboration in Agile environments. Experienced in test-driven development and technical documentation.</p>
          </section>

          {/* Experience Section */}
          <section className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-2xl font-bold">WORK EXPERIENCE</h2>
            </div>
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-bold">Backend Developer</h3>
                <p className="text-gray-700 font-semibold">Manshoor Fanavari (IFTPRISM)</p>
                <p className="text-gray-600">Mashhad, Iran • Jul 2022 – Present</p>
                <ul className="list-disc ml-4 mt-2">
                  <li>Developed and maintained a real-time communication platform integrating video/audio SDKs</li>
                  <li>Refactored legacy monolith into microservices using NestJS and RabbitMQ</li>
                  <li>Designed and optimized relational databases with PostgreSQL</li>
                  <li>Implemented caching with Redis and managed state in real-time features</li>
                  <li>Automated backup systems and managed server deployments using Docker and Nginx</li>
                  <li>Collaborated in Agile teams using Git Flow and participated in sprint planning and daily stand-ups</li>
                  <li>Documented APIs and architecture decisions for internal and external stakeholders</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Backend Developer</h3>
                <p className="text-gray-700 font-semibold">Vakilnovin</p>
                <p className="text-gray-600">Mashhad, Iran • Nov 2020 – Jul 2022</p>
                <ul className="list-disc ml-4 mt-2">
                  <li>Designed and implemented a legal platform with features like lawyer payments and Telegram bot integration</li>
                  <li>Set up and deployed backend services and maintained system availability</li>
                  <li>Used caching techniques and eager loading to optimize database performance</li>
                  <li>Wrote unit and integration tests to ensure code reliability</li>
                  <li>Contributed to technical documentation and Git-based workflows in team projects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6" />
              <h2 className="text-2xl font-bold">EDUCATION</h2>
            </div>
            <div>
              <h3 className="text-xl font-bold">Associate Degree in Software Engineering</h3>
              <p className="text-gray-300">Montazeri Technical College of Mashhad • Jan 2017 – Jan 2019</p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6" />
              <h2 className="text-2xl font-bold">SKILLS</h2>
            </div>
            <div className="grid gap-6">
              <div>
                <h4 className="font-bold mb-3 text-lg">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'TypeScript', 'NestJS', 'Express', 'PHP', 'Laravel'].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-black text-white px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-lg">Architecture & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Microservices', 'Docker', 'Git Flow', 'REST API', 'RabbitMQ', 'Nginx', 'Linux', 'Socket.IO'].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-black text-white px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-lg">Databases & Caching</h4>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MySQL', 'Redis'].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-black text-white px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-lg">Best Practices & Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['Clean Code', 'SOLID', 'Design Patterns', 'Unit & Integration Testing', 'Agile/Scrum', 'Technical Documentation'].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-black text-white px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-lg">ORM & Testing</h4>
                <div className="flex flex-wrap gap-2">
                  {['Prisma', 'TypeORM', 'Jest'].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-black text-white px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <FolderOpen className="w-6 h-6" />
              <h2 className="text-2xl font-bold">PROJECTS</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <h3 className="text-xl font-bold">Proco</h3>
                <p className="text-gray-300 font-semibold">Backend Developer (NestJS, Prisma, Agora, PayPal SDK) • Mar 2024 – Aug 2024</p>
                <p className="mt-2">Mentorship platform similar to ADPList. Built backend with NestJS and Prisma. Integrated Agora SDK for video communication and PayPal SDK for payment processing. Designed scalable RESTful APIs and managed database schema.</p>
                <a href="https://procoapp.com" className="text-white hover:underline mt-2 inline-block">🔗 https://procoapp.com</a>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6" />
              <h2 className="text-2xl font-bold">CERTIFICATES</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <h3 className="text-xl font-bold">Associate DevOps Engineer</h3>
                <p className="text-gray-700">Arvan Cloud Academy • May 2024 – Jun 2024</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Task-Oriented Course in NoSQL</h3>
                <p className="text-gray-700">Quera • Nov 2024 – Dec 2024</p>
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6" />
              <h2 className="text-2xl font-bold">LANGUAGES</h2>
            </div>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span className="font-semibold">Persian:</span>
                <span>Native</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">English:</span>
                <span>Professional Working Proficiency</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;