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

const STAGE_STYLE = {
  "Identified":        { bg: "var(--s-identified)",  color: "var(--s-identified-t)"  },
  "Contacted":         { bg: "var(--s-contacted)",   color: "var(--s-contacted-t)"   },
  "Meeting scheduled": { bg: "var(--s-meeting)",     color: "var(--s-meeting-t)"     },
  "Proposal sent":     { bg: "var(--s-proposal)",    color: "var(--s-proposal-t)"    },
  "Negotiating":       { bg: "var(--s-negotiating)", color: "var(--s-negotiating-t)" },
  "Closed — won":      { bg: "var(--s-won)",         color: "var(--s-won-t)"         },
  "Closed — lost":     { bg: "var(--s-lost)",        color: "var(--s-lost-t)"        }
};

const AVATAR_PALETTES = [
  { bg: "#E8EEF8", color: "#2B4C8C" },
  { bg: "#F0EBFD", color: "#5B3B9E" },
  { bg: "#E4F5EC", color: "#0B5C30" },
  { bg: "#FFF2D9", color: "#7A5100" },
  { bg: "#FDE8E8", color: "#8C1A1A" },
];

const STORAGE_KEY = "pgp_funnel_leads";

const DEFAULT_LEADS = [
  { id: 1, name: "Jeethu Chacko",         company: "Janes",                                    title: "Manager, Asia-Pacific",                          stage: "Identified", mode: "", date: "", notes: "" },
  { id: 2, name: "Rishi Vazir",           company: "Reliance",                                 title: "Deputy General Manager, Corporate Communications", stage: "Identified", mode: "", date: "", notes: "" },
  { id: 3, name: "Payashwani Bharadwaj",  company: "HCL Enterprise",                           title: "Senior Consultant",                              stage: "Identified", mode: "", date: "", notes: "" },
  { id: 4, name: "Rishi Sethi",           company: "Evoc Communications Consulting Pvt. Ltd",  title: "Founder & CEO",                                  stage: "Identified", mode: "", date: "", notes: "" }
];

/* ── State ──────────────────────────────────────────────────── */
let leads = loadLeads();
let nextId = leads.reduce((m, l) => Math.max(m, l.id), 0) + 1;
let editId = null;
let deleteId = null;

/* ── Persistence ────────────────────────────────────────────── */
function loadLeads() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return DEFAULT_LEADS.map(l => ({ ...l }));
}

function saveLeads() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(leads)); } catch (e) {}
}

/* ── Helpers ────────────────────────────────────────────────── */
function initials(name) {
  return name.trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

function avatarStyle(id) {
  const p = AVATAR_PALETTES[id % AVATAR_PALETTES.length];
  return `background:${p.bg};color:${p.color}`;
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

/* ── Render ─────────────────────────────────────────────────── */
function render() {
  renderStats();
  renderFunnel();
}

function renderStats() {
  const total    = leads.length;
  const active   = leads.filter(l => !l.stage.startsWith("Closed")).length;
  const meetings = leads.filter(l => l.stage === "Meeting scheduled").length;
  const won      = leads.filter(l => l.stage === "Closed — won").length;

  document.getElementById("statsGrid").innerHTML = [
    { label: "Total leads",   val: total    },
    { label: "Active",        val: active   },
    { label: "Meetings set",  val: meetings },
    { label: "Closed won",    val: won      }
  ].map(s => `
    <div class="stat-card">
      <div class="stat-label">${s.label}</div>
      <div class="stat-val">${s.val}</div>
    </div>
  `).join("");
}

function renderFunnel() {
  const grouped = {};
  STAGES.forEach(s => { grouped[s] = []; });
  leads.forEach(l => { if (grouped[l.stage]) grouped[l.stage].push(l); });

  const sections = STAGES.filter(s => grouped[s].length > 0).map(stage => {
    const items = grouped[stage];
    const cards = items.map(l => {
      const ss = STAGE_STYLE[stage] || { bg: "#F1EFE8", color: "#444441" };
      const notesRow = l.notes
        ? `<div class="lead-notes" style="display:block"><strong>Notes:</strong> ${esc(l.notes)}</div>`
        : "";
      return `
        <div class="lead-card" data-id="${l.id}">
          <div class="lead-row">
            <div class="avatar-name">
              <div class="avatar" style="${avatarStyle(l.id)}">${initials(l.name)}</div>
              <div style="min-width:0">
                <div class="lead-name">${esc(l.name)}</div>
                <div class="lead-role">${esc(l.title)}</div>
              </div>
            </div>
            <div>
              <div class="lead-co">${esc(l.company)}</div>
            </div>
            <div>
              <span class="badge" style="background:${ss.bg};color:${ss.color}">${stage}</span>
            </div>
            <div>
              <div class="lead-mode">${esc(l.mode) || '<span style="color:var(--text-faint)">—</span>'}</div>
              ${l.date ? `<div class="lead-date">${formatDate(l.date)}</div>` : ""}
            </div>
            <div class="card-actions">
              <button class="btn-icon" onclick="editLead(${l.id})">Edit</button>
              <button class="btn-icon btn-icon--del" onclick="promptDelete(${l.id})">×</button>
            </div>
          </div>
          ${notesRow}
        </div>`;
    }).join("");

    return `
      <div class="stage-section">
        <div class="stage-heading">
          <span class="stage-label">${stage}</span>
          <span class="stage-count">${items.length}</span>
        </div>
        <div class="col-header">
          <span>Name</span><span>Company</span><span>Stage</span><span>Outreach / date</span><span></span>
        </div>
        ${cards}
      </div>`;
  }).join("");

  document.getElementById("funnelBody").innerHTML = sections ||
    `<p class="empty-state">No leads yet. Click "+ Add lead" to start building your pipeline.</p>`;
}

function esc(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

/* ── Modal logic ────────────────────────────────────────────── */
function populateStageSelect(selectedStage) {
  const sel = document.getElementById("f-stage");
  sel.innerHTML = STAGES.map(s => `<option${s === selectedStage ? " selected" : ""}>${s}</option>`).join("");
}

function openAddModal() {
  editId = null;
  document.getElementById("modalTitle").textContent = "Add new lead";
  document.getElementById("saveBtn").textContent    = "Add lead";
  document.getElementById("f-name").value    = "";
  document.getElementById("f-company").value = "";
  document.getElementById("f-title").value   = "";
  document.getElementById("f-mode").value    = "";
  document.getElementById("f-date").value    = "";
  document.getElementById("f-notes").value   = "";
  populateStageSelect("Identified");
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("f-name").focus();
}

function editLead(id) {
  const l = leads.find(x => x.id === id);
  if (!l) return;
  editId = id;
  document.getElementById("modalTitle").textContent = "Edit lead";
  document.getElementById("saveBtn").textContent    = "Save changes";
  document.getElementById("f-name").value    = l.name;
  document.getElementById("f-company").value = l.company;
  document.getElementById("f-title").value   = l.title;
  document.getElementById("f-mode").value    = l.mode;
  document.getElementById("f-date").value    = l.date;
  document.getElementById("f-notes").value   = l.notes;
  populateStageSelect(l.stage);
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("f-name").focus();
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  editId = null;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const data = {
    name:    document.getElementById("f-name").value.trim(),
    company: document.getElementById("f-company").value.trim(),
    title:   document.getElementById("f-title").value.trim(),
    stage:   document.getElementById("f-stage").value,
    mode:    document.getElementById("f-mode").value.trim(),
    date:    document.getElementById("f-date").value,
    notes:   document.getElementById("f-notes").value.trim()
  };
  if (!data.name || !data.company) return;

  if (editId !== null) {
    const idx = leads.findIndex(l => l.id === editId);
    if (idx > -1) leads[idx] = { ...leads[idx], ...data };
  } else {
    leads.push({ id: nextId++, ...data });
  }

  saveLeads();
  closeModal();
  render();
}

/* ── Delete ─────────────────────────────────────────────────── */
function promptDelete(id) {
  deleteId = id;
  document.getElementById("deleteOverlay").classList.add("open");
}

function closeDelete() {
  document.getElementById("deleteOverlay").classList.remove("open");
  deleteId = null;
}

function confirmDelete() {
  if (deleteId !== null) {
    leads = leads.filter(l => l.id !== deleteId);
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

document.getElementById("modalOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

document.getElementById("closeDelete").addEventListener("click", closeDelete);
document.getElementById("cancelDelete").addEventListener("click", closeDelete);
document.getElementById("confirmDelete").addEventListener("click", confirmDelete);

document.getElementById("deleteOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeDelete();
});

/* ── Init ───────────────────────────────────────────────────── */
render();
