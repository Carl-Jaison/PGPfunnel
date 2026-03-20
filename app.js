/* ── Data ───────────────────────────────────────────────────── */
const STAGES = [
  "Identified",
  "Contacted",
  "Meeting scheduled",
  "Proposal sent",
  "Negotiating",
  "Closed — won",
  "Closed — lost"
];

const PROGRAMMES = ["PGP", "Bangalore Global Dialogue"];

const PROG_STYLE = {
  "PGP":                       { bg: "#E8EEF8", color: "#2B4C8C" },
  "Bangalore Global Dialogue": { bg: "#FFF0E6", color: "#8C3A0E" }
};

const STAGE_STYLE = {
  "Identified":        { bg: "#EEF2FF", color: "#2B4C8C" },
  "Contacted":         { bg: "#F3EFFE", color: "#5B3B9E" },
  "Meeting scheduled": { bg: "#FFF8E6", color: "#7A5100" },
  "Proposal sent":     { bg: "#EAF6F0", color: "#156440" },
  "Negotiating":       { bg: "#FEF0E8", color: "#8C3A0E" },
  "Closed — won":      { bg: "#E4F5EC", color: "#0B5C30" },
  "Closed — lost":     { bg: "#FEECEC", color: "#8C1A1A" }
};

const AVATAR_PALETTES = [
  { bg: "#E8EEF8", color: "#2B4C8C" },
  { bg: "#F0EBFD", color: "#5B3B9E" },
  { bg: "#E4F5EC", color: "#0B5C30" },
  { bg: "#FFF2D9", color: "#7A5100" },
  { bg: "#FDE8E8", color: "#8C1A1A" },
  { bg: "#FFF0E6", color: "#8C3A0E" },
  { bg: "#E6F7FF", color: "#0A4C6E" },
];

const STORAGE_KEY = "pgp_funnel_leads_v2";

const BGD_LEADS = [
  { id: 101, name: "Sudeepta Veerapaneni", company: "Deloitte", title: "Partner & Chief Innovation Officer", stage: "Contacted", mode: "Email sent on 14 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 102, name: "Kedar Lele & Jaya Jamrani", company: "Castrol India", title: "MD, India & VP, Global Marketing", stage: "Contacted", mode: "Email sent on 14 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 103, name: "Ronnie Zaiwalla", company: "Horizon Industrial Parks", title: "Senior Marketing Manager", stage: "Contacted", mode: "Email sent on 14 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 104, name: "Sridharan Rangarajan", company: "Cumi Murugappa", title: "Managing Director", stage: "Contacted", mode: "Email sent on 14 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 105, name: "Atul Sobti", company: "SCOPE (Standing Conference of Public Enterprises)", title: "Director General", stage: "Contacted", mode: "Email sent on 14 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 106, name: "Jetendra Gavankar", company: "Safran India", title: "CEO & Country Head", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 107, name: "Ashish Saraf", company: "Pratt & Whitney India", title: "Vice President & Country Head", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 108, name: "Hariharan Muralimanohar", company: "Zoho Corporation", title: "Head of Marketing (Zoho One), Zoho Meeting", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 109, name: "Amit Syngle", company: "Asian Paints", title: "MD & CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 110, name: "Mahesh Tahilyani", company: "Forbes Precision Tools (Totem)", title: "Managing Director", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 111, name: "Ajay Garg", company: "Equirus", title: "MD", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 112, name: "Vasanth Mosoor", company: "CommerceCX", title: "MD", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 113, name: "Sunil Desai", company: "TopSolid India", title: "Founder & Director", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 114, name: "Luca Matteucci", company: "Marposs India", title: "Managing Director", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 115, name: "Abhimanyu Barthwal", company: "Oemeta India Pvt Ltd", title: "Director", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 116, name: "Akhil Mittal", company: "Blue Photon Technology India Pvt Ltd", title: "CEO", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 117, name: "Robert Armstrong & Ajay Rao", company: "Zebra Technologies", title: "CMO and Head - Govt & Enterprise Business", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 118, name: "Deepak Kumar Gupta", company: "Creative EDM Engineering", title: "Director", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 119, name: "Mukhwinder Singh Bhurjee", company: "Micro Engineers India", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 120, name: "Pavitra Shankar", company: "Brigade Group", title: "MD", stage: "Contacted", mode: "Email sent on 15 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 121, name: "Vijay Ananth K", company: "Data Patterns (India) Ltd", title: "COO", stage: "Contacted", mode: "Email sent on 16 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 122, name: "Angad Singh Atwal", company: "MSA Global Technology & Engineering Pvt. Ltd", title: "Founder & Promoter", stage: "Contacted", mode: "Email sent on 16 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 123, name: "Dr. Srinivasan Dwarakanath", company: "Aerospace India Association", title: "DG", stage: "Contacted", mode: "Email sent on 16 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 124, name: "Devaraya Manjunath Sheregar", company: "Tool and Gauge Manufacturers Association of India (TAGMA India)", title: "President", stage: "Contacted", mode: "Email sent on 16 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 125, name: "Savyasachi Srinivas", company: "Collins Aerospace", title: "Vice President", stage: "Contacted", mode: "Email sent on 17 Sept", date: "", notes: "Responded", programme: "Bangalore Global Dialogue" },
  { id: 126, name: "Kapil Kaul", company: "CAPA India", title: "CEO & Director", stage: "Contacted", mode: "Email sent on 17 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 127, name: "Sunil Bhaskaran", company: "Air India Aviation Training Academy", title: "Director", stage: "Contacted", mode: "Email sent on 17 Sept", date: "", notes: "Rebound", programme: "Bangalore Global Dialogue" },
  { id: 128, name: "F R Singhvi", company: "Sansera Engineering Pvt. Ltd", title: "Joint Managing Director", stage: "Contacted", mode: "Email sent on 17 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 129, name: "Anuj Jhunjhunwala", company: "JJG Aero", title: "CEO", stage: "Contacted", mode: "Email sent on 17 Sept", date: "", notes: "Follow-up on 25 Sept", programme: "Bangalore Global Dialogue" },
  { id: 130, name: "Kushal Jadia", company: "Cyient", title: "Senior VP & CTO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 131, name: "Suresh Baroth", company: "Delopt", title: "CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 132, name: "Sujaya Sashikiran", company: "Hical Technologies Pvt Ltd", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 133, name: "Rajeev Kaul", company: "Aequs Pvt Ltd", title: "MD & CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 134, name: "Amber Dubey", company: "Mckinsey & Company", title: "Senior Advisor & former JS (Civil Aviation)", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 135, name: "Satya Chakravarthy", company: "The ePlane Co.", title: "Founder", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 136, name: "Sarath Chandra Gudlavallet", company: "Rattan India Enterprises Ltd", title: "CEO - NeoSky Drones", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 137, name: "Suraj Chettri", company: "Airbus", title: "VP, Head of HR - India & South Asia", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 138, name: "Uma Maheshwar", company: "GE Aviation", title: "CTO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 139, name: "Vishak Raman", company: "Fortinet", title: "Head, India & SAARC Business", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 140, name: "Ajay Singh", company: "SpiceJet", title: "Chairman & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 141, name: "Aloke Singh", company: "Air India Express", title: "MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 142, name: "Nihar Vartak", company: "Asteria Aerospace", title: "Co-founder", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 143, name: "Anil Kumar P.", company: "Unimech Aerospace", title: "Chairman & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 144, name: "Vikas Khurma", company: "CAE India Pvt Ltd", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 145, name: "Shriram Ghatpande", company: "Bell India Operations", title: "Director, Business Development", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 146, name: "Shyam Karigiri", company: "Moog Inc", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 147, name: "Seenivasan Balasubramanian", company: "Rolls-Royce Aerospace", title: "CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 148, name: "Gautam Maini", company: "Maini Precision", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 149, name: "Nitish Singh", company: "Astrogate Labs", title: "Founder & CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 150, name: "Prahalad Rai Agiwal", company: "Ignis Aerospace & Design Pvt Ltd", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 151, name: "G Ravi", company: "BEL-Thales Systems Ltd", title: "Vice CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 152, name: "Dr. D.K Sunil", company: "Hindustan Aeronautics Ltd", title: "Chairman & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 153, name: "Apparao V Mallavarapu", company: "Centum Electronics", title: "Chairman & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 154, name: "Marcel Pastuska", company: "Lufthansa Technik Services India", title: "CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 155, name: "Sujaya Shashikiran", company: "Hical Technologies Pvt Ltd", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 156, name: "Sunil Dhake", company: "GKN Aerospace India", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 157, name: "Vikram Rai", company: "GE Aerospace", title: "CEO, South Asia", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 158, name: "Vinay S.", company: "Skyserve", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 159, name: "Anirudh Sharma", company: "Digantara", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 160, name: "Awais Ahmed", company: "Pixxel Space", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 161, name: "Sanjay Nekkanti", company: "Dhruva Space", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 162, name: "Srinath Ravichandran", company: "Agnikul", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 163, name: "Bharath Daka", company: "Skyroot", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 164, name: "Yashas Karanam", company: "Bellatrix", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 165, name: "Sunil Indurti", company: "Azista Industries", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 166, name: "Amit Kalyani", company: "Bharat Forge", title: "", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 167, name: "Rajinder Singh Bhatia", company: "Society of Indian Defence Manufacturers (SIDM)", title: "President", stage: "Contacted", mode: "Email sent on 14 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 168, name: "Neelesh Tungar", company: "Kalyani Strategic Systems Limited", title: "CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 169, name: "Cecilia Oldne", company: "Sweden-India Business Council", title: "Chief India Representative", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 17 Sept", programme: "Bangalore Global Dialogue" },
  { id: 170, name: "Captain Vishal Kanwar (Retd)", company: "PwC India", title: "Partner, Aerospace & Defence", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 171, name: "Pawan Khatter", company: "Ernst & Young", title: "Partner and National Aerospace & Defence Leader", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 172, name: "Cmde Girish Raghunath Pradhan (Retd.)", company: "Bharat Dynamics Ltd", title: "Executive Director (BD)", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 173, name: "Amandeep Singh & Rajesh Mani", company: "Ashok Leyland", title: "Head (Defence Business); Head (Marketing)", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 174, name: "Ashish Rajvanshi", company: "Adani Defence & Aerospace", title: "CEO", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 175, name: "Capt Jagmohan (Retd.)", company: "Mazagon Dock Shipbuilders Ltd", title: "Chairman & MD", stage: "Contacted", mode: "Email sent on 13 Sept", date: "", notes: "Follow-up on 24 Sept", programme: "Bangalore Global Dialogue" },
  { id: 176, name: "Aravind Melligeri & Rajeev Kaul", company: "Aequs", title: "", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 177, name: "Sukaran Singh", company: "TATA Advanced Systems Ltd", title: "CEO", stage: "Identified", mode: "", date: "", notes: "Send email & proposal", programme: "Bangalore Global Dialogue" },
  { id: 178, name: "S.P. Shukla", company: "Mahindra Group", title: "President, Defence", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 179, name: "V. Venkata Raju", company: "VEM Technologies Pvt. Ltd", title: "Chairman & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 180, name: "Anand Stanley", company: "Airbus", title: "President, Asia Pacific", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 181, name: "Sudhir Rao", company: "Bombardier", title: "CEO & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 182, name: "Michael Fernandez", company: "Lockheed Martin", title: "Country Head - India", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 183, name: "Mansi Khanna", company: "Google", title: "Director, Ads and Brand & Reputation Marketing", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 184, name: "Garima Rathore", company: "Microsoft", title: "Director, Government Affairs and Public Policy", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 185, name: "Aman Jain", company: "Meta", title: "Senior Director & Country Head, Public Policy", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 186, name: "Chetan Krishnaswamy & Prasanna Karthik", company: "Amazon", title: "VP, Public Policy", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 187, name: "Naveen Tandon", company: "Apple", title: "Head - Policy & Strategy", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 188, name: "Ramesh Ramadurai", company: "3M India Ltd", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 189, name: "Puneet Kumar", company: "Accenture India", title: "Director, Public Policy & Government Affairs", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 190, name: "Arvind Chandrasekar", company: "AMD", title: "Senior Director, Govt Affairs", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 191, name: "Sadanand Patil", company: "Ametek", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 192, name: "Rajneesh Chopra", company: "Amway", title: "CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 193, name: "Srinivas Prasad R", company: "Analog Devices", title: "Director & India Site Head", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 194, name: "S Sunil Pai", company: "Wesco Anixter", title: "Country Manager", stage: "Identified", mode: "", date: "", notes: "Resend email", programme: "Bangalore Global Dialogue" },
  { id: 195, name: "Ashwini K. Aggarwal", company: "Applied Materials", title: "Former Director, Govt Affairs", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 196, name: "Amitabh Mathur", company: "Aptiv Components India", title: "President & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 197, name: "Ranvijay Lamba", company: "Arcesium", title: "Managing Director & Country Head", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 198, name: "Sandesh Hegde", company: "Ares Operations India", title: "Chief Operations Officer", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 199, name: "Nelson Corda", company: "Ashland India Pvt Ltd", title: "General Manager", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 200, name: "Amit Kushwaha", company: "AT&T", title: "Director, External and Regulatory Affairs", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 201, name: "Saurabh Agarwal", company: "Avery Dennison", title: "Vice President & General Manager", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 202, name: "Neeraj Sethi", company: "Baker Hughes", title: "Country Director – India & Bangladesh", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 203, name: "K. Ganesh", company: "Bank of America", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 204, name: "Neeraj Kumar", company: "Suntory Global Spirits", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 205, name: "Atul Grover", company: "Becton Dickinson India", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 206, name: "Naveen Munnangi", company: "Belcan India Pvt Ltd", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 207, name: "Salil Anil Gupte", company: "Boeing India Pvt Ltd", title: "President, Boeing India & South Asia", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 208, name: "R. Murali", company: "BorgWarner Morse Systems", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 209, name: "Manoj Madhavan", company: "Boston Scientific", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 210, name: "Sheenam Ohrie", company: "Broadridge India", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 211, name: "Madhav Thapar", company: "C.H. Robinson", title: "Vice President", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 212, name: "Jaswinder Ahuja", company: "Cadence Design Systems", title: "Corporate Vice President", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 213, name: "Arun Bhatia", company: "Carrier", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 214, name: "Ruby Thapar", company: "Caterpillar India Pvt Ltd", title: "Director, Global Govt. & Corporate Affairs", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 215, name: "Vivekanand Vanmeeganathan", company: "Caterpillar India Pvt Ltd", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 216, name: "Anshuman Magazine", company: "CBRE", title: "Chairman & CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 217, name: "Arvind Ramsewak Chaturvedi", company: "CDK Global India Pvt Ltd", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 218, name: "Harish Krishnan", company: "Cisco Systems India", title: "Managing Director & Chief Policy Officer", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 219, name: "Nelson Chaudhuri", company: "Citi Bank India", title: "Head, Government Affairs", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 220, name: "Devyani R L Rana", company: "The Coca Cola Company", title: "VP – Public Affairs, Communications and Sustainability", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 221, name: "K. Purushothaman", company: "Cognizant", title: "Head - Government Affairs (States)", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 222, name: "Prabha Narasimhan", company: "Colgate Palmolive", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 223, name: "Asish Datta", company: "Congruent Info-Tech", title: "COO & CFO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 224, name: "Dr. Ravi M. Bhatkal", company: "MacDermid Alpha Electronics Solutions", title: "VP, Strategy", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 225, name: "Sunanda Sehgal", company: "Corning Technologies India Pvt Ltd", title: "Regional HR Head", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 226, name: "Hari Jinaga", company: "Crane India", title: "President & MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 227, name: "Somy Thomas", company: "Cushman & Wakefield", title: "Executive MD, Land & Capital Markets", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 228, name: "Charitra Mehta", company: "D. E. Shaw India Private Limited", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 229, name: "Prakash MG", company: "International Flavors & Fragrances (IFF)", title: "Senior VP", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 230, name: "Atanu Mukherjee", company: "Dastur Energy", title: "CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 231, name: "Pinaki Ranjan Ghosh", company: "DCG Data Core Systems", title: "COO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 232, name: "Hemant Kumar", company: "Deloitte Consulting India", title: "MD, Global Services", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 233, name: "Manish Gupta", company: "Dell", title: "MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 234, name: "Tushar Banerjee", company: "Dover India", title: "MD", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 235, name: "Pallavi Malviya", company: "Dow Jones", title: "Regional Director, South Asia", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 236, name: "Avinash Gupta", company: "Dun & Bradstreet", title: "Managing Director & CEO", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 237, name: "Chetan Deshmukh", company: "Duracell India", title: "Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 238, name: "Vishaw Bhushan Sud", company: "Eastman Chemical India", title: "Regional Commercial Manager", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 239, name: "Irina Ghosh", company: "Anthropic India", title: "Managing Director", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 240, name: "Preeti Lobana & Anuj Gulati", company: "Google Gemini", title: "VP & Country Manager, Head of Global Growth Marketing", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 241, name: "Anil Agarwal & Dhiraj Nayyar", company: "Vedanta", title: "Non-Executive Chairman", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" },
  { id: 242, name: "George Verghese & Rahul Sahai", company: "Kirloskar Defence Systems", title: "Managing Director, CEO (Kirloskar Oil Engines Ltd)", stage: "Identified", mode: "", date: "", notes: "", programme: "Bangalore Global Dialogue" }
];

const DEFAULT_LEADS = [
  { id: 1, name: "Jeethu Chacko",        company: "Janes",                                   title: "Manager, Asia-Pacific",                           stage: "Identified", mode: "", date: "", notes: "", programme: "PGP" },
  { id: 2, name: "Rishi Vazir",          company: "Reliance",                                title: "Deputy General Manager, Corporate Communications", stage: "Identified", mode: "", date: "", notes: "", programme: "PGP" },
  { id: 3, name: "Payashwani Bharadwaj", company: "HCL Enterprise",                          title: "Senior Consultant",                               stage: "Identified", mode: "", date: "", notes: "", programme: "PGP" },
  { id: 4, name: "Rishi Sethi",          company: "Evoc Communications Consulting Pvt. Ltd", title: "Founder & CEO",                                   stage: "Identified", mode: "", date: "", notes: "", programme: "PGP" },
  ...BGD_LEADS
];

/* ── State ──────────────────────────────────────────────────── */
let leads = loadLeads();
let nextId = leads.reduce((m, l) => Math.max(m, l.id), 0) + 1;
let editId = null;
let deleteId = null;
let filterProg = "All";

/* ── Persistence ─────────────────────────────────────────────── */
function loadLeads() {
  try {
    const r = localStorage.getItem(STORAGE_KEY);
    if (r) {
      const parsed = JSON.parse(r);
      return parsed.map(l => ({ programme: "PGP", ...l }));
    }
    const old = localStorage.getItem("pgp_funnel_leads");
    if (old) {
      const oldLeads = JSON.parse(old).map(l => ({ programme: "PGP", ...l }));
      const merged = [...oldLeads, ...BGD_LEADS.filter(b => !oldLeads.find(o => o.id === b.id))];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }
  } catch(e){}
  return DEFAULT_LEADS.map(l => ({...l}));
}
function saveLeads() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(leads)); } catch(e){} }

/* ── Helpers ─────────────────────────────────────────────────── */
function initials(n) { return n.trim().split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase(); }
function avatarStyle(id) { const p=AVATAR_PALETTES[id%AVATAR_PALETTES.length]; return `background:${p.bg};color:${p.color}`; }
function formatDate(iso) { if(!iso) return ""; const d=new Date(iso+"T00:00:00"); return d.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}); }
function esc(s) { return s?(s+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""; }

/* ── Render ──────────────────────────────────────────────────── */
function render() { renderFilterTabs(); renderStats(); renderFunnel(); }

function renderFilterTabs() {
  const wrap = document.getElementById("filterTabs");
  if (!wrap) return;
  wrap.innerHTML = "";
  ["All","PGP","Bangalore Global Dialogue"].forEach(p => {
    const ps = PROG_STYLE[p] || {};
    const active = filterProg === p;
    const btn = document.createElement("button");
    btn.textContent = p === "Bangalore Global Dialogue" ? "BGD" : p;
    btn.onclick = () => { filterProg = p; render(); };
    btn.style.cssText = `font-family:var(--font-body);font-size:12px;font-weight:500;padding:6px 16px;border-radius:20px;cursor:pointer;transition:all 0.15s;border:1px solid ${active&&ps.color?ps.color:"var(--border-md)"};background:${active&&ps.bg?ps.bg:(active?"var(--surface-alt)":"transparent")};color:${active&&ps.color?ps.color:(active?"var(--text)":"var(--text-muted)")}`;
    wrap.appendChild(btn);
  });
}

function getVisible() { return filterProg==="All"?leads:leads.filter(l=>l.programme===filterProg); }

function renderStats() {
  const v=getVisible();
  const s=[
    {label:"Total leads",  val:v.length},
    {label:"Active",       val:v.filter(l=>!l.stage.startsWith("Closed")).length},
    {label:"Meetings set", val:v.filter(l=>l.stage==="Meeting scheduled").length},
    {label:"Closed won",   val:v.filter(l=>l.stage==="Closed — won").length}
  ];
  document.getElementById("statsGrid").innerHTML=s.map(x=>`<div class="stat-card"><div class="stat-label">${x.label}</div><div class="stat-val">${x.val}</div></div>`).join("");
}

function renderFunnel() {
  const vis = getVisible();
  const grouped = {};
  STAGES.forEach(s => { grouped[s] = []; });
  vis.forEach(l => { if(grouped[l.stage]) grouped[l.stage].push(l); });

  const html = STAGES.filter(s => grouped[s].length > 0).map(stage => {
    const ss = STAGE_STYLE[stage] || {bg:"#F1EFE8",color:"#444441"};
    const cards = grouped[stage].map(l => {
      const ps = PROG_STYLE[l.programme] || PROG_STYLE["PGP"];
      return `<div class="lead-card">
        <div class="lead-row">
          <div class="avatar-name">
            <div class="avatar" style="${avatarStyle(l.id)}">${initials(l.name)}</div>
            <div style="min-width:0"><div class="lead-name">${esc(l.name)}</div><div class="lead-role">${esc(l.title)}</div></div>
          </div>
          <div><div class="lead-co">${esc(l.company)}</div></div>
          <div><span class="badge" style="background:${ps.bg};color:${ps.color}">${l.programme==="Bangalore Global Dialogue"?"BGD":esc(l.programme)}</span></div>
          <div>
            <div class="lead-mode">${esc(l.mode)||'<span style="color:var(--text-faint)">—</span>'}</div>
            ${l.date?`<div class="lead-date">${formatDate(l.date)}</div>`:""}
          </div>
          <div class="card-actions">
            <button class="btn-icon" onclick="editLead(${l.id})">Edit</button>
            <button class="btn-icon btn-icon--del" onclick="promptDelete(${l.id})">×</button>
          </div>
        </div>
        ${l.notes?`<div class="lead-notes"><strong>Notes:</strong> ${esc(l.notes)}</div>`:""}
      </div>`;
    }).join("");

    return `<div class="stage-section">
      <div class="stage-heading">
        <span class="stage-pill" style="background:${ss.bg};color:${ss.color}">${stage}</span>
        <span class="stage-count">${grouped[stage].length} lead${grouped[stage].length!==1?"s":""}</span>
      </div>
      ${cards}
    </div>`;
  }).join("");

  document.getElementById("funnelBody").innerHTML = html ||
    `<p class="empty-state">No leads match the current filter.</p>`;
}

/* ── Modal ───────────────────────────────────────────────────── */
function populateStageSelect(v) { document.getElementById("f-stage").innerHTML=STAGES.map(s=>`<option${s===v?" selected":""}>${s}</option>`).join(""); }
function populateProgSelect(v)  { document.getElementById("f-programme").innerHTML=PROGRAMMES.map(p=>`<option${p===v?" selected":""}>${p}</option>`).join(""); }

function openAddModal() {
  editId=null;
  document.getElementById("modalTitle").textContent="Add new lead";
  document.getElementById("saveBtn").textContent="Add lead";
  ["f-name","f-company","f-title","f-mode","f-notes"].forEach(id=>document.getElementById(id).value="");
  document.getElementById("f-date").value="";
  populateStageSelect("Identified");
  populateProgSelect(filterProg!=="All"?filterProg:"PGP");
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("f-name").focus();
}

function editLead(id) {
  const l=leads.find(x=>x.id===id); if(!l) return;
  editId=id;
  document.getElementById("modalTitle").textContent="Edit lead";
  document.getElementById("saveBtn").textContent="Save changes";
  document.getElementById("f-name").value=l.name;
  document.getElementById("f-company").value=l.company;
  document.getElementById("f-title").value=l.title;
  document.getElementById("f-mode").value=l.mode;
  document.getElementById("f-date").value=l.date;
  document.getElementById("f-notes").value=l.notes;
  populateStageSelect(l.stage);
  populateProgSelect(l.programme||"PGP");
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("f-name").focus();
}

function closeModal() { document.getElementById("modalOverlay").classList.remove("open"); editId=null; }

function handleFormSubmit(e) {
  e.preventDefault();
  const data={
    name:      document.getElementById("f-name").value.trim(),
    company:   document.getElementById("f-company").value.trim(),
    title:     document.getElementById("f-title").value.trim(),
    stage:     document.getElementById("f-stage").value,
    programme: document.getElementById("f-programme").value,
    mode:      document.getElementById("f-mode").value.trim(),
    date:      document.getElementById("f-date").value,
    notes:     document.getElementById("f-notes").value.trim()
  };
  if(!data.name||!data.company) return;
  if(editId!==null) { const i=leads.findIndex(l=>l.id===editId); if(i>-1) leads[i]={...leads[i],...data}; }
  else leads.push({id:nextId++,...data});
  saveLeads(); closeModal(); render();
}

/* ── Delete ──────────────────────────────────────────────────── */
function promptDelete(id) { deleteId=id; document.getElementById("deleteOverlay").classList.add("open"); }
function closeDelete()    { document.getElementById("deleteOverlay").classList.remove("open"); deleteId=null; }
function confirmDelete()  { if(deleteId!==null){leads=leads.filter(l=>l.id!==deleteId);saveLeads();render();} closeDelete(); }

/* ── Listeners ───────────────────────────────────────────────── */
document.getElementById("openAddModal").addEventListener("click", openAddModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("cancelModal").addEventListener("click", closeModal);
document.getElementById("leadForm").addEventListener("submit", handleFormSubmit);
document.getElementById("modalOverlay").addEventListener("click", function(e){if(e.target===this)closeModal();});
document.getElementById("closeDelete").addEventListener("click", closeDelete);
document.getElementById("cancelDelete").addEventListener("click", closeDelete);
document.getElementById("confirmDelete").addEventListener("click", confirmDelete);
document.getElementById("deleteOverlay").addEventListener("click", function(e){if(e.target===this)closeDelete();});

render();
