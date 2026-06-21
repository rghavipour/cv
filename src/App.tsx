import React from 'react';
import { Mail, Linkedin, MapPin, Phone, User, Briefcase, GraduationCap, Code, FolderOpen, Award, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
        
        {/* Header Section */}
        <header className="flex items-center gap-8 mb-12">
          <div className="w-48 h-48 rounded-full border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
            <img 
              src="../public/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div>
            <h1 className="text-5xl font-bold mb-2">Reza Ghavipour</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Backend Developer & SRE Enthusiast</h2>
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
                <a href="https://www.linkedin.com/in/reza-ghavipour-56b350239/" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin</a>
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
            <p>Backend developer with over 3 years of professional experience in building scalable backend systems using Node.js and modern frameworks like NestJS. Proficient in designing RESTful APIs, working with PostgreSQL and Redis, and implementing microservice architectures using message brokers. Strong advocate of clean code, SOLID principles, and team collaboration in Agile environments. Experienced in test-driven development, technical documentation, and applying Site Reliability Engineering (SRE) practices to ensure system resilience.</p>
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
                <p className="text-gray-600">Mashhad, Iran | Jul 2022 – Present</p>
                <ul className="list-disc ml-4 mt-2">
                  <li>Developed and maintained a real-time communication platform integrating video/audio SDKs</li>
                  <li>Refactored legacy monolith into microservices using NestJS and RabbitMQ</li>
                  <li>Designed and optimized relational databases with PostgreSQL</li>
                  <li>Implemented caching with Redis and managed state in real-time features</li>
                  <li>Implemented real-time object tracking agents utilizing computer vision models, including the optimization of SAM2 and SAM3 for live video processing</li>
                  <li>Automated backup systems and managed server deployments using Docker and Nginx</li>
                  <li>Collaborated in Agile teams using Git Flow and participated in sprint planning and daily stand-ups</li>
                  <li>Documented APIs and architecture decisions for internal and external stakeholders</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">Backend Developer</h3>
                <p className="text-gray-700 font-semibold">Vakilnovin</p>
                <p className="text-gray-600">Mashhad, Iran | Nov 2020 – Jul 2022</p>
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

          {/* Projects Section */}
          <section className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <FolderOpen className="w-6 h-6" />
              <h2 className="text-2xl font-bold">PROJECTS</h2>
            </div>
            <div className="grid gap-6">
              
              <div>
                <h3 className="text-xl font-bold">Rose Physio Hub</h3>
                <p className="text-gray-300 font-semibold">All-in-One Physiotherapy Practice Management Platform</p>
                <ul className="list-disc ml-4 mt-2 text-gray-300">
                  <li>Architected a scalable backend utilizing a <strong>NestJS monorepo</strong> to streamline care delivery and manage multiple clinic locations.</li>
                  <li>Developed real-time communication features by integrating <strong>WebSockets</strong> for a secure and responsive in-app chat module.</li>
                  <li>Optimized resource management by implementing asynchronous task processing via <strong>Message Queues</strong> and handling secure file storage with <strong>Amazon S3</strong>.</li>
                  <li><strong>Dockerized</strong> the application and implemented automated <strong>CI/CD pipelines</strong> across multiple environments to ensure seamless deployments.</li>
                  <li>Integrated <strong>Stripe</strong> and <strong>Stripe Webhooks</strong> for secure, real-time payment processing and financial management.</li>
                  <li>Engineered an <strong>advanced reporting</strong> module and configured <strong>AWS SES</strong> for reliable automated notifications.</li>
                </ul>
                <a href="https://rosephysiohub.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 inline-block font-medium">https://rosephysiohub.com/</a>
              </div>

              <div>
                <h3 className="text-xl font-bold">Proco</h3>
                <p className="text-gray-300 font-semibold">Backend Developer (NestJS, Prisma, Agora, PayPal SDK) | Mar 2024 – Aug 2024</p>
                <ul className="list-disc ml-4 mt-2 text-gray-300">
                  <li>Developed a professional mentorship platform similar to ADPList.</li>
                  <li>Built a robust and scalable backend system using NestJS and Prisma ORM.</li>
                  <li>Integrated the Agora SDK to power real-time, high-quality video communication.</li>
                  <li>Implemented seamless and secure payment processing utilizing the PayPal SDK.</li>
                  <li>Designed scalable RESTful APIs and managed comprehensive database schema designs.</li>
                </ul>
                <a href="https://procoapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 inline-block font-medium">https://procoapp.com</a>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">Leaner</h3>
                <p className="text-gray-300 font-semibold">Project Management Platform</p>
                <ul className="list-disc ml-4 mt-2 text-gray-300">
                  <li>Contributed as a lead developer to <strong>Leaner</strong>, a project management tool tailored for non-project managers.</li>
                  <li>Spearheaded the <strong>UI refactor</strong> initiative to enhance user experience and streamline workflows.</li>
                  <li>Developed and integrated comprehensive <strong>documentation modules</strong> within the platform.</li>
                </ul>
              </div>

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
                  {['Microservices', 'Docker', 'Git Flow', 'REST API', 'RabbitMQ', 'Nginx', 'Linux', 'WebSockets', 'AWS (S3, SES)'].map((skill) => (
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

          {/* Education Section */}
          <section className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6" />
              <h2 className="text-2xl font-bold">EDUCATION</h2>
            </div>
            <div>
              <h3 className="text-xl font-bold">Associate Degree in Software Engineering</h3>
              <p className="text-gray-300">Montazeri Technical College of Mashhad | Jan 2017 – Jan 2019</p>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6" />
              <h2 className="text-2xl font-bold">CERTIFICATES</h2>
            </div>
            <div className="grid gap-6">
              
              <div>
                <h3 className="text-xl font-bold">Task-Oriented Course In Linux Lpic-1</h3>
                <p className="text-gray-700">Quera | Issued May 2026</p>
                <p className="text-sm mt-1"><strong>Credential ID:</strong> w5QvilfS</p>
                <p className="text-sm mt-1"><strong>Skills:</strong> Linux System Administration, Bash</p>
                <a href="https://quera.org/certificate/w5QvilfS/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-1 inline-block text-sm font-medium">View Credential</a>
              </div>

              <div>
                <h3 className="text-xl font-bold">Associate DevOps Engineer</h3>
                <p className="text-gray-700">Arvan Cloud Academy | Issued Sep 2024</p>
                <p className="text-sm mt-1"><strong>Credential ID:</strong> 6893</p>
                <a href="https://academy.arvancloud.ir/certificate/35ED10D-311C2E6-2F42864/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-1 inline-block text-sm font-medium">View Credential</a>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">Task-Oriented Course in NoSQL</h3>
                <p className="text-gray-700">Quera | Issued Nov 2024</p>
                <p className="text-sm mt-1"><strong>Credential ID:</strong> IisM1KaA</p>
                <a href="https://quera.org/certificate/IisM1KaA/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-1 inline-block text-sm font-medium">View Credential</a>
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
                <span className="font-semibold text-gray-300">Persian:</span>
                <span>Native</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-300">English:</span>
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