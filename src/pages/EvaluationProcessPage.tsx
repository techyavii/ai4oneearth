import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  BarChart3, 
  Target, 
  Presentation, 
  Award,
  Shield,
  Globe,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const EvaluationProcessPage = () => {
  const stages = [
    {
      number: 1,
      title: "Eligibility & Compliance Screening",
      icon: <Search className="w-6 h-6" />,
      description: "All submissions will undergo an initial screening to verify:",
      points: [
        "Compliance with eligibility and submission guidelines",
        "Completeness of required submission materials",
        "Alignment with at least one UN SDG track",
        "Use of AI as a core component",
        "Adherence to ethical and originality standards"
      ],
      outcome: "Only compliant submissions will proceed to the next evaluation stage."
    },
    {
      number: 2,
      title: "Technical & Impact Evaluation (Round 1)",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Eligible submissions will be reviewed by a panel of domain experts and AI specialists based on the official judging criteria and weightage.",
      focus: "Evaluation Focus:",
      focusPoints: [
        "SDG alignment and real-world impact",
        "AI innovation and technical depth",
        "Functionality and solution design",
        "Scalability, feasibility, and sustainability",
        "Impact metrics and evaluation methods"
      ],
      scoring: "Each criterion will be scored according to its assigned percentage weightage, resulting in a cumulative score out of 100%."
    },
    {
      number: 3,
      title: "Final Presentation & Live Demo (Round 2)",
      icon: <Presentation className="w-6 h-6" />,
      description: "Shortlisted teams will be required to:",
      points: [
        "Deliver a live or virtual presentation (5–7 minutes)",
        "Demonstrate their AI tool or prototype",
        "Explain technical architecture, data usage, and AI workflow",
        "Answer jury questions on feasibility, ethics, and impact"
      ],
      focus: "Evaluation Focus:",
      focusPoints: [
        "Clarity of communication and storytelling",
        "Demonstration quality and system performance",
        "Ability to defend technical and impact-related decisions"
      ]
    },
    {
      number: 4,
      title: "Jury Deliberation & Final Scoring",
      icon: <Award className="w-6 h-6" />,
      description: "Judges will deliberate collectively after final presentations.",
      points: [
        "Final scores will be calculated by:",
        "Combining submission evaluation scores",
        "Factoring in final presentation and demo performance",
        "In case of a tie, priority will be given to:",
        "Higher SDG impact score",
        "Stronger AI innovation",
        "Ethical and responsible AI practices"
      ],
      outcome: "Final rankings and winners are determined."
    }
  ];

  const additionalSections = [
    {
      title: "Shortlisting for Round 2",
      icon: <Target className="w-6 h-6" />,
      points: [
        "Based on cumulative scores, top-performing teams will be shortlisted.",
        "Shortlisted teams will be notified via official communication channels.",
        "Shortlisting thresholds may vary based on the number and quality of submissions."
      ],
      outcome: "Selected teams advance to the final round."
    },
    {
      title: "Results Announcement & Recognition",
      icon: <Award className="w-6 h-6" />,
      points: [
        "Winners and special category awardees will be announced during the closing ceremony.",
        "Selected projects may be:",
        "Featured on the official challenge platform",
        "Recommended for incubation, mentorship, or pilot deployment",
        "Invited for publications, showcases, or collaborations"
      ]
    },
    {
      title: "Confidentiality & Fairness",
      icon: <Shield className="w-6 h-6" />,
      points: [
        "All submissions will be treated as confidential.",
        "Judges will declare any conflict of interest prior to evaluation.",
        "The jury's decisions will be final and binding."
      ]
    },
    {
      title: "Evaluation Philosophy",
      icon: <Globe className="w-6 h-6" />,
      description: "The AI4OneEarth Evaluation Process emphasizes:",
      points: [
        "Impact over hype",
        "Responsible AI over complexity",
        "Scalable solutions over theoretical ideas"
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
            🏆 Evaluation Process
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            AI4OneEarth – One Planet. One Purpose. Powered by AI
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The evaluation process is designed to ensure fairness, transparency, and alignment with the challenge's mission of leveraging AI for sustainable development and global impact.
          </p>
        </div>

        {/* Main Stages */}
        <div className="mb-16">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {stages.map((stage, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary" className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                      {stage.number}
                    </Badge>
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                      {stage.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{stage.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </CardHeader>
                <CardContent>
                  {stage.points && (
                    <ul className="space-y-3 mb-4">
                      {stage.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-earth-green mt-2 flex-shrink-0"></div>
                          <span className="text-foreground leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {stage.focus && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-earth-green mb-2">{stage.focus}</p>
                      <ul className="space-y-2">
                        {stage.focusPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3">
                            <span className="text-earth-green mt-1">•</span>
                            <span className="text-sm text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {stage.scoring && (
                    <div className="bg-earth-green/10 rounded-lg p-3">
                      <p className="text-earth-green font-medium text-sm">
                        📊 Scoring: {stage.scoring}
                      </p>
                    </div>
                  )}
                  {stage.outcome && (
                    <div className="bg-blue-50 rounded-lg p-3 mt-3">
                      <p className="text-blue-700 font-medium text-sm">
                        📌 Outcome: {stage.outcome}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {additionalSections.map((section, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                    {section.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">{section.title}</CardTitle>
                </div>
                {section.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-earth-green mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                {section.outcome && (
                  <div className="bg-blue-50 rounded-lg p-3 mt-3">
                    <p className="text-blue-700 font-medium text-sm">
                      📌 Outcome: {section.outcome}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default EvaluationProcessPage;