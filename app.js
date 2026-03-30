/* ── Storage ────────────────────────────────────────────────── */
const STORAGE_KEY = "pgp_funnel_leads_v2";

/* ── Static data ────────────────────────────────────────────── */
const STAGES = [
  "Identified","Contacted","Meeting scheduled",
  "Proposal sent","Negotiating","Closed — won","Closed — lost"
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

/* Seed data — 156 leads: 14 PGP + 142 BGD */
const SEED_LEADS = [
  {"_id": 1, "name": "Jeethu Chacko", "company": "Janes", "title": "Manager, Asia-Pacific", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 2, "name": "Rishi Vazir", "company": "Reliance", "title": "Deputy General Manager, Corporate Communications", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 3, "name": "Payashwani Bharadwaj", "company": "HCL Enterprise", "title": "Senior Consultant", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 4, "name": "Rishi Sethi", "company": "Evoc Communications Consulting Pvt. Ltd", "title": "Founder & CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 5, "name": "Promeet Ghosh", "company": "Crompton Greaves Consumer Electricals", "title": "MD & CEO", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 6, "name": "Pratik Pota", "company": "Eureka Forbes", "title": "MD & CEO", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 7, "name": "Subhadip Dutta Choudhury", "company": "Hawkins Cookers", "title": "Chairman & CEO", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 8, "name": "Vipul Tuli", "company": "Sembcorp Industries", "title": "CEO, South Asia", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 9, "name": "Asmita Joshi", "company": "Airbnb India", "title": "Head of Public Policy, India & South Asia", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 10, "name": "Piyali Reddy", "company": "Axis Bank", "title": "SVP & Head of Corporate Communications", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 11, "name": "Suryaprabha Sadasivan", "company": "Chase Advisors", "title": "Senior Vice President", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 12, "name": "Sameer Bajaj", "company": "MakeMyTrip", "title": "SVP & Head of Corporate Communications and Corporate Affairs", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 13, "name": "Rajnish Wahi", "company": "AceVector (Snapdeal)", "title": "SVP - Corporate Affairs and Communication", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 14, "name": "Amit Kumar Nanchahal", "company": "PepsiCo", "title": "Brand Communications Head - International Beverages", "stage": "Contacted", "mode": "Email", "date": "", "notes": "", "programme": "PGP"},
  {"_id": 15, "name": "Sudeepta Veerapaneni", "company": "Deloitte", "title": "Partner & Chief Innovation Officer", "stage": "Contacted", "mode": "Email sent on 14 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 16, "name": "Kedar Lele & Jaya Jamrani", "company": "Castrol India", "title": "MD, India & VP, Global Marketing", "stage": "Contacted", "mode": "Email sent on 14 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 17, "name": "Ronnie Zaiwalla", "company": "Horizon Industrial Parks", "title": "Senior Marketing Manager", "stage": "Contacted", "mode": "Email sent on 14 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 18, "name": "Sridharan Rangarajan", "company": "Cumi Murugappa", "title": "Managing Director", "stage": "Contacted", "mode": "Email sent on 14 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 19, "name": "Atul Sobti", "company": "SCOPE (Standing Conference of Public Enterprises)", "title": "Director General", "stage": "Contacted", "mode": "Email sent on 14 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 20, "name": "Jetendra Gavankar", "company": "Safran India", "title": "CEO & Country Head", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 21, "name": "Ashish Saraf", "company": "Pratt & Whitney India", "title": "Vice President & Country Head", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 22, "name": "Hariharan Muralimanohar", "company": "Zoho Corporation", "title": "Head of Marketing (Zoho One), Zoho Meeting", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 23, "name": "Amit Syngle", "company": "Asian Paints", "title": "MD & CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 24, "name": "Mahesh Tahilyani", "company": "Forbes Precision Tools (Totem)", "title": "Managing Director", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 25, "name": "Ajay Garg", "company": "Equirus", "title": "MD", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 26, "name": "Vasanth Mosoor", "company": "CommerceCX", "title": "MD", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 27, "name": "Sunil Desai", "company": "TopSolid India", "title": "Founder & Director", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 28, "name": "Luca Matteucci", "company": "Marposs India", "title": "Managing Director", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 29, "name": "Abhimanyu Barthwal", "company": "Oemeta India Pvt Ltd", "title": "Director", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 30, "name": "Akhil Mittal", "company": "Blue Photon Technology India Pvt Ltd", "title": "CEO", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 31, "name": "Robert Armstrong & Ajay Rao", "company": "Zebra Technologies", "title": "CMO and Head - Govt & Enterprise Business", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 32, "name": "Deepak Kumar Gupta", "company": "Creative EDM Engineering", "title": "Director", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 33, "name": "Mukhwinder Singh Bhurjee", "company": "Micro Engineers India", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 34, "name": "Pavitra Shankar", "company": "Brigade Group", "title": "MD", "stage": "Contacted", "mode": "Email sent on 15 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 35, "name": "Vijay Ananth K", "company": "Data Patterns (India) Ltd", "title": "COO", "stage": "Contacted", "mode": "Email sent on 16 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 36, "name": "Angad Singh Atwal", "company": "MSA Global Technology & Engineering Pvt. Ltd", "title": "Founder & Promoter", "stage": "Contacted", "mode": "Email sent on 16 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 37, "name": "Dr. Srinivasan Dwarakanath", "company": "Aerospace India Association", "title": "DG", "stage": "Contacted", "mode": "Email sent on 16 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 38, "name": "Devaraya Manjunath Sheregar", "company": "Tool and Gauge Manufacturers Association of India (TAGMA India)", "title": "President", "stage": "Contacted", "mode": "Email sent on 16 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 39, "name": "Savyasachi Srinivas", "company": "Collins Aerospace", "title": "Vice President", "stage": "Contacted", "mode": "Email sent on 17 Sept", "date": "", "notes": "Responded", "programme": "Bangalore Global Dialogue"},
  {"_id": 40, "name": "Kapil Kaul", "company": "CAPA India", "title": "CEO & Director", "stage": "Contacted", "mode": "Email sent on 17 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 41, "name": "Sunil Bhaskaran", "company": "Air India Aviation Training Academy", "title": "Director", "stage": "Contacted", "mode": "Email sent on 17 Sept", "date": "", "notes": "Rebound", "programme": "Bangalore Global Dialogue"},
  {"_id": 42, "name": "F R Singhvi", "company": "Sansera Engineering Pvt. Ltd", "title": "Joint Managing Director", "stage": "Contacted", "mode": "Email sent on 17 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 43, "name": "Anuj Jhunjhunwala", "company": "JJG Aero", "title": "CEO", "stage": "Contacted", "mode": "Email sent on 17 Sept", "date": "", "notes": "Follow-up on 25 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 44, "name": "Kushal Jadia", "company": "Cyient", "title": "Senior VP & CTO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 45, "name": "Suresh Baroth", "company": "Delopt", "title": "CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 46, "name": "Sujaya Sashikiran", "company": "Hical Technologies Pvt Ltd", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 47, "name": "Rajeev Kaul", "company": "Aequs Pvt Ltd", "title": "MD & CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 48, "name": "Amber Dubey", "company": "Mckinsey & Company", "title": "Senior Advisor & former JS (Civil Aviation)", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 49, "name": "Satya Chakravarthy", "company": "The ePlane Co.", "title": "Founder", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 50, "name": "Sarath Chandra Gudlavallet", "company": "Rattan India Enterprises Ltd", "title": "CEO - NeoSky Drones", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 51, "name": "Suraj Chettri", "company": "Airbus", "title": "VP, Head of HR - India & South Asia", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 52, "name": "Uma Maheshwar", "company": "GE Aviation", "title": "CTO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 53, "name": "Vishak Raman", "company": "Fortinet", "title": "Head, India & SAARC Business", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 54, "name": "Ajay Singh", "company": "SpiceJet", "title": "Chairman & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 55, "name": "Aloke Singh", "company": "Air India Express", "title": "MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 56, "name": "Nihar Vartak", "company": "Asteria Aerospace", "title": "Co-founder", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 57, "name": "Anil Kumar P.", "company": "Unimech Aerospace", "title": "Chairman & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 58, "name": "Vikas Khurma", "company": "CAE India Pvt Ltd", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 59, "name": "Shriram Ghatpande", "company": "Bell India Operations", "title": "Director, Business Development", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 60, "name": "Shyam Karigiri", "company": "Moog Inc", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 61, "name": "Seenivasan Balasubramanian", "company": "Rolls-Royce Aerospace", "title": "CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 62, "name": "Gautam Maini", "company": "Maini Precision", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 63, "name": "Nitish Singh", "company": "Astrogate Labs", "title": "Founder & CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 64, "name": "Prahalad Rai Agiwal", "company": "Ignis Aerospace & Design Pvt Ltd", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 65, "name": "G Ravi", "company": "BEL-Thales Systems Ltd", "title": "Vice CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 66, "name": "Dr. D.K Sunil", "company": "Hindustan Aeronautics Ltd", "title": "Chairman & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 67, "name": "Apparao V Mallavarapu", "company": "Centum Electronics", "title": "Chairman & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 68, "name": "Marcel Pastuska", "company": "Lufthansa Technik Services India", "title": "CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 69, "name": "Sujaya Shashikiran", "company": "Hical Technologies Pvt Ltd", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 70, "name": "Sunil Dhake", "company": "GKN Aerospace India", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 71, "name": "Vikram Rai", "company": "GE Aerospace", "title": "CEO, South Asia", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 72, "name": "Vinay S.", "company": "Skyserve", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 73, "name": "Anirudh Sharma", "company": "Digantara", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 74, "name": "Awais Ahmed", "company": "Pixxel Space", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 75, "name": "Sanjay Nekkanti", "company": "Dhruva Space", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 76, "name": "Srinath Ravichandran", "company": "Agnikul", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 77, "name": "Bharath Daka", "company": "Skyroot", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 78, "name": "Yashas Karanam", "company": "Bellatrix", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 79, "name": "Sunil Indurti", "company": "Azista Industries", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 80, "name": "Amit Kalyani", "company": "Bharat Forge", "title": "", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 81, "name": "Rajinder Singh Bhatia", "company": "Society of Indian Defence Manufacturers (SIDM)", "title": "President", "stage": "Contacted", "mode": "Email sent on 14 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 82, "name": "Neelesh Tungar", "company": "Kalyani Strategic Systems Limited", "title": "CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 83, "name": "Cecilia Oldne", "company": "Sweden-India Business Council", "title": "Chief India Representative", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 17 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 84, "name": "Captain Vishal Kanwar (Retd)", "company": "PwC India", "title": "Partner, Aerospace & Defence", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 85, "name": "Pawan Khatter", "company": "Ernst & Young", "title": "Partner and National Aerospace & Defence Leader", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 86, "name": "Cmde Girish Raghunath Pradhan (Retd.)", "company": "Bharat Dynamics Ltd", "title": "Executive Director (BD)", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 87, "name": "Amandeep Singh & Rajesh Mani", "company": "Ashok Leyland", "title": "Head (Defence Business); Head (Marketing & Corporate Communications)", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 88, "name": "Ashish Rajvanshi", "company": "Adani Defence & Aerospace", "title": "CEO", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 89, "name": "Capt Jagmohan (Retd.)", "company": "Mazagon Dock Shipbuilders Ltd", "title": "Chairman & MD", "stage": "Contacted", "mode": "Email sent on 13 Sept", "date": "", "notes": "Follow-up on 24 Sept", "programme": "Bangalore Global Dialogue"},
  {"_id": 90, "name": "Aravind Melligeri & Rajeev Kaul", "company": "Aequs", "title": "", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 91, "name": "Sukaran Singh", "company": "TATA Advanced Systems Ltd", "title": "CEO", "stage": "Identified", "mode": "", "date": "", "notes": "Send email & proposal", "programme": "Bangalore Global Dialogue"},
  {"_id": 92, "name": "S.P. Shukla", "company": "Mahindra Group", "title": "President, Defence", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 93, "name": "V. Venkata Raju", "company": "VEM Technologies Pvt. Ltd", "title": "Chairman & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 94, "name": "Anand Stanley", "company": "Airbus", "title": "President, Asia Pacific", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 95, "name": "Sudhir Rao", "company": "Bombardier", "title": "CEO & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 96, "name": "Michael Fernandez", "company": "Lockheed Martin", "title": "Country Head - India", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 97, "name": "Mansi Khanna", "company": "Google", "title": "Director, Ads and Brand & Reputation Marketing", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 98, "name": "Garima Rathore", "company": "Microsoft", "title": "Director, Government Affairs and Public Policy", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 99, "name": "Aman Jain", "company": "Meta", "title": "Senior Director & Country Head, Public Policy", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 100, "name": "Chetan Krishnaswamy & Prasanna Karthik", "company": "Amazon", "title": "VP, Public Policy", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 101, "name": "Naveen Tandon", "company": "Apple", "title": "Head - Policy & Strategy", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 102, "name": "Ramesh Ramadurai", "company": "3M India Ltd", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 103, "name": "Puneet Kumar", "company": "Accenture India", "title": "Director, Public Policy & Government Affairs", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 104, "name": "Arvind Chandrasekar", "company": "AMD", "title": "Senior Director, Govt Affairs", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 105, "name": "Sadanand Patil", "company": "Ametek", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 106, "name": "Rajneesh Chopra", "company": "Amway", "title": "CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 107, "name": "Srinivas Prasad R", "company": "Analog Devices", "title": "Director & India Site Head", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 108, "name": "S Sunil Pai", "company": "Wesco Anixter", "title": "Country Manager", "stage": "Identified", "mode": "", "date": "", "notes": "Resend email", "programme": "Bangalore Global Dialogue"},
  {"_id": 109, "name": "Ashwini K. Aggarwal", "company": "Applied Materials", "title": "Former Director, Govt Affairs", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 110, "name": "Amitabh Mathur", "company": "Aptiv Components India", "title": "President & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 111, "name": "Ranvijay Lamba", "company": "Arcesium", "title": "Managing Director & Country Head", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 112, "name": "Sandesh Hegde", "company": "Ares Operations India", "title": "Chief Operations Officer", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 113, "name": "Nelson Corda", "company": "Ashland India Pvt Ltd", "title": "General Manager", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 114, "name": "Amit Kushwaha", "company": "AT&T", "title": "Director, External and Regulatory Affairs", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 115, "name": "Saurabh Agarwal", "company": "Avery Dennison", "title": "Vice President & General Manager", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 116, "name": "Neeraj Sethi", "company": "Baker Hughes", "title": "Country Director - India & Bangladesh", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 117, "name": "K. Ganesh", "company": "Bank of America", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 118, "name": "Neeraj Kumar", "company": "Suntory Global Spirits", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 119, "name": "Atul Grover", "company": "Becton Dickinson India", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 120, "name": "Naveen Munnangi", "company": "Belcan India Pvt Ltd", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 121, "name": "Salil Anil Gupte", "company": "Boeing India Pvt Ltd", "title": "President, Boeing India & South Asia", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 122, "name": "R. Murali", "company": "BorgWarner Morse Systems", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 123, "name": "Manoj Madhavan", "company": "Boston Scientific", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 124, "name": "Sheenam Ohrie", "company": "Broadridge India", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 125, "name": "Madhav Thapar", "company": "C.H. Robinson", "title": "Vice President", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 126, "name": "Jaswinder Ahuja", "company": "Cadence Design Systems", "title": "Corporate Vice President", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 127, "name": "Arun Bhatia", "company": "Carrier", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 128, "name": "Ruby Thapar", "company": "Caterpillar India Pvt Ltd", "title": "Director, Global Govt. & Corporate Affairs", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 129, "name": "Vivekanand Vanmeeganathan", "company": "Caterpillar India Pvt Ltd", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 130, "name": "Anshuman Magazine", "company": "CBRE", "title": "Chairman & CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 131, "name": "Arvind Ramsewak Chaturvedi", "company": "CDK Global India Pvt Ltd", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 132, "name": "Harish Krishnan", "company": "Cisco Systems India", "title": "Managing Director & Chief Policy Officer - India & SAARC", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 133, "name": "Nelson Chaudhuri", "company": "Citi Bank India", "title": "Head, Government Affairs", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 134, "name": "Devyani R L Rana", "company": "The Coca Cola Company", "title": "VP - Public Affairs, Communications and Sustainability", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 135, "name": "K. Purushothaman", "company": "Cognizant", "title": "Head - Government Affairs (States)", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 136, "name": "Prabha Narasimhan", "company": "Colgate Palmolive", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 137, "name": "Asish Datta", "company": "Congruent Info-Tech", "title": "COO & CFO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 138, "name": "Dr. Ravi M. Bhatkal", "company": "MacDermid Alpha Electronics Solutions", "title": "VP, Strategy", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 139, "name": "Sunanda Sehgal", "company": "Corning Technologies India Pvt Ltd", "title": "Regional HR Head", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 140, "name": "Hari Jinaga", "company": "Crane India", "title": "President & MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 141, "name": "Somy Thomas", "company": "Cushman & Wakefield", "title": "Executive MD, Land & Capital Markets", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 142, "name": "Charitra Mehta", "company": "D. E. Shaw India Private Limited", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 143, "name": "Prakash MG", "company": "International Flavors & Fragrances (IFF)", "title": "Senior VP", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 144, "name": "Atanu Mukherjee", "company": "Dastur Energy", "title": "CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 145, "name": "Pinaki Ranjan Ghosh", "company": "DCG Data Core Systems", "title": "COO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 146, "name": "Hemant Kumar", "company": "Deloitte Consulting India", "title": "MD, Global Services", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 147, "name": "Manish Gupta", "company": "Dell", "title": "MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 148, "name": "Tushar Banerjee", "company": "Dover India", "title": "MD", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 149, "name": "Pallavi Malviya", "company": "Dow Jones", "title": "Regional Director, South Asia", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 150, "name": "Avinash Gupta", "company": "Dun & Bradstreet", "title": "Managing Director & CEO", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 151, "name": "Chetan Deshmukh", "company": "Duracell India", "title": "Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 152, "name": "Vishaw Bhushan Sud", "company": "Eastman Chemical India", "title": "Regional Commercial Manager", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 153, "name": "Irina Ghosh", "company": "Anthropic India", "title": "Managing Director", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 154, "name": "Preeti Lobana & Anuj Gulati", "company": "Google Gemini", "title": "VP & Country Manager, Head of Global Growth Marketing", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 155, "name": "Anil Agarwal & Dhiraj Nayyar", "company": "Vedanta", "title": "Non-Executive Chairman", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"},
  {"_id": 156, "name": "George Verghese & Rahul Sahai", "company": "Kirloskar Defence Systems", "title": "Managing Director, CEO (Kirloskar Oil Engines Ltd)", "stage": "Identified", "mode": "", "date": "", "notes": "", "programme": "Bangalore Global Dialogue"}
];

/* ── State ──────────────────────────────────────────────────── */
let leads = loadLeads();
let nextId = leads.reduce((m, l) => Math.max(m, l._id || 0), 0) + 1;
let editId = null;
let deleteId = null;
let filterProg = "All";

/* ── Persistence ────────────────────────────────────────────── */
function loadLeads() {
  try {
    const r = localStorage.getItem(STORAGE_KEY);
    if (r) {
      const parsed = JSON.parse(r);
      // Use stored data only if it's complete (has all leads including BGD)
      if (parsed.length >= 150) return parsed;
    }
    // First visit or stale data — seed full dataset
    const seeded = SEED_LEADS.map(l => ({ ...l }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  } catch(e) {}
  return SEED_LEADS.map(l => ({ ...l }));
}

function saveLeads() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(leads)); } catch(e) {}
}

/* ── Helpers ────────────────────────────────────────────────── */
function initials(n) { return (n||"").trim().split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase(); }
function avatarStyle(id) {
  const hash = (id||"").split("").reduce((a,c)=>a+c.charCodeAt(0),0);
  const p = AVATAR_PALETTES[hash % AVATAR_PALETTES.length];
  return `background:${p.bg};color:${p.color}`;
}
function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
}
function esc(s) { return s ? (s+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;") : ""; }

/* ── Render ─────────────────────────────────────────────────── */
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

function getVisible() { return filterProg === "All" ? leads : leads.filter(l => l.programme === filterProg); }

/* Maps stat card label → stage id to scroll to */
const STAT_SCROLL_TARGET = {
  "Contacted":         "stage-Contacted",
  "Meeting scheduled": "stage-Meeting scheduled",
  "Proposal sent":     "stage-Proposal sent",
  "Negotiating":       "stage-Negotiating",
  "Closed won":        "stage-Closed — won",
  "Closed lost":       "stage-Closed — lost"
};

/* Stages that count as "contacted or beyond" */
const CONTACTED_STAGES = [
  "Contacted",
  "Meeting scheduled",
  "Proposal sent",
  "Negotiating",
  "Closed — won",
  "Closed — lost"
];

function scrollToStage(label) {
  if (label === "Total leads") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const targetId = STAT_SCROLL_TARGET[label];
  if (!targetId) return;
  const el = document.getElementById(targetId);
  if (el) {
    /* measure actual sticky heights dynamically */
    const header   = document.querySelector("header");
    const statsBar = document.querySelector(".stats-bar");
    const offset   = (header ? header.offsetHeight : 57) +
                     (statsBar ? statsBar.offsetHeight : 90) + 16;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function renderStats() {
  const v = getVisible();
  /* "Contacted" = all leads that have been contacted or progressed further */
  const contactedCount = v.filter(l => CONTACTED_STAGES.includes(l.stage)).length;
  const s = [
    { label:"Total leads",       val: v.length,                                                        scroll:"Total leads" },
    { label:"Contacted",         val: contactedCount,                                                  scroll:"Contacted",
      sub: "incl. meetings, proposals & closed" },
    { label:"Meeting scheduled", val: v.filter(l=>l.stage==="Meeting scheduled").length,               scroll:"Meeting scheduled" },
    { label:"Proposal sent",     val: v.filter(l=>l.stage==="Proposal sent").length,                   scroll:"Proposal sent" },
    { label:"Closed won",        val: v.filter(l=>l.stage==="Closed — won").length,                scroll:"Closed won" }
  ];
  document.getElementById("statsGrid").innerHTML = s.map(x =>
    `<div class="stat-card" onclick="scrollToStage('${x.scroll}')">
      <div class="stat-label">${x.label}</div>
      <div class="stat-val">${x.val}</div>
      ${x.sub ? `<div class="stat-sub">${x.sub}</div>` : ""}
    </div>`
  ).join("");
}

function renderFunnel() {
  const vis = getVisible();
  const grouped = {};
  STAGES.forEach(s => { grouped[s] = []; });
  vis.forEach(l => { if (grouped[l.stage]) grouped[l.stage].push(l); });

  const html = STAGES.filter(s => grouped[s].length > 0).map(stage => {
    const ss = STAGE_STYLE[stage] || { bg:"#F1EFE8", color:"#444441" };
    const cards = grouped[stage].map(l => {
      const ps = PROG_STYLE[l.programme] || PROG_STYLE["PGP"];
      const progLabel = l.programme === "Bangalore Global Dialogue" ? "BGD" : esc(l.programme);
      return `<div class="lead-card">
        <div class="lead-row">
          <div class="avatar-name">
            <div class="avatar" style="${avatarStyle(l._id)}">${initials(l.name)}</div>
            <div style="min-width:0">
              <div class="lead-name">${esc(l.name)}</div>
              <div class="lead-role">${esc(l.title)}</div>
            </div>
          </div>
          <div><div class="lead-co">${esc(l.company)}</div></div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span class="badge" style="background:${ps.bg};color:${ps.color}">${progLabel}</span>
            ${l.mode ? `<span class="lead-mode">${esc(l.mode)}</span>` : ""}
            ${l.date ? `<span class="lead-date">${formatDate(l.date)}</span>` : ""}
          </div>
          <div class="lead-mode desktop-only">${esc(l.mode) || '<span style="color:var(--text-faint)">—</span>'}</div>
          <div class="card-actions">
            <button class="btn-icon" onclick="editLead(${JSON.stringify(l._id)})">Edit</button>
            <button class="btn-icon btn-icon--del" onclick="promptDelete(${JSON.stringify(l._id)})">×</button>
          </div>
        </div>
        ${l.notes ? `<div class="lead-notes"><strong>Notes:</strong> ${esc(l.notes)}</div>` : ""}
      </div>`;
    }).join("");

    return `<div class="stage-section" id="stage-${stage}">
      <div class="stage-heading">
        <span class="stage-pill" style="background:${ss.bg};color:${ss.color}">${stage}</span>
        <span class="stage-count">${grouped[stage].length} lead${grouped[stage].length !== 1 ? "s" : ""}</span>
      </div>
      ${cards}
    </div>`;
  }).join("");

  document.getElementById("funnelBody").innerHTML = html ||
    `<p class="empty-state">No leads match the current filter.</p>`;
}

/* ── Modal helpers ──────────────────────────────────────────── */
function populateStageSelect(v) {
  document.getElementById("f-stage").innerHTML = STAGES.map(s => `<option${s===v?" selected":""}>${s}</option>`).join("");
}
function populateProgSelect(v) {
  document.getElementById("f-programme").innerHTML = PROGRAMMES.map(p => `<option${p===v?" selected":""}>${p}</option>`).join("");
}

/* ── Modal open/close ───────────────────────────────────────── */
function openAddModal() {
  editId = null;
  document.getElementById("modalTitle").textContent = "Add new lead";
  document.getElementById("saveBtn").textContent = "Add lead";
  ["f-name","f-company","f-title","f-mode","f-notes"].forEach(id => document.getElementById(id).value = "");
  document.getElementById("f-date").value = "";
  populateStageSelect("Identified");
  populateProgSelect(filterProg !== "All" ? filterProg : "PGP");
  document.getElementById("modalOverlay").classList.add("open");
  setTimeout(() => document.getElementById("f-name").focus(), 100);
}

function editLead(id) {
  const l = leads.find(x => String(x._id) === String(id));
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
  populateStageSelect(l.stage || "Identified");
  populateProgSelect(l.programme || "PGP");
  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  editId = null;
}

/* ── Save ───────────────────────────────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  const data = {
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
    const idx = leads.findIndex(l => l._id === editId);
    if (idx > -1) leads[idx] = { ...leads[idx], ...data };
  } else {
    leads.push({ _id: nextId++, ...data });
  }
  saveLeads();
  closeModal();
  render();
}

/* ── Delete ─────────────────────────────────────────────────── */
function promptDelete(id) { deleteId = id; document.getElementById("deleteOverlay").classList.add("open"); }
function closeDelete()    { document.getElementById("deleteOverlay").classList.remove("open"); deleteId = null; }

function confirmDelete() {
  if (deleteId !== null) {
    leads = leads.filter(l => String(l._id) !== String(deleteId));
    saveLeads();
    render();
  }
  closeDelete();
}

/* ── Event listeners ────────────────────────────────────────── */
document.getElementById("openAddModal").addEventListener("click", openAddModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("cancelModal").addEventListener("click", closeModal);
document.getElementById("leadForm").addEventListener("submit", handleFormSubmit);
document.getElementById("modalOverlay").addEventListener("click", function(e){ if(e.target===this) closeModal(); });
document.getElementById("closeDelete").addEventListener("click", closeDelete);
document.getElementById("cancelDelete").addEventListener("click", closeDelete);
document.getElementById("confirmDelete").addEventListener("click", confirmDelete);
document.getElementById("deleteOverlay").addEventListener("click", function(e){ if(e.target===this) closeDelete(); });

/* ── Boot ───────────────────────────────────────────────────── */
render();
