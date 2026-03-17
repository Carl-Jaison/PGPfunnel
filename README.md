# PGP Client Funnel — Takshashila Institution

A lightweight, single-page client pipeline tracker for the Post Graduate Programme in Public Policy (PGP) enrolment outreach.

## Features

- Track leads across 7 pipeline stages (Identified → Contacted → Meeting scheduled → Proposal sent → Negotiating → Closed won/lost)
- Add, edit, and remove leads
- Record outreach mode, meeting date, and notes per lead
- Stats summary (total, active, meetings set, closed won)
- Data persists in the browser via `localStorage` — no backend required
- Fully responsive

## Files

```
index.html   — page structure and modal markup
styles.css   — all styling and CSS variables
app.js       — data, rendering, and interaction logic
README.md    — this file
```

## Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `pgp-funnel`)
2. Upload all four files (`index.html`, `styles.css`, `app.js`, `README.md`) to the root of the repository
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` branch and `/ (root)` folder, then click **Save**
6. Your funnel will be live at `https://<your-username>.github.io/pgp-funnel/` within a minute or two

## Adding leads via the UI

Click **+ Add lead** in the top-right corner. Fill in the name, company, role, stage, outreach mode, meeting date, and any notes. Data is saved automatically in the browser.

## Updating leads

Click **Edit** on any lead card to update stage, add a meeting date, log outreach mode, or add notes. Leads persist between sessions in `localStorage`.

> **Note**: Because data is stored in `localStorage`, it is browser-specific. Each person using the page will see their own local copy. For a shared, multi-user funnel, you would need to integrate a backend or a service like Airtable, Supabase, or Firebase.
