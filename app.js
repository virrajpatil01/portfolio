// ==============================================================================
// PORTFOLIO INTERACTIVE APPLICATION ENGINE
// Powered by portfolio-data.js
// ==============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Check if portfolio data exists
  if (!window.PORTFOLIO_DATA) {
    console.error("Portfolio data not found. Please ensure portfolio-data.js is loaded.");
    return;
  }

  const data = window.PORTFOLIO_DATA;

  // Initialize all sections
  renderHeroAndAbout(data);
  renderMetrics(data.metrics);
  initHeroRadarChart(data.skills.radarChart);
  initSkillsSection(data.skills);
  initProjectsSection(data.projects);
  renderUpdatesFeed(data.updates);
  renderExperience(data.experience);
  renderCertifications(data.certifications);
  initContactAndInteractions(data.personal);
  initNavigation();

  // Render Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// 1. Hero & About Section Rendering
function renderHeroAndAbout(data) {
  const { personal } = data;

  // Hero Status
  const heroStatusText = document.getElementById("heroStatusText");
  if (heroStatusText && personal.statusBadge) {
    heroStatusText.textContent = `${personal.title} • ${personal.statusBadge}`;
  }

  const heroTagline = document.getElementById("heroTagline");
  if (heroTagline && personal.tagline) {
    heroTagline.textContent = personal.tagline;
  }

  // Profile Card in About
  const profileName = document.getElementById("profileName");
  if (profileName) profileName.textContent = personal.name;

  const profileLocation = document.getElementById("profileLocation");
  if (profileLocation) profileLocation.innerHTML = `<i data-lucide="map-pin"></i> ${personal.location}`;

  const profileRole = document.getElementById("profileRole");
  if (profileRole) profileRole.textContent = personal.title;

  const profileAvailability = document.getElementById("profileAvailability");
  if (profileAvailability) profileAvailability.textContent = personal.availability;

  const aboutBio = document.getElementById("aboutBio");
  if (aboutBio) {
    aboutBio.innerHTML = `<p>${personal.bio}</p>`;
  }
}

// 2. Metrics Counter Strip
function renderMetrics(metrics) {
  const metricsGrid = document.getElementById("metricsGrid");
  if (!metricsGrid || !metrics) return;

  metricsGrid.innerHTML = metrics.map(m => `
    <div class="metric-card">
      <div class="metric-value">${m.value}</div>
      <div class="metric-label">${m.label}</div>
    </div>
  `).join("");
}

// 3. Hero Interactive Radar Chart (Chart.js)
function initHeroRadarChart(radarData) {
  const ctx = document.getElementById("heroRadarChart");
  if (!ctx || !window.Chart || !radarData) return;

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: radarData.labels,
      datasets: [
        {
          label: "Analytical Competency",
          data: radarData.scores,
          backgroundColor: "rgba(6, 182, 212, 0.25)",
          borderColor: "#06b6d4",
          borderWidth: 2,
          pointBackgroundColor: "#22d3ee",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#06b6d4",
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            color: "rgba(255, 255, 255, 0.08)"
          },
          grid: {
            color: "rgba(255, 255, 255, 0.08)"
          },
          pointLabels: {
            color: "#94a3b8",
            font: {
              family: "'Inter', sans-serif",
              size: 11
            }
          },
          ticks: {
            display: false,
            min: 0,
            max: 100,
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          titleColor: "#06b6d4",
          bodyColor: "#fff",
          borderColor: "rgba(6, 182, 212, 0.3)",
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: (context) => ` Proficiency: ${context.raw}%`
          }
        }
      }
    }
  });
}

// 4. Skills Tabs & Matrix
function initSkillsSection(skills) {
  const skillTabs = document.getElementById("skillTabs");
  const skillsContainer = document.getElementById("skillsContainer");
  if (!skillTabs || !skillsContainer || !skills.categories) return;

  // Render tabs
  skillTabs.innerHTML = skills.categories.map((cat, idx) => `
    <button class="skill-tab-btn ${idx === 0 ? 'active' : ''}" data-cat-id="${cat.id}">
      <i data-lucide="${cat.icon}"></i>
      <span>${cat.name}</span>
    </button>
  `).join("");

  // Function to render skills for a category
  function renderCategorySkills(categoryId) {
    const category = skills.categories.find(c => c.id === categoryId) || skills.categories[0];
    skillsContainer.innerHTML = category.items.map(item => `
      <div class="skill-item-card">
        <div class="skill-meta">
          <span class="skill-name">${item.name}</span>
          <span class="skill-percentage">${item.level}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${item.level}%"></div>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  // Initial render
  renderCategorySkills(skills.categories[0].id);

  // Tab click handler
  skillTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".skill-tab-btn");
    if (!btn) return;

    skillTabs.querySelectorAll(".skill-tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const catId = btn.getAttribute("data-cat-id");
    renderCategorySkills(catId);
  });
}

// 5. Projects Showcase & Filter
function initProjectsSection(projects) {
  const projectsGrid = document.getElementById("projectsGrid");
  const projectFilters = document.getElementById("projectFilters");
  if (!projectsGrid || !projects) return;

  function renderProjects(filter = "all") {
    const filtered = filter === "all" 
      ? projects 
      : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || p.tools.some(t => t.toLowerCase().includes(filter.toLowerCase())));

    projectsGrid.innerHTML = filtered.map(p => `
      <div class="project-card" data-project-id="${p.id}">
        <div class="project-top-meta">
          <span class="project-domain">${p.domain}</span>
          <span class="project-category-badge">${p.category}</span>
        </div>

        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>

        <div class="project-impact-box">
          <i data-lucide="zap"></i>
          <span>${p.metrics}</span>
        </div>

        <div class="project-tools">
          ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}
        </div>

        <div class="project-actions">
          <button class="btn-project-detail" data-id="${p.id}">
            <span>Case Study Details</span>
            <i data-lucide="arrow-right"></i>
          </button>
          
          <div class="project-links">
            ${p.liveDemo && p.liveDemo !== '#' ? `
              <a href="${p.liveDemo}" target="_blank" rel="noopener" class="icon-link" title="Live Dashboard">
                <i data-lucide="external-link"></i>
              </a>
            ` : ''}
            ${p.github && p.github !== '#' ? `
              <a href="${p.github}" target="_blank" rel="noopener" class="icon-link" title="View Code / SQL">
                <i data-lucide="github"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();
    attachModalHandlers(projects);
  }

  // Initial render
  renderProjects("all");

  // Filter click handler
  if (projectFilters) {
    projectFilters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      projectFilters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  }
}

// 6. Project Modal Handlers
function attachModalHandlers(projects) {
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalCloseBtn");
  if (!modal || !modalContent) return;

  document.querySelectorAll(".btn-project-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const projId = btn.getAttribute("data-id");
      const project = projects.find(p => p.id === projId);
      if (!project) return;

      modalContent.innerHTML = `
        <div class="modal-tag">${project.domain} • ${project.category}</div>
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-metric-badge">
          <i data-lucide="trending-up"></i>
          <span>Impact: ${project.metrics}</span>
        </div>

        <h4 class="modal-section-title">Executive Summary & Problem Statement</h4>
        <p class="modal-text">${project.description}</p>

        <h4 class="modal-section-title">Key Analytical Deliverables & Findings</h4>
        <ul class="modal-list">
          ${project.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>

        <h4 class="modal-section-title">Stack & Tools Utilized</h4>
        <div class="project-tools" style="margin-top: 0.5rem;">
          ${project.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}
        </div>

        <div class="modal-actions">
          ${project.liveDemo && project.liveDemo !== '#' ? `
            <a href="${project.liveDemo}" target="_blank" rel="noopener" class="btn btn-primary">
              <i data-lucide="external-link"></i> Live Dashboard
            </a>
          ` : ''}
          ${project.github && project.github !== '#' ? `
            <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-secondary">
              <i data-lucide="github"></i> View Queries & Code
            </a>
          ` : ''}
        </div>
      `;

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      if (window.lucide) window.lucide.createIcons();
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// 7. Recent Updates / Live Log Feed
function renderUpdatesFeed(updates) {
  const updatesFeed = document.getElementById("updatesFeed");
  if (!updatesFeed || !updates) return;

  updatesFeed.innerHTML = updates.map(u => `
    <div class="update-card">
      <div class="update-date-badge">${u.date}</div>
      <div class="update-content">
        <h4>
          ${u.title}
          <span class="tag-badge">${u.tag}</span>
        </h4>
        <p>${u.summary}</p>
      </div>
    </div>
  `).join("");
}

// 8. Experience Timeline
function renderExperience(experience) {
  const timeline = document.getElementById("experienceTimeline");
  if (!timeline || !experience) return;

  timeline.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company}</span> • <span class="sub-muted">${exp.location}</span>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-achievements">
          ${exp.achievements.map(a => `<li>${a}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

// 9. Certifications
function renderCertifications(certifications) {
  const certGrid = document.getElementById("certificationsGrid");
  if (!certGrid || !certGrid) return;

  certGrid.innerHTML = certifications.map(c => `
    <div class="cert-card">
      <div>
        <div class="cert-issuer">${c.issuer}</div>
        <h4 class="cert-title">${c.title}</h4>
      </div>
      <div class="cert-footer">
        <span class="cert-date">${c.date}</span>
        <a href="${c.credentialUrl}" target="_blank" rel="noopener" class="cert-link">
          <span>Verify</span>
          <i data-lucide="external-link"></i>
        </a>
      </div>
    </div>
  `).join("");
}

// 10. Contact Form & Toast Interactions
function initContactAndInteractions(personal) {
  const emailDisplay = document.getElementById("contactEmailDisplay");
  if (emailDisplay && personal.email) {
    emailDisplay.textContent = personal.email;
  }

  // Copy email button
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(personal.email).then(() => {
        showToast("Email copied to clipboard!");
      }).catch(() => {
        showToast(`Email: ${personal.email}`);
      });
    });
  }

  // Contact form submission simulation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const senderName = document.getElementById("senderName").value;
      showToast(`Thank you ${senderName}! Your message has been sent.`);
      contactForm.reset();
    });
  }
}

// Toast helper
function showToast(text) {
  const toast = document.getElementById("toastMessage");
  const toastText = document.getElementById("toastText");
  if (!toast || !toastText) return;

  toastText.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// 11. Navigation Toggle for Mobile
function initNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}
