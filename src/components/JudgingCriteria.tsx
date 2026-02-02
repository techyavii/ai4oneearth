import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Cog, TrendingUp, Presentation, Users, Globe, Brain, Wrench, BarChart } from "lucide-react";

const JudgingCriteria = () => {
  const criteria = [
    {
      title: "SDG Alignment & Social Impact",
      percentage: "25%",
      icon: <Globe className="w-6 h-6" />,
      description: "Evaluates how effectively the solution addresses one or more United Nations Sustainable Development Goals.",
      keyQuestion: "Does this solution create meaningful impact for One Earth?",
      points: [
        "Clear identification of the real-world problem",
        "Relevance and depth of SDG alignment",
        "Potential for measurable social, environmental or economic impact",
        "Inclusivity and benefit to underserved communities"
      ]
    },
    {
      title: "AI Innovation & Technical Depth",
      percentage: "25%",
      icon: <Brain className="w-6 h-6" />,
      description: "Assesses the originality, sophistication and appropriateness of AI techniques used.",
      keyQuestion: "Is AI used intelligently and innovatively—not just as a buzzword?",
      points: [
        "Appropriate use of AI/ML/NLP/CV techniques",
        "Novelty and creativity of the AI approach",
        "Model design, data usage and algorithm selection",
        "Technical soundness and innovation level"
      ]
    },
    {
      title: "Solution Design & Functionality",
      percentage: "20%",
      icon: <Wrench className="w-6 h-6" />,
      description: "Focuses on how well the solution works as a tool or platform.",
      keyQuestion: "Does the solution actually work and solve the problem?",
      points: [
        "Functionality of the prototype or PoC",
        "System architecture and workflow clarity",
        "Usability and user experience (UX/UI)",
        "Integration feasibility in real-world settings"
      ]
    },
    {
      title: "Scalability, Feasibility & Sustainability",
      percentage: "15%",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Evaluates the practicality and long-term viability of the solution.",
      keyQuestion: "Can this solution scale beyond a prototype?",
      points: [
        "Scalability across regions, populations or use cases",
        "Deployment feasibility (cost, infrastructure, data)",
        "Sustainability of the solution over time",
        "Adaptability to evolving needs or datasets"
      ]
    },
    {
      title: "Impact Measurement & Evaluation",
      percentage: "10%",
      icon: <BarChart className="w-6 h-6" />,
      description: "Measures how well teams define and quantify impact.",
      keyQuestion: "Can the impact be measured and validated?",
      points: [
        "Defined KPIs or success metrics",
        "Expected or demonstrated outcomes",
        "Data-driven justification of impact",
        "Monitoring and evaluation approach"
      ]
    },
    {
      title: "Presentation, Demo & Communication",
      percentage: "5%",
      icon: <Presentation className="w-6 h-6" />,
      description: "Assesses how clearly and convincingly the idea is communicated.",
      keyQuestion: "Is the idea communicated clearly and convincingly?",
      points: [
        "Clarity of problem statement and solution explanation",
        "Quality of demo or walkthrough",
        "Storytelling, structure and visual clarity",
        "Ability to answer jury questions effectively"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🏆 Judging Criteria & Evaluation Weightage
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            AI Tool Development Challenge 2026 on OneEarth – AI Tool Development Challenge
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each submission will be evaluated by an expert jury based on the following criteria. The total score will be 100%.
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                    {criterion.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground">{criterion.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-lg font-bold px-4 py-2">
                    {criterion.percentage}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {criterion.description}
                </p>
                <p className="text-sm font-semibold text-earth-green">
                  📌 Key Question: {criterion.keyQuestion}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Judges will assess:</p>
                <ul className="space-y-3">
                  {criterion.points.map((point, pointIndex) => (
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

        {/* Summary */}
        <div className="mt-16 text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            🧮 Evaluation Summary
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-muted-foreground/20">
                  <th className="pb-3 font-semibold text-foreground">Criteria</th>
                  <th className="pb-3 font-semibold text-foreground text-right">Weightage</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((criterion, index) => (
                  <tr key={index} className="border-b border-muted-foreground/10">
                    <td className="py-3 text-muted-foreground">{criterion.title}</td>
                    <td className="py-3 text-muted-foreground text-right font-semibold">{criterion.percentage}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-muted-foreground/20">
                  <td className="py-3 font-bold text-foreground">Total</td>
                  <td className="py-3 font-bold text-foreground text-right">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgingCriteria;