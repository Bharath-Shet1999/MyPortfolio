
import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer in Test",
    company: "7EDGE Private Limited",
    location: "Mangaluru",
    period: "2022 - Present",
    responsibilities: [
      "Projects: Paymaart (Fintech), EasyID GenV (Healthcare), Eastdesi (CRM), Ador Welding (Ecommerce), Acer (School Management)",
      "Engineered test automation frameworks using Selenium WebDriver, Playwright, Appium.js, JavaScript, and Cucumber for multi-platform web and mobile testing, ensuring scalability and reliability across diverse environments in Fintech, Healthcare, CRM, and Ecommerce sectors.",
      "Applied shift-left testing strategy, integrating automated tests early in the development lifecycle for web and mobile applications to reduce defects and enhance system reliability in highly regulated domains like Healthcare and Fintech.",
      "Developed and executed performance testing solutions using K6 and Grafana for load and stress testing, identifying and resolving scalability issues in web applications across various industries such as Ecommerce and CRM.",
      "Led advanced API testing to validate backend functionality and ensure robust microservices integration, driving system stability and performance for complex applications in Fintech, Healthcare, and CRM.",
      "Mentored junior developers in best practices for test automation, fostering a culture of continuous learning and technical excellence across teams working on diverse projects.",
      "Collaborated with product management to translate feature requirements into precise, comprehensive test cases, ensuring alignment with business goals and full test coverage, particularly for mission-critical applications in Healthcare and Fintech.",
      "Integrated Appium.js into mobile testing strategy, automating tests for native and hybrid mobile applications on both Android and iOS platforms, optimizing test execution across devices in the Fintech and Ecommerce domains."
    ]    
  },
  {
    title: "Software Development Engineer",
    company: "Ethian Software Private Limited",
    location: "Mangaluru",
    period: "2021 - 2022",
    responsibilities: [
      "Developed full-stack web applications using React, Node.js, and Express.js with RESTful API integrations",
      "Implemented efficient data management solutions using MongoDB",
      "Designed comprehensive inventory management systems with Angular and Firebase"
    ]
  }
];

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <div className="glass-card rounded-xl p-6 mb-10 transform transition-all duration-500 hover:translate-y-[-5px] group hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{experience.title}</h3>
          <p className="text-lg font-medium text-muted-foreground">{experience.company}</p>
        </div>
        
        <div className="flex items-center mt-2 md:mt-0">
          <Calendar className="h-4 w-4 mr-2 text-primary/70" />
          <span className="text-sm text-muted-foreground">{experience.period}</span>
        </div>
      </div>
      
      <div className="flex items-start gap-2 mb-4">
        <MapPin className="h-4 w-4 text-primary/70 mt-1" />
        <span className="text-muted-foreground">{experience.location}</span>
      </div>
      
      <ul className="space-y-2 mt-4">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-1">
            <div className="min-w-[8px] h-[8px] rounded-full bg-primary mt-2 group-hover:animate-pulse" />
            <p>{responsibility}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 -z-10" />
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Professional Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
