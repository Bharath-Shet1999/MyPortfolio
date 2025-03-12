
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Education</h2>
        
        <div className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px]">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-secondary text-primary mt-1">
              <GraduationCap className="h-6 w-6" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold">Bachelor of Engineering in Computer Science</h3>
              <p className="text-lg text-muted-foreground mb-2">P.A. College of Engineering</p>
              
              <div className="flex items-center mt-4">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2017 - 2021</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="section-subheading">Certification</h3>
          
          <div className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md bg-secondary text-primary mt-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 3v18" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">AWS Certified Cloud Practitioner</h3>
                <p className="text-lg text-muted-foreground mb-2">Amazon Web Services</p>
                
                <a 
                  href="#"
                  className="inline-flex items-center text-primary hover:underline mt-2"
                >
                  View Certificate
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
