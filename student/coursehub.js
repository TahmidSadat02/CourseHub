const DEFAULT_COURSES = [
  {
    id: 1, thumbClass: "thumb-blue",
    title: "Web Development Fundamentals",
    category: "Programming", level: "Beginner",
    desc: "Build your first website from scratch using HTML, CSS, and JavaScript. Perfect for beginners.",
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
    id: 2, thumbClass: "thumb-green",
    title: "Python Programming",
    category: "Programming", level: "Beginner",
    desc: "From variables to functions to data structures — a comprehensive intro to Python programming.",
    videos: [
      { id: "v2_1", title: "Python Installation & Setup", dur: "12 min", url: "https://www.youtube.com/watch?v=YYXdXT2l-Gg" },
      { id: "v2_2", title: "Variables & Data Types", dur: "20 min", url: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
      { id: "v2_3", title: "Control Flow & Loops", dur: "25 min", url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ" },
      { id: "v2_4", title: "Functions & Modules", dur: "22 min", url: "https://www.youtube.com/watch?v=9Os0o3wzS_I" },
      { id: "v2_5", title: "Lists, Dicts & Tuples", dur: "28 min", url: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
      { id: "v2_6", title: "File I/O & Exceptions", dur: "19 min", url: "https://www.youtube.com/watch?v=Uh2ebFW8OYM" },
      { id: "v2_7", title: "OOP in Python", dur: "32 min", url: "https://www.youtube.com/watch?v=JeznW_7DlB0" },
    ]
  },
  {
    id: 3, thumbClass: "thumb-purple",
    title: "Data Science with Python",
    category: "Data Science", level: "Intermediate",
    desc: "Analyze real-world datasets using NumPy, Pandas, and Matplotlib. Visualize insights like a pro.",
    videos: [
      { id: "v3_1", title: "NumPy Fundamentals", dur: "26 min", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI" },
      { id: "v3_2", title: "Pandas DataFrames", dur: "30 min", url: "https://www.youtube.com/watch?v=vmEHCJofslg" },
      { id: "v3_3", title: "Data Cleaning Techniques", dur: "22 min", url: "https://www.youtube.com/watch?v=ZOX18HfLHGQ" },
      { id: "v3_4", title: "Data Visualization Basics", dur: "28 min", url: "https://www.youtube.com/watch?v=a9UrKTVEeZA" },
      { id: "v3_5", title: "Exploratory Data Analysis", dur: "35 min", url: "https://www.youtube.com/watch?v=xi0vhXFPegw" },
    ]
  },
  {
    id: 4, thumbClass: "thumb-red",
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
    id: 5, thumbClass: "thumb-orange",
    title: "Database Management",
    category: "Database", level: "Intermediate",
    desc: "Master SQL from basics to advanced queries. Design databases, optimize performance, and use joins.",
    videos: [
      { id: "v5_1", title: "Database Design Principles", dur: "20 min", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc" },
      { id: "v5_2", title: "SQL SELECT & Filtering", dur: "24 min", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { id: "v5_3", title: "Joins & Relationships", dur: "28 min", url: "https://www.youtube.com/watch?v=9yeOJ0ZMUYw" },
      { id: "v5_4", title: "Aggregations & GROUP BY", dur: "22 min", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
      { id: "v5_5", title: "Indexing & Optimization", dur: "26 min", url: "https://www.youtube.com/watch?v=wppzueCV5hU" },
      { id: "v5_6", title: "Stored Procedures & Triggers", dur: "30 min", url: "https://www.youtube.com/watch?v=Sggdhot87uc" },
    ]
  },
  {
    id: 6, thumbClass: "thumb-teal",
    title: "Mobile App Development",
    category: "Programming", level: "Advanced",
    desc: "Build cross-platform apps with React Native. From UI components to API integration and deployment.",
    videos: [
      { id: "v6_1", title: "React Native Setup", dur: "16 min", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
      { id: "v6_2", title: "Core Components", dur: "28 min", url: "https://www.youtube.com/watch?v=06-1kIJr3EM" },
      { id: "v6_3", title: "Navigation Patterns", dur: "32 min", url: "https://www.youtube.com/watch?v=Eni9PPPPBpg" },
      { id: "v6_4", title: "State Management", dur: "30 min", url: "https://www.youtube.com/watch?v=poQXNp9ItL4" },
      { id: "v6_5", title: "API Integration", dur: "26 min", url: "https://www.youtube.com/watch?v=T3Px88x_PsA" },
      { id: "v6_6", title: "Publishing Your App", dur: "24 min", url: "https://www.youtube.com/watch?v=oBWBDaqpuXA" },
    ]
  },
  {
    id: 7, thumbClass: "thumb-red",
    title: "Cybersecurity Fundamentals",
    category: "Security", level: "Intermediate",
    desc: "Understand threats, encryption, network security, ethical hacking basics, and how to protect systems.",
    videos: [
      { id: "v7_1", title: "Security Fundamentals", dur: "22 min", url: "https://www.youtube.com/watch?v=rcDO8km6R6c" },
      { id: "v7_2", title: "Encryption & Hashing", dur: "26 min", url: "https://www.youtube.com/watch?v=AQDCe585Lnc" },
      { id: "v7_3", title: "Network Security", dur: "30 min", url: "https://www.youtube.com/watch?v=E03gh1huvW4" },
      { id: "v7_4", title: "Common Vulnerabilities", dur: "24 min", url: "https://www.youtube.com/watch?v=WlmKwIe9z1Q" },
      { id: "v7_5", title: "Intro to Ethical Hacking", dur: "35 min", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
    ]
  },
  {
    id: 8, thumbClass: "thumb-blue",
    title: "Cloud Computing (AWS)",
    category: "Cloud", level: "Intermediate",
    desc: "Get started with Amazon Web Services. Deploy apps, manage storage, and build scalable cloud infrastructure.",
    videos: [
      { id: "v8_1", title: "AWS Overview & Setup", dur: "20 min", url: "https://www.youtube.com/watch?v=3hLmDS179YE" },
      { id: "v8_2", title: "EC2 & Virtual Servers", dur: "28 min", url: "https://www.youtube.com/watch?v=iHX-jtKIVNA" },
      { id: "v8_3", title: "S3 Storage & Buckets", dur: "22 min", url: "https://www.youtube.com/watch?v=e6w9LwZJFIA" },
      { id: "v8_4", title: "RDS Managed Databases", dur: "26 min", url: "https://www.youtube.com/watch?v=eMzCI7S1P9M" },
      { id: "v8_5", title: "Lambda & Serverless", dur: "30 min", url: "https://www.youtube.com/watch?v=eOBq__h4OJ4" },
      { id: "v8_6", title: "IAM & Security Best Practices", dur: "24 min", url: "https://www.youtube.com/watch?v=SXSqhTn2DuE" },
    ]
  }
];

const stored = localStorage.getItem("ch_courses");
let COURSES = stored ? JSON.parse(stored) : DEFAULT_COURSES;

let state = {
  watched: JSON.parse(localStorage.getItem('ch_watched') || '{}'),
  bookmarks: JSON.parse(localStorage.getItem('ch_bookmarks') || '{}'),
  notes: JSON.parse(localStorage.getItem('ch_notes') || '{}'),
  activeFilter: 'All',
  searchQ: ''
};

function saveState() {
  localStorage.setItem('ch_watched', JSON.stringify(state.watched));
  localStorage.setItem('ch_bookmarks', JSON.stringify(state.bookmarks));
  localStorage.setItem('ch_notes', JSON.stringify(state.notes));
}

function getWatchedCount(course) {
  return course.videos.filter(v => state.watched[v.id]).length;
}
function getProgress(course) {
  return Math.round((getWatchedCount(course) / course.videos.length) * 100);
}
function allCategories() {
  return ['All', ...new Set(COURSES.map(c => c.category))];
}
function totalWatched() {
  return Object.keys(state.watched).filter(k => state.watched[k]).length;
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  if (name === 'bookmarks') renderBookmarks();
  updateStats();
}

function updateStats() {
  document.getElementById('stat-courses').textContent = COURSES.length;
  document.getElementById('stat-videos').textContent = COURSES.reduce((a,c) => a + c.videos.length, 0);
  document.getElementById('stat-watched').textContent = totalWatched();
}

function buildFilterTags() {
  const cats = allCategories();
  const wrap = document.getElementById('filter-tags');
  wrap.innerHTML = cats.map(c =>
    `<button class="filter-tag${c===state.activeFilter?' active':''}" onclick="setFilter('${c}')">${c}</button>`
  ).join('');
}
function setFilter(cat) {
  state.activeFilter = cat;
  buildFilterTags();
  renderGrid();
}
function filterCourses() {
  state.searchQ = document.getElementById('search-input').value.toLowerCase();
  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById('courses-grid');
  let courses = COURSES;
  if (state.activeFilter !== 'All') courses = courses.filter(c => c.category === state.activeFilter);
  if (state.searchQ) courses = courses.filter(c =>
    c.title.toLowerCase().includes(state.searchQ) ||
    c.desc.toLowerCase().includes(state.searchQ) ||
    c.category.toLowerCase().includes(state.searchQ)
  );

  if (!courses.length) {
    grid.innerHTML = `<div class="no-results"><p>No courses found. Try a different search.</p></div>`;
    return;
  }

  grid.innerHTML = courses.map((c, i) => {
    const prog = getProgress(c);
    const watched = getWatchedCount(c);
    const bmk = state.bookmarks[c.id];
    return `
      <div class="course-card" style="animation-delay:${i*0.06}s" onclick="openCourse(${c.id})">
        <button class="bookmark-btn${bmk?' bookmarked':''}" onclick="event.stopPropagation();toggleBookmark(${c.id})" title="Bookmark">*</button>
        <div class="course-thumb ${c.thumbClass}"></div>
        <div class="course-body">
          <div class="course-tags">
            <span class="badge badge-cat">${c.category}</span>
          </div>
          <div class="course-title">${c.title}</div>
          <div class="course-meta">
            <span>${c.videos.length} videos</span>
            <span>${watched > 0 ? `${watched}/${c.videos.length} watched` : 'Not started'}</span>
          </div>
          ${prog > 0 ? `
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width:${prog}%"></div>
          </div>` : ''}
        </div>
      </div>`;
  }).join('');
}

function toggleBookmark(id) {
  state.bookmarks[id] = !state.bookmarks[id];
  saveState(); renderGrid();
  toast(state.bookmarks[id] ? 'Bookmarked!' : 'Bookmark removed');
}
function renderBookmarks() {
  const grid = document.getElementById('bookmarks-grid');
  const bkd = COURSES.filter(c => state.bookmarks[c.id]);
  if (!bkd.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div>*</div><p>No bookmarks yet. Star a course from the main page!</p></div>`;
    return;
  }
  grid.innerHTML = bkd.map((c, i) => {
    const prog = getProgress(c);
    const watched = getWatchedCount(c);
    return `
      <div class="course-card" style="animation-delay:${i*0.06}s" onclick="openCourse(${c.id})">
        <button class="bookmark-btn bookmarked" onclick="event.stopPropagation();toggleBookmark(${c.id})" title="Remove">*</button>
        <div class="course-thumb ${c.thumbClass}"></div>
        <div class="course-body">
          <div class="course-tags">
            <span class="badge badge-cat">${c.category}</span>
          </div>
          <div class="course-title">${c.title}</div>
          <div class="course-meta">
            <span>${c.videos.length} videos</span>
            <span>${watched > 0 ? `${watched}/${c.videos.length} watched` : 'Not started'}</span>
          </div>
          ${prog > 0 ? `<div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${prog}%"></div></div>` : ''}
        </div>
      </div>`;
  }).join('');
}

function openCourse(id) {
  const course = COURSES.find(c => c.id === id);
  if (!course) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-detail').classList.add('active');
  renderDetail(course);
  window.scrollTo(0,0);
}

function renderDetail(course) {
  const prog = getProgress(course);
  const watched = getWatchedCount(course);
  document.getElementById('course-detail').innerHTML = `
    <div class="detail-header">
      <button class="back-btn" onclick="showPage('home')">Back to Courses</button>
      <div class="detail-title-row">
        <div class="detail-info">
          <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap">
            <span class="badge badge-cat">${course.category}</span>
          </div>
          <h2>${course.title}</h2>
          <div class="detail-meta-row">
            <span>${course.videos.length} videos</span>
            <span>${watched} watched</span>
            <span>${prog}% complete</span>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-layout">
      <div>
        <div class="video-list-header">
          <h3>Course Videos</h3>
          <button class="mark-all-btn" onclick="markAllWatched(${course.id})">Mark all watched</button>
        </div>
        <div id="video-list-${course.id}"></div>
      </div>
      <div class="sidebar">
        <div class="sidebar-card">
          <h4>Your Progress</h4>
          <div class="progress-ring-wrap">
            ${progressRing(prog)}
            <div class="progress-pct">${prog}%</div>
            <div class="progress-sub">${watched} of ${course.videos.length} videos</div>
          </div>
        </div>
        <div class="sidebar-card">
          <h4>Course Stats</h4>
          <div class="stat-row"><span>Total Videos</span><span class="val">${course.videos.length}</span></div>
          <div class="stat-row"><span>Watched</span><span class="val">${watched}</span></div>
          <div class="stat-row"><span>Remaining</span><span class="val">${course.videos.length - watched}</span></div>
        </div>
        <div class="sidebar-card">
          <h4>Chapters</h4>
          <ul class="module-list">
            ${course.videos.map((v,i) => {
              const done = state.watched[v.id];
              const active = !done && (i === 0 || state.watched[course.videos[i-1]?.id]);
              return `<li class="module-item">
                <div class="module-dot${done?' done':active?' active':''}"></div>
                <span style="color:${done?'var(--accent3)':active?'var(--text)':'var(--text-muted)'}; font-size:0.82rem">${v.title}</span>
              </li>`;
            }).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
  renderVideoList(course);
}

function progressRing(pct) {
  const r = 40, circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return `<svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="8"/>
    <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--accent)" stroke-width="8"
      stroke-dasharray="${dash} ${circ}" stroke-dashoffset="0"
      transform="rotate(-90 50 50)" stroke-linecap="round"/>
  </svg>`;
}

function renderVideoList(course) {
  const list = document.getElementById(`video-list-${course.id}`);
  if (!list) return;
  list.innerHTML = course.videos.map((v, i) => {
    const w = state.watched[v.id];
    const note = state.notes[v.id] || '';
    return `
      <div class="video-item${w?' watched':''}" id="vi-${v.id}">
        <div class="video-row">
          <div class="video-check" onclick="toggleWatched('${v.id}', ${course.id})" title="Mark as watched">
            <span class="check-mark"></span>
          </div>
          <div class="video-content">
            <div class="video-num">Video ${i+1}</div>
            <div class="video-title-text">${v.title}</div>
            <div class="video-meta-row">
              <span>${v.dur}</span>
              ${w ? `<span class="video-watched-badge">Watched</span>` : ''}
            </div>
            <a class="watch-btn" href="${v.url}" target="_blank" rel="noopener">Watch on YouTube</a>
            <button class="notes-toggle${note?' has-note':''}" onclick="toggleNotes('${v.id}')" id="ntbtn-${v.id}">
              ${note ? 'Edit note' : 'Add note'}
            </button>
            <div class="notes-area" id="notes-${v.id}">
              <textarea class="notes-textarea" placeholder="Write your notes for this video..."
                oninput="saveNote('${v.id}', this.value)">${note}</textarea>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');
}

function toggleWatched(vid, courseId) {
  state.watched[vid] = !state.watched[vid];
  saveState(); updateStats();
  const course = COURSES.find(c => c.id === courseId);
  renderDetail(course);
}

function markAllWatched(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  course.videos.forEach(v => { state.watched[v.id] = true; });
  saveState(); updateStats();
  renderDetail(course);
  toast('All videos marked as watched!');
}

function toggleNotes(vid) {
  const area = document.getElementById('notes-' + vid);
  area.classList.toggle('open');
}

function saveNote(vid, val) {
  state.notes[vid] = val.trim();
  saveState();
  const btn = document.getElementById('ntbtn-' + vid);
  if (btn) {
    btn.classList.toggle('has-note', !!val.trim());
    btn.textContent = val.trim() ? 'Edit note' : 'Add note';
  }
}

buildFilterTags();
renderGrid();
updateStats();
