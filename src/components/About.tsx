import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "48-Hour Challenge",
      description: "Intensive coding and innovation sprint with real impact"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Environmental Focus",
      description: "Address climate change and other concerns through technology solutions, specifically exploring the power of AI and other technologies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Teams",
      description: "Work with diverse, passionate sustainability advocates"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Impact",
      description: "Create solutions for a smarter greener future"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About AI Tool Challenge 2026

          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
           AI Tool Development Challenge on One Earth is a global initiative inviting innovators to build AI-driven solutions that address real-world challenges aligned with the United Nations Sustainable Development Goals (SDGs). It encourages participants to apply AI technologies to create meaningful, ethical and scalable impact across critical domains such as sustainability, healthcare, education, climate action  and inclusive growth.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            More than a competition, AI Tool Development Challenge 2026 on OneEarth is a mission to use AI as a force for social good, fostering collaboration and responsible innovation to transform ideas into practical tools that benefit communities, protect the planet and support a sustainable future.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision and Mission */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🌐 Vision
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To build a future where Artificial Intelligence drives sustainable progress, empowers communities and safeguards our planet for generations to come.
            </p>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
             Our mission is to empower innovators worldwide to harness the transformative power of Artificial Intelligence to solve pressing global challenges, accelerate progress toward the United Nations Sustainable Development Goals and create scalable, ethical and impactful solutions for a sustainable future.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Through collaboration, creativity and responsible AI innovation, AI tool Development Challenge for OneEarth seeks to bridge technology and humanity—turning intelligent ideas into real-world tools that protect our planet, uplift communities and drive inclusive global progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;