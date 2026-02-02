import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

const JudgeAppointmentCriteriaPage = () => {

  const selectionCriteria = [
    {
      number: "01",
      title: "Professional Expertise",
      icon: "🎓",
      points: [
        "Artificial Intelligence, Machine Learning, Data Science or related fields",
        "Sustainability, climate science, healthcare, education, smart cities or public policy",
        "Industry innovation, startups, research or technology leadership"
      ]
    },
    {
      number: "02",
      title: "SDG & Impact Knowledge",
      icon: "🌍",
      points: [
        "Strong understanding of the United Nations Sustainable Development Goals (SDGs)",
        "Experience in applying technology for social, environmental or economic impact",
        "Ability to assess real-world feasibility and long-term sustainability of solutions"
      ]
    },
    {
      number: "03",
      title: "Evaluation & Mentorship Experience",
      icon: "🧠",
      points: [
        "Prior experience as a judge, reviewer, mentor or evaluator in hackathons, innovation challenges, research forums, or startup competitions",
        "Ability to provide constructive, unbiased and actionable feedback to participants"
      ]
    },
    {
      number: "04",
      title: "Ethical & Responsible AI Commitment",
      icon: "⚖️",
      points: [
        "Demonstrated commitment to ethical, responsible and transparent AI practices",
        "Awareness of AI risks such as bias, data privacy and misuse",
        "Willingness to evaluate solutions through an ethical and societal lens"
      ]
    },
    {
      number: "05",
      title: "Independence & Integrity",
      icon: "🤝",
      points: [
        "Judges must declare any conflict of interest before the evaluation process",
        "Must not evaluate submissions from teams with whom they have a direct professional or personal relationship",
        "Commitment to maintaining confidentiality and impartiality throughout the challenge"
      ]
    },
    {
      number: "06",
      title: "Diversity & Inclusion",
      icon: "🌐",
      points: [
        "The judging panel will aim for diversity in geography, gender, domain expertise and professional background",
        "Judges should support inclusive innovation and equitable evaluation"
      ]
    },
    {
      number: "07",
      title: "Availability & Commitment",
      icon: "⏱️",
      points: [
        "Judges must be available during designated evaluation periods",
        "Willingness to participate in review sessions, deliberations and final evaluations",
        "Commitment to follow the challenge's evaluation guidelines and timelines"
      ]
    },
    {
      number: "08",
      title: "Alignment with Challenge Vision",
      icon: "🌟",
      points: [
        "Strong alignment with the mission and vision of AI Tool Development Challenge",
        "Passion for leveraging AI as a force for sustainability and global good"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <nav className="text-sm mb-6 opacity-90">
                <span>Home</span>
                <span className="mx-2">&gt;</span>
                <span>Judge Appointment Criteria</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Judge Appointment Criteria
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-4">
                AI Tool Development Challenge 2026 on OneEarth – AI Tool Development Challenge
              </p>
              <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                Judges for the AI Tool Development Challenge are selected to ensure fairness, expertise, diversity and alignment with the mission of advancing Artificial Intelligence for sustainable development and social good.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our AI Tool Development Challenge 2026 on April 11-12, 2026 represents the cutting edge of environmental AI research and development. We've meticulously curated a judging panel comprising world-class experts in sustainable technology, environmental data science and green innovation architectures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each judge brings decades of experience in evaluating breakthrough solutions that push the boundaries of environmental sustainability while maintaining peak technological performance. They understand the nuanced challenges of deploying AI for environmental impact at scale with minimal resources.
              </p>
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Selection Criteria
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our rigorous standards ensure only the most qualified experts evaluate your innovations
              </p>
            </div>

            <div className="space-y-8">
              {selectionCriteria.map((criteria, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="text-2xl font-bold px-4 py-2">
                          {criteria.number}
                        </Badge>
                        <span className="text-3xl">{criteria.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {criteria.title}
                        </h3>
                        <ul className="space-y-2">
                          {criteria.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Judge Reveal */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Card className="bg-gradient-hero text-white border-0 shadow-earth max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Judge Reveal
                  </h2>
                  <p className="text-lg opacity-90 leading-relaxed mb-8">
                    Our distinguished panel of environmental AI experts will be unveiled in March 2026. These industry leaders and researchers will bring unparalleled expertise to evaluate your innovative solutions.
                  </p>

                  <div className="border-t border-white/20 pt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Judge Nominations & Technical Inquiries
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <a
                        href="mailto:hackathon@aiforoneearth.com"
                        className="text-lg hover:underline"
                      >
                        hackathon@aiforoneearth.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JudgeAppointmentCriteriaPage;
