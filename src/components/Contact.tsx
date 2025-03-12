
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a 
                      href="mailto:bshet768@gmail.com"
                      className="text-primary hover:underline transition-all duration-200"
                    >
                      bshet768@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-secondary text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a 
                      href="tel:+919741292994"
                      className="text-primary hover:underline transition-all duration-200"
                    >
                      +91 9741292994
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">Mangaluru, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="col-span-1 md:col-span-2">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Send A Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
