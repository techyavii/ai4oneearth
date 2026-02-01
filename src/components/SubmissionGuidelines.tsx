import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Upload, Calendar, Users, Lightbulb, Target, BarChart3, Rocket, Code, Globe, Shield, AlertCircle, Award, CheckCircle, Presentation } from "lucide-react";

const SubmissionGuidelines = () => {
  const submissionComponents = [
    {
      number: 1,
      title: "Project Overview Document (PDF)",
      subtitle: "(Maximum 5 pages)",
      icon: <FileText className="w-6 h-6" />,
      points: [
        "Project title and team details",
        "Problem statement and SDG alignment",
        "Proposed solution and AI approach",
        "System architecture and workflow",
        "Expected impact and use cases",
        "Scalability and deployment considerations",
        "Defined KPIs or performance indicators"
      ]
    },
    {
      number: 2,
      title: "AI Tool / Prototype",
      subtitle: "Duration: 3 minutes",
      icon: <Code className="w-6 h-6" />,
      points: [
        "A functional prototype, proof-of-concept (PoC) or working model",
        "Can be web-based, mobile-based, desktop or API-driven",
        "Cloud-hosted or locally executable solutions are acceptable"
      ]
    },
    {
      number: 3,
      title: "Source Code Repository (optional)",
      subtitle: "",
      icon: <Upload className="w-6 h-6" />,
      points: [
        "GitHub / GitLab / Bitbucket link (public or private access as instructed)",
        "Clear README with setup and execution instructions",
        "Proper documentation and comments",
        "Attribution for third-party libraries, datasets and APIs"
      ]
    }
  ];

  const technicalRequirements = [
    "The solution must use Artificial Intelligence as a core component, not merely automation.",
    "Permitted AI approaches include:",
    "Machine Learning / Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Predictive / Prescriptive Analytics",
    "Use of open-source datasets and frameworks is allowed with proper citation.",
    "Synthetic or simulated datasets may be used where real data is unavailable."
  ];

  const sdgAlignment = [
    "Each submission must clearly align with at least one UN Sustainable Development Goal (SDG) listed in the challenge tracks.",
    "Teams must explain how their solution contributes to SDG targets and outcomes."
  ];

  const ethicsOriginality = [
    "Submissions must be original work developed for this challenge.",
    "Plagiarism or reuse of previously submitted projects is prohibited.",
    "Solutions must adhere to Responsible AI principles, including:",
    "Data privacy and security",
    "Fairness and bias mitigation",
    "Transparency and explainability",
    "Any use of sensitive data must comply with applicable data protection laws."
  ];

  const finalPresentation = [
    "Shortlisted teams may be required to:",
    "Deliver a presentation (5 minutes) & demo of the prototype (3 minutes)",
    "Participate in a Q&A session (2 minutes) with the jury",
    "Presentation slides should be clear, concise and impact-focused."
  ];

  const disqualificationConditions = [
    "Required components are missing or incomplete",
    "The solution does not use AI meaningfully",
    "Ethical guidelines or originality rules are violated",
    "Submission is made after the deadline"
  ];

  const intellectualProperty = [
    "Participants retain full ownership of their intellectual property.",
    "Organizers may request permission to showcase selected projects for promotional or academic purposes, with due credit."
  ];

  const acceptanceOfTerms = [
    "All information provided is accurate",
    "They agree to abide by challenge rules and jury decisions",
    "They support the spirit of innovation for sustainability and social good"
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            📦 Submission Guidelines
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each team/individual must submit the following components to participate in the AI Tool Development Challenge 2026.
          </p>
        </div>

        {/* Submission Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Submission Components
          </h2>
          <div className="grid gap-8 max-w-6xl mx-auto">
            {submissionComponents.map((component, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {component.number}
                    </Badge>
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                      {component.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{component.title}</CardTitle>
                      {component.subtitle && (
                        <p className="text-sm text-muted-foreground">{component.subtitle}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {component.points.map((point, pointIndex) => (
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
        </div>

        {/* Requirements Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Technical & AI Requirements */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Code className="w-6 h-6 text-purple-600" />
                🤖 Technical & AI Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{technicalRequirements[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{technicalRequirements[1]}</span>
                </li>
                <ul className="ml-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[2]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[3]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[4]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{technicalRequirements[5]}</span>
                  </li>
                </ul>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{technicalRequirements[6]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{technicalRequirements[7]}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* SDG Alignment */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Globe className="w-6 h-6 text-earth-green" />
                🌍 SDG Alignment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {sdgAlignment.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-earth-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Ethics, Privacy & Originality */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-red-600" />
            ⚖️ Ethics, Privacy & Originality
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{ethicsOriginality[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{ethicsOriginality[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{ethicsOriginality[2]}</span>
                </li>
                <ul className="ml-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{ethicsOriginality[3]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{ethicsOriginality[4]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{ethicsOriginality[5]}</span>
                  </li>
                </ul>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{ethicsOriginality[6]}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final Presentation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center gap-3">
            <Video className="w-8 h-8 text-blue-600" />
            🎤 Final Presentation (Shortlisted Teams)
          </h3>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{finalPresentation[0]}</span>
                </li>
                <ul className="ml-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{finalPresentation[1]}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span className="text-muted-foreground text-sm">{finalPresentation[2]}</span>
                  </li>
                </ul>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{finalPresentation[3]}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Remaining Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Disqualification Conditions */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <AlertCircle className="w-6 h-6 text-red-600" />
                🚫 Disqualification Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                A submission may be disqualified if:
              </p>
              <ul className="space-y-3">
                {disqualificationConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Award className="w-6 h-6 text-yellow-600" />
                📜 Intellectual Property (IP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {intellectualProperty.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Acceptance of Terms */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                🌟 Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By submitting an entry, participants confirm that:
              </p>
              <ul className="space-y-3">
                {acceptanceOfTerms.map((term, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{term}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;