// ---------- Contact settings ----------
// Messages are emailed through FormSubmit (https://formsubmit.co). The first
// submission sends an activation email to this address — click it once.
// For automatic WhatsApp alerts, get a free key from CallMeBot
// (https://www.callmebot.com/blog/free-api-whatsapp-messages/) and paste it below.
const CONTACT = {
  email: 'mubarisali97@gmail.com',
  whatsapp: '916235784647',
  callmebotKey: '',
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sleep = ms => new Promise(r => setTimeout(r, ms));

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const themeToggle = document.getElementById('theme-toggle');
const toTop = document.getElementById('to-top');
const progress = document.getElementById('progress');

// ---------- Mobile menu ----------
function setMenu(open) {
  menu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  hamburger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
}

hamburger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
document.querySelectorAll('#menu a').forEach(link => link.addEventListener('click', () => setMenu(false)));

// ---------- Theme toggle ----------
function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set) return set;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function updateThemeIcon() {
  themeToggle.innerHTML = currentTheme() === 'dark'
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  updateThemeIcon();
});

updateThemeIcon();

// ---------- Drifting tech background ----------
const TECH = [
  ['Python', 'fa-brands fa-python'], ['Django'], ['DRF'], ['Next.js'], ['React', 'fa-brands fa-react'],
  ['JavaScript', 'fa-brands fa-js'], ['PostgreSQL'], ['MySQL'], ['MongoDB'], ['SQLite'], ['Nginx'],
  ['Gunicorn'], ['PM2'], ['Git', 'fa-brands fa-git-alt'], ['GitHub', 'fa-brands fa-github'], ['LangChain'],
  ['Gemini API'], ['OpenCV'], ['NLTK'], ['DNN'], ['Flutter'], ['Dart'], ['Java', 'fa-brands fa-java'],
  ['JWT'], ['Axios'], ['Chart.js'], ['Bootstrap', 'fa-brands fa-bootstrap'], ['REST API'], ['RBAC'],
  ['Multi-Tenant'], ['Brevo'], ['SEO'], ['Postman'], ['HTML5', 'fa-brands fa-html5'], ['CSS3', 'fa-brands fa-css3-alt'],
  ['{ }'], ['</>'], ['def ship():'], ['git push'], ['200 OK'], ['pip install'], ['@api_view'],
];

const techBg = document.getElementById('tech-bg');
const techItems = [];
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

TECH.forEach(([label, icon], i) => {
  const depth = 0.15 + rand() * 0.55; // nearer words are larger and move faster
  const el = document.createElement('div');
  el.className = 'tech-word';
  const span = document.createElement('span');
  span.innerHTML = (icon ? `<i class="${icon}"></i>` : '') + label;
  span.style.fontSize = `${12 + depth * 28}px`;
  span.style.setProperty('--dur', `${14 + rand() * 16}s`);
  span.style.setProperty('--delay', `${-rand() * 20}s`);
  span.style.setProperty('--dx', `${(rand() - 0.5) * 120}px`);
  span.style.setProperty('--dy', `${(rand() - 0.5) * 90}px`);
  el.appendChild(span);
  techBg.appendChild(el);
  const col = i % 6;
  techItems.push({ el, depth, x: (col + 0.15 + rand() * 0.7) / 6, y: rand() });
});

function placeTech() {
  const w = window.innerWidth;
  const h = window.innerHeight + 120;
  const s = window.scrollY;
  techItems.forEach(t => {
    const y = ((t.y * h - s * t.depth) % h + h) % h - 60;
    t.el.style.transform = `translate3d(${t.x * w - 40}px, ${y}px, 0)`;
  });
}

// ---------- Hero terminal ----------
const TERMINAL = [
  ['cmd', 'whoami'],
  ['out', '<b>Mubaris T</b> — AI Integrated Python Full Stack Developer'],
  ['cmd', 'cat location.txt'],
  ['out', 'Malappuram, Kerala, India'],
  ['cmd', 'ls ~/experience'],
  ['out', '<span class="dir">delemon-technology/</span>  <span class="dir">x-opp-crm/</span>  <span class="dir">adzyn-digital/</span>'],
  ['cmd', 'echo $STATUS'],
  ['out', '<span class="ok">●</span> open to new opportunities'],
];

async function runTerminal() {
  const term = document.getElementById('term');
  const cursor = '<span class="cursor"></span>';
  if (reduceMotion) {
    term.innerHTML = TERMINAL.map(([t, s]) => `<p class="${t}">${s}</p>`).join('') + `<p class="cmd">${cursor}</p>`;
    return;
  }
  await sleep(500);
  for (const [type, text] of TERMINAL) {
    const p = document.createElement('p');
    p.className = type;
    term.appendChild(p);
    if (type === 'cmd') {
      for (const ch of text) {
        p.innerHTML = p.textContent + ch + cursor;
        await sleep(55 + Math.random() * 40);
      }
      p.textContent = text;
      await sleep(250);
    } else {
      p.innerHTML = text;
      await sleep(350);
    }
  }
  const last = document.createElement('p');
  last.className = 'cmd';
  last.innerHTML = cursor;
  term.appendChild(last);
}

runTerminal();

// ---------- Story scenes ----------
const SCENES = {
  prologue: {
    file: 'prologue.py', wave: true,
    text: "Hey 👋 I'm Mubaris. Scroll down and I'll walk you through my story.",
    props: [
      { icon: 'fa-brands fa-python', label: 'print("hi")', x: 18, y: 16 },
      { icon: 'fa-solid fa-robot', label: 'import ai', x: 82, y: 12 },
    ],
  },
  school: {
    file: 'education.md',
    text: "It started with a BCA in AI, Robotics & VR. That's where I got hooked on code 🎓",
    props: [
      { icon: 'fa-solid fa-robot', label: 'robotics', x: 15, y: 16 },
      { icon: 'fa-solid fa-brain', label: 'ai', x: 86, y: 14 },
      { icon: 'fa-solid fa-vr-cardboard', label: 'vr', x: 88, y: 50 },
    ],
  },
  intern: {
    file: 'adzyn_intern.log',
    text: 'My first job: Django sites at Adzyn Digital, and my first real REST APIs.',
    props: [
      { tag: 'Django', x: 17, y: 14 },
      { icon: 'fa-solid fa-plug', label: 'GET /api/', x: 83, y: 14 },
      { icon: 'fa-brands fa-html5', label: 'html/css', x: 13, y: 50 },
    ],
  },
  work: {
    file: 'delemon.py',
    text: 'At Delemon Technology I look after ~20 live sites, and I built 10+ of them end-to-end 🚀',
    props: [
      { icon: 'fa-solid fa-globe', label: '20 live sites', x: 18, y: 12 },
      { tag: 'Next.js', x: 83, y: 12 },
      { icon: 'fa-solid fa-server', label: 'nginx · pm2', x: 85, y: 46 },
      { icon: 'fa-solid fa-magnifying-glass', label: 'seo', x: 11, y: 46 },
    ],
  },
  hrms: {
    file: 'x_opp_hrms.py',
    text: 'X-OPP CRM is an HRMS that serves many companies at once. Attendance, leave, payroll, hiring: I worked on all of it.',
    props: [
      { icon: 'fa-solid fa-location-crosshairs', label: 'geofence', x: 16, y: 12 },
      { icon: 'fa-solid fa-calendar-check', label: 'leave', x: 86, y: 10 },
      { icon: 'fa-solid fa-money-check-dollar', label: 'payroll', x: 12, y: 44 },
      { icon: 'fa-solid fa-user-shield', label: 'rbac', x: 89, y: 42 },
    ],
  },
  projects: {
    file: 'side_projects/',
    text: 'After hours I build AI side projects: an emotion-detecting psychologist app and a CRM with a Gemini assistant 🤖',
    props: [
      { icon: 'fa-solid fa-face-smile', label: '87% acc', x: 15, y: 12 },
      { icon: 'fa-solid fa-wand-magic-sparkles', label: 'gemini', x: 86, y: 12 },
      { icon: 'fa-solid fa-eye', label: 'opencv', x: 12, y: 46 },
      { icon: 'fa-solid fa-link', label: 'langchain', x: 87, y: 46 },
    ],
  },
  skills: {
    file: 'skills.json', orbit: true,
    text: 'These are the tools I reach for every day 🧰',
    props: ['Python', 'Django', 'DRF', 'Next.js', 'React', 'Postgres', 'LangChain', 'Nginx'],
  },
  contact: {
    file: 'contact.sh', wave: true,
    text: "That's my story so far. The next chapter could be ours, so send me a message 💬",
    props: [
      { icon: 'fa-solid fa-envelope', label: 'email', x: 16, y: 14 },
      { icon: 'fa-brands fa-whatsapp', label: 'whatsapp', x: 84, y: 12 },
    ],
  },
};

const stage = document.getElementById('stage');
const propsEl = document.getElementById('props');
const consoleText = document.getElementById('console-text');
const chapterFile = document.getElementById('chapter-file');
const sbChapter = document.getElementById('sb-chapter');
let activeScene = null;
let typeTimer = null;
let hideTimer = null;
let propsTimer = null;

function typeConsole(text) {
  clearInterval(typeTimer);
  clearTimeout(hideTimer);
  stage.classList.remove('hide-console');
  // on small screens the console steps aside after a while so it doesn't cover content
  const done = () => { hideTimer = setTimeout(() => stage.classList.add('hide-console'), 5000); };
  if (reduceMotion) {
    consoleText.textContent = text;
    return done();
  }
  const chars = Array.from(text);
  let i = 0;
  consoleText.textContent = '';
  typeTimer = setInterval(() => {
    consoleText.textContent += chars[i++];
    if (i >= chars.length) {
      clearInterval(typeTimer);
      done();
    }
  }, 20);
}

function propHTML(p, i) {
  const inner = p.tag
    ? `<span class="t">&lt;${p.tag} /&gt;</span>`
    : `<i class="${p.icon}"></i>${p.label}`;
  return `<div class="prop" style="--x:${p.x}%;--y:${p.y}%;--d:${i * 0.12}s"><div class="prop-inner">${inner}</div></div>`;
}

function renderProps(scene) {
  propsEl.innerHTML = scene.orbit
    ? '<div class="orbit">' + scene.props.map((label, i) => {
        const a = (i / scene.props.length) * Math.PI * 2;
        const x = 50 + Math.cos(a) * 40;
        const y = 48 + Math.sin(a) * 38;
        return `<div class="prop" style="--x:${x}%;--y:${y}%;--d:${i * 0.07}s"><div class="prop-inner"><span class="t">import</span> ${label}</div></div>`;
      }).join('') + '</div>'
    : scene.props.map(propHTML).join('');
  propsEl.classList.remove('leaving');
}

function setScene(id) {
  if (id === activeScene || !SCENES[id]) return;
  activeScene = id;
  const scene = SCENES[id];
  stage.dataset.scene = id;
  stage.classList.toggle('waving', !!scene.wave);
  chapterFile.textContent = scene.file;
  sbChapter.textContent = scene.file;
  typeConsole(scene.text);

  clearTimeout(propsTimer);
  if (propsEl.children.length && !reduceMotion) {
    propsEl.classList.add('leaving');
    propsTimer = setTimeout(() => renderProps(scene), 250);
  } else {
    renderProps(scene);
  }
}

const navLinks = document.querySelectorAll('#menu a');
const navIds = Array.from(navLinks, a => a.getAttribute('href').slice(1));
const chapters = Array.from(document.querySelectorAll('.chapter'));

const chapterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    setScene(entry.target.dataset.scene);
    // highlight the nav tab of the closest chapter at or above this one
    let match = navIds[0];
    chapters.slice(0, chapters.indexOf(entry.target) + 1).forEach(c => { if (navIds.includes(c.id)) match = c.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + match));
  });
}, { rootMargin: '-50% 0px -50% 0px' });

chapters.forEach(c => chapterObserver.observe(c));
setScene('prologue');

// ---------- Scroll effects ----------
const sbLine = document.getElementById('sb-line');
let ticking = false;

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  toTop.classList.toggle('show', y > 600);
  sbLine.textContent = `Ln ${Math.round(y / 24) + 1}`;
  placeTech();
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(onScroll);
  }
}, { passive: true });
window.addEventListener('resize', placeTech);
onScroll();

// ---------- Reveal on scroll ----------
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Count-up stats ----------
function countUp(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = target; return; }
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / 1200, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));

// ---------- Skills: marquees + skills.json ----------
document.querySelectorAll('[data-marquee]').forEach(track => {
  const items = track.dataset.marquee.split(',').map(s => `<span>${s}</span>`).join('');
  track.innerHTML = items + items; // duplicated so the loop is seamless
});

const SKILLS = {
  languages: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS', 'Dart'],
  frontend: ['Next.js', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'Flutter'],
  backend: ['Django', 'Django REST Framework', 'REST APIs', 'API Integration', 'JWT', 'SimpleJWT'],
  ai_and_libraries: ['Google Gemini API', 'LangChain', 'OpenCV', 'DNN', 'NLTK', 'Chart.js', 'Axios'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  devops_and_tools: ['Git', 'GitHub', 'Nginx', 'Gunicorn', 'PM2', 'Postman', 'VS Code', 'PyCharm', 'Android Studio'],
  seo_and_growth: ['Technical SEO', 'On-Page SEO', 'SEO Issue Fixing', 'Lead Capture', 'Brevo', 'Email Workflows'],
  architecture: ['Multi-Tenant Architecture', 'RBAC'],
};

const skillKeys = Object.keys(SKILLS);
const skillLines = ['<span class="p">{</span>'];
skillKeys.forEach((key, i) => {
  const values = SKILLS[key].map(v => `<span class="s">"${v}"</span>`).join('<span class="p">, </span>');
  const comma = i < skillKeys.length - 1 ? '<span class="p">,</span>' : '';
  skillLines.push(`  <span class="k">"${key}"</span><span class="p">: [</span>${values}<span class="p">]</span>${comma}`);
});
skillLines.push('<span class="p">}</span>');
document.getElementById('skills-code').innerHTML = skillLines.map(l => `<span class="ln">${l}</span>`).join('');

// ---------- Contact form ----------
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
const submitBtn = document.getElementById('form-submit');
const success = document.getElementById('form-success');

function setStatus(msg, isError) {
  statusEl.textContent = msg;
  statusEl.classList.toggle('error', !!isError);
}

function validate() {
  let ok = true;
  form.querySelectorAll('[required]').forEach(input => {
    const valid = input.value.trim() !== '' && (input.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()));
    input.closest('.field').classList.toggle('invalid', !valid);
    if (!valid) ok = false;
  });
  return ok;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  if (form.elements._honey.value) return; // bot
  if (!validate()) {
    setStatus('error: name, a valid email and a message are required', true);
    return;
  }

  const data = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim(),
    phone: form.elements.phone.value.trim() || '—',
    topic: form.elements.topic.value,
    message: form.elements.message.value.trim(),
  };

  const waText =
    `New portfolio message 📬\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Topic:* ${data.topic}\n\n${data.message}`;

  submitBtn.disabled = true;
  submitBtn.classList.add('sending');
  submitBtn.querySelector('span').textContent = 'Sending…';
  setStatus('');

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...data,
        _subject: `Portfolio: ${data.topic} from ${data.name}`,
        _replyto: data.email,
        _template: 'table',
        _captcha: 'false',
      }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || 'Send failed');

    let waSent = false;
    if (CONTACT.callmebotKey) {
      const url = `https://api.callmebot.com/whatsapp.php?phone=+${CONTACT.whatsapp}&text=${encodeURIComponent(waText)}&apikey=${CONTACT.callmebotKey}`;
      await fetch(url, { mode: 'no-cors' }).then(() => { waSent = true; }).catch(() => {});
    }

    const waLink = document.getElementById('wa-followup');
    waLink.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(waText)}`;
    if (waSent) {
      document.getElementById('success-text').textContent = "It's in my inbox and on my WhatsApp. I'll get back to you soon.";
      waLink.hidden = true;
    }

    form.hidden = true;
    success.hidden = false;
    typeConsole(`Thanks, ${data.name.split(' ')[0]}! Got your message. Talk soon 🙌`);
  } catch (err) {
    setStatus('error: message not sent. Please try again or email me directly.', true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove('sending');
    submitBtn.querySelector('span').textContent = 'Send message';
  }
});

form.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', () => input.closest('.field')?.classList.remove('invalid'));
});

document.getElementById('year').textContent = new Date().getFullYear();
