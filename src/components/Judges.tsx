import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Judges = () => {
  const judges = [
    {
      name: "Jafar A. Alzubi",
      affiliation: "Al-Balqa Applied University",
      location: "Salt – Jordan",
      image: "/lovable-uploads/d4ff75e6-0143-45fe-97f6-d0dcb0750137.png",
      expertise: "Technology Innovation"
    },
    {
      name: "Sonali Suri",
      affiliation: "Software Development Engineer, Amazon",
      location: "USA",
      image: "/lovable-uploads/95d2edf3-614f-45ad-8aa8-ddd6962aab0b.png",
      expertise: "Software Development",
      linkedin: "https://www.linkedin.com/in/sonali-suri-3bb440b6/"
    },
    {
      name: "Abdul Hadi",
      affiliation: "Senior BMS & Cybersecurity Engineer, Climatec, a Bosch Company",
      location: "USA",
      image: "/lovable-uploads/Abdul_Hadi.jpeg",
      expertise: "Building Automation & Cybersecurity",
      linkedin: "https://www.linkedin.com/in/abdul-hadi-b6a42125/"
    },
    {
      name: "Sandeep Kumar Jangam",
      affiliation: "Lead Consultant, Infosys Limited",
      location: "USA",
      image: "/lovable-uploads/Sandeep_Kumar_Jangam.jpeg",
      expertise: "AI, ML, Mulesoft ESB Middleware",
      linkedin: "https://www.linkedin.com/in/sandeep-kumar-j-60202323/"
    },
    {
      name: "Partha Sarathi Reddy Pedda Muntala",
      affiliation: "Software Engineer, Cisco Systems, Inc",
      location: "USA",
      image: "/lovable-uploads/ParthaSarathi.jpeg",
      expertise: "AI, ML, Oracle Applications Technology, Oracle Cloud ERP",
      linkedin: "https://www.linkedin.com/in/partha-sarathi-reddy-96a4a44b/"
    },
    {
      name: "Sunil Anasuri",
      affiliation: "Sr. Specialist SAP OTC, Climatec, MicroVention Inc.",
      location: "USA",
      image: "/lovable-uploads/Sunil.jpg",
      expertise: "Building Automation & Cybersecurity",
      // linkedin: "https://www.linkedin.com/in/abdul-hadi-b6a42125/"
    },
    {
      name: "Guru Pramod Rusum",
      affiliation: "Programmer/Analyst V, Geographic Solutions Inc",
      location: "USA",
      image: "/lovable-uploads/Guru.jpeg",
      expertise: "AI, ML, .Net",
      linkedin: "https://www.linkedin.com/in/guru-pramod-r-52434062/"
    },
    {
      "name": "Anjali Kale",
      "affiliation": "Finance and Accounts Specialist",
      "location": "USA",
      "image": "/lovable-uploads/20a4a0f5-591c-4406-8343-e3745eee2708.png",
      "expertise": "Finance and Accounts",
      "linkedin": "https://www.linkedin.com/in/anjali-kale"
    },
    {
      name: "Sooraj Ramachandran",
      affiliation: "Test Automation Architect, BDO Digital",
      location: "USA",
      image: "/lovable-uploads/Sooraj.jpeg",
      expertise: "Test Automation",
      linkedin: "https://www.linkedin.com/in/soorajramachandran/"
    },
    {
      name: "Chandra Sekhar Kubam",
      affiliation: "Integration Architect",
      location: "USA",
      image: "/lovable-uploads/Chandra.jpeg",
      expertise: "enterprise IT,cloud-native architectures, API-led connectivity",
      // linkedin: "https://www.linkedin.com/in/bala-k-guntupalli-49a47b1a/"
    },
    {
      name: "Bala Krishna Rao Guntupalli",
      affiliation: "IT Quality Control Sr. Advisor, Elevance Health Inc.",
      location: "USA",
      image: "/lovable-uploads/Bala.jpeg",
      expertise: "E2E Project Management, QA Lead, QA Manager, Business Analyst",
      linkedin: "https://www.linkedin.com/in/bala-k-guntupalli-49a47b1a/"
    },
    {
      name: "Raunaq Malik",
      affiliation: "Product Manager, Expedia Group",
      location: "USA",
      image: "/lovable-uploads/Raunaq.jpeg",
      expertise: "AI in Product Management, Agentic AI, Predictive Analytics, Machine Learning",
      linkedin: "https://www.linkedin.com/in/raunaq-malik/"
    },
    {
      name: "Venkat Rama Raju Alluri",
      affiliation: "Devops Consultant, J Crew Group , NYC New York",
      location: "USA",
      image: "/lovable-uploads/venkat.jpeg",
      expertise: "DevOps, AI/ML & Blockchain",
      linkedin: "https://www.linkedin.com/in/venkatramarajualluri/"
    },
    {
      name: "Karthik Linkalapalli",
      affiliation: "Mainframe Architect, Tata Consultancy Services",
      location: "USA",
      image: "/lovable-uploads/kartik.jpeg",
      expertise: "Legacy Modernization, Mainframe Integration, z/OS Architecture, Mainframe Engineering",
      linkedin: "https://www.linkedin.com/in/karthik-linkalapalli/"
    },
    {
      name: "Vinay Chowdary Manduva",
      affiliation: "Software Engineer, Docusign",
      location: "USA",
      image: "/lovable-uploads/Vinay.jpg",
      expertise: "Cloud computing and AI",
      linkedin: "https://www.linkedin.com/in/vinaychowdarymanduva/"
    },
    {
      name: "Adya Mishra",
      affiliation: "Product Manager, Allymar Health",
      location: "USA",
      image: "/lovable-uploads/adya.jpg",
      expertise: "AI , Healthcare, Digital Product Management",
      linkedin: "https://www.linkedin.com/in/adya-m-464807128/"
    },
    {
      name: "Vishal Bharadwaj Meruga",
      affiliation: "Data Scientist, Marriott International",
      location: "USA",
      image: "/lovable-uploads/vishal.jpg",
      expertise: "AI, ML, Predictive analytics",
      linkedin: "http://linkedin.com/in/vishal-meruga-627452157"
    },
    {
      name: "Sachin Kumar Agrawal",
      affiliation: "Principal Data Engineer, Synechron, Inc.",
      location: "USA",
      image: "/lovable-uploads/sachin.jpg",
      expertise: "AI/ML, Snowflake & Azure",
      // linkedin: "http://linkedin.com/in/vishal-meruga-627452157"
    },
    {
      name: "Rengarajan Jegadeesan",
      affiliation: "Senior Software Engineer, Microsoft",
      location: "USA",
      image: "/lovable-uploads/rengarajan.jpg",
      expertise: "Data Science, AI, Machine Learning",
      linkedin: "https://www.linkedin.com/in/renga16/"
    },
    {
      name: "Reshma Thakkallapelly",
      affiliation: "Engineer Lead, Elevance Health",
      location: "USA",
      image: "/lovable-uploads/Reshma.jpeg",
      expertise: "Engineer lead, Solutions Architect",
      linkedin: "https://www.linkedin.com/in/reshma-thakkallapelly/"
    },
    {
      name: "Sachin Pawar",
      affiliation: "Database Engineer",
      location: "USA",
      image: "/lovable-uploads/sachinpawar.jpeg",
      expertise: "Agent-based solutions, Database Engineering and Cloud Migrations",
      // linkedin: "https://www.linkedin.com/in/reshma-thakkallapelly/"
    },
    {
      name: "Abdul Salam A",
      affiliation: "Hardware Design Lead Engineer, Marelli North America",
      location: "USA",
      image: "/lovable-uploads/abdul.jpeg",
      expertise: "Green Automotive AI,Sustainable Mobility & Sustainable Transportation",
      linkedin: "https://www.linkedin.com/in/abdul-salam-a6357045/"
    },
    {
      name: "Sai Teja Kotagiri",
      affiliation: "CyberSecurity Analyst, Caliber Tech LLC",
      location: "USA",
      image: "/lovable-uploads/sai.jpeg",
      expertise: "Cybersecurity – Vulnerability Management & SOC Operations",
      linkedin: "https://www.linkedin.com/in/teja-k-5654a7334/"
    },
    {
      name: "Sita Rama Praveen Madugula",
      affiliation: "Technology Leader, Techno tasks Inc",
      location: "USA",
      image: "/lovable-uploads/sita.jpg",
      expertise: "Insuretech, AI/ML, Data Science, Actuarial science",
      linkedin: "https://www.linkedin.com/in/praveen-madugula-4716061a/?originalSubdomain=in"
    },
    {
      name: "Goutham Rayapati",
      affiliation: "Security Engineer II, Amazon",
      location: "USA",
      image: "/lovable-uploads/gouthram.jpeg",
      expertise: "Cyber Security",
      linkedin: "https://www.linkedin.com/in/grayapati/"
    },
    {
    name: "Komal Manohar Tekale",
    affiliation: "Sr Dev Ops Engineer, Auto Club of Southern California",
    location: "USA",
    image: "/lovable-uploads/komaltekale.jpeg",
    expertise: "Guidewire, AI, ML, Insurance",
    linkedin: "https://www.linkedin.com/in/komal-tekale-127729a3/"
  },
  {
    name: "Arun Kumar Rajamandrapu",
    affiliation: "Solution Architect, General Motors",
    location: "USA",
    image: "/lovable-uploads/arun.jpeg",
    expertise: "Cloud, Microservices, OTA",
    linkedin: "https://www.linkedin.com/in/arunkumarrajamandrapu/"
  },
  {
    name: "Dr. Mahmood Afzal Hussain",
    affiliation: "Researcher / Cybersecurity Engineer, Rewards Network",
    location: "USA",
    image: "/lovable-uploads/mahmood.jpeg",
    expertise: "Cybersecurity",
    linkedin: "https://www.linkedin.com/in/dr-mahmood-hussain-9297b2353"
  },
  {
    name: "Sachin Srivastava",
    affiliation: "IT Product Manager, Munich Reinsurance",
    location: "USA",
    image: "/lovable-uploads/sachin.jpeg",
    expertise: "IT Product Management, Business Analysis, Data Analytics, P&C Insurance, Reinsurance, Digital Transformation, AI/ML",
    linkedin: ""
  },
  {
  name: "Nitin Mukhi",
  affiliation: "Enterprise Architect, Coforge",
  location: "USA",
  image: "/lovable-uploads/nitin.jpeg",
  expertise: "DevOps, SRE, Cloud Technologies, AI Integration, Data Security, Data Analytics",
  linkedin: "https://www.linkedin.com/in/nitin-mukhi-b27b1036?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
},
{
  name: "Chirag Soni",
  affiliation: "Assistant Project Manager",
  location: "USA",
  image: "/lovable-uploads/chirag.jpeg",
  expertise: "Project Management, Software Engineering, AI Applications, Cloud Computing, Agile Delivery, Data Analytics, IT Strategy, System Design, Automation, Infrastructure Management",
  linkedin: ""
},
{
  name: "Prasad Sundaramoorthy",
  affiliation: "Distinguished Senior Leader - Data & AI Analytics, Nordstrom",
  location: "Seattle, Washington, USA",
  image: "/lovable-uploads/prasad.jpeg",
  expertise: "Data Analytics, AI, Machine Learning, Cloud Technologies, Data Engineering, Business Intelligence, Retail Data Systems, Data Strategy",
  linkedin: "https://www.linkedin.com/in/prasadsundaramoorthy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
},
{
  name: "Akshay Rajshekar Shiraguppi",
  affiliation: "Sr. Data Engineer, Tri Pointe Homes",
  location: "USA",
  image: "/lovable-uploads/akshay.jpeg",
  expertise: "Data Engineering, Data Science, Machine Learning, Business Intelligence",
  linkedin: "https://www.linkedin.com/in/akshayrs7147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
},
{
  name: "Sujeet Kumar Tiwari",
  affiliation: "Software Developer Engineer in Test, Independent Researcher",
  location: "USA",
  image: "/lovable-uploads/sujeet.jpeg",
  expertise: "Software Testing, Automation, Research",
  linkedin: "https://orcid.org/0009-0004-0809-2752"
},
{
  name: "Sandipkumar Patel",
  affiliation: "Salesforce Architect, United Techno Solutions",
  location: "USA",
  image: "/lovable-uploads/sandip.jpeg",
  expertise: "Salesforce, CRM, AI, AI Agents",
  linkedin: "https://www.linkedin.com/in/sandiphpatel87/"
},
{
  name: "Gururaj Balkrishna Kodipady Yerkaditaya",
  affiliation: "Sr Solution Architect (Sr Manager), Accenture PLC",
  location: "USA",
  image: "/lovable-uploads/gururaj.png",
  expertise: "SAP EH&S, SAP PLM, GenAI",
  linkedin: "https://www.linkedin.com/in/gururaj-balkrishna-34122213",
},
{
  name: "Nitin Talreja",
  affiliation: "Principal Data Engineer, Optum Service Inc. (UHG)",
  location: "USA",
  image: "/lovable-uploads/nitin-talreja.jpeg",
  expertise: "Cloud Computing, AI/ML, Healthcare",
  linkedin: "https://www.linkedin.com/in/nitintalreja1/",
},
{
  name: "Roshan Kakarla",
  affiliation: "Software Engineer, Techcorp LLC",
  location: "USA",
  image: "/lovable-uploads/roshan.jpeg",
  expertise: "Software Engineering",
  linkedin: "http://linkedin.com/in/roshan-kakarla-171473387",
  email: "rkakarla1041@gmail.com"
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
                      alt={`${judge.name} - Hackathon Judge`}
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
              and compete for the £2,500 prize pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;