import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Brain,
  Wrench,
  BarChart3,
  Shield,
  TrendingUp,
  FileText,
  Presentation,
  AlertCircle,
  Award,
  CheckCircle
} from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const ChallengeRequirementsPage = () => {
  const requirements = [
    {
      number: 1,
      title: "SDG Alignment",
      icon: <Globe className="w-6 h-6" />,
      description: "Each submission must address at least one United Nations Sustainable Development Goal (SDG) from the challenge tracks.",
      points: [
        "The chosen SDG(s)",
        "The specific problem being addressed",
        "How the solution contributes to SDG targets and outcomes"
      ]
    },
    {
      number: 2,
      title: "AI-Centric Solution",
      icon: <Brain className="w-6 h-6" />,
      description: "Artificial Intelligence must be a core and integral component of the solution.",
      points: [
        "Acceptable AI techniques include (but are not limited to):",
        "Machine Learning / Deep Learning",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Predictive or Prescriptive Analytics",
        "Reinforcement Learning",
        "Solutions that rely solely on rule-based automation without AI intelligence will not qualify."
      ]
    },
    {
      number: 3,
      title: "Functional Prototype or PoC",
      icon: <Wrench className="w-6 h-6" />,
      description: "Teams must develop:",
      points: [
        "A working prototype, proof-of-concept (PoC), or demonstrable AI model",
        "The solution may be:",
        "Web-based, mobile-based, desktop-based, or API-driven",
        "Cloud-hosted or locally executable",
        "The prototype should demonstrate core functionality and AI outcomes."
      ]
    },
    {
      number: 4,
      title: "Data & Model Transparency",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Participants must clearly explain:",
      points: [
        "Data sources (public, open-source, synthetic, or simulated)",
        "Data preprocessing and training methodology",
        "Model selection and evaluation approach",
        "Use of open datasets is permitted with proper attribution.",
        "Synthetic or anonymized data should be used where real data is sensitive or unavailable."
      ]
    },
    {
      number: 5,
      title: "Ethical & Responsible AI",
      icon: <Shield className="w-6 h-6" />,
      description: "Solutions must comply with Responsible AI principles, including:",
      points: [
        "Fairness and bias mitigation",
        "Data privacy and security",
        "Transparency and explainability",
        "Accountability and safe deployment",
        "Projects involving sensitive domains (healthcare, governance, education) must include ethical safeguards."
      ]
    },
    {
      number: 6,
      title: "Impact & Scalability",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Submissions must demonstrate:",
      points: [
        "Clear real-world relevance and potential impact",
        "Defined impact metrics or KPIs",
        "Scalability across regions, users, or systems",
        "Sustainability of the solution beyond the prototype stage"
      ]
    },
    {
      number: 7,
      title: "Technical Documentation",
      icon: <FileText className="w-6 h-6" />,
      description: "Participants must provide:",
      points: [
        "A clear system architecture or workflow diagram",
        "Description of AI pipeline and decision-making process",
        "Installation and execution instructions (README)",
        "Limitations, assumptions, and future enhancement plans"
      ]
    },
    {
      number: 8,
      title: "Demonstration & Presentation Readiness",
      icon: <Presentation className="w-6 h-6" />,
      description: "Teams must be prepared to:",
      points: [
        "Present their solution to an expert jury",
        "Demonstrate the prototype or AI tool",
        "Answer technical, ethical, and impact-related questions",
        "Clear communication and justification of design choices is essential."
      ]
    },
    {
      number: 9,
      title: "Originality & Compliance",
      icon: <AlertCircle className="w-6 h-6" />,
      description: "Submissions must be original and developed specifically for this challenge.",
      points: [
        "Reuse of previously submitted or commercial products is not permitted.",
        "Any violation of challenge rules or ethical guidelines may result in disqualification."
      ]
    },
    {
      number: 10,
      title: "Intellectual Property (IP)",
      icon: <Award className="w-6 h-6" />,
      description: "Participants retain full ownership of their intellectual property.",
      points: [
        "Organizers reserve the right to showcase selected projects for non-commercial, academic, or promotional purposes with proper credit."
      ]
    },
    {
      number: 11,
      title: "Commitment to Challenge Values",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "By participating, teams commit to:",
      points: [
        "Innovating for social good and sustainability",
        "Upholding ethical AI standards",
        "Collaborating respectfully and professionally",
        "Supporting the vision of One Earth, One Purpose"
      ]
    }
  ];

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            📌 Challenge Requirements
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            AI4OneEarth – One Planet. One Purpose. Powered by AI
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Participants must meet the following requirements to ensure that all submissions are impactful, ethical, and aligned with the goals of the AI4OneEarth Challenge.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto mb-16">
          {requirements.map((req, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <Badge variant="secondary" className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                    {req.number}
                  </Badge>
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                    {req.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{req.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {req.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {req.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-earth-green mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expected Outcomes */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                💡 Expected Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By the end of the challenge, participants will have:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Developed a functional AI prototype or proof of concept addressing a global issue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Demonstrated how AI can accelerate SDG achievement through innovation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Presented actionable insights, impact metrics, and pathways for real-world deployment.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ChallengeRequirementsPage;