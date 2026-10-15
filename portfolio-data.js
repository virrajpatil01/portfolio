// ==============================================================================
// PORTFOLIO CONFIGURATION DATA
// Update your actual information here! The website will automatically update.
// ==============================================================================

const PORTFOLIO_DATA = {
  // Personal & Header Information
  personal: {
    name: "Viraj",
    title: "Data Analyst & Business Intelligence Specialist",
    tagline: "Transforming complex raw data into actionable business intelligence, predictive insights, and high-impact automated dashboards.",
    location: "India",
    email: "virajtpatil01@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "#resume",
    availability: "Available for Full-time & Freelance Projects",
    statusBadge: "Open to Work",
    bio: "Passionate Data Analyst with deep expertise in SQL, Python, Power BI, and statistical modeling. Proven track record in uncovering business opportunities, optimizing operations, and creating automated KPI dashboards that empower C-suite decision-making."
  },

  // Key Impact Metrics (Hero Section Counters)
  metrics: [
    { value: "45+", label: "Automated Dashboards Built" },
    { value: "1.2M+", label: "Rows of Data Cleaned & Analyzed" },
    { value: "35%", label: "Avg. Efficiency Boost for Clients" },
    { value: "99.4%", label: "Query Accuracy & Optimization" }
  ],

  // Skills Categorized
  skills: {
    categories: [
      {
        id: "bi-viz",
        name: "BI & Visualization",
        icon: "bar-chart-2",
        items: [
          { name: "Power BI (DAX, Power Query)", level: 90 },
          { name: "Tableau", level: 50 },
          { name: "Advanced Excel & VBA", level: 80 },
          // { name: "Google Looker Studio", level: 85 },
          // { name: "Metabase", level: 80 }
        ]
      },
      {
        id: "databases",
        name: "Databases & Querying",
        icon: "database",
        items: [
          { name: "SQL (PostgreSQL, MySQL, T-SQL)", level: 90 },
          { name: "Snowflake / BigQuery", level: 85 },
          { name: "ETL / Data Pipelines", level: 82 },
          { name: "Data Modeling & Star Schema", level: 88 }
          { name: "Firebase", level: 50 }
        ]
      },
      {
        id: "programming",
        name: "Languages & Analytics",
        icon: "code",
        items: [
          { name: "Python (Pandas, NumPy, Scikit-learn)", level: 90 },
          { name: "Data Visualization (Seaborn, Matplotlib)", level: 88 },
          { name: "Exploratory Data Analysis (EDA)", level: 95 },
          { name: "Statistical Hypothesis Testing", level: 85 }
        ]
      },
      {
        id: "business-domains",
        name: "Domain Expertise",
        icon: "briefcase",
        items: [
          { name: "Cohort & Customer Retention Analysis", level: 92 },
          { name: "E-Commerce Funnel Analytics", level: 90 },
          { name: "Financial Forecasting & Budgeting", level: 86 },
          { name: "Supply Chain & Inventory Optimization", level: 84 }
        ]
      }
    ],
    // Data distribution for interactive radar/doughnut chart
    radarChart: {
      labels: ["SQL Querying", "Python Analytics", "Power BI / DAX", "Data Modeling", "Business Storytelling", "Statistical Analysis"],
      scores: [95, 90, 95, 88, 92, 86]
    }
  },

  // Projects - Easy to add/update!
  projects: [
    {
      id: "customer-churn-analytics",
      title: "Telecom Customer Churn & Retention Engine",
      category: "Python",
      domain: "Customer Analytics",
      summary: "End-to-end churn prediction & exploratory analysis identifying top churn drivers across 7,000+ subscriber accounts.",
      metrics: "Reduced predicted churn by 18% with targeted retention cohorts",
      tools: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Power BI"],
      featured: true,
      imageGradient: "from-blue-600 to-indigo-900",
      description: "Conducted extensive exploratory data analysis on contract durations, payment methods, and monthly charges. Built a logistic regression and random forest model achieving an 84% ROC-AUC score, followed by an executive Power BI dashboard for real-time customer risk segmentation.",
      highlights: [
        "Uncovered that month-to-month fiber optic contracts exhibited a 42% higher churn rate",
        "Engineered customer lifetime value (CLV) scores and churn risk tiers",
        "Designed automated trigger reports for customer success teams"
      ],
      liveDemo: "https://app.powerbi.com",
      github: "https://github.com",
      date: "August 2026"
    },
    {
      id: "ecommerce-executive-dashboard",
      title: "Global E-Commerce Revenue & Sales Intelligence",
      category: "Power BI",
      domain: "E-Commerce & Retail",
      summary: "Dynamic multi-page Power BI dashboard tracking $4.8M+ in GMV, customer acquisition cost (CAC), and product return rates.",
      metrics: "Saved 12 hours/week in manual Excel reporting across 4 regional teams",
      tools: ["Power BI", "DAX", "SQL Server", "Power Query"],
      featured: true,
      imageGradient: "from-emerald-600 to-teal-900",
      description: "Engineered complex star schema data model connecting 6 disparate transactional tables. Formulated over 35 customized DAX measures (Time Intelligence, YoY growth, Rolling 12M moving averages) for C-level executives.",
      highlights: [
        "Interactive drill-through pages for product category profitability and regional dispatch times",
        "Configured row-level security (RLS) for multi-region sales leads",
        "Automated scheduled data refresh via on-premises Power BI Data Gateway"
      ],
      liveDemo: "https://app.powerbi.com",
      github: "https://github.com",
      date: "July 2026"
    },
    {
      id: "supply-chain-logistics-optimization",
      title: "Supply Chain Latency & Freight Cost Optimizer",
      category: "SQL",
      domain: "Logistics & Operations",
      summary: "PostgreSQL analytical pipeline profiling 450k+ shipment records to pinpoint warehouse dispatch bottlenecks and supplier anomalies.",
      metrics: "Uncovered $140,000 in recurring freight surcharge leakage",
      tools: ["PostgreSQL", "Window Functions", "Tableau", "Python"],
      featured: true,
      imageGradient: "from-amber-600 to-rose-900",
      description: "Executed high-performance SQL window functions (PARTITION BY, CTEs, lag/lead) to compute supplier lead variance and on-time in-full (OTIF) reliability rates across 24 global suppliers.",
      highlights: [
        "Indexed heavy transactional tables cutting average query runtime by 68%",
        "Created consolidated Tableau dashboards monitoring vendor compliance scores",
        "Integrated anomaly detection flags for delayed cross-border shipments"
      ],
      liveDemo: "https://public.tableau.com",
      github: "https://github.com",
      date: "May 2026"
    },
    {
      id: "financial-runway-forecasting",
      title: "SaaS Financial Metrics & Burn-Rate Forecast Model",
      category: "Excel",
      domain: "FinTech & SaaS",
      summary: "Financial model and cohort dashboard detailing Monthly Recurring Revenue (MRR), Net Revenue Retention (NRR), and cash runway.",
      metrics: "Projected 18-month cashflow with 96.2% historical accuracy",
      tools: ["Advanced Excel", "Financial Modeling", "Power Pivot", "VBA"],
      featured: false,
      imageGradient: "from-violet-600 to-purple-950",
      description: "Created a robust financial model utilizing Monte Carlo simulations, scenario toggles (Bear, Base, Bull cases), and dynamic sensitivity matrices to evaluate hiring pace and customer expansion.",
      highlights: [
        "Built automated macro triggers to parse and standardize raw payment gateway CSVs",
        "Modeled expansion vs contraction MRR decomposition",
        "Designed interactive KPI cards for board meeting investor decks"
      ],
      liveDemo: "#",
      github: "https://github.com",
      date: "March 2026"
    },
    {
      id: "social-media-sentiment-analysis",
      title: "Brand Perception & Real-Time Sentiment Monitor",
      category: "Python",
      domain: "Social Analytics",
      summary: "NLP data pipeline analyzing 85,000+ consumer feedback tweets and reviews during quarterly product launches.",
      metrics: "Pinpointed critical UI checkout bugs within 3 hours of deployment",
      tools: ["Python", "NLTK / VADER", "Plotly Dash", "Docker"],
      featured: false,
      imageGradient: "from-cyan-600 to-blue-900",
      description: "Built automated scrapers using Python requests and Tweepy. Preprocessed unstructured text with tokenization, stop-word elimination, and VADER sentiment scoring.",
      highlights: [
        "Live Plotly dashboard visualizing word clouds and hourly sentiment spikes",
        "Categorized user bug complaints vs praise with 89% precision",
        "Exported automated daily executive summary alerts"
      ],
      liveDemo: "#",
      github: "https://github.com",
      date: "January 2026"
    }
  ],

  // Professional Experience / Timeline
  experience: [
    {
      role: "Data Analyst",
      company: "Analytics & Intelligence Solutions",
      period: "2024 - Present",
      location: "Hybrid",
      description: "Lead end-to-end data pipelines and BI dashboard developments for multi-million dollar business units.",
      achievements: [
        "Architected enterprise Power BI workspace used daily by 150+ operational managers",
        "Optimized analytical SQL queries, dropping query execution time from 4.5m to 28s",
        "Partnered with product managers to conduct A/B test sample size estimations and significance testing"
      ]
    },
    {
      role: "Junior Data Analyst & BI Developer",
      company: "DataTech Insights Corp",
      period: "2023 - 2024",
      location: "Bengaluru, India",
      description: "Extracted, cleaned, and organized transactional data for marketing and sales optimization.",
      achievements: [
        "Developed automated Python ETL scripts pulling data from REST APIs into PostgreSQL",
        "Created 15+ automated Tableau and Excel dashboards reducing reporting backlogs by 40%",
        "Collaborated with data engineering team to establish data governance documentation"
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "InsightEdge Labs",
      period: "2022 - 2023",
      location: "Remote",
      description: "Assisted senior analysts with data cleansing, exploratory analysis, and presentation slides.",
      achievements: [
        "Cleaned and reconciled messy client CSV and Excel databases with 99.8% precision",
        "Assisted in preparing quarterly business review presentations for stakeholders"
      ]
    }
  ],

  // Certifications & Credentials
  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "2024",
      credentialUrl: "https://coursera.org",
      badgeColor: "cyan"
    },
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      date: "2024",
      credentialUrl: "https://learn.microsoft.com",
      badgeColor: "blue"
    },
    {
      title: "SQL for Advanced Data Analysis",
      issuer: "DataCamp",
      date: "2023",
      credentialUrl: "https://datacamp.com",
      badgeColor: "purple"
    },
    {
      title: "Python for Data Science and Machine Learning",
      issuer: "Udemy",
      date: "2023",
      credentialUrl: "https://udemy.com",
      badgeColor: "emerald"
    }
  ],

  // Recent Updates & Case Studies Feed (Live Log)
  updates: [
    {
      date: "Oct 2026",
      tag: "Case Study",
      title: "Optimized complex DAX measures in large 10M-row dataset",
      summary: "Refactored nested CALCULATE filters with pre-computed summary tables, achieving 4.2x faster visual rendering times in Power BI Service."
    },
    {
      date: "Sep 2026",
      tag: "Project Update",
      title: "Published Telecom Churn Predictive Model v2.0",
      summary: "Added feature importance SHAP values into the executive dashboard, enabling managers to understand the 'why' behind each churn prediction."
    },
    {
      date: "Aug 2026",
      tag: "Certification",
      title: "Completed Advanced Snowflake Data Warehousing Sprint",
      summary: "Mastered clustering keys, zero-copy cloning, time travel queries, and micro-partition cost optimization techniques."
    }
  ]
};

// Export to global scope
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
