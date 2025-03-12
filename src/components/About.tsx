
import React from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 -z-10" />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 -z-5 opacity-10">
        <div className="absolute h-full w-full">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 md:col-span-2">
            <p className="text-lg leading-relaxed mb-6 transform transition-all duration-300 hover:translate-x-1">
            I’m a Software Development Engineer in Test (SDET) with 3+ years of experience in software testing and test automation.            </p>
            
            <p className="text-lg leading-relaxed mb-6 transform transition-all duration-300 hover:translate-x-1">
            I specialize in building scalable automated test frameworks for web and mobile applications. With expertise in Docker, AWS, CI/CD, and Jenkins, I’m focused on improving software quality through automation and continuous process enhancement in Agile environments. I believe in the power of automation to boost efficiency, reliability, and software quality.           
            </p>
          </div>
          
          <div className="col-span-1">
            <div className="glass-card rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-1">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Mangaluru, Karnataka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-1">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:bshet768@gmail.com"
                      className="text-primary hover:underline transition-all duration-200"
                    >
                      bshet768@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-1">
                  <ExternalLink className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/bharath-shet153"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-all duration-200"
                    >
                      Bharath@linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
