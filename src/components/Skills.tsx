
import React from 'react';
import { Code, Terminal, Server, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: "Test Automation & Testing",
    icon: <Terminal className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-400",
    skills: [
      "Automation Frameworks: Selenium WebDriver, Playwright, Cucumber (BDD)",
      "Testing Types: Manual, Load, API, Unit, Cross-Platform, Integration, Functional, Sanity Testing"
    ]
  },
  {
    title: "Programming & Web Technologies",
    icon: <Code className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-400",
    skills: [
      "Languages: JavaScript, Python, Shell Scripting",
      "Frameworks: React JS, Node JS",
      "Backend: MongoDB, Express JS"
    ]
  },
  {
    title: "Version Control & Project Management",
    icon: <GitBranch className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400",
    skills: [
      "Version Control: Git, Github, Bitbucket",
      "Project Management: JIRA"
    ]
  },
  {
    title: "Cloud & Certifications",
    icon: <Server className="h-6 w-6" />,
    color: "from-orange-500 to-amber-400",
    skills: [
      "AWS Certified Cloud Practitioner"
    ]
  }
];

const SkillCategory = ({ category }: { category: typeof skillCategories[0] }) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-xl group">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-md bg-gradient-to-br ${category.color} text-white`}>
          {category.icon}
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{category.title}</h3>
      </div>
      
      <ul className="space-y-3">
        {category.skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-1">
            <div className={`min-w-[8px] h-[8px] rounded-full bg-gradient-to-r ${category.color} mt-2 group-hover:animate-pulse`} />
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-accent/30 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="section-subheading bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Languages</h3>
          <div className="flex flex-wrap gap-3">
            <div className="chip bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-primary hover:from-blue-500/20 hover:to-indigo-500/20">English</div>
            <div className="chip bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-primary hover:from-green-500/20 hover:to-emerald-500/20">Kannada</div>
            <div className="chip bg-gradient-to-r from-purple-500/10 to-violet-500/10 text-primary hover:from-purple-500/20 hover:to-violet-500/20">Hindi</div>
            <div className="chip bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-primary hover:from-orange-500/20 hover:to-amber-500/20">Konkani</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
