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

/* Seed data — only written once if Firestore collection is empty */
const SEED_LEADS = [
  { name:"Jeethu Chacko",        company:"Janes",                                   title:"Manager, Asia-Pacific",                           stage:"Identified", mode:"", date:"", notes:"", programme:"PGP" },
  { name:"Rishi Vazir",          company:"Reliance",                                title:"Deputy General Manager, Corporate Communications", stage:"Identified", mode:"", date:"", notes:"", programme:"PGP" },
  { name:"Payashwani Bharadwaj", company:"HCL Enterprise",                          title:"Senior Consultant",                               stage:"Identified", mode:"", date:"", notes:"", programme:"PGP" },
  { name:"Rishi Sethi",          company:"Evoc Communications Consulting Pvt. Ltd", title:"Founder & CEO",                                   stage:"Identified", mode:"", date:"", notes:"", programme:"PGP" },
  { name:"Sudeepta Veerapaneni", company:"Deloitte", title:"Partner & Chief Innovation Officer", stage:"Contacted", mode:"Email sent on 14 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Kedar Lele & Jaya Jamrani", company:"Castrol India", title:"MD, India & VP, Global Marketing", stage:"Contacted", mode:"Email sent on 14 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Ronnie Zaiwalla", company:"Horizon Industrial Parks", title:"Senior Marketing Manager", stage:"Contacted", mode:"Email sent on 14 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Sridharan Rangarajan", company:"Cumi Murugappa", title:"Managing Director", stage:"Contacted", mode:"Email sent on 14 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Atul Sobti", company:"SCOPE (Standing Conference of Public Enterprises)", title:"Director General", stage:"Contacted", mode:"Email sent on 14 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Jetendra Gavankar", company:"Safran India", title:"CEO & Country Head", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Ashish Saraf", company:"Pratt & Whitney India", title:"Vice President & Country Head", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Hariharan Muralimanohar", company:"Zoho Corporation", title:"Head of Marketing (Zoho One), Zoho Meeting", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Amit Syngle", company:"Asian Paints", title:"MD & CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Mahesh Tahilyani", company:"Forbes Precision Tools (Totem)", title:"Managing Director", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Ajay Garg", company:"Equirus", title:"MD", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Vasanth Mosoor", company:"CommerceCX", title:"MD", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Sunil Desai", company:"TopSolid India", title:"Founder & Director", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Luca Matteucci", company:"Marposs India", title:"Managing Director", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Abhimanyu Barthwal", company:"Oemeta India Pvt Ltd", title:"Director", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Akhil Mittal", company:"Blue Photon Technology India Pvt Ltd", title:"CEO", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Robert Armstrong & Ajay Rao", company:"Zebra Technologies", title:"CMO and Head - Govt & Enterprise Business", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Deepak Kumar Gupta", company:"Creative EDM Engineering", title:"Director", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Mukhwinder Singh Bhurjee", company:"Micro Engineers India", title:"Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Pavitra Shankar", company:"Brigade Group", title:"MD", stage:"Contacted", mode:"Email sent on 15 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Vijay Ananth K", company:"Data Patterns (India) Ltd", title:"COO", stage:"Contacted", mode:"Email sent on 16 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Angad Singh Atwal", company:"MSA Global Technology & Engineering Pvt. Ltd", title:"Founder & Promoter", stage:"Contacted", mode:"Email sent on 16 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Dr. Srinivasan Dwarakanath", company:"Aerospace India Association", title:"DG", stage:"Contacted", mode:"Email sent on 16 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Devaraya Manjunath Sheregar", company:"Tool and Gauge Manufacturers Association of India (TAGMA India)", title:"President", stage:"Contacted", mode:"Email sent on 16 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Savyasachi Srinivas", company:"Collins Aerospace", title:"Vice President", stage:"Contacted", mode:"Email sent on 17 Sept", date:"", notes:"Responded", programme:"Bangalore Global Dialogue" },
  { name:"Kapil Kaul", company:"CAPA India", title:"CEO & Director", stage:"Contacted", mode:"Email sent on 17 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Sunil Bhaskaran", company:"Air India Aviation Training Academy", title:"Director", stage:"Contacted", mode:"Email sent on 17 Sept", date:"", notes:"Rebound", programme:"Bangalore Global Dialogue" },
  { name:"F R Singhvi", company:"Sansera Engineering Pvt. Ltd", title:"Joint Managing Director", stage:"Contacted", mode:"Email sent on 17 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Anuj Jhunjhunwala", company:"JJG Aero", title:"CEO", stage:"Contacted", mode:"Email sent on 17 Sept", date:"", notes:"Follow-up on 25 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Kushal Jadia", company:"Cyient", title:"Senior VP & CTO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Suresh Baroth", company:"Delopt", title:"CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Rajeev Kaul", company:"Aequs Pvt Ltd", title:"MD & CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Amber Dubey", company:"Mckinsey & Company", title:"Senior Advisor & former JS (Civil Aviation)", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Satya Chakravarthy", company:"The ePlane Co.", title:"Founder", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Sarath Chandra Gudlavallet", company:"Rattan India Enterprises Ltd", title:"CEO - NeoSky Drones", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Suraj Chettri", company:"Airbus", title:"VP, Head of HR - India & South Asia", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Uma Maheshwar", company:"GE Aviation", title:"CTO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Vishak Raman", company:"Fortinet", title:"Head, India & SAARC Business", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Ajay Singh", company:"SpiceJet", title:"Chairman & MD", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Nihar Vartak", company:"Asteria Aerospace", title:"Co-founder", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Anil Kumar P.", company:"Unimech Aerospace", title:"Chairman & MD", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Vikas Khurma", company:"CAE India Pvt Ltd", title:"Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Shriram Ghatpande", company:"Bell India Operations", title:"Director, Business Development", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Shyam Karigiri", company:"Moog Inc", title:"Managing Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Seenivasan Balasubramanian", company:"Rolls-Royce Aerospace", title:"CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Gautam Maini", company:"Maini Precision", title:"Managing Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Nitish Singh", company:"Astrogate Labs", title:"Founder & CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"G Ravi", company:"BEL-Thales Systems Ltd", title:"Vice CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Dr. D.K Sunil", company:"Hindustan Aeronautics Ltd", title:"Chairman & MD", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Apparao V Mallavarapu", company:"Centum Electronics", title:"Chairman & MD", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Marcel Pastuska", company:"Lufthansa Technik Services India", title:"CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Sunil Dhake", company:"GKN Aerospace India", title:"Managing Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Vikram Rai", company:"GE Aerospace", title:"CEO, South Asia", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Anirudh Sharma", company:"Digantara", title:"", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Awais Ahmed", company:"Pixxel Space", title:"", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Sanjay Nekkanti", company:"Dhruva Space", title:"", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Srinath Ravichandran", company:"Agnikul", title:"", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Bharath Daka", company:"Skyroot", title:"", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Amit Kalyani", company:"Bharat Forge", title:"", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Rajinder Singh Bhatia", company:"Society of Indian Defence Manufacturers (SIDM)", title:"President", stage:"Contacted", mode:"Email sent on 14 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Neelesh Tungar", company:"Kalyani Strategic Systems Limited", title:"CEO", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Cecilia Oldne", company:"Sweden-India Business Council", title:"Chief India Representative", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 17 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Captain Vishal Kanwar (Retd)", company:"PwC India", title:"Partner, Aerospace & Defence", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Pawan Khatter", company:"Ernst & Young", title:"Partner and National Aerospace & Defence Leader", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Cmde Girish Raghunath Pradhan (Retd.)", company:"Bharat Dynamics Ltd", title:"Executive Director (BD)", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Amandeep Singh & Rajesh Mani", company:"Ashok Leyland", title:"Head (Defence Business); Head (Marketing)", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Ashish Rajvanshi", company:"Adani Defence & Aerospace", title:"CEO", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Capt Jagmohan (Retd.)", company:"Mazagon Dock Shipbuilders Ltd", title:"Chairman & MD", stage:"Contacted", mode:"Email sent on 13 Sept", date:"", notes:"Follow-up on 24 Sept", programme:"Bangalore Global Dialogue" },
  { name:"Sukaran Singh", company:"TATA Advanced Systems Ltd", title:"CEO", stage:"Identified", mode:"", date:"", notes:"Send email & proposal", programme:"Bangalore Global Dialogue" },
  { name:"S.P. Shukla", company:"Mahindra Group", title:"President, Defence", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"V. Venkata Raju", company:"VEM Technologies Pvt. Ltd", title:"Chairman & MD", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Anand Stanley", company:"Airbus", title:"President, Asia Pacific", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Michael Fernandez", company:"Lockheed Martin", title:"Country Head - India", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Mansi Khanna", company:"Google", title:"Director, Ads and Brand & Reputation Marketing", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Garima Rathore", company:"Microsoft", title:"Director, Government Affairs and Public Policy", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Aman Jain", company:"Meta", title:"Senior Director & Country Head, Public Policy", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Chetan Krishnaswamy & Prasanna Karthik", company:"Amazon", title:"VP, Public Policy", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Naveen Tandon", company:"Apple", title:"Head - Policy & Strategy", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Ramesh Ramadurai", company:"3M India Ltd", title:"Managing Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Puneet Kumar", company:"Accenture India", title:"Director, Public Policy & Government Affairs", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Arvind Chandrasekar", company:"AMD", title:"Senior Director, Govt Affairs", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Sadanand Patil", company:"Ametek", title:"Managing Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Salil Anil Gupte", company:"Boeing India Pvt Ltd", title:"President, Boeing India & South Asia", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Harish Krishnan", company:"Cisco Systems India", title:"Managing Director & Chief Policy Officer", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Irina Ghosh", company:"Anthropic India", title:"Managing Director", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"Anil Agarwal & Dhiraj Nayyar", company:"Vedanta", title:"Non-Executive Chairman", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" },
  { name:"George Verghese & Rahul Sahai", company:"Kirloskar Defence Systems", title:"Managing Director, CEO (Kirloskar Oil Engines Ltd)", stage:"Identified", mode:"", date:"", notes:"", programme:"Bangalore Global Dialogue" }
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
    if (r) return JSON.parse(r).map(l => ({ programme: "PGP", ...l }));
    // First load — seed from SEED_LEADS
    const seeded = SEED_LEADS.map((l, i) => ({ _id: i + 1, ...l }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  } catch(e) {}
  return SEED_LEADS.map((l, i) => ({ _id: i + 1, ...l }));
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
            <button class="btn-icon" onclick="editLead('${l._id}')">Edit</button>
            <button class="btn-icon btn-icon--del" onclick="promptDelete('${l._id}')">×</button>
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
  const l = leads.find(x => x._id === id);
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
    leads = leads.filter(l => l._id !== deleteId);
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
