# Interactive Data Analytics Portfolio

An ultra-modern, interactive portfolio website tailored specifically for **Data Analytics, Business Intelligence (BI), SQL, and Python** professionals.

## 🚀 Live Local Preview

Your portfolio is currently being served locally:
- **Local URL:** [http://localhost:3000](http://localhost:3000)
- You can simply open `http://localhost:3000` in any web browser (Chrome, Edge, Firefox, Brave) or double-click `index.html` to view it anytime!

---

## ⚡ How to Add Your Actual Updates

All your portfolio content (projects, metrics, skills, experience, certifications, and updates) is driven by a single file:
👉 **[`portfolio-data.js`](file:///c:/Users/visha/OneDrive/Desktop/Portfilio/portfolio-data.js)**

### 1. Update Your Profile & Contact Info
Open `portfolio-data.js` and edit the `personal` object:
```javascript
personal: {
  name: "Your Name",
  title: "Data Analyst & Business Intelligence Specialist",
  tagline: "Your custom elevator pitch...",
  location: "Your City, Country",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  availability: "Available for Full-time & Contract Roles"
}
```

### 2. Add or Edit Projects
In `portfolio-data.js`, add a new object into `projects: [...]`:
```javascript
{
  id: "my-new-project-id",
  title: "Sales Forecasting with Python & Prophet",
  category: "Python", // Power BI, SQL, Python, or Excel
  domain: "Retail & Demand Planning",
  summary: "Brief 1-line description of what you did.",
  metrics: "Saved 15 hrs/month in inventory discrepancies",
  tools: ["Python", "Prophet", "PostgreSQL", "Power BI"],
  description: "Detailed problem statement and your analytical approach.",
  highlights: [
    "Identified top 10 underperforming SKU categories",
    "Formulated dynamic moving average DAX measures",
    "Automated weekly dashboard email distributions"
  ],
  liveDemo: "https://app.powerbi.com/...", // Link to live dashboard or public report
  github: "https://github.com/...", // Link to SQL queries or Python notebook
  date: "October 2026"
}
```
*The filter buttons and modal case study popups will automatically update!*

### 3. Log Recent Updates & Insights
In `portfolio-data.js`, add entries into `updates: [...]`:
```javascript
{
  date: "Oct 2026",
  tag: "Project Update", // or Case Study, Certification, Milestone
  title: "Optimized complex DAX measures in large 10M-row dataset",
  summary: "Refactored nested CALCULATE filters with pre-computed summary tables..."
}
```

---

## 🌟 Key Features

1. **Interactive Skills Radar Chart**: Live visualization benchmarking SQL, Python, Power BI/DAX, Data Modeling, Storytelling, and Statistical Analysis.
2. **Dynamic Project Filtering**: Filter projects instantly by tool (`Power BI`, `SQL`, `Python`, `Excel`).
3. **Interactive Case Study Modals**: Deep-dive popups displaying executive summaries, business impact metrics, and key analytical deliverables.
4. **Skills Matrix Tabs**: Categorized breakdown covering BI & Viz, Databases, Programming & Analytics, and Business Domains.
5. **Interactive Experience & Career Timeline**: Chronological milestones with key deliverables and metrics.
6. **Verified Certifications Grid**: Direct credential verification links.
7. **Contact Panel**: One-click "Copy Email to Clipboard" and interactive message simulation.

---

## 🌐 Free Deployment Options

Whenever you're ready to share your portfolio with recruiters or clients:

- **GitHub Pages (Recommended & 100% Free)**:
  1. Create a repository on GitHub (e.g. `portfolio`).
  2. Push these files (`index.html`, `styles.css`, `app.js`, `portfolio-data.js`).
  3. Go to **Settings > Pages > Branch: main / root** and click Save. Your site will be live at `https://<your-username>.github.io/portfolio/`.
- **Vercel / Netlify**:
  - Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com) for instant deployment with free HTTPS.
