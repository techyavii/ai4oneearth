import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain,
  Zap,
  Building,
  MapPin,
  Leaf,
  Shield
} from "lucide-react";

const Themes = () => {
  const themes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "AI for Healthy Lives (SDG 3)",
      subtitle: "Reimagining healthcare through intelligence and inclusion",
      color: "from-red-500 to-pink-600",
      subThemes: [
        "AI-powered early disease detection and diagnostics",
        "Predictive analytics for epidemic and public health monitoring",
        "Personalized and preventive healthcare systems",
        "AI tools for rural and remote healthcare accessibility"
      ],
      impactFocus: "Affordable, accessible and preventive healthcare"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI for Inclusive & Quality Education (SDG 4)",
      subtitle: "Learning without limits",
      color: "from-blue-500 to-cyan-600",
      subThemes: [
        "Intelligent tutoring systems and adaptive learning platforms",
        "AI for special-needs and inclusive education",
        "Learning analytics to reduce dropout rates",
        "Multilingual AI education tools for underserved communities"
      ],
      impactFocus: "Equity, personalization and lifelong learning"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI for Clean Energy & Sustainability (SDG 7)",
      subtitle: "Powering the future responsibly",
      color: "from-yellow-500 to-orange-600",
      subThemes: [
        "AI-based energy demand forecasting",
        "Smart grids and renewable energy optimization",
        "Predictive maintenance for energy infrastructure",
        "AI tools to reduce energy waste and carbon footprint"
      ],
      impactFocus: "Efficient, affordable and clean energy systems"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "AI for Smart Industry & Resilient Infrastructure (SDG 9)",
      subtitle: "Building intelligent, sustainable systems",
      color: "from-gray-500 to-slate-600",
      subThemes: [
        "AI for smart manufacturing and automation",
        "Predictive maintenance and fault detection",
        "Sustainable supply chain optimization",
        "Infrastructure resilience through AI-driven insights"
      ],
      impactFocus: "Innovation, efficiency and sustainability"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "AI for Sustainable Cities & Communities (SDG 11)",
      subtitle: "Designing cities that think",
      color: "from-primary to-accent",
      subThemes: [
        "AI for traffic flow and transportation optimization",
        "Smart waste management and recycling analytics",
        "Urban planning and resource allocation tools",
        "AI-driven disaster preparedness and response"
      ],
      impactFocus: "Livable, inclusive and resilient cities"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "AI for Climate Action & Environmental Protection (SDG 13)",
      subtitle: "Predicting, protecting, preserving",
      color: "from-accent to-earth-blue",
      subThemes: [
        "Climate change modeling and impact prediction",
        "Carbon emission tracking and reduction tools",
        "AI for biodiversity conservation",
        "Environmental risk and disaster prediction systems"
      ],
      impactFocus: "Climate resilience and environmental sustainability"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI for Governance, Transparency & Justice (SDG 16)",
      subtitle: "Strengthening institutions with intelligence",
      color: "from-purple-500 to-indigo-600",
      subThemes: [
        "AI tools for policy analysis and decision support",
        "Transparent governance and fraud detection systems",
        "AI for legal assistance and access to justice",
        "Civic engagement and citizen feedback analytics"
      ],
      impactFocus: "Trust, accountability and ethical governance"
    }
  ];

  return (
    <section id="themes" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🔹 Thematic Challenge Tracks & Sub-Themes
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our seven thematic tracks aligned with UN Sustainable Development Goals, each offering unique opportunities to create impactful AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {themes.map((theme, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${theme.color} flex items-center justify-center text-white shadow-lg`}>
                  {theme.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {theme.title}
                </CardTitle>
                <p className="text-muted-foreground italic">
                  {theme.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {theme.subThemes.map((subTheme, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-earth-green mt-1">•</span>
                      <span>{subTheme}</span>
                    </li>
                  ))}
                </ul>
                <Badge variant="secondary" className="w-full text-center py-2">
                  📌 Impact Focus: {theme.impactFocus}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-card">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-earth-green" />
            <span className="text-xl font-semibold text-foreground">
              Ready to Drive Innovation?
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether your focus lies in healthy lives, clean energy or sustainable cities, your innovative solutions have the potential to advance Sustainable Development Goals.
          </p>
          <Button variant="earth" size="lg" className="min-w-48">
            Choose Your Theme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Themes;