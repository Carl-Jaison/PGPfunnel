/* ── Storage key ──────────────────────────────────────────── */
const STORAGE_KEY = "pgp_funnel_v3";

/* ── Constants ────────────────────────────────────────────── */
const STAGES = ["Identified","Contacted","Meeting scheduled","Proposal sent","Negotiating","Closed — won","Closed — lost"];
const PROGRAMMES = ["PGP","Bangalore Global Dialogue"];
const PROG_STYLE = {
  "PGP":                       {bg:"#E8EEF8", color:"#2B4C8C"},
  "Bangalore Global Dialogue": {bg:"#FFF0E6", color:"#8C3A0E"}
};
const STAGE_STYLE = {
  "Identified":        {bg:"#EEF2FF", color:"#2B4C8C"},
  "Contacted":         {bg:"#F3EFFE", color:"#5B3B9E"},
  "Meeting scheduled": {bg:"#FFF8E6", color:"#7A5100"},
  "Proposal sent":     {bg:"#EAF6F0", color:"#156440"},
  "Negotiating":       {bg:"#FEF0E8", color:"#8C3A0E"},
  "Closed — won":      {bg:"#E4F5EC", color:"#0B5C30"},
  "Closed — lost":     {bg:"#FEECEC", color:"#8C1A1A"}
};
const AVATAR_PALETTES = [
  {bg:"#E8EEF8", color:"#2B4C8C"},
  {bg:"#F0EBFD", color:"#5B3B9E"},
  {bg:"#E4F5EC", color:"#0B5C30"},
  {bg:"#FFF2D9", color:"#7A5100"},
  {bg:"#FDE8E8", color:"#8C1A1A"},
  {bg:"#FFF0E6", color:"#8C3A0E"},
  {bg:"#E6F7FF", color:"#0A4C6E"}
];
const CONTACTED_STAGES = ["Contacted","Meeting scheduled","Proposal sent","Negotiating","Closed — won","Closed — lost"];
const STAT_SCROLL = {
  "Contacted":         "stage-Contacted",
  "Meeting scheduled": "stage-Meeting scheduled",
  "Proposal sent":     "stage-Proposal sent",
  "Closed won":        "stage-Closed \u2014 won"
};

/* ── Seed data ────────────────────────────────────────────── */
const SEED = [
  {name:"Jeethu Chacko",company:"Janes",title:"Manager, Asia-Pacific",stage:"Identified",mode:"",date:"",notes:"",programme:"PGP"},
  {name:"Rishi Vazir",company:"Reliance",title:"Deputy General Manager, Corporate Communications",stage:"Identified",mode:"",date:"",notes:"",programme:"PGP"},
  {name:"Payashwani Bharadwaj",company:"HCL Enterprise",title:"Senior Consultant",stage:"Identified",mode:"",date:"",notes:"",programme:"PGP"},
  {name:"Rishi Sethi",company:"Evoc Communications Consulting Pvt. Ltd",title:"Founder & CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"PGP"},
  {name:"Promeet Ghosh",company:"Crompton Greaves Consumer Electricals",title:"MD & CEO",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Pratik Pota",company:"Eureka Forbes",title:"MD & CEO",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Subhadip Dutta Choudhury",company:"Hawkins Cookers",title:"Chairman & CEO",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Vipul Tuli",company:"Sembcorp Industries",title:"CEO, South Asia",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Asmita Joshi",company:"Airbnb India",title:"Head of Public Policy, India & South Asia",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Piyali Reddy",company:"Axis Bank",title:"SVP & Head of Corporate Communications",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Suryaprabha Sadasivan",company:"Chase Advisors",title:"Senior Vice President",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Sameer Bajaj",company:"MakeMyTrip",title:"SVP & Head of Corporate Communications and Corporate Affairs",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Rajnish Wahi",company:"AceVector (Snapdeal)",title:"SVP - Corporate Affairs and Communication",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Amit Kumar Nanchahal",company:"PepsiCo",title:"Brand Communications Head - International Beverages",stage:"Contacted",mode:"Email",date:"",notes:"",programme:"PGP"},
  {name:"Sudeepta Veerapaneni",company:"Deloitte",title:"Partner & Chief Innovation Officer",stage:"Contacted",mode:"Email sent on 14 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Kedar Lele & Jaya Jamrani",company:"Castrol India",title:"MD, India & VP, Global Marketing",stage:"Contacted",mode:"Email sent on 14 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Ronnie Zaiwalla",company:"Horizon Industrial Parks",title:"Senior Marketing Manager",stage:"Contacted",mode:"Email sent on 14 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Sridharan Rangarajan",company:"Cumi Murugappa",title:"Managing Director",stage:"Contacted",mode:"Email sent on 14 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Atul Sobti",company:"SCOPE (Standing Conference of Public Enterprises)",title:"Director General",stage:"Contacted",mode:"Email sent on 14 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Jetendra Gavankar",company:"Safran India",title:"CEO & Country Head",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Ashish Saraf",company:"Pratt & Whitney India",title:"Vice President & Country Head",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Hariharan Muralimanohar",company:"Zoho Corporation",title:"Head of Marketing (Zoho One), Zoho Meeting",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Amit Syngle",company:"Asian Paints",title:"MD & CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Mahesh Tahilyani",company:"Forbes Precision Tools (Totem)",title:"Managing Director",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Ajay Garg",company:"Equirus",title:"MD",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Vasanth Mosoor",company:"CommerceCX",title:"MD",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Sunil Desai",company:"TopSolid India",title:"Founder & Director",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Luca Matteucci",company:"Marposs India",title:"Managing Director",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Abhimanyu Barthwal",company:"Oemeta India Pvt Ltd",title:"Director",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Akhil Mittal",company:"Blue Photon Technology India Pvt Ltd",title:"CEO",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Robert Armstrong & Ajay Rao",company:"Zebra Technologies",title:"CMO and Head - Govt & Enterprise Business",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Deepak Kumar Gupta",company:"Creative EDM Engineering",title:"Director",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Mukhwinder Singh Bhurjee",company:"Micro Engineers India",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Pavitra Shankar",company:"Brigade Group",title:"MD",stage:"Contacted",mode:"Email sent on 15 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Vijay Ananth K",company:"Data Patterns (India) Ltd",title:"COO",stage:"Contacted",mode:"Email sent on 16 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Angad Singh Atwal",company:"MSA Global Technology & Engineering Pvt. Ltd",title:"Founder & Promoter",stage:"Contacted",mode:"Email sent on 16 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Dr. Srinivasan Dwarakanath",company:"Aerospace India Association",title:"DG",stage:"Contacted",mode:"Email sent on 16 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Devaraya Manjunath Sheregar",company:"Tool and Gauge Manufacturers Association of India (TAGMA India)",title:"President",stage:"Contacted",mode:"Email sent on 16 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Savyasachi Srinivas",company:"Collins Aerospace",title:"Vice President",stage:"Contacted",mode:"Email sent on 17 Sept",date:"",notes:"Responded",programme:"Bangalore Global Dialogue"},
  {name:"Kapil Kaul",company:"CAPA India",title:"CEO & Director",stage:"Contacted",mode:"Email sent on 17 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Sunil Bhaskaran",company:"Air India Aviation Training Academy",title:"Director",stage:"Contacted",mode:"Email sent on 17 Sept",date:"",notes:"Rebound",programme:"Bangalore Global Dialogue"},
  {name:"F R Singhvi",company:"Sansera Engineering Pvt. Ltd",title:"Joint Managing Director",stage:"Contacted",mode:"Email sent on 17 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Anuj Jhunjhunwala",company:"JJG Aero",title:"CEO",stage:"Contacted",mode:"Email sent on 17 Sept",date:"",notes:"Follow-up on 25 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Kushal Jadia",company:"Cyient",title:"Senior VP & CTO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Suresh Baroth",company:"Delopt",title:"CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sujaya Sashikiran",company:"Hical Technologies Pvt Ltd",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Rajeev Kaul",company:"Aequs Pvt Ltd",title:"MD & CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Amber Dubey",company:"Mckinsey & Company",title:"Senior Advisor & former JS (Civil Aviation)",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Satya Chakravarthy",company:"The ePlane Co.",title:"Founder",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sarath Chandra Gudlavallet",company:"Rattan India Enterprises Ltd",title:"CEO - NeoSky Drones",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Suraj Chettri",company:"Airbus",title:"VP, Head of HR - India & South Asia",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Uma Maheshwar",company:"GE Aviation",title:"CTO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Vishak Raman",company:"Fortinet",title:"Head, India & SAARC Business",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Ajay Singh",company:"SpiceJet",title:"Chairman & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Aloke Singh",company:"Air India Express",title:"MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Nihar Vartak",company:"Asteria Aerospace",title:"Co-founder",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Anil Kumar P.",company:"Unimech Aerospace",title:"Chairman & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Vikas Khurma",company:"CAE India Pvt Ltd",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Shriram Ghatpande",company:"Bell India Operations",title:"Director, Business Development",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Shyam Karigiri",company:"Moog Inc",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Seenivasan Balasubramanian",company:"Rolls-Royce Aerospace",title:"CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Gautam Maini",company:"Maini Precision",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Nitish Singh",company:"Astrogate Labs",title:"Founder & CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Prahalad Rai Agiwal",company:"Ignis Aerospace & Design Pvt Ltd",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"G Ravi",company:"BEL-Thales Systems Ltd",title:"Vice CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Dr. D.K Sunil",company:"Hindustan Aeronautics Ltd",title:"Chairman & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Apparao V Mallavarapu",company:"Centum Electronics",title:"Chairman & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Marcel Pastuska",company:"Lufthansa Technik Services India",title:"CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sujaya Shashikiran",company:"Hical Technologies Pvt Ltd",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sunil Dhake",company:"GKN Aerospace India",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Vikram Rai",company:"GE Aerospace",title:"CEO, South Asia",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Vinay S.",company:"Skyserve",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Anirudh Sharma",company:"Digantara",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Awais Ahmed",company:"Pixxel Space",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sanjay Nekkanti",company:"Dhruva Space",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Srinath Ravichandran",company:"Agnikul",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Bharath Daka",company:"Skyroot",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Yashas Karanam",company:"Bellatrix",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sunil Indurti",company:"Azista Industries",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Amit Kalyani",company:"Bharat Forge",title:"",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Rajinder Singh Bhatia",company:"Society of Indian Defence Manufacturers (SIDM)",title:"President",stage:"Contacted",mode:"Email sent on 14 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Neelesh Tungar",company:"Kalyani Strategic Systems Limited",title:"CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Cecilia Oldne",company:"Sweden-India Business Council",title:"Chief India Representative",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 17 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Captain Vishal Kanwar (Retd)",company:"PwC India",title:"Partner, Aerospace & Defence",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Pawan Khatter",company:"Ernst & Young",title:"Partner and National Aerospace & Defence Leader",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Cmde Girish Raghunath Pradhan (Retd.)",company:"Bharat Dynamics Ltd",title:"Executive Director (BD)",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Amandeep Singh & Rajesh Mani",company:"Ashok Leyland",title:"Head (Defence Business); Head (Marketing & Corporate Communications)",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Ashish Rajvanshi",company:"Adani Defence & Aerospace",title:"CEO",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Capt Jagmohan (Retd.)",company:"Mazagon Dock Shipbuilders Ltd",title:"Chairman & MD",stage:"Contacted",mode:"Email sent on 13 Sept",date:"",notes:"Follow-up on 24 Sept",programme:"Bangalore Global Dialogue"},
  {name:"Aravind Melligeri & Rajeev Kaul",company:"Aequs",title:"",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sukaran Singh",company:"TATA Advanced Systems Ltd",title:"CEO",stage:"Identified",mode:"",date:"",notes:"Send email & proposal",programme:"Bangalore Global Dialogue"},
  {name:"S.P. Shukla",company:"Mahindra Group",title:"President, Defence",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"V. Venkata Raju",company:"VEM Technologies Pvt. Ltd",title:"Chairman & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Anand Stanley",company:"Airbus",title:"President, Asia Pacific",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sudhir Rao",company:"Bombardier",title:"CEO & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Michael Fernandez",company:"Lockheed Martin",title:"Country Head - India",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Mansi Khanna",company:"Google",title:"Director, Ads and Brand & Reputation Marketing",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Garima Rathore",company:"Microsoft",title:"Director, Government Affairs and Public Policy",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Aman Jain",company:"Meta",title:"Senior Director & Country Head, Public Policy",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Chetan Krishnaswamy & Prasanna Karthik",company:"Amazon",title:"VP, Public Policy",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Naveen Tandon",company:"Apple",title:"Head - Policy & Strategy",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Ramesh Ramadurai",company:"3M India Ltd",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Puneet Kumar",company:"Accenture India",title:"Director, Public Policy & Government Affairs",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Arvind Chandrasekar",company:"AMD",title:"Senior Director, Govt Affairs",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sadanand Patil",company:"Ametek",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Rajneesh Chopra",company:"Amway",title:"CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Srinivas Prasad R",company:"Analog Devices",title:"Director & India Site Head",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"S Sunil Pai",company:"Wesco Anixter",title:"Country Manager",stage:"Identified",mode:"",date:"",notes:"Resend email",programme:"Bangalore Global Dialogue"},
  {name:"Ashwini K. Aggarwal",company:"Applied Materials",title:"Former Director, Govt Affairs",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Amitabh Mathur",company:"Aptiv Components India",title:"President & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Ranvijay Lamba",company:"Arcesium",title:"Managing Director & Country Head",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sandesh Hegde",company:"Ares Operations India",title:"Chief Operations Officer",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Nelson Corda",company:"Ashland India Pvt Ltd",title:"General Manager",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Amit Kushwaha",company:"AT&T",title:"Director, External and Regulatory Affairs",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Saurabh Agarwal",company:"Avery Dennison",title:"Vice President & General Manager",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Neeraj Sethi",company:"Baker Hughes",title:"Country Director - India & Bangladesh",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"K. Ganesh",company:"Bank of America",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Neeraj Kumar",company:"Suntory Global Spirits",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Atul Grover",company:"Becton Dickinson India",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Naveen Munnangi",company:"Belcan India Pvt Ltd",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Salil Anil Gupte",company:"Boeing India Pvt Ltd",title:"President, Boeing India & South Asia",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"R. Murali",company:"BorgWarner Morse Systems",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Manoj Madhavan",company:"Boston Scientific",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sheenam Ohrie",company:"Broadridge India",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Madhav Thapar",company:"C.H. Robinson",title:"Vice President",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Jaswinder Ahuja",company:"Cadence Design Systems",title:"Corporate Vice President",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Arun Bhatia",company:"Carrier",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Ruby Thapar",company:"Caterpillar India Pvt Ltd",title:"Director, Global Govt. & Corporate Affairs",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Vivekanand Vanmeeganathan",company:"Caterpillar India Pvt Ltd",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Anshuman Magazine",company:"CBRE",title:"Chairman & CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Arvind Ramsewak Chaturvedi",company:"CDK Global India Pvt Ltd",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Harish Krishnan",company:"Cisco Systems India",title:"Managing Director & Chief Policy Officer - India & SAARC",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Nelson Chaudhuri",company:"Citi Bank India",title:"Head, Government Affairs",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Devyani R L Rana",company:"The Coca Cola Company",title:"VP - Public Affairs, Communications and Sustainability",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"K. Purushothaman",company:"Cognizant",title:"Head - Government Affairs (States)",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Prabha Narasimhan",company:"Colgate Palmolive",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Asish Datta",company:"Congruent Info-Tech",title:"COO & CFO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Dr. Ravi M. Bhatkal",company:"MacDermid Alpha Electronics Solutions",title:"VP, Strategy",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Sunanda Sehgal",company:"Corning Technologies India Pvt Ltd",title:"Regional HR Head",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Hari Jinaga",company:"Crane India",title:"President & MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Somy Thomas",company:"Cushman & Wakefield",title:"Executive MD, Land & Capital Markets",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Charitra Mehta",company:"D. E. Shaw India Private Limited",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Prakash MG",company:"International Flavors & Fragrances (IFF)",title:"Senior VP",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Atanu Mukherjee",company:"Dastur Energy",title:"CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Pinaki Ranjan Ghosh",company:"DCG Data Core Systems",title:"COO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Hemant Kumar",company:"Deloitte Consulting India",title:"MD, Global Services",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Manish Gupta",company:"Dell",title:"MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Tushar Banerjee",company:"Dover India",title:"MD",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Pallavi Malviya",company:"Dow Jones",title:"Regional Director, South Asia",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Avinash Gupta",company:"Dun & Bradstreet",title:"Managing Director & CEO",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Chetan Deshmukh",company:"Duracell India",title:"Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Vishaw Bhushan Sud",company:"Eastman Chemical India",title:"Regional Commercial Manager",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Irina Ghosh",company:"Anthropic India",title:"Managing Director",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Preeti Lobana & Anuj Gulati",company:"Google Gemini",title:"VP & Country Manager, Head of Global Growth Marketing",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"Anil Agarwal & Dhiraj Nayyar",company:"Vedanta",title:"Non-Executive Chairman",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"},
  {name:"George Verghese & Rahul Sahai",company:"Kirloskar Defence Systems",title:"Managing Director, CEO (Kirloskar Oil Engines Ltd)",stage:"Identified",mode:"",date:"",notes:"",programme:"Bangalore Global Dialogue"}
];

/* ── Persistence ─────────────────────────────────────────── */
function saveLeads() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(leads)); } catch(e) {}
}

function initLeads() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length >= 100 && parsed[0] && parsed[0].programme) {
        return parsed;
      }
    }
  } catch(e) {}
  // Wipe old keys and seed fresh
  try {
    localStorage.removeItem("pgp_funnel_leads");
    localStorage.removeItem("pgp_funnel_leads_v2");
    localStorage.removeItem(STORAGE_KEY);
  } catch(e) {}
  const seeded = SEED.map((l, i) => Object.assign({id: i+1}, l));
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded)); } catch(e) {}
  return seeded;
}

/* ── State ───────────────────────────────────────────────── */
var leads = initLeads();
var nextId = leads.reduce(function(m,l){ return Math.max(m, l.id||0); }, 0) + 1;
var editId = null;
var deleteId = null;
var filterProg = "All";

/* ── Helpers ─────────────────────────────────────────────── */
function esc(s) { return s ? String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;") : ""; }
function initials(n) { return (n||"").trim().split(/\s+/).map(function(w){return w[0]||"";}).join("").slice(0,2).toUpperCase(); }
function avatarStyle(id) {
  var h = String(id||0).split("").reduce(function(a,c){return a+c.charCodeAt(0);},0);
  var p = AVATAR_PALETTES[h % AVATAR_PALETTES.length];
  return "background:"+p.bg+";color:"+p.color;
}
function formatDate(iso) {
  if (!iso) return "";
  var d = new Date(iso+"T00:00:00");
  return d.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
}
function getVisible() {
  if (filterProg === "All") return leads;
  return leads.filter(function(l){ return l.programme === filterProg; });
}

/* ── Render ──────────────────────────────────────────────── */
function render() { renderTabs(); renderStats(); renderFunnel(); }

function renderTabs() {
  var wrap = document.getElementById("filterTabs");
  if (!wrap) return;
  wrap.innerHTML = "";
  ["All","PGP","Bangalore Global Dialogue"].forEach(function(p) {
    var ps = PROG_STYLE[p] || {};
    var active = filterProg === p;
    var btn = document.createElement("button");
    btn.textContent = p === "Bangalore Global Dialogue" ? "BGD" : p;
    btn.onclick = function(){ filterProg = p; render(); };
    btn.style.cssText = "font-family:var(--font-body);font-size:12px;font-weight:500;padding:6px 16px;border-radius:20px;cursor:pointer;transition:all 0.15s;border:1px solid "+(active&&ps.color?ps.color:"var(--border-md)")+";background:"+(active&&ps.bg?ps.bg:(active?"var(--surface-alt)":"transparent"))+";color:"+(active&&ps.color?ps.color:(active?"var(--text)":"var(--text-muted))"));
    wrap.appendChild(btn);
  });
}

function renderStats() {
  var v = getVisible();
  var contacted = v.filter(function(l){ return CONTACTED_STAGES.indexOf(l.stage) > -1; }).length;
  var stats = [
    {label:"Total leads",       val:v.length,                                                                    scroll:"top"},
    {label:"Contacted",         val:contacted, sub:"incl. meetings, proposals & closed",                         scroll:"Contacted"},
    {label:"Meeting scheduled", val:v.filter(function(l){return l.stage==="Meeting scheduled";}).length,          scroll:"Meeting scheduled"},
    {label:"Proposal sent",     val:v.filter(function(l){return l.stage==="Proposal sent";}).length,              scroll:"Proposal sent"},
    {label:"Closed won",        val:v.filter(function(l){return l.stage==="Closed \u2014 won";}).length,          scroll:"Closed won"}
  ];
  document.getElementById("statsGrid").innerHTML = stats.map(function(x) {
    return '<div class="stat-card" onclick="scrollTo_(\'' + x.scroll + '\')">'
      + '<div class="stat-label">' + x.label + '</div>'
      + '<div class="stat-val">' + x.val + '</div>'
      + (x.sub ? '<div class="stat-sub">' + x.sub + '</div>' : '')
      + '</div>';
  }).join("");
}

function scrollTo_(key) {
  if (key === "top") { window.scrollTo({top:0,behavior:"smooth"}); return; }
  var id = "stage-" + key;
  var el = document.getElementById(id);
  if (!el) return;
  var hdr = document.querySelector("header");
  var bar = document.querySelector(".stats-bar");
  var off = (hdr ? hdr.offsetHeight : 57) + (bar ? bar.offsetHeight : 80) + 12;
  window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - off, behavior:"smooth"});
}

function renderFunnel() {
  var vis = getVisible();
  var grouped = {};
  STAGES.forEach(function(s){ grouped[s] = []; });
  vis.forEach(function(l){ if (grouped[l.stage]) grouped[l.stage].push(l); });

  var html = STAGES.filter(function(s){ return grouped[s].length > 0; }).map(function(stage) {
    var ss = STAGE_STYLE[stage] || {bg:"#F1EFE8",color:"#444441"};
    var cards = grouped[stage].map(function(l) {
      var ps = PROG_STYLE[l.programme] || PROG_STYLE["PGP"];
      var progLabel = l.programme === "Bangalore Global Dialogue" ? "BGD" : esc(l.programme);
      return '<div class="lead-card">'
        + '<div class="lead-row">'
        + '<div class="avatar-name">'
        + '<div class="avatar" style="' + avatarStyle(l.id) + '">' + initials(l.name) + '</div>'
        + '<div style="min-width:0"><div class="lead-name">' + esc(l.name) + '</div><div class="lead-role">' + esc(l.title) + '</div></div>'
        + '</div>'
        + '<div><div class="lead-co">' + esc(l.company) + '</div></div>'
        + '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
        + '<span class="badge" style="background:' + ps.bg + ';color:' + ps.color + '">' + progLabel + '</span>'
        + (l.mode ? '<span class="lead-mode">' + esc(l.mode) + '</span>' : '')
        + (l.date ? '<span class="lead-date">' + formatDate(l.date) + '</span>' : '')
        + '</div>'
        + '<div class="lead-mode desktop-only">' + (esc(l.mode)||'<span style="color:var(--text-faint)">\u2014</span>') + '</div>'
        + '<div class="card-actions">'
        + '<button class="btn-icon" onclick="editLead(' + l.id + ')">Edit</button>'
        + '<button class="btn-icon btn-icon--del" onclick="promptDelete(' + l.id + ')">\u00d7</button>'
        + '</div>'
        + '</div>'
        + (l.notes ? '<div class="lead-notes"><strong>Notes:</strong> ' + esc(l.notes) + '</div>' : '')
        + '</div>';
    }).join("");

    return '<div class="stage-section" id="stage-' + stage + '">'
      + '<div class="stage-heading">'
      + '<span class="stage-pill" style="background:' + ss.bg + ';color:' + ss.color + '">' + stage + '</span>'
      + '<span class="stage-count">' + grouped[stage].length + ' lead' + (grouped[stage].length!==1?"s":"") + '</span>'
      + '</div>'
      + cards
      + '</div>';
  }).join("");

  document.getElementById("funnelBody").innerHTML = html || '<p class="empty-state">No leads match the current filter.</p>';
}

/* ── Modal helpers ───────────────────────────────────────── */
function fillStageSelect(val) {
  document.getElementById("f-stage").innerHTML = STAGES.map(function(s){
    return '<option' + (s===val?" selected":"") + '>' + s + '</option>';
  }).join("");
}
function fillProgSelect(val) {
  document.getElementById("f-programme").innerHTML = PROGRAMMES.map(function(p){
    return '<option' + (p===val?" selected":"") + '>' + p + '</option>';
  }).join("");
}

function openAddModal() {
  editId = null;
  document.getElementById("modalTitle").textContent = "Add new lead";
  document.getElementById("saveBtn").textContent = "Add lead";
  ["f-name","f-company","f-title","f-mode","f-notes"].forEach(function(id){ document.getElementById(id).value=""; });
  document.getElementById("f-date").value = "";
  fillStageSelect("Identified");
  fillProgSelect(filterProg !== "All" ? filterProg : "PGP");
  document.getElementById("modalOverlay").classList.add("open");
  setTimeout(function(){ document.getElementById("f-name").focus(); }, 100);
}

function editLead(id) {
  var l = null;
  for (var i=0; i<leads.length; i++) { if (leads[i].id === id) { l = leads[i]; break; } }
  if (!l) return;
  editId = id;
  document.getElementById("modalTitle").textContent = "Edit lead";
  document.getElementById("saveBtn").textContent = "Save changes";
  document.getElementById("f-name").value    = l.name    || "";
  document.getElementById("f-company").value = l.company || "";
  document.getElementById("f-title").value   = l.title   || "";
  document.getElementById("f-mode").value    = l.mode    || "";
  document.getElementById("f-date").value    = l.date    || "";
  document.getElementById("f-notes").value   = l.notes   || "";
  fillStageSelect(l.stage || "Identified");
  fillProgSelect(l.programme || "PGP");
  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  editId = null;
}

function handleSubmit(e) {
  e.preventDefault();
  var data = {
    name:      document.getElementById("f-name").value.trim(),
    company:   document.getElementById("f-company").value.trim(),
    title:     document.getElementById("f-title").value.trim(),
    stage:     document.getElementById("f-stage").value,
    programme: document.getElementById("f-programme").value,
    mode:      document.getElementById("f-mode").value.trim(),
    date:      document.getElementById("f-date").value,
    notes:     document.getElementById("f-notes").value.trim()
  };
  if (!data.name || !data.company) return;
  if (editId !== null) {
    for (var i=0; i<leads.length; i++) {
      if (leads[i].id === editId) { leads[i] = Object.assign({}, leads[i], data); break; }
    }
  } else {
    data.id = nextId++;
    leads.push(data);
  }
  saveLeads();
  closeModal();
  render();
}

function promptDelete(id) { deleteId = id; document.getElementById("deleteOverlay").classList.add("open"); }
function closeDelete()    { document.getElementById("deleteOverlay").classList.remove("open"); deleteId = null; }
function confirmDelete()  {
  if (deleteId !== null) {
    leads = leads.filter(function(l){ return l.id !== deleteId; });
    saveLeads();
    render();
  }
  closeDelete();
}

/* ── Event listeners ─────────────────────────────────────── */
document.getElementById("openAddModal").addEventListener("click", openAddModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("cancelModal").addEventListener("click", closeModal);
document.getElementById("leadForm").addEventListener("submit", handleSubmit);
document.getElementById("modalOverlay").addEventListener("click", function(e){ if(e.target===this) closeModal(); });
document.getElementById("closeDelete").addEventListener("click", closeDelete);
document.getElementById("cancelDelete").addEventListener("click", closeDelete);
document.getElementById("confirmDelete").addEventListener("click", confirmDelete);
document.getElementById("deleteOverlay").addEventListener("click", function(e){ if(e.target===this) closeDelete(); });

/* ── Boot ────────────────────────────────────────────────── */
render();
