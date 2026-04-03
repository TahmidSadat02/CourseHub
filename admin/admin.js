// ── DEFAULT COURSES (same as coursehub.js) ──
const DEFAULT_COURSES = [
  {
    id: 1, emoji: "💻", thumbClass: "thumb-blue",
    title: "Web Development Fundamentals",
    category: "Programming", level: "Beginner",
    desc: "Build your first website from scratch using HTML, CSS, and JavaScript.",
    videos: [
      { id: "v1_1", title: "Introduction to HTML", dur: "18 min", url: "https://www.youtube.com/watch?v=qz0aGYrrlhU" },
      { id: "v1_2", title: "CSS Styling & Layouts", dur: "24 min", url: "https://www.youtube.com/watch?v=yfoY53QXEnI" },
      { id: "v1_3", title: "CSS Flexbox Deep Dive", dur: "22 min", url: "https://www.youtube.com/watch?v=fYq5PXgSsbE" },
      { id: "v1_4", title: "JavaScript Basics", dur: "30 min", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
      { id: "v1_5", title: "DOM Manipulation", dur: "20 min", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc" },
      { id: "v1_6", title: "Building Your First Project", dur: "35 min", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
    ]
  },
  {
    id: 2, emoji: "🐍", thumbClass: "thumb-green",
    title: "Python Programming",
    category: "Programming", level: "Beginner",
    desc: "From variables to functions to data structures — a comprehensive intro to Python programming.",
    videos: [
      { id: "v2_1", title: "Python Installation & Setup", dur: "12 min", url: "https://www.youtube.com/watch?v=YYXdXT2l-Gg" },
      { id: "v2_2", title: "Variables & Data Types", dur: "20 min", url: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
      { id: "v2_3", title: "Control Flow & Loops", dur: "25 min", url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ" },
      { id: "v2_4", title: "Functions & Modules", dur: "22 min", url: "https://www.youtube.com/watch?v=9Os0o3wzS_I" },
      { id: "v2_5", title: "Lists, Dicts & Tuples", dur: "28 min", url: "https://www.youtube.com/watch?v=W8KRzm-HUCC" },
      { id: "v2_6", title: "File I/O & Exceptions", dur: "19 min", url: "https://www.youtube.com/watch?v=Uh2ebFW8OYM" },
      { id: "v2_7", title: "OOP in Python", dur: "32 min", url: "https://www.youtube.com/watch?v=JeznW_7DlB0" },
    ]
  },
  {
    id: 3, emoji: "📊", thumbClass: "thumb-purple",
    title: "Data Science with Python",
    category: "Data Science", level: "Intermediate",
    desc: "Analyze real-world datasets using NumPy, Pandas, and Matplotlib.",
    videos: [
      { id: "v3_1", title: "NumPy Fundamentals", dur: "26 min", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI" },
      { id: "v3_2", title: "Pandas DataFrames", dur: "30 min", url: "https://www.youtube.com/watch?v=vmEHCJofslg" },
      { id: "v3_3", title: "Data Cleaning Techniques", dur: "22 min", url: "https://www.youtube.com/watch?v=ZOX18HfLHGQ" },
      { id: "v3_4", title: "Data Visualization Basics", dur: "28 min", url: "https://www.youtube.com/watch?v=a9UrKTVEeZA" },
      { id: "v3_5", title: "Exploratory Data Analysis", dur: "35 min", url: "https://www.youtube.com/watch?v=xi0vhXFPegw" },
    ]
  },
  {
    id: 4, emoji: "🤖", thumbClass: "thumb-red",
    title: "Machine Learning",
    category: "AI/ML", level: "Advanced",
    desc: "Understand ML algorithms from scratch — regression, classification, clustering, and neural nets.",
    videos: [
      { id: "v4_1", title: "What is Machine Learning?", dur: "18 min", url: "https://www.youtube.com/watch?v=ukzFI9rgwfU" },
      { id: "v4_2", title: "Linear Regression", dur: "28 min", url: "https://www.youtube.com/watch?v=CRxhSZUIe3Y" },
      { id: "v4_3", title: "Logistic Regression", dur: "25 min", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" },
      { id: "v4_4", title: "Decision Trees & Random Forests", dur: "30 min", url: "https://www.youtube.com/watch?v=_L39rN6gz7Y" },
      { id: "v4_5", title: "K-Means Clustering", dur: "22 min", url: "https://www.youtube.com/watch?v=4b5d3muPQmA" },
      { id: "v4_6", title: "Neural Networks Intro", dur: "38 min", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { id: "v4_7", title: "Model Evaluation & Tuning", dur: "26 min", url: "https://www.youtube.com/watch?v=85dtiMz9tSo" },
    ]
  },
  {
    id: 5, emoji: "🗄️", thumbClass: "thumb-orange",
    title: "Database Management",
    category: "Database", level: "Intermediate",
    desc: "Master SQL from basics to advanced queries.",
    videos: [
      { id: "v5_1", title: "Database Design Principles", dur: "20 min", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc" },
      { id: "v5_2", title: "SQL SELECT & Filtering", dur: "24 min", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { id: "v5_3", title: "Joins & Relationships", dur: "28 min", url: "https://www.youtube.com/watch?v=9yeOJ0ZMUYw" },
      { id: "v5_4", title: "Aggregations & GROUP BY", dur: "22 min", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
      { id: "v5_5", title: "Indexing & Optimization", dur: "26 min", url: "https://www.youtube.com/watch?v=wppzueCV5hU" },
    ]
  },
  {
    id: 6, emoji: "📱", thumbClass: "thumb-teal",
    title: "Mobile App Development",
    category: "Programming", level: "Advanced",
    desc: "Build cross-platform apps with React Native.",
    videos: [
      { id: "v6_1", title: "React Native Setup", dur: "16 min", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
      { id: "v6_2", title: "Core Components", dur: "28 min", url: "https://www.youtube.com/watch?v=06-1kIJr3EM" },
      { id: "v6_3", title: "Navigation Patterns", dur: "32 min", url: "https://www.youtube.com/watch?v=Eni9PPPPBpg" },
      { id: "v6_4", title: "State Management", dur: "30 min", url: "https://www.youtube.com/watch?v=poQXNp9ItL4" },
      { id: "v6_5", title: "API Integration", dur: "26 min", url: "https://www.youtube.com/watch?v=T3Px88x_PsA" },
    ]
  }
];

// ── COLOR OPTIONS ──
const COLORS = [
  { key: "thumb-blue",   bg: "#142a55", label: "Blue"   },
  { key: "thumb-green",  bg: "#0d3020", label: "Green"  },
  { key: "thumb-red",    bg: "#301414", label: "Red"    },
  { key: "thumb-purple", bg: "#1e1030", label: "Purple" },
  { key: "thumb-orange", bg: "#30200d", label: "Orange" },
  { key: "thumb-teal",   bg: "#0d2e2a", label: "Teal"   },
];

// ── STATE ──
const ADMIN_PASS = "admin123";
let courses = [];
let activeCourseId = null;
let editingVideoId = null;

// ── STORAGE ──
function loadCourses() {
  const stored = localStorage.getItem("ch_courses");
  courses = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_COURSES));
}

function saveCourses() {
  localStorage.setItem("ch_courses", JSON.stringify(courses));
}

// ── AUTH ──
function login() {
  const val = document.getElementById("login-input").value;
  const err = document.getElementById("login-error");
  if (val === ADMIN_PASS) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app").classList.add("show");
    init();
  } else {
    err.classList.add("show");
    document.getElementById("login-input").value = "";
  }
}

function logout() {
  document.getElementById("app").classList.remove("show");
  document.getElementById("login-screen").style.display = "flex";
  document.getElementById("login-input").value = "";
}

// ── INIT ──
function init() {
  loadCourses();
  renderSidebar();
  updateDashboard();
  showDashboard();
}

// ── DASHBOARD ──
function updateDashboard() {
  document.getElementById("d-courses").textContent = courses.length;
  document.getElementById("d-videos").textContent = courses.reduce((a, c) => a + c.videos.length, 0);
  document.getElementById("d-cats").textContent = new Set(courses.map(c => c.category)).size;
}

function showDashboard() {
  document.getElementById("view-dashboard").style.display = "block";
  document.getElementById("view-course").style.display = "none";
  activeCourseId = null;
  document.querySelectorAll(".sidebar-item").forEach(el => el.classList.remove("active"));
}

// ── SIDEBAR ──
function renderSidebar() {
  const list = document.getElementById("course-list");
  if (!courses.length) {
    list.innerHTML = `<div style="padding:1rem;font-size:0.82rem;color:var(--text-dim);text-align:center">No courses yet.<br>Click + New to add one.</div>`;
    return;
  }
  list.innerHTML = courses.map(c => `
    <div class="sidebar-item${activeCourseId === c.id ? ' active' : ''}" onclick="selectCourse(${c.id})" id="si-${c.id}">
      <span class="sidebar-item-emoji">${c.emoji || '📚'}</span>
      <span class="sidebar-item-title">${c.title}</span>
      <span class="sidebar-item-count">${c.videos.length}</span>
    </div>
  `).join("");
}

// ── COURSE SELECTION ──
function selectCourse(id) {
  activeCourseId = id;
  renderSidebar();
  const course = courses.find(c => c.id === id);
  document.getElementById("edit-course-emoji").textContent = course.emoji || "📚";
  document.getElementById("edit-course-name").textContent = course.title;
  document.getElementById("edit-course-cat").textContent = `${course.category} · ${course.level}`;
  document.getElementById("view-dashboard").style.display = "none";
  document.getElementById("view-course").style.display = "block";
  renderVideoTable(course);
}

// ── VIDEO TABLE ──
function renderVideoTable(course) {
  const tbody = document.getElementById("video-tbody");
  const noVid = document.getElementById("no-videos");
  const tableWrap = document.getElementById("video-table-wrap");
  document.getElementById("video-count").textContent = course.videos.length;

  if (!course.videos.length) {
    tableWrap.style.display = "none";
    noVid.style.display = "block";
    return;
  }

  tableWrap.style.display = "block";
  noVid.style.display = "none";

  tbody.innerHTML = course.videos.map((v, i) => `
    <tr>
      <td style="color:var(--text-dim)">${i + 1}</td>
      <td style="font-weight:500">${v.title}</td>
      <td style="color:var(--text-muted)">${v.dur || "—"}</td>
      <td class="url-cell"><a href="${v.url}" target="_blank" rel="noopener">${v.url}</a></td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn-icon" onclick="openVideoModal('${v.id}')">✏️</button>
          <button class="btn-icon del" onclick="deleteVideo('${v.id}')">🗑</button>
        </div>
      </td>
    </tr>
  `).join("");
}

// ── COURSE MODAL ──
function openCourseModal(id) {
  buildColorPicker();
  const modal = document.getElementById("course-modal");
  if (id) {
    const c = courses.find(x => x.id === id);
    document.getElementById("course-modal-title").textContent = "Edit Course";
    document.getElementById("cm-id").value = c.id;
    document.getElementById("cm-emoji").value = c.emoji || "";
    document.getElementById("cm-title").value = c.title;
    document.getElementById("cm-category").value = c.category;
    document.getElementById("cm-level").value = c.level;
    document.getElementById("cm-desc").value = c.desc || "";
    setColorSelection(c.thumbClass || "thumb-blue");
  } else {
    document.getElementById("course-modal-title").textContent = "New Course";
    document.getElementById("cm-id").value = "";
    document.getElementById("cm-emoji").value = "";
    document.getElementById("cm-title").value = "";
    document.getElementById("cm-category").value = "";
    document.getElementById("cm-level").value = "Beginner";
    document.getElementById("cm-desc").value = "";
    setColorSelection("thumb-blue");
  }
  modal.classList.add("open");
  document.getElementById("cm-title").focus();
}

function closeCourseModal() {
  document.getElementById("course-modal").classList.remove("open");
}

function saveCourse() {
  const title = document.getElementById("cm-title").value.trim();
  const category = document.getElementById("cm-category").value.trim();
  if (!title || !category) { toast("⚠️ Title and Category are required"); return; }

  const id = document.getElementById("cm-id").value;
  const data = {
    emoji: document.getElementById("cm-emoji").value.trim() || "📚",
    title,
    category,
    level: document.getElementById("cm-level").value,
    desc: document.getElementById("cm-desc").value.trim(),
    thumbClass: document.getElementById("cm-color").value,
  };

  if (id) {
    const idx = courses.findIndex(c => c.id == id);
    courses[idx] = { ...courses[idx], ...data };
    toast("✅ Course updated!");
    saveCourses();
    renderSidebar();
    updateDashboard();
    selectCourse(courses[idx].id);
  } else {
    const newId = Date.now();
    courses.push({ id: newId, ...data, videos: [] });
    toast("✅ Course created!");
    saveCourses();
    renderSidebar();
    updateDashboard();
    selectCourse(newId);
  }
  closeCourseModal();
}

function deleteCourse(id) {
  if (!confirm("Delete this course and all its videos? This cannot be undone.")) return;
  courses = courses.filter(c => c.id !== id);
  saveCourses();
  renderSidebar();
  updateDashboard();
  showDashboard();
  toast("🗑 Course deleted");
}

// ── VIDEO MODAL ──
function openVideoModal(vid) {
  const modal = document.getElementById("video-modal");
  if (vid) {
    const course = courses.find(c => c.id === activeCourseId);
    const v = course.videos.find(x => x.id === vid);
    document.getElementById("video-modal-title").textContent = "Edit Video";
    document.getElementById("vm-id").value = v.id;
    document.getElementById("vm-title").value = v.title;
    document.getElementById("vm-dur").value = v.dur || "";
    document.getElementById("vm-url").value = v.url;
    editingVideoId = vid;
  } else {
    document.getElementById("video-modal-title").textContent = "Add Video";
    document.getElementById("vm-id").value = "";
    document.getElementById("vm-title").value = "";
    document.getElementById("vm-dur").value = "";
    document.getElementById("vm-url").value = "";
    editingVideoId = null;
  }
  modal.classList.add("open");
  document.getElementById("vm-title").focus();
}

function closeVideoModal() {
  document.getElementById("video-modal").classList.remove("open");
  editingVideoId = null;
}

function saveVideo() {
  const title = document.getElementById("vm-title").value.trim();
  const url = document.getElementById("vm-url").value.trim();
  if (!title || !url) { toast("⚠️ Title and URL are required"); return; }

  const course = courses.find(c => c.id === activeCourseId);
  const data = {
    title,
    dur: document.getElementById("vm-dur").value.trim(),
    url,
  };

  if (editingVideoId) {
    const idx = course.videos.findIndex(v => v.id === editingVideoId);
    course.videos[idx] = { ...course.videos[idx], ...data };
    toast("✅ Video updated!");
  } else {
    course.videos.push({ id: "v_" + Date.now(), ...data });
    toast("✅ Video added!");
  }

  saveCourses();
  renderSidebar();
  updateDashboard();
  renderVideoTable(course);
  closeVideoModal();
}

function deleteVideo(vid) {
  if (!confirm("Remove this video?")) return;
  const course = courses.find(c => c.id === activeCourseId);
  course.videos = course.videos.filter(v => v.id !== vid);
  saveCourses();
  renderSidebar();
  updateDashboard();
  renderVideoTable(course);
  toast("🗑 Video removed");
}

// ── COLOR PICKER ──
function buildColorPicker() {
  const wrap = document.getElementById("cm-color-options");
  wrap.innerHTML = COLORS.map(c => `
    <div class="color-swatch" style="background:${c.bg}" title="${c.label}"
      onclick="setColorSelection('${c.key}')" data-key="${c.key}"></div>
  `).join("");
}

function setColorSelection(key) {
  document.getElementById("cm-color").value = key;
  document.querySelectorAll(".color-swatch").forEach(el => {
    el.classList.toggle("selected", el.dataset.key === key);
  });
}

// ── MODALS CLOSE ON OVERLAY CLICK ──
function closeModals(e) {
  if (e.target.classList.contains("modal-overlay")) {
    closeCourseModal();
    closeVideoModal();
  }
}

// ── TOAST ──
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}
