import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users } from "lucide-react";

const judgeAwards = [
  { 
    title: "Distinguished Jury Award", 
    description: "For outstanding contribution to the evaluation process through exceptional expertise, fairness and leadership.",
    icon: "🌟"
  },
  { 
    title: "Excellence in AI & Innovation Award", 
    description: "Presented to a judge who demonstrated deep technical insight and excellence in evaluating AI-driven solutions.",
    icon: "🧠"
  },
  { 
    title: "Impact Champion Award", 
    description: "For exceptional commitment to assessing solutions that drive meaningful social, environmental and SDG-aligned impact.",
    icon: "🌍"
  },
  { 
    title: "Responsible AI Advocate Award", 
    description: "Recognizing dedication to ethical AI principles, fairness, transparency and responsible innovation.",
    icon: "⚖️"
  },
  { 
    title: "Mentorship & Guidance Excellence Award", 
    description: "Awarded for providing constructive feedback, mentorship and guidance that empowered participants.",
    icon: "🤝"
  },
  { 
    title: "Global Leadership in Sustainability Award", 
    description: "For visionary leadership in promoting sustainability and global collaboration through AI innovation.",
    icon: "🌐"
  },
  { 
    title: "Jury Chair Honor Award", 
    description: "Special recognition for the Lead Judge or Jury Chair for coordinating evaluations and upholding judging standards.",
    icon: "🏆"
  },
  { 
    title: "Special Jury Recognition Award", 
    description: "Discretionary award given for exceptional contribution beyond evaluation—such as outreach, collaboration or thought leadership.",
    icon: "🌱"
  }
];

const JudgeRecognitionAwards = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tl from-secondary via-background to-accent/10 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl py-8 pt-24">
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight drop-shadow-lg">
            Judge Awards List
          </h3>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
            AI Tool Development Challenge 2026
          </h4>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            To acknowledge the expertise and dedication of our judges, the following awards will be presented to recognize their invaluable contributions to AI Tool Development Challenge 2026.
          </p>
        </div>
      </section>

      {/* Judge Awards Grid */}
      <section className="container mx-auto px-3 sm:px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {judgeAwards.map((award, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-secondary via-background to-accent/20 border border-border shadow-card hover:scale-[1.03] hover:shadow-2xl transition-transform transition-shadow duration-300 group rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{award.icon}</span>
                    <CheckCircle className="w-7 h-7 text-primary mt-1 flex-shrink-0 drop-shadow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl text-primary mb-2 group-hover:text-accent transition-colors duration-300 drop-shadow-sm">
                      {award.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Award Ceremony Banner */}
      <section className="container mx-auto px-3 sm:px-6 md:px-8 max-w-4xl mt-12">
        <div className="text-center bg-gradient-to-r from-emerald-500 to-blue-500 p-8 md:p-12 rounded-3xl text-white shadow-xl">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">Award Ceremony</h4>
          <p className="text-lg md:text-xl opacity-90 mb-3 max-w-2xl mx-auto">
            The Judges Recognition Awards will be presented during the closing ceremony of AI Tool Development Challenge 2026 on <b>April 12, 2026</b>. We encourage all participants to join us in celebrating the valuable contributions of our esteemed environmental and technology
          </p>
        </div>
      </section>
    </div>
  );
};

export default JudgeRecognitionAwards;
