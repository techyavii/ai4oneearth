import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Judges = () => {
  const judges = [
{
  name: "Swapna Putti",
  affiliation: "Senior Solution Architect, Pearson Education Inc",
  location: "US",
  image: "/judges/Swapna.jpeg",
  expertise: "Enterprise AI Cloud Architecture",
  linkedin: "https://www.linkedin.com/in/swapna-p-579264103/",
  email: "pswapna.cse@gmail.com"
},
{
  name: "Pramod Baddam",
  affiliation: "Senior Software Developer – Network Systems, Independent Researcher",
  location: "US",
  image: "/judges/Pramod.jpeg",
  expertise: "AI-Driven Network Planning",
  linkedin: "https://www.linkedin.com/in/pramod-baddam-a928818a",
  email: "pramodbaddamb@gmail.com"
},
{
  name: "Chaithanya Etikala",
  affiliation: "Senior Technical Architect – AI & CRM Solutions, Tata Consultancy Services (TCS)",
  location: "US",
  image: "/judges/Chaithanya.jpeg",
  expertise: "AI & Enterprise Automation",
  linkedin: "https://www.linkedin.com/in/chaithanyae",
  email: "Chaithanya161719@gmail.com"
},
{
  name: "Rajitha Gentyala",
  affiliation: "Data Engineer (Staff Engineer II), Western Alliance Bank",
  location: "US",
  image: "/judges/Rajitha.jpeg",
  expertise: "Data Engineering & AI",
  linkedin: "https://www.linkedin.com/in/rajitha-g-8731a1115",
  email: "rajitha.gentyal@gmail.com"
},
{
  name: "Mayur Patel",
  affiliation: "Director, IT Center of Excellence, Axalta Coating Systems, LLC",
  location: "US",
  image: "/judges/Mayur.jpeg",
  expertise: "Digital Transformation",
  linkedin: "https://www.linkedin.com/in/mayur-patel-4a08791b",
  email: "mayurbpatel@gmail.com"
}
  ];
  return (
    <section id="judges" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Judges Panel
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished panel of expert judges who will evaluate submissions based on innovation, 
            environmental impact, technical excellence and scalability. Our judges bring decades of experience 
            in technology, AI and sustainability.
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => {
            const JudgeCard = (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Judge Photo */}
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={judge.image} 
                      alt={`${judge.name} - challenge Judge`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Judge Info */}
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {judge.expertise}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-earth-green transition-colors duration-300">
                      {judge.name}
                    </h3>
                    <p className="text-sm font-medium text-earth-green mb-1">
                      {judge.affiliation}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {judge.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );

            return judge.linkedin ? (
              <a 
                key={index}
                href={judge.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {JudgeCard}
              </a>
            ) : (
              JudgeCard
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Present to the Experts?
            </h3>
            <p className="text-muted-foreground mb-6">
              Showcase your AI-powered environmental solutions to our distinguished panel of judges 
              and compete for the £1,750 prize pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;