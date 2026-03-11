/* ============================================================
   MediQueue — Shared JavaScript Utilities
   Token generator · Wait-time calc · Toast · Shared data
   ============================================================ */

'use strict';

/* ── ─── SHARED DEPARTMENT DATA ──────────────────────────────── */
/* ── ─── SHARED DEPARTMENT DATA ──────────────────────────────── */
const MQ = {
  departments: [
    {
      id: 'gen',   name: 'General OPD',   shortName: 'GEN', 
      icon: '<img src="capsule.png" alt="General" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. S. Mehta',     doctorImg: 'https://i.pinimg.com/1200x/6e/43/3e/6e433e26b39b2844c645a054ab8ce134.jpg', room: 'Room 4', queue: 14, serving: 39, waitMin: 28, status: 'open', fee: 200, fastFee: 350, specialisation: 'General Medicine', colour: '#1a3a2a'
    },
    {
      id: 'card',  name: 'Cardiology',    shortName: 'CAR', 
      icon: '<img src="human-heart.png" alt="Cardiology" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. A. Verma',     doctorImg: 'https://i.pinimg.com/1200x/24/06/da/2406da690f279adae9232b650407a9b1.jpg', room: 'Room 7', queue: 7,  serving: 22, waitMin: 21, status: 'open', fee: 500, fastFee: 800, specialisation: 'Cardiovascular Medicine', colour: '#8B2635'
    },
    {
      id: 'neuro', name: 'Neurology',     shortName: 'NEU', 
      icon: '<img src="brain4.png" alt="Neurology" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. P. Iyer',      doctorImg: 'https://i.pinimg.com/1200x/7e/cf/c8/7ecfc87e05dd94d1dfc564ff6bd6e2f7.jpg', room: 'Room 9', queue: 5,  serving: 11, waitMin: 15, status: 'open', fee: 600, fastFee: 950, specialisation: 'Neurological Disorders', colour: '#2c5c7a'
    },
    {
      id: 'ortho', name: 'Orthopaedics',  shortName: 'ORT', 
      icon: '<img src="bone.png" alt="Orthopaedics" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. R. Khan',      doctorImg: 'https://i.pinimg.com/736x/ac/79/1b/ac791b4b321c4c39c6d7b15d18a78a44.jpg', room: 'Room 2', queue: 9,  serving: 18, waitMin: 27, status: 'open', fee: 450, fastFee: 700, specialisation: 'Bones, Joints & Spine', colour: '#5c4a1a'
    },
    {
      id: 'opht',  name: 'Ophthalmology', shortName: 'OPH', 
      icon: '<img src="eye.png" alt="Ophthalmology" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. N. Joshi',     doctorImg: 'https://i.pinimg.com/1200x/eb/18/12/eb1812a1d59da3a32f70429dfa35b2fb.jpg', room: 'Room 11', queue: 3,  serving: 12, waitMin: 9, status: 'open', fee: 350, fastFee: 550, specialisation: 'Eye Care & Surgery', colour: '#1a3a5c'
    },
    {
      id: 'derm',  name: 'Dermatology',   shortName: 'DER', 
      icon: '<img src="shampoo.png" alt="Dermatology" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. S. Patel',     doctorImg: 'https://i.pinimg.com/1200x/68/41/ac/6841acfa892a17b717c9e2639b7b8430.jpg', room: 'Room 5', queue: 0,  serving: 0,  waitMin: 0, status: 'closed', fee: 400, fastFee: 650, specialisation: 'Skin & Hair Disorders', colour: '#4a1a3a'
    },
    {
      id: 'gyn',   name: 'Gynaecology',   shortName: 'GYN', 
      icon: '<img src="female.png" alt="Gynaecology" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. M. Sharma',    doctorImg: 'https://i.pinimg.com/736x/5a/82/32/5a823202d1031922ca09651549d59b7e.jpg', room: 'Room 6', queue: 6,  serving: 8,  waitMin: 18, status: 'open', fee: 500, fastFee: 800, specialisation: "Women's Health", colour: '#5c1a3a'
    },
    {
      id: 'paed',  name: 'Paediatrics',   shortName: 'PAE', 
      icon: '<img src="teddy-bear.png" alt="Paediatrics" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. K. Singh',     doctorImg: 'https://i.pinimg.com/736x/a7/44/4c/a7444c16d9b1bcb9bdd2fadbaa26c953.jpg', room: 'Room 3', queue: 11, serving: 30, waitMin: 33, status: 'open', fee: 300, fastFee: 500, specialisation: "Child & Adolescent Health", colour: '#2c5c42'
    },
    {
      id: 'ent',   name: 'ENT',           shortName: 'ENT', 
      icon: '<img src="ear.png" alt="ENT" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. V. Rao',       doctorImg: 'https://i.pinimg.com/736x/2f/ef/95/2fef9536969c78bb8bd0b48a7cc22be1.jpg', room: 'Room 8', queue: 4,  serving: 19, waitMin: 12, status: 'open', fee: 380, fastFee: 600, specialisation: 'Ear, Nose & Throat', colour: '#3a1a5c'
    },
    {
      id: 'psych', name: 'Psychiatry',    shortName: 'PSY', 
      icon: '<img src="mental-health.png" alt="Psychiatry" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. L. Gupta',     doctorImg: 'https://i.pinimg.com/736x/6b/1a/e1/6b1ae18f1b43aab3968b3804dad2de7a.jpg', room: 'Room 10', queue: 2,  serving: 5,  waitMin: 8, status: 'open', fee: 700, fastFee: 1100, specialisation: 'Mental Health & Wellness', colour: '#1a2a5c'
    },
    {
      id: 'dental', name: 'Dental',       shortName: 'DEN', 
      icon: '<img src="tooth.png" alt="Dental" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. B. Nair',      doctorImg: 'https://i.pinimg.com/1200x/b7/a0/29/b7a0297f6d187df9cb3f4588a85e9609.jpg', room: 'Room 1', queue: 0,  serving: 0,  waitMin: 0, status: 'closed', fee: 250, fastFee: 400, specialisation: 'Oral & Dental Health', colour: '#5c5c1a'
    },
    {
      id: 'radio', name: 'Radiology',     shortName: 'RAD', 
      icon: '<img src="x-ray.png" alt="Radiology" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle;">',
      doctor: 'Dr. C. Pillai',    doctorImg: 'https://i.pinimg.com/1200x/4c/ef/5a/4cef5a3f798b4bd72377916a227f31a0.jpg', room: 'Scan Wing', queue: 8,  serving: 24, waitMin: 24, status: 'open', fee: 1200, fastFee: 1800, specialisation: 'Imaging & Diagnostics', colour: '#1a1a3a'
    },
  ],
  /* ── Emergency alerts data ── */
  /* ── Emergency alerts data ── */
  alerts: [
    {
      id: 'A001', type: 'emergency', title: 'Code Blue — Cardiac ICU',
      message: 'Resuscitation team required in Cardiac ICU, Ward 3B immediately. All non-emergency procedures suspended in the area.',
      time: new Date(Date.now() - 4 * 60000),
      icon: '<img src="emergency-alert.png" style="width:18px; height:18px; object-fit:contain; vertical-align:middle;">',
      priority: 'critical', affectedDept: 'Cardiology', actionRequired: true
    },
    {
      id: 'A002', type: 'delay', title: 'OPD Delay — General OPD',
      message: 'General OPD is experiencing a 15-minute delay due to high patient volume. We apologise for the inconvenience.',
      time: new Date(Date.now() - 18 * 60000),
      icon: '<img src="clock-icon.png" style="width:18px; height:18px; object-fit:contain; vertical-align:middle;">',
      priority: 'medium', affectedDept: 'General OPD', actionRequired: false
    },
    {
      id: 'A003', type: 'closure', title: 'Temporary Closure — Dermatology',
      message: 'Dermatology department is closed today due to planned maintenance. Patients are advised to reschedule.',
      time: new Date(Date.now() - 2 * 3600000),
      icon: '<img src="close.png" style="width:18px; height:18px; object-fit:contain; vertical-align:middle;">',
      priority: 'medium', affectedDept: 'Dermatology', actionRequired: false
    },
    {
      id: 'A004', type: 'info', title: 'Fast-Track Slots Available — Cardiology',
      message: 'Priority fast-track consultation slots are now available in Cardiology. Book your token now to secure a preferred time.',
      time: new Date(Date.now() - 35 * 60000),
      icon: '<img src="electric-flash.png" style="width:18px; height:18px; object-fit:contain; vertical-align:middle;">',
      priority: 'low', affectedDept: 'Cardiology', actionRequired: false
    },
    {
      id: 'A005', type: 'info', title: 'Lab Result Collection — Pathology',
      message: 'Patients who submitted samples on Monday may collect printed results from the Ground Floor Pathology counter.',
      time: new Date(Date.now() - 90 * 60000),
      icon: '<img src="pill.png" style="width:18px; height:18px; object-fit:contain; vertical-align:middle;">',
      priority: 'low', affectedDept: 'Radiology', actionRequired: false
    },
    {
      id: 'A006', type: 'emergency', title: 'Power Fluctuation — Lift 2 Suspended',
      message: 'Lift No. 2 is temporarily suspended due to a power fluctuation. Please use the staircase or Lift 1 on the east wing.',
      time: new Date(Date.now() - 7 * 60000),
      icon: '<img src="red-emergency-alert.png" style="width:18px; height:18px; object-fit:contain; vertical-align:middle;">',
      priority: 'high', affectedDept: 'All Departments', actionRequired: true
    },
  ],

  /* ── Token counter (persisted via localStorage) ── */
  _tokenCounter: null,
  getTokenCounter() {
    if (this._tokenCounter === null) {
      this._tokenCounter = parseInt(localStorage.getItem('mq_token_counter') || '40', 10);
    }
    return this._tokenCounter;
  },
  incrementTokenCounter() {
    this._tokenCounter = this.getTokenCounter() + 1;
    localStorage.setItem('mq_token_counter', this._tokenCounter);
    return this._tokenCounter;
  },
};

/* ── ─── TOKEN GENERATOR ──────────────────────────────────────── */
/**
 * Generates a unique digital token.
 * @param {string} deptName  - Department name
 * @param {string} type      - 'standard' | 'fasttrack'
 * @returns {{ id, display, dept, type, timestamp, queuePos, waitMin }}
 */
function generateToken(deptName, type = 'standard') {
  const counter  = MQ.incrementTokenCounter();
  const dept     = MQ.departments.find(d => d.name === deptName) || MQ.departments[0];
  const prefix   = dept.shortName.substring(0, 3).toUpperCase();
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const display  = String(counter).padStart(3, '0');
  const id       = `MQ-${prefix}-${datePart}-${display}`;
  const queuePos = dept.queue + 1;
  const waitMin  = calculateWaitTime(dept.waitMin, queuePos);

  dept.queue++;
  dept.waitMin = waitMin;

  return {
    id,
    display,
    dept: dept.name,
    deptIcon: dept.icon,
    type,
    timestamp: new Date(),
    queuePos,
    waitMin,
    doctor: dept.doctor,
    room: dept.room,
  };
}

/* ── ─── WAIT-TIME CALCULATOR ─────────────────────────────────── */
/**
 * Estimates wait time based on current base wait and queue position.
 * Uses a slight exponential decay — longer queues don't scale linearly.
 */
function calculateWaitTime(baseWaitMin, queuePosition) {
  if (queuePosition <= 0) return 0;
  const basePerPatient = baseWaitMin / Math.max(1, queuePosition);
  const adjustedPerPatient = Math.max(2, Math.min(8, basePerPatient)); // 2–8 min per patient
  const jitter = (Math.random() * 0.3 - 0.15); // ±15% randomness
  return Math.round(queuePosition * adjustedPerPatient * (1 + jitter));
}

/**
 * Returns a human-readable wait time string.
 */
function formatWait(minutes) {
  if (minutes <= 0)  return 'Now';
  if (minutes < 60)  return `~${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

/**
 * Formats a Date to a readable relative timestamp.
 */
function timeAgo(date) {
  const diffMs  = Date.now() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1)  return 'Just now';
  if (diffMin < 60) return `${diffMin} min ago`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24)   return `${diffH}h ago`;
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
}

/**
 * Format time as HH:MM AM/PM
 */
function formatTime(date) {
  return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}

/* ── ─── TOAST NOTIFICATIONS ──────────────────────────────────── */
function showToast(title, message, icon = '🔔', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-text">
      <strong>${title}</strong>
      ${message ? `<small>${message}</small>` : ''}
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ── ─── AUTO-REFRESH QUEUE ───────────────────────────────────── */
/**
 * Call this on queue-facing pages. Calls `onRefresh(departments)` every `interval` ms.
 * Returns an object with a `stop()` method.
 */
function startQueueRefresh(onRefresh, interval = 30000) {
  onRefresh(MQ.departments); // immediate first call

  const timer = setInterval(() => {
    MQ.departments.forEach(dept => {
      if (dept.status !== 'open') return;
      // Simulate: someone gets served
      if (dept.queue > 0 && Math.random() > 0.35) {
        dept.serving++;
        dept.queue = Math.max(0, dept.queue - 1);
      }
      // Simulate: new patient joins
      if (Math.random() > 0.55) dept.queue++;
      // Recalculate wait time
      dept.waitMin = calculateWaitTime(dept.waitMin, dept.queue);
    });
    onRefresh(MQ.departments);
  }, interval);

  return { stop: () => clearInterval(timer) };
}

/* ── ─── SHARED NAVBAR ACTIVE STATE ──────────────────────────── */
(function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && path.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });
})();
