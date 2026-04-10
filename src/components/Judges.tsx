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
  linkedin: "https://www.linkedin.com/in/swapnaputti/",
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
  name: "Mayur Patel",
  affiliation: "Director, IT Center of Excellence, Axalta Coating Systems, LLC",
  location: "US",
  image: "/judges/Mayur.jpeg",
  expertise: "Digital Transformation",
  linkedin: "https://www.linkedin.com/in/mayur-patel-4a08791b",
  email: "mayurbpatel@gmail.com"
},
{
  name: "Chidambaram Subbapillai",
  affiliation: "Principal Consultant, Infosys Limited",
  location: "UK",
  image: "/judges/Chidambaram_Subbapillai.jpg",
  expertise: "Enterprise Transformation",
  linkedin: "https://www.linkedin.com/in/chidambaram-subbapillai-6a619555/",
  email: "chiit70@gmail.com"
},
{
  name: "Mahendrakumar Kalal",
  affiliation: "Senior SAP Analyst, O.C. Tanner",
  location: "Salt Lake City, Utah, USA",
  image: "/judges/Mahendrakumar_Kalal.jpeg",
  expertise: "AI-Driven Smart Manufacturing",
  linkedin: "https://linkedin.com/in/mahendra-kalal-973489121",
  email: "mahendrakalal14051989@gmail.com"
},
{
  name: "Balakrishnan Devaraj",
  affiliation: "Manager - Genesys Cloud & Contact Center AI, Cognizant",
  location: "USA",
  image: "/judges/Balakrishnan_Devaraj.jpeg",
  expertise: "Contact Center AI Operations",
  linkedin: "https://www.linkedin.com/in/balakrishnan-devaraj-a52021a1",
  email: "bala.krish14@gmail.com"
},
{
  name: "Dharga Panduranga Kolla",
  affiliation: "Staff Software Engineer, Moody’s Analytics",
  location: "USA",
  image: "/judges/Dharga_Panduranga_Kolla.jpeg",
  expertise: "Cloud Computing, AI and ML",
  linkedin: "https://www.linkedin.com/in/dhargak",
  email: "kolladharga@gmail.com"
},
{
  name: "Vikrant Varandani",
  affiliation: "Engineering Group Manager, Propulsion Thermal Software, General Motors",
  location: "",
  image: "/judges/Vikrant_Varandani.jpeg",
  expertise: "Automotive Thermal Systems",
  linkedin: "https://www.linkedin.com/in/vikrantvarandani",
  email: "vikrant.varandani@gmail.com"
},
{
  name: "Gadepalli Sri Pratyak Aditya Swaprakash",
  affiliation: "Sr Technical Director and Sr Solutions Architect, Global Alliant Inc",
  location: "USA",
  image: "/judges/Gadepalli_Sri_Pratyak_Aditya_Swaprakash.jpeg",
  expertise: "Healthcare AI & Cloud",
  linkedin: "",
  email: "PrakashA.GadepalliSP@outlook.com",
  experience: "26 years"
},
{
  name: "Dr. Azhar Ushmani",
  affiliation: "Security Leader, AWS",
  location: "USA",
  image: "/judges/Azhar_Ushmani.jpeg",
  expertise: "AI & Cloud Security",
  linkedin: "https://www.linkedin.com/in/azhar-ushmani-phd-a4b8501a",
  email: "Azhar.ushmani@gmail.com"
},
{
  name: "Nithesh Gudipuri",
  affiliation: "Associate Director, Technology, Raymond James & Associates",
  location: "USA",
  image: "/judges/Nithesh_Gudipuri.jpeg",
  expertise: "Enterprise Architecture",
  linkedin: "http://linkedin.com/in/nithesh-gudipuri-8abb54225",
  email: "Nithesh.gudipuri@ieee.org"
},
{
  name: "Suprith Krishnappa Chikkathayamma",
  affiliation: "Delivery Consultant (Database and Data Analytics, AI & ML), Amazon Web Services",
  location: "USA",
  image: "/judges/Suprith_Krishnappa_Chikkathayamma.jpeg",
  expertise: "Generative AI & Data Engineering",
  linkedin: "https://www.linkedin.com/in/suprith-krishnappa-c-2632101a",
  email: "suprithkcsu@gmail.com"
},
{
  name: "Ketankumar Patel",
  affiliation: "Senior Software Engineer, Anaqua Inc",
  location: "USA",
  image: "/judges/Ketankumar_Patel.jpeg",
  expertise: "Full Stack & AI",
  linkedin: "https://www.linkedin.com/in/ketanerp",
  email: "kdp2885@gmail.com"
},
{
  name: "Dhavalkumar Thakar",
  affiliation: "Senior Systems and Software Engineer, Capgemini",
  location: "USA",
  image: "/judges/Dhavalkumar_Thakar.jpeg",
  expertise: "Healthcare Systems Engineering",
  linkedin: "https://www.linkedin.com/in/dhavalthakar91",
  email: "d10thakar@gmail.com"
},
{
  name: "Sandeep Bharadwaj Mannapur",
  affiliation: "Lead AI and ML Engineer, ServiceNow",
  location: "USA",
  image: "/judges/Sandeep_Bharadwaj_Mannapur.jpeg",
  expertise: "AI/ML Engineering & Enterprise Data Architecture",
  linkedin: "https://www.linkedin.com/in/smb1937/",
  email: "sandeep.b.mannapur@gmail.com"
},
{
  name: "Ravindrakumar Prajapati",
  affiliation: "Sr Anaplan Manager / Anaplan Solutions Architect, Relanto INC",
  location: "USA",
  image: "/judges/Ravindrakumar_Prajapati.jpeg",
  expertise: "Anaplan Solutions Architecture",
  linkedin: "https://www.linkedin.com/in/ravinmp/",
  email: "prajapati.ravindra@outlook.com"
},
{
  name: "Jai Amrish Shah",
  affiliation: "Software Engineer, Amazon",
  location: "India",
  image: "/judges/Jai_Amrish_Shah.jpeg",
  expertise: "Artificial Intelligence, Cloud Computing, Distributed Systems",
  linkedin: "https://www.linkedin.com/in/jai05041994/",
  email: "jai.s@somaiya.edu"
},
{
  name: "Naveen Kumar Sharma",
  affiliation: "Sr. Technical Program Manager (Cyber Security / Research), Amazon Web Services",
  location: "India",
  image: "/judges/Naveen_Kumar_Sharma.jpeg",
  expertise: "Cyber Security, Research",
  linkedin: "https://www.linkedin.com/in/naveen-sharma-950a4a18/",
  email: "maynaveen2026@gmail.com"
},
{
  name: "Saraschandra Arveti",
  affiliation: "Senior Software Engineering Manager, Comcast Corporation",
  location: "USA",
  image: "/judges/Saraschandra_Arveti.jpeg",
  expertise: "Voice NLP, Cloud Engineering",
  linkedin: "https://www.linkedin.com/in/saraschandra",
  email: "saras.arveti@gmail.com"
},
{
  name: "Dheeraj Velaga",
  affiliation: "Software Development Engineer, Capital One",
  location: "USA",
  image: "/judges/Dheeraj_Velaga.jpeg",
  expertise: "AI, SDLC",
  linkedin: "http://linkedin.com/in/dvelaga",
  email: "mailtovelaga@gmail.com"
},
{
  name: "Komal Jasani",
  affiliation: "QA Engineering Specialist",
  location: "USA",
  image: "/judges/Komal_Jasani.jpeg",
  expertise: "QA Engineering, VR Testing, Agentic AI",
  linkedin: "https://www.linkedin.com/in/komal-jasani-4b530155/",
  email: "Komal_jasani@yahoo.com"
},
{
  name: "Bhanu Sri Katta",
  affiliation: "Consultant, Optiv Security Inc.",
  location: "USA",
  image: "/judges/Bhanu_Sri_Katta.jpeg",
  expertise: "CyberSecurity, IGA, IAM",
  linkedin: "https://www.linkedin.com/in/bhanuk8797",
  email: "bhanusrikatta01@gmail.com"
},
{
  name: "Lourdu Akhila Yeruva",
  affiliation: "Sr. AI Infra Solutions Engineer, AMD",
  location: "USA",
  image: "/judges/Lourdu_Akhila_Yeruva.jpeg",
  expertise: "AI, Infrastructure, Cloud Computing",
  linkedin: "https://www.linkedin.com/in/8azyb",
  email: "akhilalyeruva@gmail.com"
},
{
  name: "Jaival Vikal",
  affiliation: "Founder / CEO, Vikal Consulting Group",
  location: "USA",
  image: "/judges/Jaival_Vikal.jpeg",
  expertise: "Agentic AI, Sales Engineering, Product Management",
  linkedin: "https://www.linkedin.com/in/jaivalvikal",
  email: "jaival@vikalconsultinggroup.com"
},
{
  name: "Akshay Kumar Darla",
  affiliation: "Sr. Software Engineer, Tata Consultancy Services",
  location: "USA",
  image: "/judges/Akshay_Kumar_Darla.jpeg",
  expertise: "Usage/inclusion of AI in Health sector",
  linkedin: "https://www.linkedin.com/in/akshaykumardarla?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "akshaykumardarla96@gmail.com"
},
{
  name: "Yalamanchili Ravi krishna",
  affiliation: "QA Data Analyst, Brightspring Health services",
  location: "USA",
  image: "/judges/Yalamanchili_Ravi_Krishna.jpeg",
  expertise: "AI & Data Science",
  linkedin: "https://www.linkedin.com/in/ravi-krishna-yalamanchili-4813b43b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  email: "yalamanchili.ravikrishna98@gmail.com"
},
{
  name: "Nishant Garg",
  affiliation: "Software Development Manager (Managing 3 teams of total size 30 tech employees), Amazon",
  location: "USA",
  image: "/judges/Nishant_Garg.jpeg",
  expertise: "Distributed Systems, Generative AI, Engineering Management",
  linkedin: "https://www.linkedin.com/in/nishantgarg13/",
  email: "gargnishant1924@gmail.com"
},
{
  "name": "Sneha Shambula",
  "affiliation": "Senior Software Engineer, Amazon Web Services (AWS)",
  "location": "USA",
  "image": "/judges/Sneha_Shambula.jpeg",
  "expertise": "Cloud Infrastructure Resilience",
  "linkedin": "https://www.linkedin.com/in/snehashambula",
  "email": "sheissneha9@gmail.com"
},
{
  "name": "Vignesh Kamath",
  "affiliation": "Senior Software Engineer, Snowflake",
  "location": "USA",
  "image": "/judges/Vignesh_Kamath.jpeg",
  "expertise": "AI Agent Orchestration, Data Platform, Full Stack Applications",
  "linkedin": "https://www.linkedin.com/in/vignesh-kamath-47957690",
  "email": "vigneshkamath3193@gmail.com"
},
  {
    "name": "Saurabh Hitendra Patel",
    "affiliation": "RF Leader, Amdocs",
    "location": "USA",
    "image": "/judges/Saurabh_Hitendra_Patel.jpeg",
    "expertise": "RF, RAN, Machine Learning",
    "linkedin": "https://www.linkedin.com/in/saurabhhitendrapatel",
    "email": "patelsaurabh925@gmail.com"
  },
  {
    "name": "Maheshkumar Sachani",
    "affiliation": "Computer System Engineer, SVTronics Inc",
    "location": "USA",
    "image": "/judges/Maheshkumar_Sachani.jpeg",
    "expertise": "SAP ERP Technical Architecture",
    "linkedin": "https://www.linkedin.com/in/mahesh-sachani/",
    "email": "sachanimahesh17@gmail.com"
  },
  {
  "name": "Jayesh Radadiya",
  "affiliation": "Electrical Engineer, Meta",
  "location": "USA",
  "image": "/judges/Jayesh_Radadiya.jpeg",
  "expertise": "Electrical Engineering, Biomedical Engineering",
  "linkedin": "https://www.linkedin.com/in/jayeshee/",
  "email": "jayesh.radadiya1959@gmail.com"
},
{
    "name": "Bakul Singhal",
    "affiliation": "Information Security Architect, Steven Madden Ltd.",
    "location": "New York, USA - 11104",
    "image": "/judges/Bakul_Singhal.jpeg",
    "expertise": "IT Security",
    "linkedin": "",
    "email": "bakulyk86@gmail.com",
    "orcid": "0009-0005-8022-7671"
  },
  {
    "name": "Mitesh Shah",
    "affiliation": "Sr. Lead Product Manager, PayPal Inc.",
    "location": "USA",
    "image": "/judges/Mitesh_Shah.jpeg",
    "expertise": "AI, Personalization, Fintech",
    "linkedin": "https://www.linkedin.com/in/mitesh-shah-19673039",
    "email": "shah.mitesh1989@gmail.com"
  },
  {
    "name": "Janardhana Naidu Kola",
    "affiliation": "Director, Business Intelligence, ADP (Automatic Data Processing, Inc.)",
    "location": "USA",
    "image": "/judges/Janardhana_Kola.jpeg",
    "expertise": "Enterprise Analytics",
    "linkedin": "https://www.linkedin.com/in/janardhana-kola",
    "email": "reachjanardhanakola@gmail.com"
  },
  {
    "name": "Deepak Venkateshappa",
    "affiliation": "Data Engineering Architect, Meta (Ex LinkedIn)",
    "location": "USA",
    "image": "/judges/Deepak_Venkateshappa.jpeg",
    "expertise": "Big Data Engineering, AI ML",
    "linkedin": "https://www.linkedin.com/in/deepak-venkateshappa-9aa019aa/",
    "email": "Deepak.v10@gmail.com"
  },
  {
  "name": "Prateek Dwivedi",
  "affiliation": "AI Innovation Developer, Tetonic AI",
  "location": "USA",
  "image": "/judges/Prateek_Dwivedi.jpeg",
  "expertise": "AI, Data, Sustainability",
  "linkedin": "https://www.linkedin.com/in/dprateek",
  "email": "prateek.dwivedi@columbia.edu"
}
]
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