/* ============================== DATA ============================== */

const AMBIENT = {
  "img/stud-hub": ["#1fc9e8", "#63d92f"],
  "img/stud-tycoon": ["#28bff0", "#7d5fd0"],
  "img/enchanted": [
    "#b3199c",
    "#5a1ecc"
  ],
  "img/wizard-tower": [
    "#e0521a",
    "#8c1206"
  ],
  "img/astral-lounge": [
    "#d99a2b",
    "#7a3f10"
  ],
  "img/astral-promenade": [
    "#c9955c",
    "#2f5a86"
  ],
  "img/castle": [
    "#4b7f96",
    "#2a4a63"
  ],
  "img/cathedral": [
    "#8a5a1e",
    "#2a1408"
  ],
  "img/igris": [
    "#a81f2a",
    "#3d0a12"
  ],
  "img/ranked": [
    "#0e9fbd",
    "#123f7a"
  ],
  "img/rpg": [
    "#9a5c22",
    "#33170a"
  ],
  "img/grave": [
    "#1f3f8c",
    "#c4661a"
  ],
  "img/Studs": [
    "#0fbf9c",
    "#0d5f6e"
  ],
  "img/cartoon": [
    "#4a5c6b",
    "#22303b"
  ]
};

const PROJECTS = [
  {
    name: "Stud Trading Hub",
    tags: ["Stud", "Hub", "Low-Poly"],
    year: "2026",
    role: "Full map, layout, signage",
    desc: "A stud-built trading island for a collection game. Rows of market stalls fan out from a fenced central arena, with the auction plaza, pack shop and season pass stands placed on the sight lines players walk in on. Everything is studs and flat colour, so the island costs almost nothing to render and reads instantly at any distance.",
    folder: "img/stud-hub", count: 6,
  },
  {
    name: "Stud Tycoon Islands",
    tags: ["Stud", "Tycoon", "Multiplayer"],
    year: "2026",
    role: "Full map, plot layout, economy staging",
    desc: "A tycoon map built as claimable plots either side of a central conveyor spine, with the sell station at the near end and the gacha and upgrade shops staged along the walk. Plot boundaries, claim markers and price boards are all part of the build, so the economy is legible from the moment a player spawns.",
    folder: "img/stud-tycoon", count: 8,
  },
  {
    name: "Enchanted Grove",
    tags: ["Stylized", "Terrain", "Lighting"],
    year: "2026",
    role: "Full environment, foliage, lighting",
    desc: "A stylized night grove built around colour. Hand-placed magenta and violet canopies break to gold at the centre of the path, lantern posts carry the eye down the trail, and emissive flower clusters pick out the verges. Every tree is a low-poly card set, so the whole biome holds frame rate on mobile.",
    folder: "img/enchanted", count: 5,
  },
  {
    name: "Wizard Tower",
    tags: ["Fantasy", "Interior", "High-Poly"],
    year: "2026",
    role: "Interior build, lighting, set dressing",
    desc: "The inside of a hollowed tower grown around a living tree. Rope-bound trunk through the centre, stacked timber galleries, banners, a spiral stair cut into the stone, and a fireplace throwing the warm key light that ties the whole room together.",
    folder: "img/wizard-tower", count: 11,
  },
  {
    name: "Astral Art Deco Lounge",
    tags: ["Art Deco", "Interior", "High-Poly"],
    year: "2025",
    role: "Interior build, lighting, props",
    desc: "A retro-futurist lounge and bar deck built around glowing amber column lights. Gold trim, tufted velvet booths, checkered flooring, and layered planters set against a wall of night-lit viewing windows.",
    folder: "img/astral-lounge", count: 5,
  },
  {
    name: "Astral Observation Promenade",
    tags: ["Art Deco", "Interior", "Atmospheric"],
    year: "2025",
    role: "Interior build, lighting",
    desc: "The daylit promenade deck of the same vessel. Sweeping curved staircases, red leather banquettes, and floor-to-ceiling glass opening onto open sky.",
    folder: "img/astral-promenade", count: 4,
  },
  {
    name: "Medieval Castle",
    tags: ["Medieval", "High-Poly", "Exterior"],
    year: "2024",
    role: "Full exterior, terrain, props",
    desc: "A full-scale medieval castle exterior. High-poly stonework, towers, and grounds built for an immersive roleplay map.",
    folder: "img/castle", count: 8,
  },
  {
    name: "Dark Cathedral",
    tags: ["Gothic", "High-Poly", "Atmosphere"],
    year: "2024",
    role: "Interior build, lighting",
    desc: "A gothic cathedral interior with high-poly detailing, built to feel imposing and atmospheric without tanking frame rate.",
    folder: "img/cathedral", count: 7,
  },
  {
    name: "Igris Room",
    tags: ["Anime", "Interior", "Detailed"],
    year: "2024",
    role: "Interior build, set dressing",
    desc: "An anime-inspired interior built around a single striking centerpiece, with lighting and props tuned to sell the mood of the room.",
    folder: "img/igris", count: 5,
  },
  {
    name: "Cricket Lobby",
    tags: ["Sports", "Lobby", "Ranked"],
    year: "2025",
    role: "Lobby build, UI staging",
    desc: "A ranked sports lobby built for a cricket game, designed around clarity and a quick matchmaking flow.",
    folder: "img/ranked", count: 7,
  },
  {
    name: "RPG Office",
    tags: ["RPG", "Interior", "Multi-room"],
    year: "2024",
    role: "Multi-room interior",
    desc: "A multi-room interior built for a medieval RPG map, balancing detail against clean, readable navigation for players.",
    folder: "img/rpg", count: 6,
  },
  {
    name: "Pumpkin Grave",
    tags: ["Halloween", "Terrain", "Atmosphere"],
    year: "2023",
    role: "Terrain sculpting, lighting",
    desc: "A moody Halloween graveyard scene leaning on terrain sculpting and lighting to build atmosphere.",
    folder: "img/grave", count: 5,
  },
  {
    name: "Studs Lobby",
    tags: ["Lobby", "Stylized", "Clean"],
    year: "2024",
    role: "Lobby build",
    desc: "A clean, stylized lobby space designed to load fast and give players a strong first impression.",
    folder: "img/Studs", count: 5,
  },
  {
    name: "Ruined House",
    tags: ["Cartoon", "Low-Poly", "Ruins"],
    year: "2023",
    role: "Prop set, low-poly build",
    desc: "A cartoon-style ruined house, kept intentionally low-poly to fit a stylized, lightweight game world.",
    folder: "img/cartoon", count: 3,
  },
].map((p) => ({
  ...p,
  images: Array.from({ length: p.count }, (_, i) => `${p.folder}/${i + 1}.webp`),
  // Ambient pair sampled from the build itself. The page background is lit by
  // whichever build you are looking at, so it is never a flat black field.
  amb: AMBIENT[p.folder] || ["#2f3566", "#3a2350"],
}));

/* Each step pairs with a build that shows it. The sticky panel on the left
   swaps to the matching shot as you move down the list. */
const CRAFT = [
  {
    step: "Scope",
    title: "The brief gets pinned down first",
    body: "Game, style, size, and deadline agreed in writing before a single part is placed. You get a plan, a timeline, and a fixed quote.",
    img: "img/enchanted/3.webp",
    alt: "A lit path winding through the Enchanted Grove, the build used to plan scope",
  },
  {
    step: "Style",
    title: "Any art style you need",
    body: "Anime, low poly, cartoony, gritty high poly realism. The style follows your game, not my habits.",
    img: "img/igris/1.webp",
    alt: "The Igris room, built in a dark stylised art style",
  },
  {
    step: "Build",
    title: "Terrain and interiors, not just props",
    body: "Sculpted landscapes, multi room interiors, and full maps. Whole environments rather than a folder of models.",
    img: "img/castle/1.webp",
    alt: "A medieval castle with sculpted terrain and a full interior",
  },
  {
    step: "Review",
    title: "Revisions happen during the build",
    body: "Work in progress reaches you at every stage, so changes get made while they are cheap. Revisions inside the agreed scope are part of the price. Once it is delivered and signed off, new work is a new quote.",
    img: "img/wizard-tower/4.webp",
    alt: "An interior floor of the Wizard Tower, shown mid build",
  },
  {
    step: "Deliver",
    title: "Delivered on the date agreed",
    body: "Timelines are set before the first block is placed, and I hold to them. Optimisation is not a final pass either. Part counts, unions, and texture budgets get watched from the first block.",
    img: "img/astral-lounge/1.webp",
    alt: "The finished Astral art deco lounge, delivered and dressed",
  },
];
const REVIEWS = [
  { name: "Halo", role: "Game developer", quote: "The map was good.", rating: 5, avatar: "img/halo.webp" },
  { name: "Havik", role: "Studio owner", quote: "f34r is a cool dude and I have worked with him a lot.", rating: 5, avatar: "img/havik.webp" },
  { name: "Kolfou", role: "Game developer", quote: "The buildings were amazing. Delivery, service, and quality were all 10/10.", rating: 5, avatar: "img/kolfou.webp" },
  { name: "Patty", role: "Studio owner", quote: "10/10, the builds were high quality. I would recommend him to anybody looking for a builder.", rating: 5, avatar: "img/patty.webp" },
  { name: "Jay", role: "Commissioner", quote: "Thanks, pleasure doing business with you.", rating: 5, avatar: "img/J.webp" },
  { name: "Aser", role: "Game developer", quote: "The map and models were perfect for the Christmas update, delivered right on time.", rating: 5, avatar: "img/aser.webp" },
  { name: "ycbabyy", role: "Commissioner", quote: "Thanks so much for the work, looking forward to hiring you again.", rating: 5, avatar: "img/ycbabyy.webp" },
  { name: "Ghostnob", role: "Game developer", quote: "Good builder, pretty fast, and reviewed the map again after I asked for it.", rating: 4, avatar: "img/ghost.webp" },
];

const TOOLS = [
  { label: "Roblox Studio", src: "https://cdn.simpleicons.org/roblox/9d98a6" },
  { label: "Blender", src: "https://cdn.simpleicons.org/blender/9d98a6" },
  { label: "Substance Painter", src: "https://cdn.simpleicons.org/adobe/9d98a6" },
  { label: "Photoshop", src: "https://cdn.simpleicons.org/adobephotoshop/9d98a6" },
  { label: "Luau", src: "https://cdn.simpleicons.org/lua/9d98a6" },
  { label: "Discord", src: "https://cdn.simpleicons.org/discord/9d98a6" },
];

const SCOPE = [
  { label: "Props and small sets", detail: "A spawn, a shopfront, a prop pack. Days, not weeks." },
  { label: "Single environments", detail: "One finished interior, lobby, or arena, fully dressed and lit." },
  { label: "Full maps", detail: "Multi-biome worlds, custom terrain, and the asset library to fill them." },
];

const DISCORD_USER_ID = "1088022144308486176";
const DISCORD_URL = "https://discord.com/users/1088022144308486176";

// Discord Nitro and Server Boosting status are NEVER exposed to bots for other
// users (a platform-level privacy restriction, not a Lanyard limitation), so
// these are set by hand to match the real profile.
//
//   nitroTier: false, or one of "bronze" "silver" "gold" "platinum"
//              "diamond" "emerald" "ruby" "opal"
//   boostTier: false, or 1-9 (1=1mo 2=2mo 3=3mo 4=6mo 5=9mo 6=12mo 7=15mo 8=18mo 9=24mo)
const MY_BADGES = {
  nitroTier: "platinum",
  boostTier: 6,
};

/* ============================== ICONS ============================== */

const I_ARROW = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const I_CLOSE = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const I_PREV  = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
const I_NEXT  = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
const I_STAR  = (on) => `<svg width="13" height="13" viewBox="0 0 24 24" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.6" opacity="${on ? 1 : 0.35}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
const I_CHAT  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
const I_CODE  = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>';

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tagsHTML = (tags) => `<div class="tags">${tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

/* ============================== REVEAL ON SCROLL ==============================
   CSS owns every entrance on this page. This adds one class and gets out of the
   way. GSAP is never pointed at the same properties, which is what previously
   left a whole section stuck at opacity 0. */

function setupReveal() {
  const items = document.querySelectorAll(".rv, .rv-g, .rule, .ln, .hero-strip");
  if (!("IntersectionObserver" in window)) {
    items.forEach((n) => n.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
  items.forEach((n) => io.observe(n));
}

/* ============================== COUNT UP ==============================
   Hierarchy: the three figures are the credibility claim. They count once, on
   arrival, then stop. */

function setupCountUp() {
  const nums = document.querySelectorAll("[data-to]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const paint = (node) => {
    const to = parseFloat(node.dataset.to);
    const suffix = node.dataset.suffix || "";
    if (reduce) {
      node.textContent = to + suffix;
      return;
    }
    const dur = 1400;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      node.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    // If rAF never ticks, the number must still end up correct.
    setTimeout(() => {
      if (node.textContent === "0") node.textContent = to + suffix;
    }, 2500);
    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) {
    nums.forEach(paint);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        paint(e.target);
        io.unobserve(e.target);
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ============================== NAV ============================== */

function setupNav() {
  const nav = document.getElementById("nav");
  const hero = document.getElementById("top");
  const burger = document.getElementById("burger");
  const sheet = document.getElementById("sheet");

  // A 1px sentinel under the nav. Once it scrolls away the nav sits over
  // content rather than over the top of the hero, so it needs a surface.
  if (hero && "IntersectionObserver" in window) {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:84px;left:0;width:1px;height:1px;pointer-events:none;";
    hero.appendChild(sentinel);
    new IntersectionObserver(([e]) => nav.classList.toggle("solid", !e.isIntersecting), { threshold: 0 }).observe(sentinel);
  } else {
    nav.classList.add("solid");
  }

  const closeSheet = () => {
    sheet.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  };
  burger.addEventListener("click", () => {
    const open = sheet.hidden;
    sheet.hidden = !open;
    burger.setAttribute("aria-expanded", String(open));
  });
  sheet.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeSheet));

  const links = [...document.querySelectorAll(".nav-links a")];
  const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if (targets.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }
}

/* ============================== TICKER ==============================
   The single marquee on the page. It states the service in the accent colour,
   edge to edge, so there is one hard break between the hero and the work. */

const TICKER = ["Stud maps", "Terrain", "Interiors", "Tycoons", "Lighting", "Set dressing", "Optimization", "Full maps"];

function renderTicker() {
  const mount = document.getElementById("tickerMount");
  if (!mount) return;
  const run = TICKER.map((t) => `<span>${esc(t)}</span><b></b>`).join("");

  // One half of the track has to be wider than the viewport, or the -50% loop
  // point lands on screen and the row visibly restarts with a gap beside it.
  // Measure one run, then repeat it enough times to cover the widest viewport
  // the page is likely to meet, and duplicate the whole thing for the loop.
  mount.innerHTML = run;
  const one = mount.scrollWidth || 600;
  const need = Math.max(2, Math.ceil((window.innerWidth * 1.35) / one));
  const half = run.repeat(need);
  mount.innerHTML = half + half;

  // Keep the run time proportional to the length, so the speed does not change
  // with how many copies it took to fill the screen.
  mount.style.animationDuration = `${(mount.scrollWidth / 2 / 78).toFixed(1)}s`;
}

/* Every project shot exists at 640, 1080 and full width. This builds the
   srcset so a phone downloads a 640px file instead of the same 1920px one a
   desktop gets. sizes is passed per call site, because the same image is a
   full-bleed slab in one place and a sixth of the width in another. */
function srcset(src) {
  const base = src.replace(/.webp$/, "");
  return `${base}-640.webp 640w, ${base}-1080.webp 1080w, ${src} 1920w`;
}

/* ============================== HERO STRIP ==============================
   The six featured builds along the bottom edge of the first screen. The hero
   had a photograph, a headline and a lot of empty floor; this puts the actual
   work on the first screen and gives the reel a way in that is not a scroll. */

function renderHeroStrip() {
  const mount = document.getElementById("heroStrip");
  if (!mount) return;

  mount.innerHTML = PROJECTS.slice(0, FEATURED_COUNT)
    .map(
      (p, i) => `
      <button class="hs" type="button" data-jump="${i}" style="--hs-c:${p.amb[0]}">
        <span class="hs-thumb"><img src="${p.images[0]}" srcset="${srcset(p.images[0])}" sizes="(max-width:1100px) 33vw, 220px" alt="" loading="lazy" width="320" height="200" /></span>
        <span class="hs-meta"><em>${String(i + 1).padStart(2, "0")}</em>${esc(p.name)}</span>
      </button>`
    )
    .join("");

  mount.addEventListener("click", (e) => {
    const b = e.target.closest("[data-jump]");
    if (!b) return;
    const panel = document.querySelectorAll(".panel")[Number(b.dataset.jump)];
    if (!panel) return;
    // land on the panel, not the top of the section it lives in
    const y = panel.getBoundingClientRect().top + window.scrollY;
    if (typeof lenis !== "undefined" && lenis) lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: "smooth" });
  });
}

/* ============================== WORK: THE REEL ==============================
   Six lead builds, each holding the viewport and handing off to the next. The
   ambient layer takes its colour from whichever one is in front. */

const FEATURED_COUNT = 6;

function renderWork() {
  const mount = document.getElementById("workMount");

  PROJECTS.slice(0, FEATURED_COUNT).forEach((p, i) => {
    mount.appendChild(
      el(`
      <div class="panel" data-panel="${i}" data-a1="${p.amb[0]}" data-a2="${p.amb[1]}">
        <span class="panel-n" aria-hidden="true">${i + 1}</span>
        <article class="slab">
          <div class="slab-media">
            <img src="${p.images[0]}" srcset="${srcset(p.images[0])}" sizes="(max-width:880px) 100vw, 1400px" alt="${esc(p.name)}" loading="${i < 2 ? "eager" : "lazy"}" width="1600" height="800" />
          </div>
          <span class="slab-glow" aria-hidden="true"></span>
          <div class="slab-cap">
            <div>
              <span class="mono">${esc(p.year)} &nbsp;/&nbsp; ${esc(p.role)}</span>
              <h3>${esc(p.name)}</h3>
              ${tagsHTML(p.tags)}
            </div>
            <button class="open-cue" type="button" data-i="${i}">Open project<span class="sr">: ${esc(p.name)}</span> ${I_ARROW}</button>
          </div>
        </article>
      </div>
    `)
    );
  });

  // The rail on the right: where you are, and what is still coming.
  const rail = document.querySelector("#reelRail ol");
  if (rail) {
    rail.innerHTML = PROJECTS.slice(0, FEATURED_COUNT)
      .map(
        (p, n) =>
          `<li>
            <span class="rail-meta"><em>${String(n + 1).padStart(2, "0")}</em>${esc(p.name)}<u>${esc(p.year)} / ${p.count} shots</u></span>
            <i></i>
          </li>`
      )
      .join("");
  }

  mount.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-i]");
    if (btn) openProject(Number(btn.dataset.i));
  });
}

/* ============================== INDEX: HORIZONTAL PAN ==============================
   The back catalogue. A different layout family from the reel, and it shows the
   breadth in one screen instead of six more. Each card carries its index, its
   shot count as a fill bar, and a second shot that cross fades in under the
   cursor, so hovering the row actually shows you more of the build. */

function renderIndex() {
  const mount = document.getElementById("indexMount");
  if (!mount) return;

  PROJECTS.slice(FEATURED_COUNT).forEach((p, n) => {
    const i = n + FEATURED_COUNT;
    const alt = p.images[1] || p.images[0];
    mount.appendChild(
      el(`
      <article class="card" data-card="${i}">
        <div class="card-media">
          <img class="a" src="${p.images[0]}" srcset="${srcset(p.images[0])}" sizes="(max-width:700px) 80vw, 460px" alt="${esc(p.name)}" loading="lazy" width="960" height="640" />
          <img class="b" src="${alt}" srcset="${srcset(alt)}" sizes="(max-width:700px) 80vw, 460px" alt="" loading="lazy" width="960" height="640" aria-hidden="true" />
        </div>
        <span class="card-ix" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <span class="card-go" aria-hidden="true">${I_ARROW}</span>
        <div class="card-cap">
          <span class="mono">${esc(p.year)} &nbsp;/&nbsp; ${p.count} shots</span>
          <h3>${esc(p.name)}</h3>
          ${tagsHTML(p.tags)}
        </div>
        <span class="card-shots" aria-hidden="true"><i></i></span>
        <button class="sr" type="button">Open project: ${esc(p.name)}</button>
      </article>
    `)
    );
  });

  mount.addEventListener("click", (e) => {
    const card = e.target.closest("[data-card]");
    if (card) openProject(Number(card.dataset.card));
  });
}

/* ============================== CRAFT ==============================
   A list of statements is not a process. This is: the five steps run down the
   right, and the panel on the left holds while they pass, swapping to the build
   that shows the step you are reading, with a rule that fills as you move
   through. The sticky panel is what makes the section worth scrolling rather
   than skimming. */

function renderCraft() {
  const mount = document.getElementById("craftMount");
  const media = document.getElementById("craftMedia");
  if (!mount) return;

  if (media) {
    media.innerHTML = CRAFT.map(
      (c, i) =>
        `<img src="${c.img}" srcset="${srcset(c.img)}" sizes="(max-width:900px) 100vw, 620px" alt="${esc(c.alt)}" loading="${i === 0 ? "eager" : "lazy"}" width="1200" height="900" class="${i === 0 ? "on" : ""}" data-shot="${i}" />`
    ).join("");
  }

  CRAFT.forEach((c, i) => {
    mount.appendChild(
      el(`
      <div class="step rv" data-step="${i}">
        <span class="step-n">${String(i + 1).padStart(2, "0")}</span>
        <div class="step-body">
          <span class="mono step-k">${esc(c.step)}</span>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.body)}</p>
        </div>
      </div>
    `)
    );
  });
}

/* Which step is being read drives the panel. IntersectionObserver only, so it
   costs nothing per frame and degrades to the first shot if it is unavailable. */
/* Mono labels resolve out of noise as they arrive. Only the mono ones, where a
   fixed advance width means nothing around them reflows while they land. */
function setupScramble() {
  const nodes = [...document.querySelectorAll(".sec-head .mono, .step-k, .vision-in .mono")];
  if (!nodes.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        scramble(e.target, e.target.textContent.trim(), 720);
        io.unobserve(e.target);
      });
    },
    { threshold: 0.9 }
  );
  nodes.forEach((n) => io.observe(n));
}

function setupCraft() {
  const steps = [...document.querySelectorAll(".step")];
  const shots = [...document.querySelectorAll("#craftMedia img")];
  const bar = document.querySelector(".craft-progress i");
  if (!steps.length) return;

  let active = -1;
  const show = (n) => {
    n = Math.max(0, Math.min(steps.length - 1, n));
    if (n === active) return;
    active = n;
    shots.forEach((s, i) => s.classList.toggle("on", i === n));
    steps.forEach((s, i) => s.classList.toggle("on", i === n));
    if (bar) bar.style.height = `${((n + 1) / steps.length) * 100}%`;
  };

  // Which step is being read is a function of scroll position, not of whether
  // an observer band happened to be crossed. The band version got stuck: with
  // steps taller than the band, there are scroll positions where nothing is
  // intersecting at all, so no callback fires and the panel keeps the last
  // shot. Measuring every step against the viewport centre cannot get stuck.
  const pick = () => {
    const mid = window.innerHeight * 0.5;
    let best = 0;
    let bestDist = Infinity;
    steps.forEach((st, i) => {
      const r = st.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    show(best);
  };

  if (window.ScrollTrigger) {
    ScrollTrigger.create({
      trigger: "#craft",
      start: "top bottom",
      end: "bottom top",
      onUpdate: pick,
      onRefresh: pick,
    });
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(pick, { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] });
    steps.forEach((st) => io.observe(st));
  }
  pick();
}


/* ============================== REVIEWS: COVERFLOW ==============================
   A 3D coverflow deck. The supplied component is React and shadcn; this site is
   neither, so this is a port of the mechanics rather than the file: centre card
   at rest, neighbours rotated and scaled back on Y, far cards dimmed and
   blurred, arrows, dots, autoplay that pauses on hover, arrow keys, and swipe.

   Each card takes a build as its backdrop so the deck is image led like the
   reference, and the whole stage is tinted by that build behind a heavy blur. */

const CF = { i: 0, timer: 0, hover: false, paused: false };

function renderReviews() {
  const mount = document.getElementById("voicesMount");
  if (!mount) return;

  const avg = REVIEWS.reduce((t, r) => t + r.rating, 0) / REVIEWS.length;
  const fives = REVIEWS.filter((r) => r.rating === 5).length;

  // One build per review, never repeated. Cycling the six featured ones gave
  // two cards the same backdrop; there are twelve builds, so spread across all
  // of them and take a different shot from each set for variety.
  const beds = PROJECTS.map((p, n) => p.images[Math.min(n % p.count, p.images.length - 1)]);

  const cards = REVIEWS.map(
    (r, i) => `
    <article class="cf-card" data-i="${i}" aria-roledescription="slide" aria-label="${i + 1} of ${REVIEWS.length}">
      <img class="cf-bed" src="${beds[i]}" srcset="${srcset(beds[i])}" sizes="(max-width:700px) 88vw, 392px" alt="" loading="lazy" />
      <span class="cf-veil"></span>
      <div class="cf-body">
        <div class="stars" aria-label="${r.rating} out of 5">${[1, 2, 3, 4, 5].map((n) => I_STAR(n <= r.rating)).join("")}</div>
        <p>${esc(r.quote)}</p>
        <span class="cf-bar"></span>
        <figcaption class="quote-by">
          <img src="${r.avatar}" alt="" loading="lazy" width="34" height="34" />
          <span>
            <span class="quote-name">${esc(r.name)}</span><br />
            <span class="quote-role">${esc(r.role)}</span>
          </span>
        </figcaption>
      </div>
    </article>`
  ).join("");

  mount.innerHTML = `
    <div class="cf-score">
      <div class="stars" aria-hidden="true">${[1, 2, 3, 4, 5].map(() => I_STAR(true)).join("")}</div>
      <b>${avg.toFixed(1)}</b>
      <small>Average rating &nbsp;/&nbsp; ${fives} of ${REVIEWS.length} at five stars</small>
    </div>
    <div class="cf" id="cf">
      <div class="cf-glow" id="cfGlow"></div>
      <div class="cf-stage" id="cfStage">${cards}</div>
      <button class="cf-nav cf-prev" type="button" aria-label="Previous review">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button class="cf-nav cf-next" type="button" aria-label="Next review">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      <button class="cf-pause" id="cfPause" type="button" aria-pressed="false" aria-label="Pause the reviews">
        <svg class="ico-pause" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
        <svg class="ico-play" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg>
      </button>
      <div class="cf-dots" id="cfDots" role="tablist" aria-label="Reviews">
        ${REVIEWS.map((_, i) => `<button type="button" role="tab" data-dot="${i}" aria-label="Review ${i + 1}"></button>`).join("")}
      </div>
    </div>`;
}

function setupCoverflow() {
  const cf = document.getElementById("cf");
  const stage = document.getElementById("cfStage");
  if (!cf || !stage) return;

  const cards = [...stage.querySelectorAll(".cf-card")];
  const dots = [...cf.querySelectorAll("[data-dot]")];
  const glow = document.getElementById("cfGlow");
  const total = cards.length;
  if (!total) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const paint = () => {
    cards.forEach((card, idx) => {
      const off = (idx - CF.i + total) % total;
      let t = "translateX(0) scale(.42) rotateY(0deg)";
      let o = 0;
      let z = 0;
      let f = "brightness(.4) blur(3px)";
      let centre = false;

      if (off === 0) {
        centre = true;
        t = "translateX(0) scale(1) rotateY(0deg)";
        o = 1; z = 30; f = "none";
      } else if (off === 1) {
        t = "translateX(58%) scale(.84) rotateY(-24deg)";
        o = .62; z = 20; f = "brightness(.7)";
      } else if (off === 2) {
        t = "translateX(104%) scale(.68) rotateY(-38deg)";
        o = .32; z = 10; f = "brightness(.5) blur(1.5px)";
      } else if (off === total - 1) {
        t = "translateX(-58%) scale(.84) rotateY(24deg)";
        o = .62; z = 20; f = "brightness(.7)";
      } else if (off === total - 2) {
        t = "translateX(-104%) scale(.68) rotateY(38deg)";
        o = .32; z = 10; f = "brightness(.5) blur(1.5px)";
      }

      card.style.transform = t;
      card.style.opacity = o;
      card.style.zIndex = z;
      card.style.filter = f;
      card.classList.toggle("is-centre", centre);
      card.setAttribute("aria-hidden", centre ? "false" : "true");
      card.style.pointerEvents = o > 0 ? "auto" : "none";
      card.style.cursor = centre ? "default" : "pointer";
    });

    dots.forEach((d, i) => d.classList.toggle("on", i === CF.i));
    if (glow) {
      const bed = cards[CF.i].querySelector(".cf-bed");
      if (bed) glow.style.backgroundImage = `url("${bed.getAttribute("src")}")`;
    }
  };

  const go = (n) => { CF.i = ((n % total) + total) % total; paint(); };
  const next = () => go(CF.i + 1);
  const prev = () => go(CF.i - 1);

  cf.querySelector(".cf-next").addEventListener("click", next);
  cf.querySelector(".cf-prev").addEventListener("click", prev);
  dots.forEach((d) => d.addEventListener("click", () => go(Number(d.dataset.dot))));
  cards.forEach((c) => c.addEventListener("click", () => {
    if (!c.classList.contains("is-centre")) go(Number(c.dataset.i));
  }));

  // Arrow keys, but only while the deck is the thing you are looking at.
  // Binding them to the window unconditionally would steal them from the
  // lightbox, which uses the same keys for its own navigation.
  let inView = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0.4 }).observe(cf);
  }
  window.addEventListener("keydown", (e) => {
    if (!inView || document.querySelector(".lb") || document.querySelector(".detail")) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // Swipe
  let sx = 0;
  cf.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  cf.addEventListener("touchend", (e) => {
    const d = e.changedTouches[0].clientX - sx;
    if (Math.abs(d) > 45) (d < 0 ? next : prev)();
  }, { passive: true });

  // Autoplay, paused on hover and off entirely under reduced motion.
  cf.addEventListener("pointerenter", () => { CF.hover = true; });
  cf.addEventListener("pointerleave", () => { CF.hover = false; });
  const pause = document.getElementById("cfPause");
  if (pause) {
    pause.addEventListener("click", () => {
      CF.paused = !CF.paused;
      pause.setAttribute("aria-pressed", String(CF.paused));
      pause.setAttribute("aria-label", CF.paused ? "Play the reviews" : "Pause the reviews");
    });
  }
  if (!reduce) {
    CF.timer = setInterval(() => { if (!CF.hover && !CF.paused && inView) next(); }, 5200);
  }

  paint();
}

/* ============================== TOOLS ============================== */

function renderTools() {
  const mount = document.getElementById("toolsMount");
  mount.innerHTML = TOOLS.map(
    (t) => `<span class="tool"><img src="${t.src}" alt="" loading="lazy" width="19" height="19" onerror="this.remove()" />${esc(t.label)}</span>`
  ).join("");
}

/* ============================== SCOPE ============================== */

function renderScope() {
  const mount = document.getElementById("scopeMount");
  mount.innerHTML = SCOPE.map(
    (s, i) =>
      `<div class="scope-row">
        <span class="scope-n">${String(i + 1).padStart(2, "0")}</span>
        <span><strong>${esc(s.label)}</strong><span>${esc(s.detail)}</span></span>
      </div>`
  ).join("");
}

/* ============================== LOCAL CLOCK ==============================
   Where I am in the day, so a client can tell whether a reply is likely in the
   next hour. Asia/Karachi is GMT+5 and does not observe daylight saving, so the
   label is fixed; the time itself comes from the browser rather than from an
   offset I hard coded. */

function setupClock() {
  const out = document.getElementById("clockTime");
  const zone = document.getElementById("clockZone");
  if (!out) return;

  let fmt;
  try {
    fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch (e) {
    // No IANA database available: fall back to a fixed +5 offset.
    fmt = null;
  }

  const paint = () => {
    let hh, mm;
    if (fmt) {
      [hh, mm] = fmt.format(new Date()).split(":");
    } else {
      const d = new Date(Date.now() + (5 * 60 + new Date().getTimezoneOffset()) * 60000);
      hh = String(d.getHours()).padStart(2, "0");
      mm = String(d.getMinutes()).padStart(2, "0");
    }
    out.innerHTML = `${hh}<span>:</span>${mm}`;
  };

  paint();
  // Tick on the minute rather than every second: nothing here needs seconds,
  // and an interval that fires 60 times more often buys nothing.
  setInterval(paint, 20000);
  if (zone) zone.textContent = "GMT +5";
}

/* ============================== DISCORD CARD MARKUP ==============================
   The ids below are what renderDiscordPresence() writes into. Keep them. */

function renderDiscordShell() {
  document.getElementById("discordMount").innerHTML = `
    <div class="dc">
      <div class="dc-banner"></div>
      <a class="dc-top" href="${DISCORD_URL}" target="_blank" rel="noreferrer">
        <span class="dc-av-wrap">
          <span class="dc-av" id="discordAvatarFallback">f</span>
          <img class="dc-av" id="discordAvatarImg" style="display:none" alt="f34r's Discord avatar" />
          <img class="dc-deco" id="discordAvatarDecoration" style="display:none" alt="" />
          <span class="dc-status" id="discordStatusDot" style="background:#80848e"></span>
        </span>
        <span class="dc-info">
          <span class="dc-name">
            <b class="discord-username">f34r</b>
            <span class="dc-tag" id="discordClanTag" style="display:none"></span>
            <span class="dc-handle">@f34r_r</span>
          </span>
          <span class="dc-badges" id="discordBadges"></span>
          <span class="dc-bio">Roblox builder and scripter</span>
          <span class="dc-cs" id="discordCustomStatus" style="display:none"></span>
        </span>
      </a>
      <div class="dc-act" id="discordActivity" style="display:none">
        <div class="dc-act-ic" id="activityIcon">${I_CODE}</div>
        <div>
          <div class="dc-act-l"><span id="activityType">PLAYING</span> &nbsp;<span id="activityElapsed">00:00:00</span> ELAPSED</div>
          <div class="dc-act-n" id="activityName"></div>
          <div class="dc-act-d" id="activityDetail"></div>
        </div>
      </div>
      <div class="dc-foot">
        <span class="dc-handle-out">${I_CHAT} Message me on Discord</span>
      </div>
    </div>`;
}
let detailNode = null;
let lastFocus = null;

function openProject(i) {
  const p = PROJECTS[i];
  if (!p) return;
  if (typeof track === "function") track("project_open", { project: p.name });
  lastFocus = document.activeElement;
  closeProject(true);

  const next = PROJECTS[(i + 1) % PROJECTS.length];
  detailNode = el(`
    <div class="detail" role="dialog" aria-modal="true" data-lenis-prevent aria-label="${esc(p.name)}">
      <div class="detail-bar">
        <span class="mono">${esc(p.name)}</span>
        <button class="icon-btn" data-close aria-label="Close project">${I_CLOSE}</button>
      </div>
      <div class="detail-plate">
        <img src="${p.images[0]}" srcset="${srcset(p.images[0])}" sizes="100vw" alt="${esc(p.name)}" width="1600" height="900" fetchpriority="high" />
        <div class="detail-plate-in wrap">
          <span class="mono">${esc(p.year)} &nbsp;/&nbsp; ${p.count} shots</span>
          <h2>${esc(p.name)}</h2>
          ${tagsHTML(p.tags)}
        </div>
      </div>
      <div class="wrap detail-head">
        <p class="detail-lede">${esc(p.desc)}</p>
        <div class="detail-meta">
          <div><span class="mono">Year</span><span>${esc(p.year)}</span></div>
          <div><span class="mono">Role</span><span>${esc(p.role)}</span></div>
          <div><span class="mono">Style</span><span>${esc(p.tags.join(", "))}</span></div>
          <div><span class="mono">Shots</span><span>${p.count}</span></div>
        </div>
      </div>
      <div class="wrap detail-shots">
        ${p.images
          .map(
            (src, n) =>
              `<button class="shot" type="button" data-shot="${n}" aria-label="Enlarge image ${n + 1}"><img src="${src}" srcset="${srcset(src)}" sizes="(max-width:900px) 100vw, 1280px" alt="${esc(p.name)}, image ${n + 1}" width="1600" height="900" loading="${n < 3 ? "eager" : "lazy"}" decoding="async" /></button>`
          )
          .join("")}
      </div>
      <div class="detail-next">
        <div class="wrap">
          <button type="button" data-next="${(i + 1) % PROJECTS.length}">
            <span>
              <span class="mono">Next project</span>
              <h3 style="margin-top:10px">${esc(next.name)}</h3>
            </span>
            <span class="open-cue">Open ${I_ARROW}</span>
          </button>
        </div>
      </div>
    </div>`);

  document.body.appendChild(detailNode);
  lockScroll(true);
  requestAnimationFrame(() => detailNode.classList.add("in"));
  detailNode.querySelector("[data-close]").focus();

  detailNode.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closeProject();
    const shot = e.target.closest("[data-shot]");
    if (shot) return openLightbox(p.images, Number(shot.dataset.shot), p.name);
    const nxt = e.target.closest("[data-next]");
    if (nxt) {
      detailNode.scrollTop = 0;
      openProject(Number(nxt.dataset.next));
    }
  });
}

function closeProject(silent) {
  if (!detailNode) return;
  detailNode.remove();
  detailNode = null;
  if (silent) return;
  lockScroll(false);
  if (lastFocus) lastFocus.focus();
}

/* ============================== LIGHTBOX ============================== */

let lbNode = null;
let lbImages = [];
let lbLabel = "";
let lbIndex = 0;

function openLightbox(images, index, label) {
  lbImages = images;
  lbLabel = label || "";
  lbIndex = index;
  if (lbNode) lbNode.remove();
  lbNode = el(`
    <div class="lb" role="dialog" aria-modal="true" aria-label="Image viewer">
      <img alt="" />
      <button class="icon-btn lb-close" data-lb-close aria-label="Close">${I_CLOSE}</button>
      <button class="icon-btn lb-nav lb-prev" data-lb-step="-1" aria-label="Previous image">${I_PREV}</button>
      <button class="icon-btn lb-nav lb-next" data-lb-step="1" aria-label="Next image">${I_NEXT}</button>
      <span class="lb-count"></span>
    </div>`);
  document.body.appendChild(lbNode);
  paintLightbox();
  requestAnimationFrame(() => lbNode.classList.add("in"));
  lbNode.querySelector("[data-lb-close]").focus();

  lbNode.addEventListener("click", (e) => {
    const step = e.target.closest("[data-lb-step]");
    if (step) return stepLightbox(Number(step.dataset.lbStep));
    if (e.target.closest("[data-lb-close]") || e.target === lbNode) closeLightbox();
  });
}

function paintLightbox() {
  const single = lbImages.length < 2;
  const lbImg = lbNode.querySelector("img");
  lbImg.src = lbImages[lbIndex];
  lbImg.alt = lbLabel
    ? `${lbLabel}, image ${lbIndex + 1} of ${lbImages.length}`
    : `Image ${lbIndex + 1} of ${lbImages.length}`;
  lbNode.querySelector(".lb-count").textContent = `${lbIndex + 1} / ${lbImages.length}`;
  lbNode.querySelectorAll(".lb-nav").forEach((b) => (b.hidden = single));
}

function stepLightbox(d) {
  lbIndex = (lbIndex + d + lbImages.length) % lbImages.length;
  paintLightbox();
}

function closeLightbox() {
  if (!lbNode) return;
  lbNode.remove();
  lbNode = null;
}

function setupKeys() {
  document.addEventListener("keydown", (e) => {
    if (lbNode) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
      return;
    }
    if (detailNode && e.key === "Escape") closeProject();
  });
}

/* ============================== DISCORD CARD (Lanyard live presence + real badges) ============================== */

const BADGE_SVG = {
  nitrodiamond: { label: "Nitro Diamond", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M74.4443 23.2971L57.0111 35.3003L63.8831 45.3435L73.1925 40.9287C78.0804 37.1311 74.4443 23.2971 74.4443 23.2971Z" fill="#35005E"/> <path d="M77.7709 32.5441C77.4188 26.7131 74.4443 23.2971 74.4443 23.2971L75.0887 26.9146C75.486 30.0872 75.6591 34.7288 74.0443 38.3011L76.8739 39.6878L77.4076 39.9416C77.4076 39.9416 78.1257 38.3553 77.7623 32.5261L77.7709 32.5441Z" fill="#7E1CC7"/> <path d="M74.0557 38.3101L63.8832 45.3439L65.3783 45.6344L77.4186 39.9499L74.0545 38.3L74.0557 38.3101Z" fill="#51008F"/> <path d="M4.18708 23.2971C4.18708 23.2971 0.55132 37.1311 5.43589 40.9298L14.7486 45.3435L21.6202 35.2992L4.18708 23.2971Z" fill="#35005E"/> <path d="M4.57584 38.31C2.96372 34.7288 3.13417 30.0693 3.53449 26.8963L4.17851 23.2971C4.17851 23.2971 1.21256 26.715 0.86046 32.5441C0.508359 38.3732 1.21256 39.9599 1.21256 39.9599L1.73585 39.7057L4.57397 38.319L4.57584 38.31Z" fill="#7E1CC7"/> <path d="M4.57582 38.3101L14.7486 45.3439L13.2535 45.6344L1.21329 39.9499L4.57731 38.3L4.57582 38.3101Z" fill="#51008F"/> <path d="M39.3196 64.0628C55.8882 64.0628 69.3196 50.6313 69.3196 34.0628C69.3196 17.4942 55.8882 4.06274 39.3196 4.06274C22.7511 4.06274 9.31958 17.4942 9.31958 34.0628C9.31958 50.6313 22.7511 64.0628 39.3196 64.0628Z" fill="#381DB5"/> <path d="M39.3199 34.0631L27.8377 6.34692C20.1842 9.51733 14.5401 15.4896 11.6022 22.5828L39.3199 34.0631Z" fill="#5523CC"/> <path d="M18.1064 12.8499L39.32 34.0627H39.3222L21.3482 10.0383C20.2023 10.8974 19.1189 11.837 18.1064 12.8499Z" fill="#603DEB"/> <path d="M11.6053 22.581L39.32 34.0617L18.1072 12.8489C15.3212 15.6337 13.1099 18.9392 11.5993 22.5773L11.6053 22.581Z" fill="#5523CC"/> <path d="M39.32 34.0627V64.0628C55.8882 64.0628 69.3196 50.6313 69.3196 34.0627H39.32Z" fill="#351299"/> <path d="M67.0358 45.5438L39.3207 34.0627L60.5335 55.2755C63.3197 52.4908 65.5309 49.1853 67.0414 45.5472L67.0358 45.5438Z" fill="#351299"/> <path d="M67.0362 22.5835L39.3203 34.0631H69.32C69.3209 30.1235 68.547 26.2223 67.0425 22.5813L67.0362 22.5835Z" fill="#351299"/> <path d="M18.1087 55.2769L39.3203 34.0637L11.6053 45.5463C13.1122 49.1858 15.3202 52.4934 18.1034 55.281L18.1087 55.2769Z" fill="#351299"/> <path d="M9.32145 34.0628H39.3203L11.6041 22.5833C10.0958 26.2222 9.31805 30.1222 9.31509 34.0613L9.32145 34.0628Z" fill="#381DB5"/> <path d="M39.32 34.0627V64.0628C47.6041 64.0628 55.104 60.7047 60.5328 55.2759L39.32 34.0627Z" fill="#351299"/> <path d="M39.32 34.0627V64.0628C31.0355 64.0628 23.5356 60.7047 18.1068 55.2759L39.32 34.0627Z" fill="#351299"/> <path d="M39.3195 60.0081C53.6485 60.0081 65.2644 48.3922 65.2644 34.0633C65.2644 19.7343 53.6485 8.11841 39.3195 8.11841C24.9906 8.11841 13.3747 19.7343 13.3747 34.0633C13.3747 48.3922 24.9906 60.0081 39.3195 60.0081Z" fill="#230054"/> <path d="M13.3747 34.0627C13.3747 48.392 24.9907 60.008 39.32 60.008C53.6492 60.008 65.2648 48.392 65.2648 34.0627H13.3747Z" fill="#603DEB"/> <path d="M39.32 34.0627V60.008C53.6489 60.008 65.2648 48.392 65.2648 34.0627H39.32Z" fill="#8259E3"/> <path d="M39.3196 58.1731C52.6354 58.1731 63.43 47.3785 63.43 34.0627C63.43 20.747 52.6354 9.95239 39.3196 9.95239C26.0038 9.95239 15.2093 20.747 15.2093 34.0627C15.2093 47.3785 26.0038 58.1731 39.3196 58.1731Z" fill="black"/> <path d="M39.3197 57.6471C52.3446 57.6471 62.9034 47.0883 62.9034 34.0634C62.9034 21.0385 52.3446 10.4797 39.3197 10.4797C26.2948 10.4797 15.736 21.0385 15.736 34.0634C15.736 47.0883 26.2948 57.6471 39.3197 57.6471Z" fill="#381DB5"/> <path d="M39.3263 57.6475C52.3532 57.6475 62.9137 47.0871 62.9137 34.0601C62.9137 21.0331 52.3532 10.4727 39.3263 10.4727C26.2993 10.4727 15.7388 21.0331 15.7388 34.0601C15.7388 47.0871 26.2993 57.6475 39.3263 57.6475Z" fill="#4129D9"/> <path d="M39.3262 57.6479L32.5821 47.918H46.0707L39.3262 57.6479Z" fill="#09047D"/> <path d="M39.3262 10.4727L34.3516 15.1195L39.3262 18.553L44.3012 15.1195L39.3262 10.4727Z" fill="#6F19CC"/> <path d="M46.0707 47.918L39.3266 57.6478C42.6071 57.6515 45.852 56.9687 48.8528 55.6433L46.0707 47.918Z" fill="#010059"/> <path d="M46.0707 47.918L48.8528 55.6433C51.2344 54.5894 53.4253 53.1488 55.3368 51.3799L46.0707 47.918Z" fill="#010070"/> <path d="M55.3382 51.3805L58.8095 41.6719L46.0707 47.9178L55.3382 51.3805Z" fill="#180699"/> <path d="M55.3394 51.3775C58.1363 48.7928 60.2665 45.5698 61.5482 41.9836L58.8099 41.6719L55.3394 51.3775Z" fill="#05007A"/> <path d="M58.8099 41.6718L61.5483 41.9836C62.3971 39.6007 62.856 37.0964 62.9073 34.5674L58.8099 41.6718Z" fill="#200E94"/> <path d="M53.0589 36.8662L58.8095 41.6719L46.0707 47.9178L53.0589 36.8662Z" fill="#3418A3"/> <path d="M53.059 36.8661L57.1556 25.8896L62.9084 34.5651L53.059 36.8661Z" fill="#4814AA"/> <path d="M53.0589 36.8665L57.1555 25.89L48.35 22.7305L53.0589 36.8665Z" fill="#5E19AF"/> <path d="M54.2882 15.8242L57.1555 25.8894L48.35 22.7298L54.2882 15.8242Z" fill="#490DC2"/> <path d="M54.2884 15.825L44.3081 15.1152L39.3263 18.5536L48.3501 22.7306L54.2884 15.825Z" fill="#4C19C9"/> <path d="M54.2887 15.8252L57.1556 25.8892L61.746 26.7146C60.3453 22.45 57.7585 18.6728 54.2887 15.8252Z" fill="#5B1CC1"/> <path d="M61.746 26.715L57.1556 25.8896L62.9073 34.564C62.9111 34.3965 62.9137 34.2276 62.9137 34.0605C62.9157 31.5656 62.5216 29.0862 61.746 26.715Z" fill="#641CA1"/> <path d="M53.059 36.8654L58.8096 41.6711L62.9084 34.5645L53.059 36.8654Z" fill="#23038A"/> <path d="M53.059 36.8665L46.3246 30.4479L48.3501 22.7305L53.059 36.8665Z" fill="#5F13A3"/> <path d="M39.3263 29.734L48.3501 22.7305L46.3246 30.4479L39.3263 29.734Z" fill="#6B1EAD"/> <path d="M39.3263 29.7344L44.1174 38.4547L53.059 36.8669L46.3246 30.4483L39.3263 29.7344Z" fill="#3E12A9"/> <path d="M44.1173 38.4536L53.0589 36.8658L46.3245 30.4473L44.1173 38.4536Z" fill="#3104A3"/> <path d="M44.1174 38.454L46.0708 47.9178L53.059 36.8662L44.1174 38.454Z" fill="#3C17AD"/> <path d="M46.0708 47.9172L39.3263 43.1855L32.5822 47.9172H46.0708Z" fill="#2B14AE"/> <path d="M46.0707 47.9179L39.3262 43.1862L44.1173 38.4541L46.0707 47.9179Z" fill="#2203A3"/> <path d="M39.3199 10.4773L44.3013 15.1193L54.2872 15.8242C50.0746 12.3573 44.7865 10.4649 39.3307 10.4717L39.3199 10.4773Z" fill="#7629D3"/> <path d="M32.5687 47.918L39.3128 57.6478C36.0324 57.6515 32.7876 56.9687 29.787 55.6433L32.5687 47.918Z" fill="#010059"/> <path d="M32.5687 47.918L29.787 55.6433C27.4054 54.5895 25.2145 53.1489 23.303 51.3799L32.5687 47.918Z" fill="#010070"/> <path d="M23.3011 51.3805L19.8298 41.6719L32.5686 47.9178L23.3011 51.3805Z" fill="#180699"/> <path d="M23.3 51.3775C20.503 48.7928 18.3728 45.5698 17.0911 41.9836L19.8298 41.6719L23.3 51.3775Z" fill="#05007A"/> <path d="M19.8298 41.6718L17.0911 41.9836C16.2425 39.6006 15.7835 37.0964 15.7321 34.5674L19.8298 41.6718Z" fill="#200E94"/> <path d="M25.5801 36.8662L19.8298 41.6719L32.5686 47.9178L25.5801 36.8662Z" fill="#3418A3"/> <path d="M25.5801 36.8661L21.4838 25.8896L15.731 34.5651L25.5801 36.8661Z" fill="#4814AA"/> <path d="M25.58 36.8665L21.4838 25.89L30.2893 22.7305L25.58 36.8665Z" fill="#5E19AF"/> <path d="M24.351 15.8242L21.4838 25.8894L30.2893 22.7298L24.351 15.8242Z" fill="#490DC2"/> <path d="M24.3512 15.825L34.3315 15.1152L39.3133 18.5536L30.2895 22.7306L24.3512 15.825Z" fill="#4C19C9"/> <path d="M24.3511 15.8252L21.4835 25.8892L16.8934 26.7146C18.2942 22.4499 20.8811 18.6727 24.3511 15.8252Z" fill="#5B1CC1"/> <path d="M16.8938 26.715L21.4838 25.8896L15.7321 34.564C15.7287 34.3965 15.7257 34.2276 15.7257 34.0605C15.7238 31.5656 16.1181 29.0862 16.8938 26.715Z" fill="#641CA1"/> <path d="M25.5801 36.8654L19.8298 41.6711L15.731 34.5645L25.5801 36.8654Z" fill="#23038A"/> <path d="M25.5801 36.8665L32.3148 30.4479L30.2893 22.7305L25.5801 36.8665Z" fill="#5F13A3"/> <path d="M39.3132 29.734L30.2894 22.7305L32.3149 30.4479L39.3132 29.734Z" fill="#6B1EAD"/> <path d="M39.3132 29.7344L34.522 38.4547L25.5801 36.8669L32.3148 30.4483L39.3132 29.7344Z" fill="#3E12A9"/> <path d="M34.522 38.4536L25.5801 36.8658L32.3148 30.4473L34.522 38.4536Z" fill="#3104A3"/> <path d="M34.522 38.454L32.5686 47.9178L25.5801 36.8662L34.522 38.454Z" fill="#3C17AD"/> <path d="M32.5687 47.9179L39.3132 43.1862L34.522 38.4541L32.5687 47.9179Z" fill="#2203A3"/> <path d="M39.3199 10.4773L34.3382 15.1193L24.3522 15.8242C28.5649 12.3574 33.8529 10.465 39.3087 10.4717L39.3199 10.4773Z" fill="#7629D3"/> <path d="M39.3265 18.5527L48.35 22.7297L39.3265 29.7333L30.3027 22.7297L39.3265 18.5527Z" fill="#3F03B4"/> <path d="M39.3266 29.7344L34.5355 38.4547L39.3266 43.1867L44.1174 38.4547L39.3266 29.7344Z" fill="#38039E"/> <path d="M54.5257 36.3946C54.5322 38.1978 54.1756 39.9838 53.4772 41.6462C52.7786 43.3086 51.7523 44.8133 50.4597 46.0706C47.8432 48.6284 44.3457 50.0387 40.6105 50.0387C34.4002 50.0387 29.0233 46.0905 27.2722 40.3455H24.4666L24.2961 39.5575L23.0216 33.6566L22.7599 32.4445H27.3428C27.5514 31.8307 27.8003 31.2313 28.0878 30.6503H22.3805L22.2104 29.8631L20.9366 23.9634L20.675 22.7512H40.2237C44.1876 22.7512 47.8245 24.1589 50.4671 26.7133C53.0836 29.2438 54.5257 32.6818 54.5257 36.3946Z" fill="black"/> <path d="M56.918 50.1286L57.3829 55.2621L60.5193 53.0321L58.2105 48.7083L56.918 50.1286Z" fill="#000002"/> <path d="M38.9723 10.343L43.1617 10.6603L45.164 8.77835L43.3698 4.33373C42.8335 4.26084 42.4556 4.35952 41.902 4.31429L38.9731 10.352L38.9723 10.343Z" fill="#000002"/> <path d="M21.2328 55.2636L22.3284 56.1607L26.3076 54.4017L24.4911 52.6614L21.2392 55.2633L21.2328 55.2636Z" fill="#000002"/> <path d="M54.2091 35.5725C54.2091 39.1746 52.7929 42.5476 50.2224 45.0642C47.6571 47.5738 44.2254 48.9546 40.5594 48.9546C37.0802 48.9546 33.8687 47.6923 31.4339 45.5599C29.5696 43.9317 28.1983 41.8142 27.4752 39.4471H24.7216L23.0478 31.6975H27.544C27.7481 31.0951 27.9923 30.5071 28.2751 29.9373H22.6796L21.0036 22.1877H40.1838C48.1793 22.1877 54.2091 27.9425 54.2091 35.5725Z" fill="#3C28F9"/> <path d="M45.8941 27.2004L47.8004 24.2101C45.6324 22.9232 43.0358 22.1887 40.1857 22.1887H21.0055L27.2249 27.2007L45.8941 27.2004Z" fill="#7E13CF"/> <path d="M51.8248 43.1714L48.6902 41.0569L40.559 44.8448L28.2243 38.4651H25.5151L24.7231 39.4466H27.4767C28.1998 41.8138 29.5711 43.9313 31.4354 45.5594C33.8706 47.69 37.0817 48.9541 40.5609 48.9541C44.2269 48.9541 47.6586 47.5734 50.2239 45.0638C50.8149 44.4839 51.3508 43.8503 51.8248 43.1714Z" fill="#381DB5"/> <path d="M40.5591 43.4034C44.8842 43.4034 48.3905 39.8971 48.3905 35.5719C48.3905 31.2467 44.8842 27.7405 40.5591 27.7405C36.2339 27.7405 32.7276 31.2467 32.7276 35.5719C32.7276 39.8971 36.2339 43.4034 40.5591 43.4034Z" fill="#120760"/> <path d="M43.1748 28.189C42.3346 27.8913 41.4496 27.7396 40.5583 27.7405C36.2333 27.7405 32.7272 31.2469 32.7272 35.5719C32.7272 35.6601 32.731 35.7476 32.7336 35.8336L40.5583 35.5719L43.1748 28.189Z" fill="#150538"/> <path d="M48.3842 35.3079L40.5591 35.5695L37.9426 42.9521C38.7828 43.2496 39.6677 43.4013 40.5591 43.4006C44.8845 43.4006 48.3905 39.8945 48.3905 35.5691C48.3905 35.4828 48.3868 35.3953 48.3842 35.3079Z" fill="#381078"/> <path d="M45.7696 39.6293L40.5591 35.5715L42.8537 41.7643L43.9616 42.627C44.8227 42.21 45.6004 41.639 46.2562 40.9424L45.7696 39.6293Z" fill="#6400B0"/> <path d="M43.6861 35.5718C43.6861 37.3495 42.3525 38.6741 40.5602 38.6741C38.7679 38.6741 37.4346 37.351 37.4346 35.5718C37.4346 33.7926 38.7683 32.4694 40.5602 32.4694C42.3521 32.4694 43.6861 33.7937 43.6861 35.5718ZM53.2302 35.5718C53.2302 39.335 51.5591 42.6803 48.8977 44.9458C46.676 46.8368 43.765 47.9734 40.5602 47.9734C37.2365 47.9734 34.2407 46.7601 31.9954 44.7537C30.1286 43.0894 28.8128 40.8963 28.2228 38.4659H25.5136L24.2633 32.6776H28.2628C28.635 31.3557 29.2116 30.1002 29.9717 28.9566H23.4702L22.2195 23.1682H40.1827C47.7697 23.1682 53.2291 28.6673 53.2291 35.5718H53.2302ZM47.2288 35.5718C47.2288 31.8919 44.2696 28.9558 40.5602 28.9558C36.8508 28.9558 33.8919 31.8911 33.8919 35.5718C33.8919 39.2524 36.8512 42.1877 40.5602 42.1877C44.2692 42.1877 47.2277 39.2509 47.2277 35.5718H47.2288Z" fill="#A172FF"/> <path d="M23.0479 31.6985L24.2634 32.6778L25.5137 38.4662L24.7213 39.4481L23.0479 31.6985Z" fill="#3131FF"/> <path d="M23.0479 31.6985H27.5441L28.2643 32.6778H24.2634L23.0479 31.6985Z" fill="#7E13CF"/> <path d="M22.6807 29.9375L23.4713 28.9563H29.9728L28.2751 29.9375H22.6807Z" fill="#1E0087"/> <path d="M22.6807 29.9373L23.4713 28.9562L22.221 23.1682L21.0043 22.1877L22.6807 29.9373Z" fill="#3131FF"/> <path d="M41.6897 23.2444L23.2586 27.9705L23.4716 28.9565H29.9732C29.213 30.1001 28.6364 31.3556 28.2643 32.6775H24.2648L24.676 34.5838L34.9691 31.9445C36.154 30.1391 38.2053 28.9543 40.5598 28.9543C41.6448 28.9515 42.7144 29.211 43.6775 29.7108L50.5984 27.9361C48.549 25.3656 45.4305 23.6163 41.6897 23.2444Z" fill="#D48BFF"/> <path d="M53.1995 36.3948L46.7511 38.0484C45.7714 40.4839 43.384 42.1861 40.5601 42.1861C39.0294 42.1924 37.5429 41.6734 36.3487 40.7157L29.9257 42.3626C30.5104 43.2452 31.206 44.0491 31.9953 44.7548C32.8921 45.5543 33.8992 46.2208 34.9856 46.7339L51.0107 42.6246C52.2993 40.7888 53.0567 38.6332 53.1995 36.3948Z" fill="#A699FF"/> <path d="M33.0006 0.115479L32.5894 1.31718C26.8205 2.92182 21.2896 7.51633 17.0401 11.7655C12.7906 16.0146 8.18151 21.5563 6.57426 27.3301L5.37292 27.7412L6.19524 29.0143L11.0245 27.8321C11.0693 27.6282 11.1182 27.4311 11.171 27.2407C13.7572 16.5379 22.3067 8.13718 33.091 5.76554L34.2729 0.936674L33.0006 0.115479Z" fill="#A222F0"/> <path d="M14.9193 9.64689C9.91474 14.6514 6.6393 20.9235 5.38788 27.7379L10.05 26.5934C11.4091 21.5238 14.0779 16.4265 17.8886 12.614C21.6993 8.80139 26.7902 6.13821 31.8557 4.77839L33.0002 0.115479C26.1895 1.36877 19.9212 4.64308 14.9193 9.64689Z" fill="#EF91FF"/> <path d="M45.625 0.115479L46.0361 1.31718C51.8047 2.92182 57.3359 7.51633 61.5854 11.7655C65.8349 16.0146 70.444 21.5563 72.049 27.3301L73.2504 27.7412L72.4281 29.0143L67.5992 27.8321C67.5543 27.6282 67.5055 27.4311 67.4527 27.2407C64.8665 16.5379 56.317 8.13718 45.5327 5.76554L44.3519 0.937796L45.625 0.115479Z" fill="#A222F0"/> <path d="M73.2376 27.7379C71.9862 20.9224 68.7112 14.6503 63.7062 9.64689C58.7013 4.64346 52.4364 1.36877 45.625 0.115479L46.7699 4.77839C51.835 6.13821 56.9288 8.80625 60.7365 12.614C64.5443 16.4217 67.2164 21.5223 68.5751 26.5934" fill="#EF91FF"/> <path d="M45.625 67.9899L46.0361 66.7882C51.8047 65.1836 57.3359 60.5891 61.5854 56.3399C65.8349 52.0908 70.444 46.5491 72.049 40.7753L73.2503 40.3642L72.428 39.0911L67.5992 40.2733C67.5543 40.4769 67.5055 40.674 67.4526 40.8647C64.8664 51.5675 56.317 59.9682 45.5326 62.3398L44.3504 67.1687L45.625 67.9899Z" fill="#E857FF"/> <path d="M63.7067 58.4623C68.7112 53.4574 71.9863 47.1854 73.2381 40.3713L68.5755 41.5159C67.2168 46.5851 64.5477 51.6827 60.737 55.4934C56.9263 59.3041 51.8346 61.9669 46.7699 63.3267L45.625 67.9896C52.4364 66.7371 58.7044 63.4628 63.7067 58.4623Z" fill="#AB2DF5"/> <path d="M33.0005 67.9899L32.5894 66.7882C26.8204 65.1836 21.2896 60.5891 17.0401 56.3399C12.7906 52.0908 8.18148 46.5491 6.57423 40.7753L5.37289 40.3642L6.19521 39.0911L11.0245 40.2733C11.0693 40.4769 11.1182 40.674 11.171 40.8647C13.7572 51.5675 22.3067 59.9682 33.091 62.3398L34.2729 67.1687L33.0005 67.9899Z" fill="#E857FF"/> <path d="M31.856 63.3274C26.7905 61.9676 21.697 59.2995 17.8889 55.4914C14.0809 51.6834 11.4094 46.5835 10.0504 41.5139L5.38821 40.3694C6.63926 47.1845 9.9147 53.4566 14.9196 58.4604C19.9245 63.4642 26.1899 66.7366 33.0009 67.9892L31.856 63.3274Z" fill="#AB2DF5"/> <path d="M23.634 61.5167L23.018 61.1803L22.8449 61.0625C17.9056 57.8452 13.8309 53.4655 10.9778 48.3073L10.8499 48.0808C10.7251 47.8449 10.5434 47.5003 10.5434 47.5003L5.90294 46.9202L4.59732 47.6636H4.60554L9.30023 49.0417C12.4438 54.7652 17.005 59.585 22.5466 63.0391L22.9982 63.3198L24.1419 68.0522L24.9198 66.9825L23.634 61.5167Z" fill="#FFD6FE"/> <path d="M22.8165 62.5867C17.2287 59.1023 12.6524 54.2134 9.54431 48.4078L4.59732 47.6643C8.51291 56.5416 15.4294 63.7566 24.1333 68.0436L22.8165 62.5867Z" fill="#EF91FF"/> <path d="M72.7144 46.9211L68.0739 47.5013C68.0739 47.5013 67.8922 47.8459 67.7644 48.0817L67.6366 48.3082C64.7837 53.4657 60.7101 57.8452 55.7724 61.0635L55.5993 61.1813L54.9833 61.5177L53.6949 66.9846L54.4754 68.0543L55.6161 63.3312L56.0703 63.0502C61.6111 59.596 66.1715 54.7761 69.3141 49.0528L74.0114 47.6657H74.02L72.7144 46.9211Z" fill="#FFD6FE"/> <path d="M69.07 48.4078C65.967 54.2141 61.3932 59.1034 55.8064 62.5864L54.4922 68.0436C63.1951 63.7549 70.1112 56.5405 74.0286 47.6643L69.07 48.4078Z" fill="#EF91FF"/> <path d="M21.236 55.2493L19.2924 53.3052L20.869 49.5629L25.0826 49.4631L24.9832 53.6771L21.236 55.2493Z" fill="#AB2DF5"/> <path d="M22.0419 51.2856L21.3612 52.9011L21.6423 53.1822L23.2612 52.503L23.2907 51.2561L22.0419 51.2856Z" fill="#FC61FF"/> <path d="M19.2924 53.3054L21.3613 52.9006L21.6424 53.1817L21.236 55.2495L19.2924 53.3054Z" fill="#A42DED"/> <path d="M19.2924 53.305L20.869 49.5627L22.0419 51.2847L21.3613 52.9002L19.2924 53.305Z" fill="#CA4DFF"/> <path d="M21.2361 55.2491L21.6424 53.1814L23.2612 52.5022L24.9832 53.677L21.2361 55.2491Z" fill="#8422D4"/> <path d="M24.9832 53.6771L23.2612 52.5023L23.2907 51.2554L25.0826 49.4631L24.9832 53.6771Z" fill="#CA4DFF"/> <path d="M23.2907 51.2554L22.0419 51.2849L20.869 49.5629L25.0826 49.4631L23.2907 51.2554Z" fill="white"/> <path d="M41.6449 0.117432H36.9693L34.3644 6.51506L39.3125 11.7031L44.261 6.51506L41.6449 0.117432Z" fill="#EF91FF"/> <path d="M37.8462 5.85451L38.9705 3.09302H39.647L40.777 5.85675L39.3125 7.39187L37.8462 5.85451Z" fill="white"/> <path d="M36.9693 0.117432L38.9705 3.0931H39.647L41.6449 0.117432H36.9693Z" fill="#FC61FF"/> <path d="M36.9693 0.117432L34.3644 6.51506L37.8462 5.85459L38.9705 3.0931L36.9693 0.117432Z" fill="#EBA3FF"/> <path d="M41.6449 0.117432L39.647 3.0931L40.777 5.85683L44.261 6.51506L41.6449 0.117432Z" fill="#CA4DFF"/> <path d="M44.261 6.51492L40.777 5.85669L39.3125 7.39181V11.703L44.261 6.51492Z" fill="#8422D4"/> <path d="M39.3125 7.3921L37.8462 5.85474L34.3644 6.51521L39.3125 11.7033V7.3921Z" fill="#FC61FF"/> <path d="M37.5148 67.0938H41.1195L43.1275 62.1618L39.313 58.1624L35.4982 62.1618L37.5148 67.0938Z" fill="#AB2DF5"/> <path d="M40.4433 62.6718L39.5766 64.8005H39.0551L38.1842 62.67L39.3131 61.4866L40.4433 62.6718Z" fill="white"/> <path d="M41.1195 67.0939L39.5765 64.8H39.0551L37.5147 67.0939H41.1195Z" fill="#CA4DFF"/> <path d="M41.1195 67.0934L43.1275 62.1614L40.4433 62.6708L39.5766 64.7995L41.1195 67.0934Z" fill="#FC61FF"/> <path d="M37.5148 67.0934L39.0551 64.7995L38.1842 62.669L35.4982 62.1614L37.5148 67.0934Z" fill="#FC61FF"/> <path d="M35.4982 62.1618L38.1842 62.6694L39.313 61.486V58.1624L35.4982 62.1618Z" fill="#FDC4FF"/> <path d="M39.313 61.486L40.4433 62.6713L43.1274 62.1618L39.313 58.1624V61.486Z" fill="#CA4DFF"/> <path d="M57.3892 55.2493L59.3329 53.3052L57.7563 49.5629L53.5426 49.4631L53.6421 53.6771L57.3892 55.2493Z" fill="#AB2DF5"/> <path d="M56.5834 51.2856L57.2641 52.9011L56.983 53.1822L55.3642 52.503L55.3346 51.2561L56.5834 51.2856Z" fill="#EBA3FF"/> <path d="M59.3329 53.3054L57.264 52.9006L56.9829 53.1817L57.3892 55.2495L59.3329 53.3054Z" fill="#8422D4"/> <path d="M59.3329 53.305L57.7563 49.5627L56.5834 51.2847L57.2641 52.9002L59.3329 53.305Z" fill="#CA4DFF"/> <path d="M57.3892 55.2491L56.9829 53.1814L55.3641 52.5022L53.6421 53.677L57.3892 55.2491Z" fill="#A42DED"/> <path d="M53.6421 53.6771L55.3641 52.5023L55.3346 51.2554L53.5426 49.4631L53.6421 53.6771Z" fill="#FDC4FF"/> <path d="M55.3346 51.2554L56.5834 51.2849L57.7563 49.5629L53.5426 49.4631L55.3346 51.2554Z" fill="#FC61FF"/> </svg>` },
  nitrobronze: { label: "Nitro Bronze", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30.0059 60.0845C46.5742 60.0845 60.0055 46.6532 60.0055 30.0848C60.0055 13.5165 46.5742 0.0852051 30.0059 0.0852051C13.4375 0.0852051 0.0062561 13.5165 0.0062561 30.0848C0.0062561 46.6532 13.4375 60.0845 30.0059 60.0845Z" fill="#F06000"/> <path d="M30.0055 30.0846L18.5253 2.36841C10.8717 5.53882 5.22763 11.5111 2.28934 18.6043L30.0055 30.0846Z" fill="#FFAE4E"/> <path d="M8.79276 8.87237L30.0055 30.0852H30.0078L12.0342 6.06079C10.8883 6.91988 9.80514 7.85944 8.79276 8.87237Z" fill="#FFEF8F"/> <path d="M2.29117 18.6023L30.0055 30.0841L8.79273 8.87134C6.00669 11.6562 3.79543 14.9617 2.28482 18.5997L2.29117 18.6023Z" fill="#FFD58F"/> <path d="M30.0055 30.0842V60.0842C46.5741 60.0842 60.0055 46.6528 60.0055 30.0842H30.0055Z" fill="#F06000"/> <path d="M57.7217 41.5649L30.0055 30.0842L51.2183 51.297C54.0044 48.5123 56.2155 45.2067 57.7259 41.5686L57.7217 41.5649Z" fill="#DB4D00"/> <path d="M57.7225 18.606L30.0055 30.0856H60.0048C60.0063 26.146 59.2328 22.2447 57.7285 18.6038L57.7225 18.606Z" fill="#DB4D00"/> <path d="M8.79496 51.2984L30.0055 30.0852L2.29041 41.5677C3.79731 45.2072 6.00529 48.5147 8.7886 51.3021L8.79496 51.2984Z" fill="#D93500"/> <path d="M0.00739136 30.0853H30.0055L2.28932 18.6057C0.781073 22.2446 0.00317742 26.1447 -9.15527e-05 30.0838L0.00739136 30.0853Z" fill="#F79B52"/> <path d="M30.0055 30.0842V60.0842C38.29 60.0842 45.7899 56.7262 51.2187 51.2974L30.0055 30.0842Z" fill="#A92600"/> <path d="M30.0059 56.0296C44.3349 56.0296 55.9508 44.4137 55.9508 30.0848C55.9508 15.7558 44.3349 4.13989 30.0059 4.13989C15.6769 4.13989 4.06104 15.7558 4.06104 30.0848C4.06104 44.4137 15.6769 56.0296 30.0059 56.0296Z" fill="#A62900"/> <path d="M4.06107 30.0842C4.06107 44.4135 15.6771 56.0295 30.0059 56.0295C44.3348 56.0295 55.9512 44.4135 55.9512 30.0842H4.06107Z" fill="#FFA645"/> <path d="M30.0055 30.0842V56.0295C44.3348 56.0295 55.9508 44.4135 55.9508 30.0842H30.0055Z" fill="#FFE1AE"/> <path d="M30.0059 54.1956C43.3217 54.1956 54.1162 43.401 54.1162 30.0852C54.1162 16.7694 43.3217 5.97485 30.0059 5.97485C16.6901 5.97485 5.89554 16.7694 5.89554 30.0852C5.89554 43.401 16.6901 54.1956 30.0059 54.1956Z" fill="black"/> <path d="M30.0059 53.6686C43.0308 53.6686 53.5896 43.1098 53.5896 30.0849C53.5896 17.06 43.0308 6.50122 30.0059 6.50122C16.981 6.50122 6.42224 17.06 6.42224 30.0849C6.42224 43.1098 16.981 53.6686 30.0059 53.6686Z" fill="url(#nitrobronze_paint0_linear_2_3)"/> <path d="M45.2102 32.4171C45.2166 34.2202 44.8599 36.0063 44.1613 37.6687C43.4629 39.331 42.4368 40.8356 41.1442 42.0927C38.5277 44.6509 35.0306 46.0612 31.2954 46.0612C25.0851 46.0612 19.7083 42.1129 17.9567 36.3679H15.1511L14.981 35.58L13.7061 29.6791L13.4444 28.4669H18.0274C18.2363 27.8532 18.4852 27.2539 18.7727 26.6728H13.0691L12.8991 25.8856L11.623 19.9858L11.3614 18.7737H30.9101C34.8722 18.7737 38.5105 20.1813 41.1517 22.7358C43.77 25.2663 45.2102 28.7043 45.2102 32.4171Z" fill="black"/> <path d="M44.8867 31.5911C44.8867 35.1932 43.4704 38.5662 40.9 41.0851C38.3347 43.5943 34.903 44.9751 31.237 44.9751C27.7578 44.9751 24.5463 43.7128 22.1119 41.5804C20.2474 39.9524 18.876 37.8349 18.1532 35.4676H15.3992L13.7254 27.718H18.2219C18.4259 27.1156 18.6702 26.5275 18.953 25.9579H13.3587L11.6823 18.2083H30.8629C38.8569 18.2064 44.8867 23.9611 44.8867 31.5911Z" fill="#AC350E"/> <path d="M36.5716 23.218L38.4779 20.2277C36.3099 18.9408 33.7133 18.2063 30.8636 18.2063H11.683L17.9027 23.2183L36.5716 23.218Z" fill="#B94C01"/> <path d="M42.5027 39.1899L39.3682 37.0754L31.2389 40.8633L18.9022 34.4836H16.1935L15.401 35.4652H18.155C18.8779 37.8325 20.2492 39.9501 22.1138 41.578C24.5486 43.7086 27.7597 44.9727 31.2389 44.9727C34.9049 44.9727 38.3366 43.5919 40.9018 41.0827C41.4926 40.5025 42.0286 39.8688 42.5027 39.1899Z" fill="#8C2E0E"/> <path d="M31.2366 39.4219C35.5618 39.4219 39.0681 35.9157 39.0681 31.5905C39.0681 27.2653 35.5618 23.759 31.2366 23.759C26.9114 23.759 23.4052 27.2653 23.4052 31.5905C23.4052 35.9157 26.9114 39.4219 31.2366 39.4219Z" fill="#581601"/> <path d="M33.8523 24.2095C33.0122 23.9118 32.1272 23.7601 31.2359 23.761C26.9105 23.761 23.4044 27.2674 23.4044 31.5924C23.4044 31.6807 23.4082 31.7681 23.4112 31.8541L31.2359 31.5924L33.8523 24.2095Z" fill="#3B0E00"/> <path d="M39.0617 31.3264L31.237 31.5881L28.6224 38.9732C29.4626 39.2708 30.3475 39.4225 31.2389 39.4218C35.5639 39.4218 39.0703 35.9157 39.0703 31.5903C39.0684 31.5013 39.0647 31.4139 39.0617 31.3264Z" fill="#8A2100"/> <path d="M36.4474 35.6471L31.2388 31.5901L33.5334 37.7829L34.6413 38.6456C35.5024 38.2285 36.2799 37.6576 36.9356 36.9609L36.4474 35.6471Z" fill="#A12800"/> <path d="M34.3629 31.5901C34.3629 33.3678 33.0293 34.6925 31.237 34.6925C29.4447 34.6925 28.1111 33.3693 28.1111 31.5901C28.1111 29.8109 29.4447 28.4877 31.237 28.4877C33.0293 28.4877 34.3629 29.8124 34.3629 31.5901ZM43.9071 31.5901C43.9071 35.3533 42.2355 38.6986 39.5742 40.9641C37.3528 42.8551 34.4414 43.9917 31.2389 43.9917C27.9149 43.9917 24.919 42.7788 22.6737 40.772C20.8073 39.107 19.4919 36.9134 18.9023 34.4828H16.1935L14.942 28.6948H18.9415C19.3134 27.3729 19.8899 26.1174 20.65 24.9738H14.1485L12.8982 19.1858H30.861C38.4472 19.1869 43.9071 24.6856 43.9071 31.5901ZM37.9052 31.5901C37.9052 27.9102 34.946 24.9742 31.237 24.9742C27.528 24.9742 24.5684 27.9095 24.5684 31.5901C24.5684 35.2707 27.5276 38.206 31.237 38.206C34.9464 38.206 37.9052 35.2696 37.9052 31.5901Z" fill="#D66B1F"/> <path d="M13.7254 27.7161L14.9409 28.6954L16.1912 34.4837L15.3992 35.4657L13.7254 27.7161Z" fill="#A92600"/> <path d="M13.7254 27.7161H18.2216L18.9419 28.6954H14.9409L13.7254 27.7161Z" fill="#B94C01"/> <path d="M13.3583 25.9557L14.1489 24.9749H20.6508L18.9527 25.9557H13.3583Z" fill="#8C2E0E"/> <path d="M13.3583 25.9559L14.1489 24.9751L12.8986 19.1867L11.6823 18.2063L13.3583 25.9559Z" fill="#A92600"/> <path d="M32.3677 19.2629L13.9362 23.989L14.1493 24.9751H20.6508C19.8904 26.1182 19.3137 27.3734 18.9415 28.6949H14.942L15.3532 30.6012L25.646 27.9619C26.8313 26.1566 28.8822 24.9717 31.237 24.9717C32.322 24.969 33.3916 25.2286 34.3547 25.7282L41.2753 23.9535C39.2266 21.3845 36.1081 19.6349 32.3677 19.2629Z" fill="#E78A34"/> <path d="M43.8771 32.4133L37.4279 34.0669C36.4479 36.5025 34.0605 38.2047 31.237 38.2047C29.7062 38.2108 28.2196 37.6918 27.0252 36.7342L20.6026 38.3811C21.1872 39.2637 21.8826 40.0677 22.6718 40.7733C23.5687 41.5727 24.5757 42.2393 25.662 42.7525L41.6875 38.6431C42.9765 36.8074 43.7342 34.6518 43.8771 32.4133Z" fill="#CB5C0C"/> <defs> <linearGradient id="nitrobronze_paint0_linear_2_3" x1="30.0059" y1="6.76885" x2="30.0059" y2="52.9588" gradientUnits="userSpaceOnUse"> <stop stop-color="#7A1E00"/> <stop offset="1" stop-color="#260800"/> </linearGradient> </defs> </svg>` },
  nitrosilver: { label: "Nitro Silver", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30.51 60.0845C47.0784 60.0845 60.5096 46.6532 60.5096 30.0848C60.5096 13.5165 47.0784 0.0852051 30.51 0.0852051C13.9417 0.0852051 0.510376 13.5165 0.510376 30.0848C0.510376 46.6532 13.9417 60.0845 30.51 60.0845Z" fill="#7E8993"/> <path d="M30.5104 30.0846L19.0297 2.36841C11.3762 5.53882 5.73208 11.5111 2.79416 18.6043L30.5104 30.0846Z" fill="#949BA5"/> <path d="M9.29678 8.87283L30.5104 30.0856H30.5126L12.5386 6.06274C11.3927 6.92134 10.3093 7.8604 9.29678 8.87283Z" fill="#DDE6EA"/> <path d="M2.79569 18.6035L30.5104 30.0841L9.29761 8.87134C6.51157 11.6562 4.30031 14.9617 2.7897 18.5997L2.79569 18.6035Z" fill="#949BA5"/> <path d="M30.5104 30.0842V60.0842C47.0786 60.0842 60.51 46.6528 60.51 30.0842H30.5104Z" fill="#5E6975"/> <path d="M58.2258 41.5649L30.5111 30.0842L51.7239 51.297C54.51 48.5122 56.7212 45.2067 58.2318 41.5686L58.2258 41.5649Z" fill="#5E6975"/> <path d="M58.2265 18.606L30.5107 30.0856H60.5103C60.5111 26.146 59.7372 22.2448 58.2329 18.6038L58.2265 18.606Z" fill="#545E69"/> <path d="M9.29907 51.2984L30.5107 30.0852L2.79565 41.5677C4.30256 45.2072 6.51054 48.5147 9.29385 51.3021L9.29907 51.2984Z" fill="#69767A"/> <path d="M0.511875 30.0853H30.5108L2.79453 18.6057C1.28623 22.2446 0.508479 26.1447 0.505524 30.0838L0.511875 30.0853Z" fill="#7E8993"/> <path d="M30.5104 30.0842V60.0842C38.7945 60.0842 46.2944 56.7262 51.7232 51.2974L30.5104 30.0842Z" fill="#343841"/> <path d="M30.5104 30.0842V60.0842C22.226 60.0842 14.7261 56.7262 9.29727 51.2974L30.5104 30.0842Z" fill="#525B66"/> <path d="M30.51 56.0296C44.8389 56.0296 56.4548 44.4137 56.4548 30.0848C56.4548 15.7558 44.8389 4.13989 30.51 4.13989C16.181 4.13989 4.56512 15.7558 4.56512 30.0848C4.56512 44.4137 16.181 56.0296 30.51 56.0296Z" fill="#232935"/> <path d="M4.56509 30.0842C4.56509 44.4135 16.1811 56.0295 30.5103 56.0295C44.8396 56.0295 56.4552 44.4135 56.4552 30.0842H4.56509Z" fill="#7E868F"/> <path d="M30.5104 30.0842V56.0295C44.8393 56.0295 56.4553 44.4135 56.4553 30.0842H30.5104Z" fill="#808891"/> <path d="M30.51 54.1956C43.8258 54.1956 54.6204 43.401 54.6204 30.0852C54.6204 16.7694 43.8258 5.97485 30.51 5.97485C17.1943 5.97485 6.39969 16.7694 6.39969 30.0852C6.39969 43.401 17.1943 54.1956 30.51 54.1956Z" fill="black"/> <path d="M30.51 53.6686C43.5349 53.6686 54.0937 43.1098 54.0937 30.0849C54.0937 17.06 43.5349 6.50122 30.51 6.50122C17.4851 6.50122 6.9263 17.06 6.9263 30.0849C6.9263 43.1098 17.4851 53.6686 30.51 53.6686Z" fill="url(#nitrosilver_paint0_linear_2_36)"/> <path d="M45.7143 32.4171C45.7215 34.2201 45.3655 36.0061 44.6677 37.6687C43.9692 39.331 42.9429 40.8356 41.6502 42.0927C39.0337 44.6509 35.5363 46.0612 31.8011 46.0612C25.5907 46.0612 20.2139 42.1129 18.4627 36.3679H15.6568L15.4867 35.58L14.2121 29.6791L13.9505 28.4669H18.5334C18.742 27.8532 18.9908 27.2538 19.2783 26.6728H13.5748L13.4047 25.8856L12.1275 19.9858L11.8659 18.7737H31.4146C35.3785 18.7737 39.0151 20.1813 41.6581 22.7358C44.2727 25.2663 45.7143 28.7043 45.7143 32.4171Z" fill="black"/> <path d="M30.5091 2.89774C24.9341 2.88817 19.4924 4.60148 14.9284 7.80324L15.0779 9.15072L18.3736 10.7374C22.0074 8.45157 26.2146 7.24226 30.5076 7.24967C34.8068 7.24287 39.0197 8.45549 42.6574 10.7468L45.9373 9.16866L46.1025 7.81221C41.536 4.6049 36.0894 2.88832 30.5091 2.89774Z" fill="black"/> <path d="M14.9281 7.80324L18.3927 9.47105C22.0643 7.30894 26.2489 6.17185 30.5099 6.17842C34.7759 6.17119 38.9653 7.31114 42.6394 9.4789L46.104 7.81221C41.5373 4.60478 36.0904 2.88819 30.5099 2.89774C24.9346 2.88879 19.4927 4.60204 14.9281 7.80324Z" fill="#C3D0D6"/> <path d="M30.509 57.2727C24.9341 57.2823 19.4923 55.569 14.9284 52.3672L15.0779 51.0197L18.3735 49.4334C22.0075 51.719 26.2146 52.9281 30.5076 52.9208C34.8067 52.9277 39.0196 51.7152 42.6573 49.4241L45.9372 51.0018L46.1024 52.3582C41.536 55.5656 36.0893 57.2821 30.509 57.2727Z" fill="#DEEEF5"/> <path d="M30.5099 53.993C26.2432 53.9998 22.0533 52.8592 18.3788 50.6907L14.9157 52.3574C19.4825 55.5647 24.9293 57.2813 30.5099 57.2718C36.0851 57.2813 41.5272 55.5681 46.0917 52.3667L42.6271 50.6985C38.9559 52.8619 34.7711 53.9997 30.5099 53.993Z" fill="#98AEB5"/> <path d="M57.6972 30.0842C57.7066 24.5091 55.9932 19.0672 52.7913 14.5032L51.4457 14.6527L49.859 17.9483C52.1449 21.5823 53.3542 25.7896 53.3467 30.0827C53.3535 34.3819 52.1409 38.5948 49.8496 42.2325L51.4277 45.512L52.7842 45.6776C55.9909 41.1109 57.707 35.6643 57.6972 30.0842Z" fill="#E3FFFE"/> <path d="M52.7917 14.5032L51.1238 17.9677C53.2861 21.6394 54.4232 25.824 54.4165 30.085C54.4235 34.3509 53.2835 38.5403 51.116 42.2145L52.7823 45.6787C55.99 41.1123 57.7068 35.6654 57.6972 30.085C57.7063 24.5097 55.993 19.0677 52.7917 14.5032Z" fill="#BFCBD1"/> <path d="M3.32295 30.0842C3.31337 24.5091 5.02669 19.0672 8.22846 14.5032L9.57407 14.6527L11.1604 17.9483C8.87467 21.5824 7.66541 25.7896 7.67264 30.0827C7.6659 34.3819 8.87849 38.5948 11.1697 42.2325L9.59199 45.512L8.23554 45.6776C5.02894 41.1109 3.31303 35.6643 3.32295 30.0842Z" fill="#9CB6BA"/> <path d="M6.60174 30.0846C6.595 25.8179 7.73546 21.6279 9.90371 17.9532L8.2374 14.4905C5.02974 19.0571 3.31315 24.504 3.32295 30.0846C3.31378 35.6592 5.0269 41.1006 8.22805 45.6645L9.89623 42.2C7.73308 38.5293 6.59531 34.3452 6.60174 30.0846Z" fill="#CAD8DE"/> <path d="M45.3995 31.5949C45.3995 35.197 43.9829 38.57 41.4128 41.0867C38.8472 43.5963 35.4158 44.977 31.7498 44.977C28.2703 44.977 25.0591 43.7148 22.6243 41.5823C20.7599 39.9543 19.3886 37.8368 18.6656 35.4695H15.912L14.2382 27.7199H18.7344C18.9385 27.1175 19.1827 26.5295 19.4655 25.9598H13.8711L12.1951 18.2102H31.3771C39.3697 18.2102 45.3995 23.9649 45.3995 31.5949Z" fill="#727E94"/> <path d="M37.0844 23.2219L38.9907 20.2316C36.8227 18.9447 34.2261 18.2102 31.376 18.2102H12.1958L18.4152 23.2222L37.0844 23.2219Z" fill="#9FA4B6"/> <path d="M43.0152 39.1938L39.8806 37.0793L31.7509 40.8672L19.4161 34.4875H16.707L15.9149 35.4691H18.6686C19.3917 37.8363 20.763 39.9538 22.6273 41.5819C25.0625 43.7125 28.2732 44.9766 31.7528 44.9766C35.4188 44.9766 38.8501 43.5958 41.4158 41.0863C42.0062 40.5063 42.5417 39.8727 43.0152 39.1938Z" fill="#4E5769"/> <path d="M31.7494 39.4258C36.0746 39.4258 39.5808 35.9196 39.5808 31.5944C39.5808 27.2692 36.0746 23.7629 31.7494 23.7629C27.4242 23.7629 23.9179 27.2692 23.9179 31.5944C23.9179 35.9196 27.4242 39.4258 31.7494 39.4258Z" fill="#2E384B"/> <path d="M34.3651 24.2115C33.5249 23.9138 32.64 23.7621 31.7487 23.7629C27.4236 23.7629 23.9172 27.2694 23.9172 31.5944C23.9172 31.6826 23.921 31.7701 23.9239 31.856L31.7487 31.5944L34.3651 24.2115Z" fill="#181A1F"/> <path d="M39.5745 31.3303L31.7494 31.592L29.1329 38.9745C29.9731 39.272 30.858 39.4237 31.7494 39.423C36.0748 39.423 39.5808 35.917 39.5808 31.5916C39.5808 31.5053 39.5771 31.4178 39.5745 31.3303Z" fill="#444B59"/> <path d="M36.9599 35.6518L31.7509 31.594L34.0456 37.7868L35.1535 38.6495C36.0146 38.2324 36.7923 37.6615 37.4481 36.9648L36.9599 35.6518Z" fill="#586273"/> <path d="M34.8753 31.5942C34.8753 33.3719 33.5416 34.6966 31.7493 34.6966C29.9571 34.6966 28.6238 33.3734 28.6238 31.5942C28.6238 29.815 29.9574 28.4918 31.7493 28.4918C33.5412 28.4918 34.8753 29.8161 34.8753 31.5942ZM44.4194 31.5942C44.4194 35.3574 42.7482 38.7028 40.0869 40.9683C37.8651 42.8592 34.9541 43.9959 31.7493 43.9959C28.4257 43.9959 25.4298 42.7826 23.1845 40.7761C21.3182 39.1117 20.0027 36.9186 19.4131 34.4884H16.7039L15.454 28.7H19.4534C19.8255 27.3782 20.4022 26.1227 21.1624 24.979H14.6616L13.4113 19.1907H31.3744C38.9599 19.1907 44.4194 24.6897 44.4194 31.5942ZM38.418 31.5942C38.418 27.9143 35.4587 24.9783 31.7493 24.9783C28.0399 24.9783 25.0811 27.9136 25.0811 31.5942C25.0811 35.2748 28.0403 38.2101 31.7493 38.2101C35.4584 38.2101 38.418 35.2733 38.418 31.5942Z" fill="#A9BAC0"/> <path d="M14.2382 27.72L15.4537 28.6993L16.704 34.4876L15.9116 35.4696L14.2382 27.72Z" fill="#727E94"/> <path d="M14.2382 27.72H18.7344L19.4547 28.6993H15.4537L14.2382 27.72Z" fill="#9FA4B6"/> <path d="M13.8711 25.9599L14.6617 24.9788H21.1632L19.4655 25.9599H13.8711Z" fill="#4E5769"/> <path d="M13.8711 25.9598L14.6617 24.9786L13.4114 19.1906L12.1947 18.2102L13.8711 25.9598Z" fill="#727E94"/> <path d="M32.8801 19.2668L14.4489 23.9929L14.662 24.979H21.1635C20.4034 26.1226 19.8268 27.3781 19.4546 28.6999H15.4552L15.8663 30.6062L26.1595 27.967C27.3444 26.1616 29.3957 24.9767 31.7501 24.9767C32.8352 24.974 33.9048 25.2335 34.8678 25.7333L41.7888 23.9585C39.7393 21.3881 36.6209 19.6388 32.8801 19.2668Z" fill="#BFCED7"/> <path d="M44.39 32.4172L37.9404 34.0712C36.9608 36.5068 34.5734 38.209 31.7495 38.209C30.2188 38.2153 28.7323 37.6962 27.5381 36.7385L21.1151 38.3854C21.6998 39.268 22.3954 40.072 23.1847 40.7776C24.0815 41.5771 25.0885 42.2436 26.1749 42.7568L42.2 38.6474C43.4891 36.8116 44.2469 34.6559 44.39 32.4172Z" fill="#96A5AB"/> <defs> <linearGradient id="nitrosilver_paint0_linear_2_36" x1="30.51" y1="6.76885" x2="30.51" y2="52.9588" gradientUnits="userSpaceOnUse"> <stop stop-color="#3C414D"/> <stop offset="1" stop-color="#10141A"/> </linearGradient> </defs> </svg>` },
  nitrogold: { label: "Nitro Gold", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M33.9477 64.093C50.5162 64.093 63.9477 50.6616 63.9477 34.093C63.9477 17.5245 50.5162 4.09302 33.9477 4.09302C17.3791 4.09302 3.94763 17.5245 3.94763 34.093C3.94763 50.6616 17.3791 64.093 33.9477 64.093Z" fill="#A85600"/> <path d="M33.9484 4.09304V34.0927L45.4317 6.37086C41.7914 4.86238 37.8889 4.08828 33.9484 4.09304Z" fill="#ED870C"/> <path d="M30.1344 4.33298L34.5548 8.75144L38.8159 4.4881C37.2062 4.22518 35.578 4.09305 33.947 4.09302C32.6724 4.09268 31.399 4.17283 30.1344 4.33298Z" fill="black"/> <path d="M33.9484 34.093V64.0927C17.3794 64.0927 3.94873 50.662 3.94873 34.093H33.9484Z" fill="#9C4300"/> <path d="M12.7367 55.3062L33.948 34.093L6.23294 45.5756C7.73998 49.2149 9.94793 52.5225 12.7311 55.3099L12.7367 55.3062Z" fill="#7A2C00"/> <path d="M33.9477 34.0924L22.4674 6.37622C14.8135 9.54663 9.16939 15.5189 6.23148 22.6121L33.9477 34.0924Z" fill="#C46400"/> <path d="M12.7345 12.8797L33.9477 34.0925H33.9499L15.9778 10.0696C14.8313 10.928 13.7475 11.8671 12.7345 12.8797Z" fill="#ED930C"/> <path d="M6.23296 22.6113L33.9481 34.092L12.7352 12.8792C9.9492 15.6639 7.73806 18.9694 6.22772 22.6075L6.23296 22.6113Z" fill="#C56400"/> <path d="M33.9476 34.093V64.093C50.5162 64.093 63.9477 50.6616 63.9477 34.093H33.9476Z" fill="#9C4300"/> <path d="M61.6691 45.5763L33.9484 34.093L55.1615 55.3058C57.9476 52.5206 60.1587 49.2147 61.6691 45.5763Z" fill="#8A3200"/> <path d="M61.6639 22.6128L33.9484 34.0924H63.9477C63.9488 30.1528 63.1749 26.2515 61.6702 22.6106L61.6639 22.6128Z" fill="#9C4300"/> <path d="M3.94915 34.0931H33.948L6.2322 22.6135C4.7237 26.2524 3.94555 30.1524 3.94205 34.0916L3.94915 34.0931Z" fill="#A85600"/> <path d="M33.9476 34.093V64.093C42.2317 64.093 49.732 60.735 55.1608 55.3062L33.9476 34.093Z" fill="#8A3200"/> <path d="M45.4284 61.8081L33.9477 34.093L55.1605 55.3058C52.3755 58.0918 49.0699 60.3029 45.4317 61.8133C45.4308 61.8115 45.4297 61.8097 45.4284 61.8081Z" fill="#541E00"/> <path d="M33.9476 34.093V64.093C25.6635 64.093 18.1636 60.735 12.7345 55.3062L33.9476 34.093Z" fill="#8A3200"/> <path d="M33.9477 60.0374C48.2767 60.0374 59.8926 48.4215 59.8926 34.0926C59.8926 19.7636 48.2767 8.14771 33.9477 8.14771C19.6188 8.14771 8.00284 19.7636 8.00284 34.0926C8.00284 48.4215 19.6188 60.0374 33.9477 60.0374Z" fill="#300300"/> <path d="M8.00278 34.093C8.00278 48.4223 19.6187 60.0383 33.9476 60.0383C48.2765 60.0383 59.8925 48.4223 59.8925 34.093H8.00278Z" fill="#B35C00"/> <path d="M33.9476 34.093V60.0383C48.2769 60.0383 59.8925 48.4223 59.8925 34.093H33.9476Z" fill="#CC7400"/> <path d="M33.9477 58.2034C47.2634 58.2034 58.058 47.4088 58.058 34.093C58.058 20.7772 47.2634 9.98267 33.9477 9.98267C20.6319 9.98267 9.83731 20.7772 9.83731 34.093C9.83731 47.4088 20.6319 58.2034 33.9477 58.2034Z" fill="black"/> <path d="M33.9476 57.6764C46.9725 57.6764 57.5313 47.1176 57.5313 34.0927C57.5313 21.0678 46.9725 10.509 33.9476 10.509C20.9227 10.509 10.3639 21.0678 10.3639 34.0927C10.3639 47.1176 20.9227 57.6764 33.9476 57.6764Z" fill="url(#nitrogold_paint0_linear_2_79)"/> <path d="M49.1516 36.4258C49.1583 38.229 48.8017 40.0151 48.1031 41.6775C47.4045 43.3398 46.3783 44.8444 45.0856 46.1015C42.4691 48.6597 38.9716 50.07 35.2365 50.07C29.0265 50.07 23.6492 46.1217 21.8981 40.3767H19.0925L18.9224 39.5888L17.6474 33.6879L17.3858 32.4757H21.9687C22.1773 31.8619 22.4263 31.2625 22.7141 30.6816H17.0105L16.8405 29.8944L15.5666 23.9946L15.305 22.7825H34.8537C38.8158 22.7825 42.4541 24.1901 45.0953 26.7445C47.7117 29.275 49.1516 32.7131 49.1516 36.4258Z" fill="black"/> <path d="M27.6358 0.147705L27.2246 1.34941C21.4557 2.95405 15.9249 7.54856 11.6754 11.7977C7.42584 16.0468 2.81676 21.5885 1.21174 27.3623L0.0104065 27.7735L0.832724 29.0466L5.66159 27.8643C5.70645 27.6605 5.75529 27.4633 5.80811 27.273C8.3943 16.5701 16.9438 8.16941 27.7281 5.79777L28.9108 0.970023L27.6358 0.147705Z" fill="#541E00"/> <path d="M9.55417 9.67911C4.54962 14.6837 1.27456 20.9557 0.0227661 27.7701L4.68493 26.6256C6.044 21.556 8.71316 16.4587 12.5238 12.6462C16.3345 8.83362 21.4251 6.17043 26.4905 4.81062L27.6354 0.147705C20.8244 1.40099 14.5576 4.67531 9.55417 9.67911Z" fill="#FFCE45"/> <path d="M40.2602 0.147705L40.6714 1.34941C46.4403 2.95405 51.9711 7.54856 56.2207 11.7977C60.4702 16.0468 65.0793 21.5885 66.6843 27.3623L67.8856 27.7735L67.0633 29.0466L62.2344 27.8643C62.1895 27.6605 62.1407 27.4633 62.0879 27.273C59.5017 16.5701 50.9522 8.16941 40.1679 5.79777L38.9871 0.970023L40.2602 0.147705Z" fill="#541E00"/> <path d="M67.8726 27.7704C66.6212 20.9549 63.3461 14.6829 58.3412 9.67942C53.3363 4.676 47.0709 1.40317 40.2599 0.150635L41.4044 4.81355C46.4699 6.17336 51.5634 8.84141 55.3715 12.6491C59.1796 16.4568 61.851 21.5574 63.2101 26.6285" fill="#FFCE45"/> <path d="M40.2602 68.0222L40.6714 66.8204C46.4403 65.2158 51.9711 60.6213 56.2207 56.3721C60.4702 52.123 65.0793 46.5813 66.6843 40.8075L67.8856 40.3964L67.0633 39.1233L62.2344 40.3056C62.1895 40.5091 62.1407 40.7063 62.0879 40.8969C59.5017 51.5997 50.9522 60.0004 40.1679 62.3721L38.986 67.2009L40.2602 68.0222Z" fill="#FFBC2B"/> <path d="M63.2104 41.546C61.8513 46.6156 59.1825 51.7128 55.3718 55.5235C51.5611 59.3342 46.4702 61.9996 41.4047 63.3595L40.2602 68.0224C47.0713 66.7698 53.3395 63.4955 58.3415 58.4936C63.3434 53.4916 66.6211 47.2166 67.8729 40.4026L63.2104 41.546Z" fill="#ED8200"/> <path d="M27.6358 68.0222L27.2246 66.8204C21.4557 65.2158 15.9249 60.6213 11.6754 56.3721C7.42584 52.123 2.81676 46.5813 1.21174 40.8075L0.0104065 40.3964L0.832724 39.1233L5.66159 40.3056C5.70645 40.5091 5.75529 40.7063 5.80811 40.8969C8.3943 51.5997 16.9438 60.0004 27.7281 62.3721L28.9104 67.2009L27.6358 68.0222Z" fill="#FFBC2B"/> <path d="M26.4909 63.3586C21.4254 61.9988 16.3319 59.3308 12.5242 55.5227C8.7165 51.7146 6.04433 46.6147 4.68527 41.5452L0.0231018 40.4006C1.27452 47.2158 4.54959 53.4878 9.55451 58.4916C14.5594 63.4954 20.8247 66.7679 27.6362 68.0204L26.4909 63.3586Z" fill="#ED8200"/> <path d="M37.7619 4.33411L33.9485 0.520752L30.1352 4.33411L33.9485 8.14747L37.7619 4.33411Z" fill="#FFB430"/> <path d="M33.9487 0.520752L30.1354 4.33406H33.9487V0.520752Z" fill="#FFE496"/> <path d="M37.762 4.33423L33.9487 8.14754V4.33423H37.762Z" fill="#9C4300"/> <path d="M37.7616 63.8517L33.9483 60.0383L30.1349 63.8517L33.9483 67.6651L37.7616 63.8517Z" fill="#FFB430"/> <path d="M33.9486 60.0383L30.1353 63.8516H33.9486V60.0383Z" fill="#FFE496"/> <path d="M37.7619 63.8518L33.9486 67.6651V63.8518H37.7619Z" fill="#9C4300"/> <path d="M48.8289 35.6047C48.8289 39.2068 47.4126 42.5798 44.8421 45.0965C42.2769 47.606 38.8452 48.9868 35.1792 48.9868C31.7 48.9868 28.4885 47.7245 26.0537 45.5921C24.1894 43.964 22.8181 41.8465 22.0949 39.4793H19.3421L17.6683 31.7297H22.1645C22.3687 31.1273 22.6131 30.5393 22.896 29.9696H17.3016L15.6252 22.22H34.8054C42.799 22.22 48.8289 27.9747 48.8289 35.6047Z" fill="#A45200"/> <path d="M40.5137 27.2326L42.42 24.2424C40.2521 22.9554 37.6554 22.2209 34.8053 22.2209H15.6252L21.8449 27.233L40.5137 27.2326Z" fill="#FFBC29"/> <path d="M46.4449 43.2046L43.31 41.0901L35.1792 44.878L22.8425 38.4983H20.1334L19.3413 39.4798H22.095C22.8181 41.8471 24.1895 43.9646 26.0541 45.5927C28.4889 47.7232 31.7 48.9873 35.1792 48.9873C38.8452 48.9873 42.2769 47.6066 44.8422 45.097C45.4337 44.517 45.9703 43.8835 46.4449 43.2046Z" fill="#933701"/> <path d="M35.1788 43.4356C39.504 43.4356 43.0102 39.9294 43.0102 35.6042C43.0102 31.279 39.504 27.7727 35.1788 27.7727C30.8536 27.7727 27.3473 31.279 27.3473 35.6042C27.3473 39.9294 30.8536 43.4356 35.1788 43.4356Z" fill="#590000"/> <path d="M37.7944 28.2212C36.9543 27.9236 36.0693 27.7719 35.178 27.7727C30.8526 27.7727 27.3465 31.2791 27.3465 35.6042C27.3465 35.6924 27.3503 35.7798 27.3529 35.8658L35.178 35.6042L37.7944 28.2212Z" fill="#330500"/> <path d="M43.0024 35.3401L35.1777 35.6017L32.5612 42.9843C33.4014 43.2818 34.2863 43.4335 35.1777 43.4328C39.5027 43.4328 43.0091 39.9268 43.0091 35.6014C43.0106 35.515 43.0069 35.4276 43.0024 35.3401Z" fill="#863601"/> <path d="M40.3897 39.6615L35.1792 35.6038L37.4738 41.7966L38.5813 42.6592C39.4424 42.2422 40.2201 41.6713 40.8759 40.9746L40.3897 39.6615Z" fill="#C05700"/> <path d="M38.3047 35.603C38.3047 37.3807 36.9711 38.7054 35.1792 38.7054C33.3873 38.7054 32.0533 37.3822 32.0533 35.603C32.0533 33.8238 33.3869 32.5006 35.1792 32.5006C36.9715 32.5006 38.3047 33.8249 38.3047 35.603ZM47.8489 35.603C47.8489 39.3662 46.1777 42.7116 43.5164 44.9771C41.295 46.868 38.3836 48.0047 35.1792 48.0047C31.8552 48.0047 28.8593 46.7914 26.614 44.7849C24.7479 43.1203 23.4325 40.9273 22.8426 38.4972H20.1334L18.8831 32.7088H22.8826C23.2546 31.3869 23.8312 30.1314 24.5915 28.9878H18.0899L16.8396 23.1995H34.8024C42.3894 23.1995 47.8489 28.6985 47.8489 35.603ZM41.8474 35.603C41.8474 31.9231 38.8882 28.9871 35.1792 28.9871C31.4702 28.9871 28.5106 31.9224 28.5106 35.603C28.5106 39.2836 31.4698 42.2189 35.1792 42.2189C38.8886 42.2189 41.8474 39.2821 41.8474 35.603Z" fill="#F59800"/> <path d="M17.6675 31.7307L18.883 32.71L20.1333 38.4984L19.3409 39.4803L17.6675 31.7307Z" fill="#6F2A00"/> <path d="M17.6675 31.7307H22.1637L22.884 32.71H18.883L17.6675 31.7307Z" fill="#FFBC29"/> <path d="M17.3004 29.9697L18.091 28.9885H24.5929L22.8948 29.9697H17.3004Z" fill="#590000"/> <path d="M17.3004 29.9696L18.091 28.9884L16.8407 23.2004L15.6244 22.22L17.3004 29.9696Z" fill="#6F2A00"/> <path d="M36.3117 23.2766L17.8802 28.0027L18.0933 28.9887H24.5948C23.8346 30.1324 23.258 31.3879 22.8859 32.7097H18.8864L19.2976 34.616L29.5904 31.9767C30.7753 30.1714 32.8266 28.9865 35.1814 28.9865C36.2663 28.9838 37.3358 29.2433 38.2987 29.743L45.2196 27.9683C43.1687 25.3978 40.0495 23.6485 36.3117 23.2766Z" fill="#E48101"/> <path d="M47.8193 36.427L41.3701 38.081C40.39 40.5165 38.0027 42.2187 35.1792 42.2187C33.6481 42.2252 32.1611 41.7061 30.9667 40.7483L24.5436 42.3952C25.1285 43.2777 25.824 44.0816 26.6132 44.7874C27.5101 45.5868 28.5171 46.2533 29.6035 46.7665L45.6286 42.6572C46.9181 40.8216 47.6762 38.6657 47.8193 36.427Z" fill="#F5B419"/> <defs> <linearGradient id="nitrogold_paint0_linear_2_79" x1="33.9476" y1="10.7767" x2="33.9476" y2="56.9666" gradientUnits="userSpaceOnUse"> <stop stop-color="#703204"/> <stop offset="1" stop-color="#170A00"/> </linearGradient> </defs> </svg>` },
  nitroplatinum: { label: "Nitro Platinum", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M34.3308 64.093C50.8993 64.093 64.3308 50.6616 64.3308 34.093C64.3308 17.5245 50.8993 4.09302 34.3308 4.09302C17.7622 4.09302 4.33073 17.5245 4.33073 34.093C4.33073 50.6616 17.7622 64.093 34.3308 64.093Z" fill="#034E63"/> <path d="M34.3307 34.0924L22.8504 6.37622C15.1958 9.54663 9.5517 15.5189 6.61453 22.6106L34.3307 34.0924Z" fill="#036682"/> <path d="M13.1176 12.8803L34.3308 34.0931H34.333L16.3594 10.0687C15.2134 10.9278 14.1301 11.8674 13.1176 12.8803Z" fill="#037C82"/> <path d="M6.61606 22.6113L34.3312 34.092L13.118 12.8792C10.332 15.664 8.12093 18.9695 6.61046 22.6075L6.61606 22.6113Z" fill="#03566E"/> <path d="M34.3308 34.093V64.093C50.8993 64.093 64.3308 50.6616 64.3308 34.093H34.3308Z" fill="#033D54"/> <path d="M62.0466 45.5741L34.3334 34.093L55.5462 55.3058C58.3323 52.5211 60.5435 49.2156 62.0537 45.5774L62.0466 45.5741Z" fill="#002D59"/> <path d="M62.0474 22.6138L34.3334 34.0934H64.3327C64.3332 30.1537 63.5587 26.2523 62.0534 22.6116L62.0474 22.6138Z" fill="#033D54"/> <path d="M13.1198 55.3072L34.3311 34.094L6.616 45.5765C8.12299 49.216 10.3309 52.5237 13.1142 55.3113C13.1159 55.3097 13.1177 55.3083 13.1198 55.3072Z" fill="#034E63"/> <path d="M4.33228 34.0932H34.3334L6.6172 22.6136C5.10895 26.2526 4.33106 30.1526 4.32779 34.0917L4.33228 34.0932Z" fill="#034E63"/> <path d="M34.3308 34.093V64.093C42.6152 64.093 50.1152 60.735 55.5439 55.3062L34.3308 34.093Z" fill="#002D59"/> <path d="M34.3308 34.093V64.093C26.0467 64.093 18.5468 60.735 13.118 55.3062L34.3308 34.093Z" fill="#033D54"/> <path d="M34.3308 60.0384C48.6597 60.0384 60.2756 48.4225 60.2756 34.0935C60.2756 19.7646 48.6597 8.14868 34.3308 8.14868C20.0018 8.14868 8.38589 19.7646 8.38589 34.0935C8.38589 48.4225 20.0018 60.0384 34.3308 60.0384Z" fill="#02262B"/> <path d="M8.38589 34.093C8.38589 48.4223 20.0019 60.0383 34.3308 60.0383C48.6596 60.0383 60.276 48.4223 60.276 34.093H8.38589Z" fill="#1B89A1"/> <path d="M34.3308 34.093V60.0383C48.66 60.0383 60.276 48.4223 60.276 34.093H34.3308Z" fill="#016E63"/> <path d="M34.3308 58.2034C47.6465 58.2034 58.4411 47.4088 58.4411 34.093C58.4411 20.7772 47.6465 9.98267 34.3308 9.98267C21.015 9.98267 10.2204 20.7772 10.2204 34.093C10.2204 47.4088 21.015 58.2034 34.3308 58.2034Z" fill="black"/> <path d="M34.3307 57.6774C47.3556 57.6774 57.9144 47.1186 57.9144 34.0937C57.9144 21.0688 47.3556 10.51 34.3307 10.51C21.3058 10.51 10.747 21.0688 10.747 34.0937C10.747 47.1186 21.3058 57.6774 34.3307 57.6774Z" fill="url(#nitroplatinum_paint0_linear_2_134)"/> <path d="M64.0915 30.2907L61.0699 30.2268V37.9435L64.0926 37.8878C64.2514 36.6293 64.331 35.3621 64.3307 34.0936C64.331 32.8222 64.251 31.5521 64.0915 30.2907Z" fill="black"/> <path d="M10.6618 37.0895L9.94567 34.1975L4.33522 34.4151C4.3458 35.445 4.40893 36.4737 4.52436 37.4972L8.88152 39.1665L10.6618 37.0895Z" fill="black"/> <path d="M37.2063 10.2392L39.708 8.70667L37.8952 4.30653C36.7122 4.16604 35.522 4.0954 34.3308 4.09497H34.3237L34.3323 10.5016L37.2063 10.2392Z" fill="black"/> <path d="M49.535 36.4258C49.542 38.2289 49.186 40.0149 48.4884 41.6775C47.7895 43.3398 46.7632 44.8445 45.4705 46.1019C42.8541 48.6597 39.357 50.07 35.6218 50.07C29.4114 50.07 24.0346 46.1217 22.283 40.3767H19.4774L19.3074 39.5888L18.0324 33.6879L17.7708 32.4757H22.3537C22.5626 31.862 22.8116 31.2627 23.099 30.6816H17.3955L17.2254 29.8944L15.9478 23.9946L15.6862 22.7825H35.2349C39.197 22.7825 42.8354 24.1901 45.4765 26.7445C48.0948 29.275 49.535 32.7131 49.535 36.4258Z" fill="black"/> <path d="M49.2203 35.6047C49.2203 39.2068 47.8037 42.5798 45.2332 45.0965C42.668 47.606 39.2363 48.9868 35.5706 48.9868C32.0911 48.9868 28.8799 47.7245 26.4451 45.5921C24.5807 43.9641 23.2094 41.8465 22.4864 39.4793H19.7324L18.0586 31.7297H22.5552C22.7591 31.1272 23.0034 30.5392 23.2863 29.9696H17.6919L16.0155 22.22H35.1961C43.192 22.22 49.2203 27.9747 49.2203 35.6047Z" fill="#01655B"/> <path d="M40.9048 27.2326L42.8111 24.2424C40.6432 22.9554 38.0469 22.2209 35.1968 22.2209H16.0163L22.236 27.233L40.9048 27.2326Z" fill="#4ED4D9"/> <path d="M46.8359 43.2046L43.7014 41.0901L35.5702 44.878L23.2321 38.4983H20.5233L19.7309 39.4798H22.4849C23.2087 41.8474 24.5811 43.965 26.4466 45.5927C28.8814 47.7232 32.0925 48.9873 35.5721 48.9873C39.2377 48.9873 42.6694 47.6066 45.2347 45.097C45.8259 44.5172 46.362 43.8836 46.8359 43.2046Z" fill="#00438F"/> <path d="M35.5703 43.4356C39.8954 43.4356 43.4017 39.9294 43.4017 35.6042C43.4017 31.279 39.8954 27.7727 35.5703 27.7727C31.2451 27.7727 27.7388 31.279 27.7388 35.6042C27.7388 39.9294 31.2451 43.4356 35.5703 43.4356Z" fill="#002021"/> <path d="M38.1856 28.2212C37.3454 27.9235 36.4605 27.7718 35.5691 27.7727C31.2441 27.7727 27.7376 31.2791 27.7376 35.6042C27.7376 35.6924 27.7414 35.7798 27.7444 35.8658L35.5691 35.6042L38.1856 28.2212Z" fill="black"/> <path d="M43.3949 35.3401L35.5702 35.6017L32.9538 42.9843C33.794 43.2818 34.6789 43.4335 35.5702 43.4328C39.8956 43.4328 43.4017 39.9268 43.4017 35.6014C43.4017 35.515 43.3979 35.4276 43.3949 35.3401Z" fill="#003B69"/> <path d="M40.7808 39.6615L35.5703 35.6038L37.8649 41.7966L38.9728 42.6592C39.8338 42.2422 40.6114 41.6713 41.2671 40.9746L40.7808 39.6615Z" fill="#005269"/> <path d="M38.6961 35.604C38.6961 37.3817 37.3625 38.7064 35.5702 38.7064C33.7779 38.7064 32.4443 37.3832 32.4443 35.604C32.4443 33.8248 33.7779 32.5016 35.5702 32.5016C37.3625 32.5016 38.6961 33.8259 38.6961 35.604ZM48.2403 35.604C48.2403 39.3672 46.5687 42.7125 43.9074 44.978C41.686 46.869 38.7746 48.0057 35.5721 48.0057C32.2484 48.0057 29.2522 46.7924 27.0073 44.7859C25.1397 43.1219 23.823 40.9287 23.2321 38.4982H20.5233L19.273 32.7098H23.2724C23.6443 31.3879 24.2208 30.1324 24.981 28.9888H18.4795L17.2292 23.2004H35.1923C42.7808 23.2004 48.2403 28.6995 48.2403 35.604ZM42.2388 35.604C42.2388 31.9241 39.2796 28.9881 35.5702 28.9881C31.8608 28.9881 28.902 31.9234 28.902 35.604C28.902 39.2846 31.8608 42.2199 35.5702 42.2199C39.2796 42.2199 42.2388 39.2831 42.2388 35.604Z" fill="#36AAFF"/> <path d="M18.0585 31.7307L19.274 32.71L20.5243 38.4984L19.7323 39.4803L18.0585 31.7307Z" fill="#005A73"/> <path d="M18.0585 31.7307H22.5547L23.2754 32.71H19.274L18.0585 31.7307Z" fill="#4ED4D9"/> <path d="M17.6919 29.9697L18.4825 28.9885H24.984L23.2863 29.9697H17.6919Z" fill="#00438F"/> <path d="M17.6919 29.9696L18.4825 28.9884L17.2322 23.2004L16.0155 22.22L17.6919 29.9696Z" fill="#005A73"/> <path d="M36.7009 23.2766L18.2694 28.0027L18.4825 28.9887H24.984C24.2238 30.1323 23.6473 31.3878 23.2755 32.7097H19.276L19.6872 34.616L29.9804 31.9767C31.1652 30.1714 33.2162 28.9865 35.571 28.9865C36.656 28.9838 37.7256 29.2433 38.6887 29.743L45.6096 27.9683C43.5602 25.3978 40.4414 23.6485 36.7009 23.2766Z" fill="#7AD3FF"/> <path d="M48.2104 36.428L41.7612 38.0816C40.7815 40.5171 38.3942 42.2193 35.5703 42.2193C34.0395 42.2254 32.5529 41.7064 31.3585 40.7489L24.9358 42.3958C25.5205 43.2785 26.216 44.0824 27.0054 44.788C27.9022 45.5876 28.9092 46.2541 29.9957 46.7671L46.0208 42.6578C47.3099 40.8222 48.0676 38.6665 48.2104 36.428Z" fill="#0094DE"/> <path d="M28.0117 0.149902L27.6006 1.3516C21.832 2.95624 16.3008 7.55076 12.0513 11.7999C7.80178 16.049 3.19268 21.5907 1.58729 27.3645L0.385956 27.7757L1.20827 29.0488L6.03715 27.8665C6.08201 27.6627 6.13097 27.4655 6.18405 27.2752C8.77023 16.5723 17.3197 8.17161 28.1037 5.79997L29.2859 0.971097L28.0117 0.149902Z" fill="#012120"/> <path d="M9.92985 9.68131C4.9253 14.6859 1.65023 20.9579 0.398438 27.7723L5.0606 26.6278C6.41967 21.5582 9.08846 16.4609 12.8992 12.6484C16.7099 8.83581 21.8007 6.17263 26.8658 4.81282L28.0107 0.149902C21.2005 1.40319 14.934 4.67751 9.92985 9.68131Z" fill="#36BFFF"/> <path d="M40.6359 0.149902L41.0471 1.3516C46.816 2.95624 52.3468 7.55076 56.5964 11.7999C60.8459 16.049 65.455 21.5907 67.0603 27.3645L68.2617 27.7757L67.4394 29.0488L62.6105 27.8665C62.5656 27.6627 62.5167 27.4655 62.4636 27.2752C59.8774 16.5723 51.3279 8.17161 40.544 5.79997L39.3628 0.97222L40.6359 0.149902Z" fill="#012120"/> <path d="M68.2483 27.7726C66.9973 20.9571 63.7222 14.6851 58.7169 9.68162C53.7116 4.67819 47.4467 1.40537 40.6357 0.152832L41.7802 4.81575C46.8456 6.17556 51.9391 8.8436 55.7472 12.6513C59.5553 16.459 62.2267 21.5596 63.5858 26.6307" fill="#36BFFF"/> <path d="M36.2634 0.317871H32.3742L30.2078 5.63939L34.3235 9.95431L38.4392 5.63939L36.2634 0.317871Z" fill="#9FFFFC"/> <path d="M33.1039 5.08912L34.0391 2.79224H34.6017L35.5413 5.09099L34.3236 6.3682L33.1039 5.08912Z" fill="white"/> <path d="M32.3743 0.317627L34.0391 2.79243H34.6017L36.2635 0.317627H32.3743Z" fill="#00F3EF"/> <path d="M32.3743 0.317627L30.2079 5.63914L33.1039 5.08931L34.0391 2.79243L32.3743 0.317627Z" fill="#9FFFFC"/> <path d="M36.2635 0.317627L34.6017 2.79243L35.5413 5.09118L38.4393 5.63914L36.2635 0.317627Z" fill="#00CCC6"/> <path d="M38.4393 5.63903L35.5413 5.09106L34.3236 6.36827V9.95395L38.4393 5.63903Z" fill="#009490"/> <path d="M34.3236 6.36819L33.1039 5.08911L30.2079 5.63894L34.3236 9.95387V6.36819Z" fill="#00F3EF"/> <path d="M40.636 68.0243L41.0472 66.8226C46.8161 65.218 52.347 60.6235 56.5965 56.3743C60.846 52.1252 65.4551 46.5835 67.0605 40.8097L68.2618 40.3986L67.4395 39.1255L62.6106 40.3078C62.5657 40.5113 62.5168 40.7084 62.4637 40.8991C59.8775 51.6019 51.328 60.0026 40.5441 62.3743L39.3618 67.2031L40.636 68.0243Z" fill="#7BE8CB"/> <path d="M63.5862 41.5482C62.2271 46.6178 59.5583 51.715 55.7476 55.5257C51.9369 59.3364 46.846 62.0018 41.7805 63.3617L40.636 68.0246C47.4471 66.772 53.7154 63.4977 58.7173 58.4958C63.7192 53.4938 66.9973 47.2188 68.2487 40.4048L63.5862 41.5482Z" fill="#36AAFF"/> <path d="M28.0116 68.0246L27.6004 66.8229C21.8319 65.2183 16.3007 60.6237 12.0512 56.3746C7.80165 52.1254 3.19256 46.5838 1.58717 40.81L0.385834 40.3988L1.20815 39.1257L6.03703 40.308C6.08188 40.5116 6.13085 40.7087 6.18392 40.8993C8.77011 51.6022 17.3196 60.0029 28.1036 62.3745L29.2858 67.2034L28.0116 68.0246Z" fill="#7BE8CB"/> <path d="M26.8667 63.3611C21.8016 62.0013 16.7081 59.3332 12.9 55.5251C9.0919 51.717 6.42049 46.6172 5.06143 41.5476L0.399261 40.4031C1.65031 47.2182 4.92536 53.4903 9.93066 58.4941C14.936 63.4979 21.2013 66.7703 28.0123 68.0229L26.8667 63.3611Z" fill="#36AAFF"/> <path d="M32.3837 67.8561H36.2729L38.4394 62.5345L34.3237 58.2192L30.2079 62.5345L32.3837 67.8561Z" fill="#9FFFFC"/> <path d="M35.5434 63.0846L34.6082 65.3815H34.0456L33.1059 63.0827L34.3237 61.8059L35.5434 63.0846Z" fill="#009490"/> <path d="M36.273 67.8573L34.6081 65.3821H34.0456L32.3838 67.8573H36.273Z" fill="#00CCC6"/> <path d="M36.273 67.8569L38.4394 62.5354L35.5434 63.0849L34.6082 65.3817L36.273 67.8569Z" fill="#00716E"/> <path d="M32.3838 67.8569L34.0456 65.3817L33.1059 63.083L30.208 62.5354L32.3838 67.8569Z" fill="#9FFFFC"/> <path d="M30.208 62.5353L33.106 63.0829L34.3238 61.806V58.22L30.208 62.5353Z" fill="white"/> <path d="M34.3237 61.806L35.5434 63.0847L38.4394 62.5353L34.3237 58.22V61.806Z" fill="#00F3EF"/> <path d="M66.0584 35.9059V32.26L61.0699 30.2292L57.0245 34.087L61.0699 37.9456L66.0584 35.9059Z" fill="#9FFFFC"/> <path d="M61.5851 32.9448L63.7385 33.8213V34.3487L61.5832 35.2297L60.3864 34.0882L61.5851 32.9448Z" fill="#9FFFFC"/> <path d="M66.0585 32.2603L63.7385 33.8208V34.3482L66.0585 35.9061V32.2603Z" fill="#00F3EF"/> <path d="M66.0585 32.2607L61.07 30.23L61.5851 32.9447L63.7384 33.8213L66.0585 32.2607Z" fill="#00CCC6"/> <path d="M66.0585 35.9061L63.7384 34.3481L61.5832 35.2291L61.07 37.9458L66.0585 35.9061Z" fill="#009490"/> <path d="M61.07 37.9469L61.5832 35.2303L60.3864 34.0888L57.0246 34.0884L61.07 37.9469Z" fill="#00F3EF"/> <path d="M60.3864 34.0881L61.5852 32.9447L61.0701 30.23L57.0246 34.0878L60.3864 34.0881Z" fill="white"/> <path d="M2.5892 32.269V35.9145L7.57768 37.9456L11.6231 34.0874L7.57768 30.2292L2.5892 32.269Z" fill="#9FFFFC"/> <path d="M7.06246 35.2317L4.90912 34.3548V33.8278L7.06434 32.9468L8.26119 34.0883L7.06246 35.2317Z" fill="#00F3EF"/> <path d="M2.58905 35.9155L4.9091 34.355V33.8279L2.58905 32.27V35.9155Z" fill="#009490"/> <path d="M2.58905 35.9145L7.57753 37.9457L7.06245 35.2309L4.9091 34.354L2.58905 35.9145Z" fill="#00CCC6"/> <path d="M2.58905 32.2697L4.9091 33.8276L7.06433 32.9466L7.57753 30.23L2.58905 32.2697Z" fill="#4ECEE0"/> <path d="M7.57753 30.23L7.06433 32.9466L8.26118 34.0881H11.623L7.57753 30.23Z" fill="#9FFFFC"/> <path d="M8.26117 34.0884L7.06244 35.2318L7.57752 37.9465L11.6229 34.0884H8.26117Z" fill="#009490"/> <defs> <linearGradient id="nitroplatinum_paint0_linear_2_134" x1="34.3307" y1="57.4101" x2="34.3307" y2="11.2202" gradientUnits="userSpaceOnUse"> <stop/> <stop offset="0.4" stop-color="#002021"/> <stop offset="1" stop-color="#015559"/> </linearGradient> </defs> </svg>` },
  nitroemerald: { label: "Nitro Emerald", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="84" height="69" viewBox="0 0 84 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.05842 22.4807L5.0253 29.4248L22.1318 37.6835L22.5122 32.9787L6.05842 22.4807Z" fill="#00592E"/> <path d="M6.54947 19.7893L6.9924 23.5245L22.5121 32.9811L22.8486 32.0112L6.54947 19.7893Z" fill="#00C73B"/> <path d="M0.682654 26.6604C0.682654 26.6604 -0.513443 31.0116 1.73559 36.261C3.98463 41.5103 5.33473 42.5614 5.33473 42.5614L18.8338 43.7575L19.5859 42.5614L0.682654 26.6604Z" fill="#003236"/> <path d="M17.9169 42.8251L7.67348 39.5706L5.32315 42.5619L18.8223 49.3431L17.9169 42.8251Z" fill="#002909"/> <path d="M0.682648 26.6604C0.682648 26.6604 2.54183 38.8625 8.68679 39.9139L18.7516 43.6491L22.3959 37.5191L0.682648 26.6604Z" fill="#00592E"/> <path d="M12.3428 32.5254L0.680817 26.6604C0.680817 26.6604 3.87103 32.1449 10.127 34.6107C10.879 34.9097 11.6057 35.1819 12.3039 35.4357C12.2953 34.4638 12.2953 33.4957 12.3293 32.5254H12.3428Z" fill="#228250"/> <path d="M12.3312 36.242L2.55875 32.6428C2.55875 32.6428 4.13722 35.8611 9.16943 37.7558C10.1487 38.1273 11.2357 38.4719 12.3597 38.7982L12.3312 36.242Z" fill="#228250"/> <path d="M6.99247 23.5144L6.54954 19.7795C6.54954 19.7795 3.62022 20.714 3.43034 28.0293L6.22323 29.4163C6.22323 29.4163 5.64985 25.8987 7.00069 23.5054L6.99247 23.5144Z" fill="#40A100"/> <path d="M77.6867 22.4807L78.7198 29.4248L61.613 37.6835L61.2328 32.9787L77.6867 22.4807Z" fill="#00592E"/> <path d="M60.8979 32.0092L61.2343 32.9792L76.7544 23.5225L77.1969 19.7874L60.8979 32.0092Z" fill="#00C73B"/> <path d="M83.0623 26.6604C83.0623 26.6604 84.2584 31.0116 82.0094 36.261C79.7603 41.5103 78.4106 42.5614 78.4106 42.5614L64.9115 43.7575L64.1591 42.5614L83.0623 26.6604Z" fill="#003236"/> <path d="M65.828 42.8251L76.0714 39.5706L78.4217 42.5619L64.9223 49.3431L65.828 42.8251Z" fill="#002909"/> <path d="M83.0623 26.6604C83.0623 26.6604 81.2035 38.8625 75.0586 39.9139L64.9938 43.6491L61.349 37.5191L83.0623 26.6604Z" fill="#00592E"/> <path d="M71.4138 32.5254C71.4478 33.4972 71.4478 34.4657 71.4396 35.4357C72.1378 35.1819 72.8645 34.9101 73.6165 34.6107C79.8721 32.1438 83.0623 26.6604 83.0623 26.6604L71.4026 32.5254H71.4138Z" fill="#228250"/> <path d="M71.4138 36.242L81.1863 32.6428C81.1863 32.6428 79.6082 35.8611 74.5745 37.7546C73.5952 38.1262 72.5079 38.4708 71.3839 38.7971L71.4138 36.242Z" fill="#228250"/> <path d="M76.7443 23.5054C78.0955 25.8976 77.5221 29.4163 77.5221 29.4163L80.315 28.0293C80.1248 20.7132 77.1954 19.7795 77.1954 19.7795L76.7529 23.5144L76.7443 23.5054Z" fill="#40A100"/> <path d="M41.8795 64.0628C58.448 64.0628 71.8795 50.6313 71.8795 34.0628C71.8795 17.4942 58.448 4.06274 41.8795 4.06274C25.3109 4.06274 11.8795 17.4942 11.8795 34.0628C11.8795 50.6313 25.3109 64.0628 41.8795 64.0628Z" fill="#004A37"/> <path d="M41.8795 34.0631L30.3992 6.34692C22.7456 9.51733 17.1015 15.4896 14.1632 22.5828L41.8795 34.0631Z" fill="#005C4D"/> <path d="M20.6664 12.8504L41.8796 34.0632H41.8818L23.9082 10.0403C22.7623 10.8989 21.679 11.8379 20.6664 12.8504Z" fill="#006656"/> <path d="M14.1648 22.5809L41.8799 34.0615L20.6671 12.8499C17.881 15.6346 15.6699 18.9401 14.1596 22.5782L14.1648 22.5809Z" fill="#005C4D"/> <path d="M41.8795 34.0627V64.0628C58.4481 64.0628 71.8795 50.6313 71.8795 34.0627H41.8795Z" fill="#003236"/> <path d="M69.5954 45.5438L41.8803 34.0627L63.0931 55.2755C65.8792 52.4909 68.0903 49.1853 69.6006 45.5472L69.5954 45.5438Z" fill="#00292B"/> <path d="M69.5957 22.5835L41.8803 34.0631H71.8795C71.881 30.1236 71.1075 26.2223 69.6032 22.5813L69.5957 22.5835Z" fill="#003236"/> <path d="M20.6686 55.2769L41.8799 34.0637L14.1648 45.5463C15.6717 49.1858 17.8795 52.4934 20.6626 55.281L20.6686 55.2769Z" fill="#003236"/> <path d="M11.881 34.0628H41.8803L14.1641 22.5833C12.6558 26.2222 11.8779 30.1222 11.8747 34.0613L11.881 34.0628Z" fill="#004A37"/> <path d="M41.8795 34.0627V64.0628C50.164 64.0628 57.6639 60.7047 63.0927 55.2759L41.8795 34.0627Z" fill="#00292B"/> <path d="M41.8795 34.0627V64.0628C33.5954 64.0628 26.0955 60.7047 20.6664 55.2759L41.8795 34.0627Z" fill="#003236"/> <path d="M41.8796 60.0081C56.2085 60.0081 67.8244 48.3922 67.8244 34.0633C67.8244 19.7343 56.2085 8.11841 41.8796 8.11841C27.5506 8.11841 15.9347 19.7343 15.9347 34.0633C15.9347 48.3922 27.5506 60.0081 41.8796 60.0081Z" fill="#002408"/> <path d="M38.93 63.4573L40.4711 61.9797H45.3217L46.144 63.1672L49.7995 61.6082V58.4778L34.7687 60.8928L38.9468 63.4494L38.93 63.4573Z" fill="#000002"/> <path d="M15.9347 34.0627C15.9347 48.392 27.5507 60.008 41.8795 60.008C56.2084 60.008 67.8248 48.392 67.8248 34.0627H15.9347Z" fill="#1E751B"/> <path d="M41.8795 34.0627V60.008C56.2088 60.008 67.8248 48.392 67.8248 34.0627H41.8795Z" fill="#1D8802"/> <path d="M41.8795 58.1731C55.1953 58.1731 65.9899 47.3785 65.9899 34.0627C65.9899 20.747 55.1953 9.95239 41.8795 9.95239C28.5637 9.95239 17.7692 20.747 17.7692 34.0627C17.7692 47.3785 28.5637 58.1731 41.8795 58.1731Z" fill="black"/> <path d="M41.8795 57.6471C54.9044 57.6471 65.4632 47.0883 65.4632 34.0634C65.4632 21.0385 54.9044 10.4797 41.8795 10.4797C28.8546 10.4797 18.2958 21.0385 18.2958 34.0634C18.2958 47.0883 28.8546 57.6471 41.8795 57.6471Z" fill="#228250"/> <path d="M41.8781 57.6475C45.9989 57.6543 50.0489 56.5769 53.6216 54.5234L41.8819 47.7061L41.868 57.6486L41.8781 57.6475Z" fill="#00290B"/> <path d="M41.8777 20.4736L30.0861 27.2817V40.8978L41.8777 47.7058L53.6698 40.8978V27.2817L41.8777 20.4736Z" fill="#00480E"/> <path d="M30.0861 40.8975H53.6698L41.8777 47.7055L30.0861 40.8975Z" fill="#002E0C"/> <path d="M53.6698 27.2812V40.8973L65.4603 34.1117L65.4614 34.0893L53.6698 27.2812Z" fill="#013702"/> <path d="M41.8777 47.7055L30.0861 40.8975V54.5135L41.8777 47.7055Z" fill="#002000"/> <path d="M21.4569 45.8599C23.5297 49.4404 26.505 52.4149 30.086 54.4868V40.8965L21.4569 45.8599Z" fill="#003301"/> <path d="M30.0861 13.665V27.2811L41.8777 20.4731L30.0861 13.665Z" fill="#044403"/> <path d="M30.086 27.2812V40.8973L18.294 34.0893L30.086 27.2812Z" fill="#003801"/> <path d="M41.8777 47.7055L53.6697 40.8975L53.6215 54.5229L41.8777 47.7055Z" fill="#001D00"/> <path d="M53.6697 13.665V27.2811L41.8777 20.4731L53.6697 13.665Z" fill="#003401"/> <path d="M41.8781 10.4795V20.4733L53.6698 13.6652L53.6731 13.6413C50.0892 11.5653 46.0199 10.4744 41.8781 10.4795Z" fill="#004203"/> <path d="M62.3359 22.3037L53.6698 27.281L65.4461 34.1156L65.4689 34.1066C65.4839 29.9648 64.403 25.8928 62.3359 22.3037Z" fill="#065909"/> <path d="M62.3018 45.9328L53.6697 40.8965L53.608 54.5122L53.6271 54.5271C57.226 52.4774 60.2188 49.5122 62.3018 45.9324V45.9328Z" fill="#023201"/> <path d="M41.8642 57.6467L41.878 47.7041L30.0834 54.4927C33.6642 56.5629 37.7281 57.6509 41.8642 57.6467Z" fill="#011906"/> <path d="M21.4229 45.8793L30.0861 40.8961L18.3056 34.0693L18.2832 34.0783C18.2705 38.2199 19.3538 42.2912 21.4229 45.8789V45.8793Z" fill="#002801"/> <path d="M21.4315 22.2847L30.086 27.2814V13.6653L30.067 13.6504C26.4776 15.7164 23.4987 18.6953 21.4326 22.2847H21.4315Z" fill="#0A620B"/> <path d="M53.6697 27.2815L62.3243 22.3102C60.2593 18.7256 57.2907 15.7448 53.7146 13.665H53.6697V27.2815Z" fill="#013D00"/> <path d="M62.2683 45.9131C64.356 42.3301 65.4575 38.2581 65.4607 34.1113L53.6698 40.8962L62.2683 45.9131Z" fill="#014002"/> <path d="M30.086 27.2814L21.4427 22.291C19.3759 25.8689 18.2898 29.929 18.2944 34.061L18.3056 34.07L30.086 27.2814Z" fill="#044D04"/> <path d="M41.8781 10.4795C37.738 10.4745 33.6702 11.5645 30.0872 13.6387V13.6652L41.8792 20.4733L41.8781 10.4795Z" fill="#065C16"/> <path d="M41.8777 20.4736V34.0897L53.6697 27.2817L41.8777 20.4736Z" fill="#024F18"/> <path d="M57.0838 36.3946C57.0903 38.1978 56.7336 39.9839 56.035 41.6463C55.3364 43.3087 54.3101 44.8134 53.0175 46.0706C50.401 48.6284 46.9039 50.0387 43.1684 50.0387C36.9584 50.0387 31.5812 46.0905 29.83 40.3455H27.0244L26.8543 39.5575L25.5794 33.6566L25.3177 32.4445H29.9006C30.1092 31.8306 30.3582 31.2313 30.646 30.6503H24.9417L24.7716 29.8631L23.4967 23.9634L23.235 22.7512H42.7837C46.7458 22.7512 50.3842 24.1589 53.0253 26.7133C55.6437 29.2438 57.0838 32.6818 57.0838 36.3946Z" fill="black"/> <path d="M48.1856 11.1641L51.1878 12.0712L53.2174 10.7204L51.3392 5.58613C49.1011 4.84367 46.783 4.36902 44.4332 4.17212L48.1856 11.1641Z" fill="black"/> <path d="M56.7688 35.5725C56.7688 39.1746 55.3525 42.5476 52.7821 45.0642C50.2168 47.5738 46.7851 48.9546 43.1194 48.9546C39.6399 48.9546 36.4288 47.6923 33.994 45.5599C32.1294 43.9319 30.7581 41.8144 30.0353 39.4471H27.2812L25.6093 31.6975H30.1059C30.3098 31.095 30.5541 30.507 30.837 29.9373H25.2408L23.5644 22.1877H42.7449C50.739 22.1877 56.7688 27.9425 56.7688 35.5725Z" fill="#005438"/> <path d="M48.4537 27.1994L50.36 24.2092C48.192 22.9222 45.5954 22.1877 42.7457 22.1877H23.5644L29.7841 27.1998L48.4537 27.1994Z" fill="#008704"/> <path d="M54.3849 43.1714L51.2507 41.0569L43.1195 44.8448L30.7825 38.4651H28.0737L27.2813 39.4466H30.0353C30.7583 41.8139 32.1296 43.9314 33.994 45.5594C36.4288 47.69 39.6381 48.9541 43.1195 48.9541C46.7852 48.9541 50.2168 47.5734 52.7821 45.0638C53.3739 44.484 53.9104 43.8505 54.3849 43.1714Z" fill="#317000"/> <path d="M43.1191 43.4034C47.4443 43.4034 50.9505 39.8971 50.9505 35.5719C50.9505 31.2467 47.4443 27.7405 43.1191 27.7405C38.7939 27.7405 35.2876 31.2467 35.2876 35.5719C35.2876 39.8971 38.7939 43.4034 43.1191 43.4034Z" fill="#013E11"/> <path d="M45.7345 28.189C44.8943 27.8913 44.0094 27.7396 43.118 27.7405C38.7926 27.7405 35.2865 31.2469 35.2865 35.5719C35.2865 35.6601 35.2903 35.7476 35.2933 35.8336L43.118 35.5719L45.7345 28.189Z" fill="#002109"/> <path d="M50.9439 35.3079L43.1191 35.5695L40.5027 42.9521C41.3429 43.2496 42.2278 43.4013 43.1191 43.4006C47.4442 43.4006 50.9506 39.8945 50.9506 35.5691C50.9517 35.4828 50.9469 35.3953 50.9439 35.3079Z" fill="#00592E"/> <path d="M48.3296 39.6293L43.1191 35.5715L45.4138 41.7643L46.5217 42.627C47.3827 42.21 48.1602 41.6391 48.8159 40.9424L48.3296 39.6293Z" fill="#007326"/> <path d="M46.245 35.5708C46.245 37.3485 44.9114 38.6732 43.1191 38.6732C41.3268 38.6732 39.9932 37.35 39.9932 35.5708C39.9932 33.7916 41.3268 32.4684 43.1191 32.4684C44.9114 32.4684 46.245 33.7927 46.245 35.5708ZM55.7891 35.5708C55.7891 39.334 54.1176 42.6793 51.4563 44.9448C49.2349 46.8358 46.3235 47.9725 43.121 47.9725C39.7973 47.9725 36.8011 46.7592 34.5558 44.7527C32.689 43.0883 31.3729 40.8953 30.7825 38.465H28.0737L26.8234 32.6766H30.8228C31.1947 31.3547 31.7712 30.0992 32.5314 28.9556H26.0313L24.781 23.1672H42.7438C50.3293 23.1672 55.7891 28.6663 55.7891 35.5708ZM49.7873 35.5708C49.7873 31.8909 46.8285 28.9549 43.1191 28.9549C39.4097 28.9549 36.4508 31.8902 36.4508 35.5708C36.4508 39.2514 39.4097 42.1867 43.1191 42.1867C46.8285 42.1867 49.7873 39.2499 49.7873 35.5708Z" fill="#49EC12"/> <path d="M25.6075 31.6975L26.823 32.6768L28.0733 38.4652L27.2813 39.4471L25.6075 31.6975Z" fill="#1EAD02"/> <path d="M25.6075 31.6975H30.1037L30.824 32.6768H26.823L25.6075 31.6975Z" fill="#008704"/> <path d="M25.2408 29.9375L26.0314 28.9563H32.5329L30.8352 29.9375H25.2408Z" fill="#003D3A"/> <path d="M25.2408 29.9373L26.0313 28.9562L24.781 23.1682L23.5644 22.1877L25.2408 29.9373Z" fill="#1EAD02"/> <path d="M44.2498 23.2444L25.8183 27.9705L26.0314 28.9565H32.5329C31.7727 30.1001 31.1962 31.3556 30.8244 32.6775H26.8249L27.2361 34.5838L37.5293 31.9445C38.7142 30.1391 40.7651 28.9543 43.1199 28.9543C44.2049 28.9515 45.2745 29.2111 46.2376 29.7108L53.157 27.9383C51.1087 25.3656 47.9903 23.6163 44.2498 23.2444Z" fill="#CCFB4B"/> <path d="M55.7592 36.3948L49.31 38.0484C48.3303 40.4839 45.943 42.1861 43.1191 42.1861C41.5883 42.1922 40.1017 41.6732 38.9073 40.7157L32.4846 42.3626C33.0693 43.2452 33.7647 44.0491 34.5539 44.7548C35.4508 45.5542 36.4578 46.2207 37.5441 46.7339L53.5681 42.6242C54.8577 40.7889 55.6159 38.6333 55.7592 36.3948Z" fill="#4DFF59"/> <path d="M43.2583 60.5881L45.2334 62.5195L48.976 60.8928L49.0284 56.6575L44.7957 56.8055L43.2583 60.5881Z" fill="#9FFFFC"/> <path d="M47.2324 59.7339L45.6169 60.4362L45.3313 60.1567L45.9952 58.5225L47.2477 58.4788L47.2324 59.7339Z" fill="#FDFF7D"/> <path d="M45.2334 62.5205L45.6169 60.4371L45.3313 60.1575L43.2583 60.5892L45.2334 62.5205Z" fill="#00716E"/> <path d="M45.2334 62.5194L48.9761 60.8927L47.2324 59.7336L45.6169 60.436L45.2334 62.5194Z" fill="#63D84D"/> <path d="M43.2583 60.5886L45.3313 60.1569L45.9951 58.5227L44.7957 56.8059L43.2583 60.5886Z" fill="#63D84D"/> <path d="M44.7957 56.8055L45.9951 58.5223L47.2477 58.4785L49.0284 56.6575L44.7957 56.8055Z" fill="white"/> <path d="M47.2476 58.4785L47.2323 59.7337L48.976 60.8928L49.0283 56.6575L47.2476 58.4785Z" fill="#509B00"/> <path d="M43.2501 60.5852H40.4879L38.949 56.8055L41.8724 53.7405L44.7957 56.8055L43.2501 60.5852Z" fill="#9FFFFC"/> <path d="M41.006 57.1966L41.6702 58.8278H42.0698L42.7373 57.1951L41.8724 56.2883L41.006 57.1966Z" fill="white"/> <path d="M40.4879 60.5853L41.6701 58.8274H42.0697L43.2501 60.5853H40.4879Z" fill="#00716E"/> <path d="M40.488 60.5856L38.9491 56.8059L41.0061 57.1965L41.6702 58.8277L40.488 60.5856Z" fill="#509B00"/> <path d="M43.2501 60.5856L42.0697 58.8277L42.7373 57.195L44.7957 56.8059L43.2501 60.5856Z" fill="#509B00"/> <path d="M44.7957 56.8055L42.7373 57.1946L41.8724 56.2878V53.7405L44.7957 56.8055Z" fill="#00592E"/> <path d="M41.8724 56.2878L41.006 57.1961L38.949 56.8055L41.8724 53.7405V56.2878Z" fill="#FDFF7D"/> <path d="M40.4864 60.5881L38.5113 62.5195L34.7687 60.8928L34.716 56.6575L38.949 56.8055L40.4864 60.5881Z" fill="#9FFFFC"/> <path d="M36.5124 59.7339L38.1279 60.4362L38.4134 60.1567L37.7492 58.5225L36.4967 58.4788L36.5124 59.7339Z" fill="#63D84D"/> <path d="M38.5113 62.5205L38.1278 60.4371L38.4134 60.1575L40.4864 60.5892L38.5113 62.5205Z" fill="#63D84D"/> <path d="M38.5114 62.5194L34.7687 60.8927L36.5124 59.7336L38.1279 60.436L38.5114 62.5194Z" fill="#509B00"/> <path d="M40.4864 60.5886L38.4134 60.1569L37.7492 58.5227L38.949 56.8059L40.4864 60.5886Z" fill="#00592E"/> <path d="M38.949 56.8055L37.7492 58.5223L36.4967 58.4785L34.716 56.6575L38.949 56.8055Z" fill="white"/> <path d="M36.4967 58.4785L36.5123 59.7337L34.7687 60.8928L34.716 56.6575L36.4967 58.4785Z" fill="#CFFD59"/> <path d="M41.8724 7.51501V11.4681L47.2817 13.6704L51.6684 9.48671L47.2817 5.30298L41.8724 7.51501Z" fill="#9FFFFC"/> <path d="M46.7228 10.7271L44.3882 9.77654V9.20465L46.7251 8.24927L48.0229 9.48723L46.7228 10.7271Z" fill="#FDFF7D"/> <path d="M41.8724 11.468L44.3883 9.77589V9.20401L41.8724 7.51489V11.468Z" fill="white"/> <path d="M41.8723 11.4687L47.2817 13.671L46.7229 10.7271L44.3882 9.77661L41.8723 11.4687Z" fill="#00592E"/> <path d="M41.8724 7.51501L44.3883 9.20413L46.7252 8.24874L47.2817 5.30298L41.8724 7.51501Z" fill="#CFFD59"/> <path d="M47.2817 5.30298L46.7252 8.24874L48.0229 9.48671H51.6684L47.2817 5.30298Z" fill="#00592E"/> <path d="M48.0229 9.48657L46.7229 10.7264L47.2817 13.6703L51.6684 9.48657H48.0229Z" fill="#509B00"/> <path d="M36.463 5.30289L41.8724 0.117432L47.2817 5.30289L41.8724 7.51493L36.463 5.30289Z" fill="#FDFF7D"/> <path d="M41.8724 0.117432V7.51493L47.2817 5.30289L41.8724 0.117432Z" fill="#509B00"/> <path d="M41.8723 3.51685L47.2817 5.30277L41.8723 7.5148V3.51685Z" fill="#00592E"/> <path d="M41.8724 3.51685L36.463 5.30277L41.8724 7.5148V3.51685Z" fill="#63D84D"/> <path d="M41.8724 7.51501V11.4681L36.463 13.6704L32.0763 9.48671L36.463 5.30298L41.8724 7.51501Z" fill="#9FFFFC"/> <path d="M37.0215 10.7271L39.3564 9.77654V9.20465L37.0196 8.24927L35.7218 9.48723L37.0215 10.7271Z" fill="#CFFD59"/> <path d="M41.8724 11.468L39.3564 9.77589V9.20401L41.8724 7.51489V11.468Z" fill="#509B00"/> <path d="M41.8724 11.4687L36.463 13.671L37.0215 10.7271L39.3564 9.77661L41.8724 11.4687Z" fill="#63D84D"/> <path d="M41.8724 7.51501L39.3564 9.20413L37.0196 8.24874L36.463 5.30298L41.8724 7.51501Z" fill="#00592E"/> <path d="M36.463 5.30298L37.0196 8.24874L35.7218 9.48671H32.0763L36.463 5.30298Z" fill="white"/> <path d="M35.7218 9.48657L37.0214 10.7264L36.463 13.6703L32.0763 9.48657H35.7218Z" fill="#509B00"/> <path d="M35.5604 0.115479L35.1492 1.31718C29.3807 2.92182 23.8495 7.51633 19.6 11.7655C15.3504 16.0146 10.7413 21.5563 9.13409 27.3301L7.93276 27.7412L8.75508 29.0143L13.584 27.8321C13.6288 27.6282 13.6778 27.4311 13.7308 27.2407C16.317 16.5379 24.8665 8.13718 35.6505 5.76554L36.8335 0.937796L35.5604 0.115479Z" fill="#40A100"/> <path d="M17.4787 9.64689C12.4742 14.6514 9.19913 20.9235 7.94733 27.7379L12.6095 26.5934C13.9682 21.5238 16.6374 16.4265 20.4481 12.614C24.2587 8.80139 29.3496 6.13821 34.4147 4.77839L35.5604 0.115479C28.749 1.36877 22.481 4.64308 17.4787 9.64689Z" fill="#9FED00"/> <path d="M48.1856 0.115479L48.5967 1.31718C54.3657 2.92182 59.8965 7.51633 64.146 11.7655C68.3955 16.0146 73.0046 21.5563 74.6119 27.3301L75.8132 27.7412L74.9909 29.0143L70.162 27.8321C70.1174 27.6282 70.0686 27.4311 70.0155 27.2407C67.4293 16.5379 58.8798 8.13718 48.0955 5.76554L46.9117 0.937796L48.1856 0.115479Z" fill="#40A100"/> <path d="M75.7971 27.7379C74.5461 20.9224 71.2707 14.6503 66.2657 9.64689C61.2608 4.64346 54.9959 1.36877 48.1856 0.115479L49.3301 4.77839C54.3956 6.13821 59.4891 8.80625 63.2972 12.614C67.1052 16.4217 69.7767 21.5223 71.1357 26.5934" fill="#9FED00"/> <path d="M48.1856 67.9899L48.5967 66.7882C54.3657 65.1836 59.8965 60.5891 64.146 56.3399C68.3955 52.0908 73.0046 46.5491 74.6119 40.7753L75.8132 40.3642L74.9909 39.0911L70.162 40.2733C70.1174 40.4769 70.0686 40.674 70.0155 40.8647C67.4293 51.5675 58.8798 59.9682 48.0955 62.3398L46.9136 67.1687L48.1856 67.9899Z" fill="#9FED00"/> <path d="M66.2661 58.4623C71.2706 53.4574 74.5461 47.1854 75.7975 40.3713L71.1357 41.5132C69.7766 46.5825 67.1079 51.6801 63.2972 55.4908C59.4865 59.3015 54.3956 61.9669 49.3301 63.3267L48.1856 67.9896C54.9959 66.7371 61.2642 63.4628 66.2661 58.4623Z" fill="#509B00"/> <path d="M35.5604 67.9899L35.1492 66.7882C29.3807 65.1836 23.8495 60.5891 19.6 56.3399C15.3504 52.0908 10.7414 46.5491 9.1341 40.7753L7.93277 40.3642L8.75509 39.0911L13.584 40.2733C13.6288 40.4769 13.6778 40.674 13.7309 40.8647C16.317 51.5675 24.8665 59.9682 35.6505 62.3398L36.8327 67.1687L35.5604 67.9899Z" fill="#9FED00"/> <path d="M7.94815 40.3694C9.19919 47.1845 12.4743 53.4566 17.4796 58.4604C22.4849 63.4642 28.7498 66.7366 35.5612 67.9892L34.4163 63.3262C29.3512 61.9664 24.2577 59.2984 20.4496 55.4903C16.6415 51.6822 13.9698 46.582 12.6111 41.5128" fill="#509B00"/> <path d="M26.1934 61.5169L25.5775 61.1805L25.4044 61.0628C20.465 57.8456 16.3898 53.4662 13.5361 48.3082L13.4086 48.0817C13.2838 47.8459 13.1021 47.5013 13.1021 47.5013L8.46129 46.9211L7.15567 47.6646H7.16427L11.8601 49.0431C15.0035 54.7666 19.5648 59.5865 25.1065 63.0404L25.5576 63.3212L26.7018 68.0536L27.4781 66.9846L26.1934 61.5169Z" fill="#FAFF59"/> <path d="M25.376 62.5867C19.7881 59.1024 15.2119 54.2134 12.1041 48.4078L7.15677 47.6643C11.0724 56.5417 17.989 63.7569 26.6932 68.0439L25.376 62.5867Z" fill="#D9E000"/> <path d="M75.2742 46.9211L70.6333 47.5013C70.6333 47.5013 70.4517 47.8459 70.3238 48.0817L70.1964 48.3082C67.3434 53.4657 63.2697 57.8452 58.3318 61.0635L58.1588 61.1813L57.5428 61.5177L56.2544 66.9846L57.0348 68.0543L58.176 63.3312L58.6301 63.0502C64.1709 59.5961 68.7312 54.7762 71.8735 49.0528L76.5712 47.6657H76.5798L75.2742 46.9211Z" fill="#FAFF59"/> <path d="M71.6295 48.4078C68.5265 54.214 63.9529 59.1034 58.3662 62.5864L57.052 68.0436C65.7548 63.7549 72.6708 56.5404 76.5881 47.6643L71.6295 48.4078Z" fill="#D9E000"/> </svg>` },
  nitroruby: { label: "Nitro Ruby", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="99" height="69" viewBox="0 0 99 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M81.3141 53.0266L77.0081 58.313L77.6241 61.0872C77.6241 61.0872 82.0661 59.4915 83.3093 54.0795L81.3141 53.0266Z" fill="#820037"/> <path d="M67.707 57.0523L77.6241 61.0861L77.0081 58.313L68.1241 56.092L67.707 57.0523Z" fill="#3F0012"/> <path d="M88.3757 43.3004L86.4373 53.0183L74.2558 50.644L77.6411 42.8926L88.3757 43.3004Z" fill="#820037"/> <path d="M74.252 50.6436L74.2558 50.6443L74.252 50.6525V50.6436Z" fill="#820037"/> <path d="M87.1694 42.8918H90.8507C91.0776 52.5354 86.4259 55.3929 86.4259 55.3929L84.7144 51.7759C87.7315 48.8387 87.1694 42.8918 87.1694 42.8918Z" fill="#B81E49"/> <path d="M84.7312 51.7847L86.4457 55.4021L74.9415 52.5737L74.2604 50.6506L84.7226 51.7836L84.7312 51.7847Z" fill="#3F0012"/> <path d="M91.966 19.2483L93.1808 27.4251L73.037 37.1528L72.5829 31.6133L91.966 19.2483Z" fill="#820037"/> <path d="M91.3879 16.0667L72.1867 30.4628L72.5841 31.6051L90.8601 20.4634L91.3965 16.0667H91.3879Z" fill="#A30064"/> <path d="M98.3028 24.1624L76.0273 42.8918L76.9158 44.3058L92.8161 42.9007C92.8161 42.9007 94.4114 41.6587 97.0596 35.4759C99.7175 29.2843 98.3028 24.1624 98.3028 24.1624Z" fill="#B81E49"/> <path d="M72.2935 42.8926L72.3104 42.8978L72.2935 42.9015V42.8926Z" fill="#3F0012"/> <path d="M92.8175 42.8921L76.9172 44.3065L72.3104 42.8973L89.2838 39.0938L92.8175 42.8921Z" fill="#3F0012"/> <path d="M72.2936 43.5085C72.2936 43.5085 80.6327 41.8403 87.8762 40.5982C95.1197 39.3562 98.3047 24.1624 98.3047 24.1624L72.7197 36.9539L72.2936 43.5085Z" fill="#820037"/> <path d="M73.9341 36.428V37.7605C73.9341 37.7605 79.8025 36.4373 87.1694 33.527C94.5407 30.6258 98.3043 24.1624 98.3043 24.1624L73.9341 36.428Z" fill="#FF8282"/> <path d="M73.9899 38.989L73.6976 40.5663C73.6976 40.5663 82.6922 38.989 88.4855 36.8042C94.4147 34.5743 96.2709 30.7864 96.2709 30.7864L73.9899 38.9995V38.989Z" fill="#FF5959"/> <path d="M91.7758 27.4169L94.1232 26.2473C93.8963 17.6261 91.3871 16.0667 91.3871 16.0667L90.8593 20.4634C92.446 23.2645 91.7758 27.4169 91.7758 27.4169Z" fill="#B81E49"/> <path d="M18.2461 53.0266L22.5517 58.313L21.9361 61.0872C21.9361 61.0872 17.494 59.4915 16.2509 54.0795L18.2461 53.0266Z" fill="#820037"/> <path d="M31.8532 57.0524L21.9361 61.0863L22.5517 58.3121L31.4357 56.0911L31.8532 57.0524Z" fill="#3F0012"/> <path d="M11.1842 43.3004L13.1226 53.0183L25.3042 50.644L21.9188 42.8926L11.1842 43.3004Z" fill="#820037"/> <path d="M25.3075 50.6436L25.3042 50.6443L25.3075 50.6525V50.6436Z" fill="#820037"/> <path d="M12.3904 42.8918H8.70945C8.48219 52.5354 13.1343 55.3929 13.1343 55.3929L14.8458 51.7759C11.8286 48.8387 12.3904 42.8918 12.3904 42.8918Z" fill="#B81E49"/> <path d="M14.8286 51.7855L13.1144 55.403L24.6183 52.5746L25.2993 50.6526L14.8376 51.7855H14.8286Z" fill="#3F0012"/> <path d="M7.59375 19.2483L6.37897 27.4251L26.5224 37.1528L26.9769 31.6133L7.59375 19.2483Z" fill="#820037"/> <path d="M8.17273 16.0667L27.3742 30.4628L26.9769 31.6051L8.70088 20.4634L8.16451 16.0667H8.17273Z" fill="#A30064"/> <path d="M1.25591 24.1624C1.25591 24.1624 -0.157732 29.2831 2.4991 35.4759C5.14734 41.6587 6.74226 42.9007 6.74226 42.9007L22.6425 44.3058L23.531 42.8918L1.25591 24.1624Z" fill="#B81E49"/> <path d="M27.2662 42.8926L27.2491 42.8978L27.2662 42.9015V42.8926Z" fill="#3F0012"/> <path d="M6.74234 42.8921L22.6426 44.3065L27.2491 42.8973L10.2761 39.0938L6.74234 42.8921Z" fill="#3F0012"/> <path d="M27.2662 43.5085C27.2662 43.5085 18.9271 41.8403 11.684 40.5982C4.44088 39.3562 1.25552 24.1624 1.25552 24.1624L26.8401 36.9539L27.2662 43.5085Z" fill="#820037"/> <path d="M25.6256 36.428V37.7605C25.6256 37.7605 19.7573 36.4373 12.3904 33.527C5.01949 30.6258 1.25589 24.1624 1.25589 24.1624L25.6256 36.428Z" fill="#FF8282"/> <path d="M25.5699 38.989L25.8622 40.5663C25.8622 40.5663 16.8676 38.989 11.0747 36.8042C5.14545 34.5743 3.28888 30.7864 3.28888 30.7864L25.5699 38.9995V38.989Z" fill="#FF5959"/> <path d="M7.78397 27.4169L5.43663 26.2473C5.66389 17.6261 8.1727 16.0667 8.1727 16.0667L8.70086 20.4634C7.11416 23.2645 7.78397 27.4169 7.78397 27.4169Z" fill="#B81E49"/> <path d="M49.7868 64.0628C66.3553 64.0628 79.7868 50.6313 79.7868 34.0628C79.7868 17.4942 66.3553 4.06274 49.7868 4.06274C33.2183 4.06274 19.7868 17.4942 19.7868 34.0628C19.7868 50.6313 33.2183 64.0628 49.7868 64.0628Z" fill="#700041"/> <path d="M49.7861 34.0631L38.3054 6.34692C30.6519 9.51733 25.0078 15.4896 22.0699 22.5828L49.7861 34.0631Z" fill="#8E1037"/> <path d="M28.5736 12.8499L49.786 34.0627H49.7883L31.8143 10.0383C30.6687 10.8974 29.5858 11.837 28.5736 12.8499Z" fill="#9E1927"/> <path d="M22.0725 22.5809L49.7861 34.0627L28.5733 12.8499C25.7872 15.6347 23.576 18.9402 22.0654 22.5782L22.0725 22.5809Z" fill="#8E1037"/> <path d="M49.7861 34.0627V64.0628C66.3543 64.0628 79.7857 50.6313 79.7857 34.0627H49.7861Z" fill="#570033"/> <path d="M77.5026 45.5438L49.7879 34.0627L71.0007 55.2755C73.7869 52.4908 75.9981 49.1853 77.5086 45.5472L77.5026 45.5438Z" fill="#3F0012"/> <path d="M77.5034 22.5835L49.7861 34.0631H79.7857C79.7869 30.1237 79.0136 26.2224 77.5098 22.5813L77.5034 22.5835Z" fill="#570033"/> <path d="M28.5759 55.2769L49.7861 34.0637L22.071 45.5463C23.578 49.1858 25.7859 52.4934 28.5692 55.281L28.5759 55.2769Z" fill="#570033"/> <path d="M19.7883 34.0628H49.7861L22.0699 22.5833C20.5616 26.2222 19.7838 30.1222 19.7808 34.0613L19.7883 34.0628Z" fill="#700041"/> <path d="M49.7861 34.0627V64.0628C58.0702 64.0628 65.5701 60.7047 70.9989 55.2759L49.7861 34.0627Z" fill="#3F0012"/> <path d="M49.7861 34.0627V64.0628C41.5016 64.0628 34.0017 60.7047 28.5729 55.2759L49.7861 34.0627Z" fill="#570033"/> <path d="M46.8373 63.4573L48.3784 61.9797H53.2293L54.0516 63.1672L57.7076 61.6082V58.4778L42.6763 60.8928L46.8545 63.4494L46.8373 63.4573Z" fill="#000002"/> <path d="M49.7868 60.0081C64.1158 60.0081 75.7317 48.3922 75.7317 34.0633C75.7317 19.7343 64.1158 8.11841 49.7868 8.11841C35.4579 8.11841 23.842 19.7343 23.842 34.0633C23.842 48.3922 35.4579 60.0081 49.7868 60.0081Z" fill="#3F0012"/> <path d="M23.8419 34.0627C23.8419 48.392 35.4579 60.008 49.7872 60.008C64.1164 60.008 75.7321 48.392 75.7321 34.0627H23.8419Z" fill="#8E1037"/> <path d="M49.7861 34.0627V60.008C64.115 60.008 75.731 48.392 75.731 34.0627H49.7861Z" fill="#9E1927"/> <path d="M49.7868 58.1731C63.1026 58.1731 73.8972 47.3785 73.8972 34.0627C73.8972 20.747 63.1026 9.95239 49.7868 9.95239C36.471 9.95239 25.6765 20.747 25.6765 34.0627C25.6765 47.3785 36.471 58.1731 49.7868 58.1731Z" fill="black"/> <path d="M49.7869 57.6471C62.8118 57.6471 73.3706 47.0883 73.3706 34.0634C73.3706 21.0385 62.8118 10.4797 49.7869 10.4797C36.762 10.4797 26.2032 21.0385 26.2032 34.0634C26.2032 47.0883 36.762 57.6471 49.7869 57.6471Z" fill="#FF5959"/> <path d="M49.7869 57.6469C62.8118 57.6469 73.3706 47.0881 73.3706 34.0632C73.3706 21.0383 62.8118 10.4795 49.7869 10.4795C36.7619 10.4795 26.2032 21.0383 26.2032 34.0632C26.2032 47.0881 36.7619 57.6469 49.7869 57.6469Z" fill="#0F0F0F"/> <path d="M49.7869 57.6469C62.8118 57.6469 73.3706 47.0881 73.3706 34.0632C73.3706 21.0383 62.8118 10.4795 49.7869 10.4795C36.7619 10.4795 26.2032 21.0383 26.2032 34.0632C26.2032 47.0881 36.7619 57.6469 49.7869 57.6469Z" fill="#F02454"/> <path d="M61.1356 20.1748H38.4385V47.9534H61.1356V20.1748Z" fill="#75151A"/> <path d="M61.1356 39.9873H38.4385V47.9529H61.1356V39.9873Z" fill="#450608"/> <path d="M61.1352 42.0471L54.627 39.9876H44.9468L38.4385 42.0471V26.0811L44.9468 28.1406H54.627L61.1352 26.0811V42.0471Z" fill="#5C0D11"/> <path d="M61.1352 42.0466L54.627 39.987H44.9468L38.4385 42.0466V34.0693H61.1352V42.0466Z" fill="#520C0F"/> <path d="M54.6269 28.1396H44.9467V39.987H54.6269V28.1396Z" fill="#631828"/> <path d="M61.1352 20.1748L67.6995 34.0637L61.1352 47.9531V20.1748Z" fill="#822134"/> <path d="M54.627 28.1396L61.1913 34.063L54.627 39.9866V28.1396Z" fill="#611014"/> <path d="M44.9468 28.1396L38.3828 34.063L44.9468 39.9866V28.1396Z" fill="#611014"/> <path d="M61.1352 20.1741L49.7868 14.2373L38.4385 20.1741H61.1352Z" fill="#5F161C"/> <path d="M49.779 14.2375L56.5777 11.4738C52.1446 10.1472 47.42 10.1481 42.9874 11.4764L49.779 14.2375Z" fill="#64151A"/> <path d="M71.255 24.2881L67.6999 34.0688L71.2527 43.8436C72.6483 40.7728 73.3706 37.439 73.3709 34.0661C73.3713 30.6931 72.6498 27.3591 71.255 24.2881Z" fill="#591010"/> <path d="M62.5631 14.2373L61.1356 20.1737L67.6999 18.7238C66.2128 16.9885 64.4826 15.4774 62.5631 14.2373Z" fill="#69181D"/> <path d="M67.7 49.402L61.1357 47.9521L62.5631 53.8885C64.4828 52.6486 66.213 51.1374 67.7 49.402Z" fill="#360406"/> <path d="M42.0776 20.1748L44.9468 28.1404L38.4385 26.0809V20.1748H42.0776Z" fill="#661016"/> <path d="M57.4965 20.1748L54.627 28.1404L61.1353 26.0809V20.1748H57.4965Z" fill="#661016"/> <path d="M42.0776 47.9529L44.9468 39.9873L38.4385 42.0468V47.9529H42.0776Z" fill="#360406"/> <path d="M57.4965 47.9529L54.627 39.9873L61.1353 42.0468V47.9529H57.4965Z" fill="#360406"/> <path d="M67.6995 18.7236V34.0685L61.1352 20.1735L67.6995 18.7236Z" fill="#7A181F"/> <path d="M67.6999 18.7236V34.0685L71.255 24.2877C70.3365 22.2756 69.1398 20.4026 67.6999 18.7236Z" fill="#6E1418"/> <path d="M67.6996 49.4024V34.0576L61.1352 47.9525L67.6996 49.4024Z" fill="#4D0E11"/> <path d="M67.6999 49.4026V34.0566L71.255 43.8374C70.3366 45.8499 69.1399 47.7233 67.6999 49.4026Z" fill="#571523"/> <path d="M38.4385 20.1748L31.8742 34.0637L38.4385 47.9531V20.1748Z" fill="#781F27"/> <path d="M61.1352 34.0695L67.6995 34.0635L61.1352 47.9528V34.0695Z" fill="#691B23"/> <path d="M38.4385 34.0695L31.8742 34.0635L38.4385 47.9528V34.0695Z" fill="#661B22"/> <path d="M28.3191 24.2881L31.8742 34.0688L28.3232 43.8436C26.9277 40.7728 26.2055 37.439 26.205 34.0661C26.2046 30.6932 26.9259 27.3592 28.3206 24.2881H28.3191Z" fill="#440F12"/> <path d="M31.8742 49.402L38.4385 47.9521L37.0114 53.8885C35.0916 52.6486 33.3613 51.1374 31.8742 49.402Z" fill="#26080A"/> <path d="M31.8742 18.7236V34.0685L38.4385 20.1735L31.8742 18.7236Z" fill="#4B1316"/> <path d="M31.8742 18.7236V34.0685L28.3191 24.2877C29.2377 22.2757 30.4344 20.4027 31.8742 18.7236Z" fill="#6C1217"/> <path d="M31.8741 49.4024V34.0576L38.4385 47.9525L31.8741 49.4024Z" fill="#4D0E11"/> <path d="M31.8742 49.4026V34.0566L28.3191 43.8374C29.2376 45.8498 30.4343 47.7232 31.8742 49.4026Z" fill="#570B0E"/> <path d="M62.5627 14.2373H49.7869L61.1352 20.1741L62.5627 14.2373Z" fill="#912220"/> <path d="M49.7862 14.238H62.562C60.7074 13.04 58.693 12.1097 56.5785 11.4746L49.7862 14.238Z" fill="#851821"/> <path d="M37.0114 14.2373L38.4385 20.1737L31.8742 18.7238C33.3614 16.9885 35.0917 15.4774 37.0114 14.2373Z" fill="#69181D"/> <path d="M37.011 14.2373H49.7869L38.4385 20.1741L37.011 14.2373Z" fill="#912220"/> <path d="M37.0114 14.238H49.7861L42.9937 11.4746C40.8796 12.1097 38.8656 13.04 37.0114 14.238Z" fill="#871B22"/> <path d="M61.1352 47.9521L49.7869 53.8889L38.4385 47.9521H61.1352Z" fill="#26080A"/> <path d="M49.7791 53.8896L56.5778 56.6538C52.1446 57.9799 47.4201 57.9789 42.9875 56.6508L49.7791 53.8896Z" fill="#26080A"/> <path d="M62.5627 53.8889H49.7869L61.1353 47.9521L62.5627 53.8889Z" fill="#3B0704"/> <path d="M49.7862 53.8896H62.562C60.7074 55.0877 58.6931 56.018 56.5785 56.653L49.7862 53.8896Z" fill="#4B1316"/> <path d="M37.011 53.8889H49.7868L38.4385 47.9521L37.011 53.8889Z" fill="#42190E"/> <path d="M37.0114 53.8896H49.7861L42.9937 56.653C40.8795 56.0181 38.8655 55.0878 37.0114 53.8896Z" fill="#3B0606"/> <path d="M64.9911 36.3946C64.9977 38.1978 64.6411 39.9839 63.9424 41.6464C63.2438 43.3088 62.2175 44.8135 60.9247 46.0706C58.3083 48.6284 54.8108 50.0387 51.0756 50.0387C44.8653 50.0387 39.4884 46.0905 37.7373 40.3455H34.9313L34.7601 39.5575L33.4855 33.6566L33.2239 32.4445H37.8068C38.0154 31.8307 38.2642 31.2313 38.5517 30.6503H32.849L32.6789 29.8631L31.4039 23.9634L31.1423 22.7512H50.691C54.6549 22.7512 58.2915 24.1589 60.9345 26.7133C63.5509 29.2438 64.9911 32.6818 64.9911 36.3946Z" fill="black"/> <path d="M56.0921 11.1641L59.0947 12.0712L61.124 10.7204L59.2461 5.58613C57.0079 4.84364 54.6896 4.36899 52.3397 4.17212L56.0921 11.1641Z" fill="black"/> <path d="M64.6763 35.5725C64.6763 39.1746 63.2597 42.5476 60.6896 45.0642C58.1239 47.5738 54.6926 48.9546 51.0266 48.9546C47.5471 48.9546 44.3359 47.6923 41.9011 45.5599C40.0367 43.9318 38.6654 41.8143 37.9424 39.4471H35.1888L33.515 31.6975H38.0119C38.216 31.0951 38.4603 30.5071 38.743 29.9373H33.1479L31.4708 22.1877H50.6509C58.6446 22.1877 64.6763 27.9425 64.6763 35.5725Z" fill="#82003B"/> <path d="M56.3612 27.2004L58.2675 24.2101C56.0996 22.9232 53.5033 22.1887 50.6532 22.1887H31.4708L37.6901 27.2007L56.3612 27.2004Z" fill="#AD0C81"/> <path d="M62.292 43.1714L59.1574 41.0569L51.0262 44.8448L38.6914 38.4651H35.9823L35.1902 39.4466H37.9439C38.667 41.8138 40.0383 43.9313 41.9026 45.5594C44.3378 47.69 47.5467 48.9541 51.0281 48.9541C54.6941 48.9541 58.1254 47.5734 60.6911 45.0638C61.2821 44.4839 61.818 43.8503 62.292 43.1714Z" fill="#AE0A81"/> <path d="M51.0262 43.4034C55.3514 43.4034 58.8577 39.8971 58.8577 35.5719C58.8577 31.2467 55.3514 27.7405 51.0262 27.7405C46.7011 27.7405 43.1948 31.2467 43.1948 35.5719C43.1948 39.8971 46.7011 43.4034 51.0262 43.4034Z" fill="#42001C"/> <path d="M53.642 28.189C52.8018 27.8913 51.9169 27.7396 51.0255 27.7405C46.7005 27.7405 43.194 31.2469 43.194 35.5719C43.194 35.6601 43.1978 35.7476 43.2008 35.8336L51.0255 35.5719L53.642 28.189Z" fill="black"/> <path d="M58.8513 35.3079L51.0262 35.5695L48.4098 42.9521C49.25 43.2496 50.1349 43.4013 51.0262 43.4006C55.3516 43.4006 58.8577 39.8945 58.8577 35.5691C58.8577 35.4828 58.8539 35.3953 58.8513 35.3079Z" fill="#63003A"/> <path d="M56.2367 39.6293L51.0262 35.5715L53.3209 41.7643L54.4288 42.627C55.2899 42.21 56.0675 41.639 56.7234 40.9424L56.2367 39.6293Z" fill="#7A003E"/> <path d="M54.1522 35.5718C54.1522 37.3495 52.8185 38.6741 51.0262 38.6741C49.234 38.6741 47.9007 37.351 47.9007 35.5718C47.9007 33.7926 49.2343 32.4694 51.0262 32.4694C52.8181 32.4694 54.1522 33.7937 54.1522 35.5718ZM63.6963 35.5718C63.6963 39.335 62.0251 42.6803 59.3638 44.9458C57.142 46.8368 54.231 47.9734 51.0262 47.9734C47.7026 47.9734 44.7067 46.7601 42.4614 44.7537C40.5951 43.0893 39.2796 40.8961 38.69 38.4659H35.9808L34.7305 32.6776H38.73C39.1021 31.3557 39.6787 30.1002 40.4389 28.9566H33.9377L32.6874 23.1682H50.6506C58.2365 23.1682 63.6963 28.6673 63.6963 35.5718ZM57.6949 35.5718C57.6949 31.8919 54.7356 28.9558 51.0262 28.9558C47.3168 28.9558 44.358 31.8911 44.358 35.5718C44.358 39.2524 47.3172 42.1877 51.0262 42.1877C54.7353 42.1877 57.6949 39.2509 57.6949 35.5718Z" fill="#FF3D6A"/> <path d="M33.5146 31.6985L34.7305 32.6778L35.9808 38.4662L35.1884 39.4481L33.5146 31.6985Z" fill="#A8003F"/> <path d="M33.5146 31.6985H38.0112L38.7315 32.6778H34.7305L33.5146 31.6985Z" fill="#AD0C81"/> <path d="M33.1479 29.9375L33.9385 28.9563H40.4401L38.7423 29.9375H33.1479Z" fill="#4D0038"/> <path d="M33.1479 29.9373L33.9384 28.9562L32.6881 23.1682L31.4715 22.1877L33.1479 29.9373Z" fill="#A8003F"/> <path d="M52.1569 23.2444L33.7258 27.9705L33.9389 28.9565H40.4415C39.6814 30.1001 39.1048 31.3556 38.7326 32.6775H34.7332L35.1443 34.5838L45.4375 31.9445C46.6224 30.1391 48.6737 28.9543 51.0281 28.9543C52.1131 28.9515 53.1827 29.211 54.1458 29.7108L61.0667 27.9361C59.0162 25.3656 55.8977 23.6163 52.1569 23.2444Z" fill="#FF82C1"/> <path d="M63.6667 36.3948L57.2172 38.0484C56.2375 40.4839 53.8501 42.1861 51.0262 42.1861C49.4955 42.1924 48.009 41.6734 46.8148 40.7157L40.3918 42.3626C40.9765 43.2452 41.6721 44.0491 42.4614 44.7548C43.3582 45.5543 44.3653 46.2208 45.4517 46.7339L61.4768 42.6246C62.7658 40.7889 63.5236 38.6333 63.6667 36.3948Z" fill="#FE7192"/> <path d="M51.1656 60.5881L53.1407 62.5195L56.8833 60.8928L56.936 56.6575L52.7029 56.8055L51.1656 60.5881Z" fill="#9FFFFC"/> <path d="M55.1396 59.7339L53.5241 60.4362L53.2386 60.1567L53.9028 58.5225L55.1553 58.4788L55.1396 59.7339Z" fill="#FFC2DE"/> <path d="M53.1407 62.5205L53.5242 60.4371L53.2386 60.1575L51.1656 60.5892L53.1407 62.5205Z" fill="#DB144C"/> <path d="M53.1407 62.5194L56.8833 60.8927L55.1396 59.7336L53.5242 60.436L53.1407 62.5194Z" fill="#540015"/> <path d="M51.1656 60.5886L53.2386 60.1569L53.9028 58.5227L52.703 56.8059L51.1656 60.5886Z" fill="#540015"/> <path d="M52.7029 56.8055L53.9028 58.5223L55.1553 58.4785L56.936 56.6575L52.7029 56.8055Z" fill="white"/> <path d="M55.1554 58.4785L55.1397 59.7337L56.8834 60.8928L56.9361 56.6575L55.1554 58.4785Z" fill="#DB144C"/> <path d="M51.1574 60.5852H48.3951L46.8563 56.8055L49.7796 53.7405L52.7029 56.8055L51.1574 60.5852Z" fill="#9FFFFC"/> <path d="M48.9135 57.1966L49.5777 58.8278H49.9769L50.6445 57.1951L49.7796 56.2883L48.9135 57.1966Z" fill="white"/> <path d="M48.3951 60.5853L49.5778 58.8274H49.977L51.1574 60.5853H48.3951Z" fill="#FF54A0"/> <path d="M48.3951 60.5856L46.8563 56.8059L48.9136 57.1965L49.5778 58.8277L48.3951 60.5856Z" fill="#DB144C"/> <path d="M51.1574 60.5856L49.977 58.8277L50.6446 57.195L52.703 56.8059L51.1574 60.5856Z" fill="#DB144C"/> <path d="M52.703 56.8055L50.6446 57.1946L49.7796 56.2878V53.7405L52.703 56.8055Z" fill="#FF54A0"/> <path d="M49.7796 56.2878L48.9136 57.1961L46.8563 56.8055L49.7796 53.7405V56.2878Z" fill="#FFD580"/> <path d="M48.394 60.5881L46.419 62.5195L42.6763 60.8928L42.6236 56.6575L46.8567 56.8055L48.394 60.5881Z" fill="#9FFFFC"/> <path d="M44.42 59.7339L46.0351 60.4362L46.321 60.1567L45.6568 58.5225L44.4043 58.4788L44.42 59.7339Z" fill="#DB144C"/> <path d="M46.419 62.5205L46.0351 60.4371L46.3211 60.1575L48.394 60.5892L46.419 62.5205Z" fill="#DB144C"/> <path d="M46.419 62.5194L42.6763 60.8927L44.42 59.7336L46.0351 60.436L46.419 62.5194Z" fill="#FF54A0"/> <path d="M48.394 60.5886L46.3211 60.1569L45.6568 58.5227L46.8567 56.8059L48.394 60.5886Z" fill="#FF8282"/> <path d="M46.8567 56.8055L45.6568 58.5223L44.4043 58.4785L42.6236 56.6575L46.8567 56.8055Z" fill="white"/> <path d="M44.4043 58.4785L44.42 59.7337L42.6763 60.8928L42.6236 56.6575L44.4043 58.4785Z" fill="#FFD580"/> <path d="M43.4693 0.115479L43.0581 1.31718C37.2892 2.92182 31.7583 7.51633 27.5088 11.7655C23.2593 16.0146 18.6502 21.557 17.043 27.3308L15.8416 27.742L16.6639 29.0151L21.4932 27.8328C21.538 27.629 21.5869 27.4319 21.6397 27.2415C24.2259 16.5387 32.7754 8.13793 43.5597 5.76629L44.7401 0.937796L43.4693 0.115479Z" fill="#FF7752"/> <path d="M25.3865 9.64689C20.3819 14.6514 17.1065 20.9235 15.8551 27.7379L20.5191 26.5926C21.8782 21.523 24.547 16.4258 28.3577 12.6132C32.1684 8.80065 37.2593 6.13746 42.3247 4.77764L43.4693 0.115479C36.6567 1.36877 30.3869 4.64308 25.3865 9.64689Z" fill="#FFB97D"/> <path d="M56.0922 0.115479L56.5034 1.31718C62.2704 2.92257 67.8024 7.51634 72.0523 11.7662C76.3022 16.0161 80.9109 21.557 82.5163 27.3308L83.7176 27.742L82.8953 29.0151L78.0664 27.8328C78.0216 27.629 77.9726 27.4319 77.9195 27.2415C75.3333 16.5387 66.7838 8.13793 55.9999 5.76629L54.8191 0.937796L56.0922 0.115479Z" fill="#FF7752"/> <path d="M74.1739 9.64622C69.1716 4.64429 62.9036 1.36997 56.0922 0.117432L57.2371 4.78035C62.3022 6.14016 67.3961 8.8082 71.2038 12.6159C75.0115 16.4236 77.6837 21.5242 79.0424 26.5953L83.7045 27.7372C82.4546 20.9209 79.1784 14.6489 74.1739 9.64622Z" fill="#FFB97D"/> <path d="M56.0922 67.9899L56.5034 66.7882C62.2719 65.1836 67.8031 60.5891 72.0526 56.3399C76.3022 52.0908 80.9113 46.5491 82.5166 40.7753L83.718 40.3642L82.8956 39.0911L78.0668 40.2733C78.0219 40.4769 77.973 40.674 77.9199 40.8647C75.3337 51.5675 66.7842 59.9682 56.0003 62.3398L54.818 67.1687L56.0922 67.9899Z" fill="#FFB97D"/> <path d="M74.1738 58.4623C79.1784 53.4574 82.4535 47.1854 83.7053 40.3713L79.0431 41.5159C77.6844 46.5851 75.0152 51.6827 71.2045 55.4934C67.3938 59.3041 62.3029 61.9695 57.2378 63.3293L56.093 67.9922C62.9036 66.7371 69.1715 63.4628 74.1738 58.4623Z" fill="#FF7752"/> <path d="M43.4692 67.9899L43.0581 66.7882C37.2891 65.1836 31.7583 60.5891 27.5088 56.3399C23.2593 52.0908 18.6502 46.5491 17.0429 40.7753L15.8416 40.3642L16.6639 39.0911L21.4932 40.2733C21.538 40.4769 21.5869 40.674 21.6397 40.8647C24.2259 51.5675 32.7754 59.9682 43.5597 62.3398L44.7401 67.1691L43.4692 67.9899Z" fill="#FFB97D"/> <path d="M42.3233 63.3274C37.2578 61.9676 32.1643 59.2995 28.3562 55.4914C24.5481 51.6834 21.8767 46.5835 20.5192 41.5139L15.857 40.3694C17.108 47.1845 20.3835 53.4566 25.3884 58.4604C30.3933 63.4642 36.6586 66.7366 43.4697 67.9892L42.3233 63.3274Z" fill="#FF7752"/> <path d="M34.1012 61.5169L33.4852 61.1805L33.3121 61.0628C28.3728 57.8454 24.298 53.4657 21.4449 48.3075L21.3171 48.081C21.1923 47.8451 21.0106 47.5005 21.0106 47.5005L16.3701 46.9211L15.0645 47.6646H15.0727L19.7674 49.0427C22.911 54.7662 27.4722 59.586 33.0138 63.0401L33.4654 63.3208L34.6091 68.0532L35.387 66.9835L34.1012 61.5169Z" fill="#FAFF59"/> <path d="M33.2837 62.5867C27.6958 59.1024 23.1194 54.2135 20.0115 48.4078L15.0645 47.6643C18.9801 56.5416 25.8966 63.7566 34.6005 68.0436L33.2837 62.5867Z" fill="#FF66CC"/> <path d="M32.8068 65.7262C26.0887 61.8439 20.6384 56.0995 17.1143 49.1868L19.2449 49.5067C22.3658 55.1195 26.8275 59.8725 32.2319 63.3418L32.8068 65.7262Z" fill="#DB144C"/> <path d="M83.1816 46.9211L78.5407 47.5013C78.5407 47.5013 78.3594 47.8459 78.2316 48.0817L78.1038 48.3082C75.2509 53.4657 71.1773 57.8452 66.2396 61.0635L66.0665 61.1813L65.4505 61.5177L64.1617 66.9846L64.9426 68.0543L66.083 63.3301L66.5371 63.049C72.078 59.5949 76.6384 54.775 79.7809 49.0517L84.4782 47.6646H84.4868L83.1816 46.9211Z" fill="#FAFF59"/> <path d="M79.5391 48.4078C76.4361 54.2141 71.8622 59.1034 66.2755 62.5864L64.9613 68.0436C73.6642 63.7549 80.5803 56.5405 84.4977 47.6643L79.5391 48.4078Z" fill="#FF66CC"/> <path d="M67.3262 63.3412C72.7301 59.8739 77.1898 55.1204 80.3057 49.5065L82.4456 49.1858C78.9203 56.0984 73.4697 61.8431 66.7517 65.7263L67.3262 63.3412Z" fill="#DB144C"/> <path d="M17.632 25.9108C19.0808 20.1341 22.0651 14.8753 26.3411 10.5997C30.6172 6.32398 35.8692 3.34308 41.6415 1.89356C41.6415 1.89356 42.4948 1.70181 43.1093 1.57622L43.4693 0.115479C36.6567 1.36877 30.3869 4.64308 25.3865 9.64689C20.7423 14.2911 17.5887 20.0268 16.1586 26.2749L17.632 25.9108Z" fill="#FFF280"/> <path d="M81.928 25.9111C80.4796 20.1343 77.4949 14.8756 73.2189 10.5999C68.9428 6.3242 63.6908 3.34331 57.9189 1.89378C57.9189 1.89378 57.0652 1.70203 56.4507 1.57644L56.0922 0.116455C62.9036 1.36899 69.1716 4.64331 74.1739 9.64524C78.8177 14.2895 81.9713 20.0251 83.4018 26.2733L81.928 25.9111Z" fill="#FFF280"/> <path d="M44.3702 13.6801L49.7796 18.8655L55.189 13.6801L49.7796 11.468L44.3702 13.6801Z" fill="#FF54A0"/> <path d="M49.7796 18.8655V11.468L55.189 13.6801L49.7796 18.8655Z" fill="#540015"/> <path d="M49.7796 15.466L55.189 13.6801L49.7796 11.468V15.466Z" fill="#FF8282"/> <path d="M49.7796 15.466L44.3702 13.6801L49.7796 11.468V15.466Z" fill="#820037"/> <path d="M49.7796 7.51501V11.4681L44.3702 13.6704L39.9839 9.48671L44.3702 5.30298L49.7796 7.51501Z" fill="#9FFFFC"/> <path d="M44.929 10.7271L47.2636 9.77654V9.20465L44.9271 8.24927L43.629 9.48723L44.929 10.7271Z" fill="#FFD580"/> <path d="M49.7796 11.468L47.2637 9.77589V9.20401L49.7796 7.51489V11.468Z" fill="#FF54A0"/> <path d="M49.7795 11.4687L44.3702 13.671L44.929 10.7271L47.2636 9.77661L49.7795 11.4687Z" fill="#DB144C"/> <path d="M49.7796 7.51501L47.2637 9.20413L44.9272 8.24874L44.3702 5.30298L49.7796 7.51501Z" fill="#DB144C"/> <path d="M44.3702 5.30298L44.9272 8.24874L43.629 9.48671H39.9839L44.3702 5.30298Z" fill="white"/> <path d="M43.629 9.48657L44.9291 10.7264L44.3702 13.6703L39.9839 9.48657H43.629Z" fill="#FF54A0"/> <path d="M49.7796 7.51501V11.4681L55.1893 13.6704L59.5756 9.48671L55.1893 5.30298L49.7796 7.51501Z" fill="#9FFFFC"/> <path d="M54.6305 10.7271L52.2955 9.77654V9.20465L54.6323 8.24927L55.9305 9.48723L54.6305 10.7271Z" fill="#FF54A0"/> <path d="M49.7796 11.468L52.2955 9.77589V9.20401L49.7796 7.51489V11.468Z" fill="white"/> <path d="M49.7796 11.4687L55.1893 13.671L54.6305 10.7271L52.2955 9.77661L49.7796 11.4687Z" fill="#540015"/> <path d="M49.7796 7.51501L52.2955 9.20413L54.6324 8.24874L55.1893 5.30298L49.7796 7.51501Z" fill="#FF8282"/> <path d="M55.1893 5.30298L54.6324 8.24874L55.9305 9.48671H59.5756L55.1893 5.30298Z" fill="#820037"/> <path d="M55.9305 9.48657L54.6305 10.7264L55.1893 13.6703L59.5756 9.48657H55.9305Z" fill="#DB144C"/> <path d="M44.3702 5.30289L49.7796 0.117432L55.1893 5.30289L49.7796 7.51493L44.3702 5.30289Z" fill="#FDFF7D"/> <path d="M49.7796 0.117432V7.51493L55.1893 5.30289L49.7796 0.117432Z" fill="#FF54A0"/> <path d="M49.7796 3.51685L55.1893 5.30277L49.7796 7.5148V3.51685Z" fill="#DB144C"/> <path d="M49.7796 3.51685L44.3702 5.30277L49.7796 7.5148V3.51685Z" fill="#FF8282"/> </svg>` },
  nitroopal: { label: "Nitro Opal", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="104" height="69" viewBox="0 0 104 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.807 -0.000732422C15.807 -0.000732422 9.48035 2.31671 9.75171 9.10644L19.7997 17.7882L26.5804 10.6995C26.5804 10.6995 18.3767 7.47862 15.8167 -0.000732422H15.807Z" fill="#87C6D6"/> <path d="M12.4392 10.5728C12.5469 10.9802 12.6291 11.3334 12.6833 11.641L9.75172 9.10644C9.48783 2.31671 15.807 -0.000732422 15.807 -0.000732422C15.807 -0.000732422 10.5475 3.28518 12.4321 10.5728H12.4392Z" fill="#77ACAB"/> <path d="M15.5079 4.48853C15.5079 4.48853 15.0197 9.51288 21.8543 13.6136L22.7514 11.4412C22.7514 11.4412 17.69 8.9709 15.5079 4.48853Z" fill="#C7FBF4"/> <path d="M22.569 48.8674L14.2867 49.7458L17.3353 56.1457L27.8113 55.7928L22.569 48.8674Z" fill="#18388A"/> <path d="M15.6604 48.6487L13.3531 49.074C12.9102 54.8303 16.8214 57.7921 16.8214 57.7921L18.2945 55.2302C15.5696 52.5596 15.6604 48.6487 15.6604 48.6487Z" fill="#4949BA"/> <path d="M27.8001 55.7924L18.2859 55.2317L16.8102 57.794L27.9115 56.8793L27.7922 55.7931L27.8001 55.7924Z" fill="#360C72"/> <path d="M17.6617 40.0667L7.96582 41.0901L11.5421 48.5855L23.7924 48.1784L17.6617 40.0667Z" fill="#3E78CF"/> <path d="M9.58645 39.8147L6.88999 40.3126C6.3667 47.0477 10.9459 50.5243 10.9459 50.5243L12.6746 47.5277C9.4788 44.4043 9.59504 39.8147 9.59504 39.8147H9.58645Z" fill="#4949BA"/> <path d="M23.7894 48.179L12.6548 47.5178L10.9355 50.5148L23.9266 49.4462L23.7894 48.179Z" fill="#061778"/> <path d="M22.9293 29.7475L6.25424 23.9446V37.9494L23.3663 39.6422H23.3749V39.6333L22.9293 29.7475Z" fill="#82BBF0"/> <path d="M8.01099 29.7463C8.01099 29.7463 9.75952 34.0284 22.4613 36.2823L23.1113 34.3812L8.01099 29.7463Z" fill="#90F0E7"/> <path d="M6.26583 23.9442L5.40613 23.0471C1.63095 34.1641 5.40613 40.7094 5.40613 40.7094L8.7182 37.1338C6.29161 32.6252 6.27442 23.9434 6.27442 23.9434L6.26583 23.9442Z" fill="#6666CC"/> <path d="M8.70959 37.1252L23.8103 39.8049L23.376 41.8326L5.3949 40.7012L8.70959 37.1252Z" fill="#2A3296"/> <path d="M2.98627 0.107666C2.98627 0.107666 -0.527277 5.54842 0.307001 13.6961C0.311213 13.778 0.319703 13.8595 0.332425 13.9405C0.629624 16.7901 1.69391 19.5058 3.41201 21.7985C5.12947 24.0893 7.42988 25.8776 10.0735 26.9769L23.8178 32.6341L24.6951 26.5325L2.98627 0.107666Z" fill="#29668E"/> <path d="M0.308119 13.6953C0.31233 13.7772 0.320803 13.8588 0.333524 13.9397C0.631569 16.7877 1.69252 19.5024 3.40451 21.7977L5.04915 16.1305L3.57346 0.812938L2.99449 0.0979004C2.99449 0.0979004 -0.516453 5.53865 0.314835 13.6863L0.308119 13.6953Z" fill="#50A3A2"/> <path d="M28.0356 24.2789L2.98629 0.107666C2.98629 0.107666 -1.39628 14.0041 6.83213 19.9337C14.0939 25.1584 26.1454 29.1579 26.1454 29.1579L28.0356 24.2872V24.2789Z" fill="#BBC0ED"/> <path d="M2.98627 0.107666C2.98627 0.107666 5.00467 8.97972 12.5087 15.0451C20.0135 21.1003 26.3431 24.7768 26.3431 24.7768L26.9037 22.9845L2.98627 0.107666Z" fill="#C7FBF4"/> <path d="M28.0269 25.6009L2.78851 10.2385C2.78851 10.2385 4.2571 15.1631 10.9261 19.0287C17.4459 22.8129 27.9279 26.5152 27.9279 26.5152L28.0355 25.6099L28.0269 25.6009Z" fill="#AEFCD0"/> <path d="M88.1821 -0.000732422C85.622 7.47488 77.4191 10.6995 77.4191 10.6995L84.1998 17.7882L94.2478 9.10644C94.5203 2.31671 88.1925 -0.000732422 88.1925 -0.000732422H88.1821Z" fill="#87C6D6"/> <path d="M91.5681 10.5728C93.4527 3.28406 88.1933 -0.000732422 88.1933 -0.000732422C88.1933 -0.000732422 94.5102 2.31671 94.2485 9.10644L91.3162 11.641C91.3704 11.3334 91.4527 10.9802 91.5607 10.5728H91.5681Z" fill="#77ACAB"/> <path d="M81.248 11.4408L82.1451 13.6133C88.9797 9.51401 88.4915 4.48853 88.4915 4.48853C86.3087 8.9709 81.248 11.4408 81.248 11.4408Z" fill="#C7FBF4"/> <path d="M76.1874 55.7932L86.6638 56.1461L89.712 49.7458L81.4297 48.8674L76.1874 55.7932Z" fill="#18388A"/> <path d="M85.7039 55.2302L87.177 57.7921C87.177 57.7921 91.0882 54.8318 90.6453 49.074L88.3379 48.6487C88.3379 48.6487 88.4292 52.5596 85.7039 55.2302Z" fill="#4949BA"/> <path d="M76.2072 55.7921L76.088 56.8783L87.1893 57.793L85.7136 55.2307L76.1994 55.7914L76.2072 55.7921Z" fill="#360C72"/> <path d="M80.2064 48.1784L92.4567 48.5855L96.033 41.0901L86.3371 40.0667L80.2064 48.1784Z" fill="#3E78CF"/> <path d="M94.4036 39.8147C94.4036 39.8147 94.5202 44.4043 91.324 47.5277L93.0528 50.5243C93.0528 50.5243 97.6338 47.0481 97.1087 40.3126L94.4129 39.8147H94.4036Z" fill="#4949BA"/> <path d="M80.0729 49.4462L93.064 50.5148L91.3446 47.5178L80.2093 48.179L80.0729 49.4462Z" fill="#061778"/> <path d="M81.069 29.7475L97.7445 23.9446V37.9494L80.632 39.6422H80.6235V39.6333L81.069 29.7475Z" fill="#82BBF0"/> <path d="M80.8878 34.3812L81.5378 36.2823C94.2392 34.0284 95.9877 29.7463 95.9877 29.7463L80.8878 34.3812Z" fill="#90F0E7"/> <path d="M97.7247 23.9434C97.7247 23.9434 97.7075 32.6252 95.2809 37.1338L98.593 40.7094C98.593 40.7094 102.368 34.1641 98.593 23.0471L97.7333 23.9442L97.7247 23.9434Z" fill="#6666CC"/> <path d="M98.6046 40.7012L80.6235 41.8326L80.1895 39.8049L95.2903 37.1252L98.6046 40.7012Z" fill="#2A3296"/> <path d="M79.3036 26.533L80.1809 32.6338L93.9241 26.9759C96.5678 25.8767 98.8682 24.0884 100.586 21.7976C102.304 19.5048 103.368 16.7892 103.665 13.9396C103.678 13.8586 103.687 13.777 103.691 13.6951C104.525 5.5467 101.011 0.106689 101.011 0.106689L79.3036 26.533Z" fill="#29668E"/> <path d="M103.683 13.6863C104.514 5.53791 101.003 0.0979004 101.003 0.0979004L100.424 0.812938L98.9484 16.1305L100.593 21.7977C102.305 19.5024 103.366 16.7877 103.664 13.9397C103.677 13.8588 103.686 13.7772 103.69 13.6953L103.683 13.6863Z" fill="#50A3A2"/> <path d="M75.9632 24.2877L77.8545 29.1577C77.8545 29.1577 89.906 25.156 97.1667 19.9328C105.395 14.0031 101.012 0.106689 101.012 0.106689L75.9632 24.2787V24.2877Z" fill="#BBC0ED"/> <path d="M77.0927 22.9845L77.6534 24.7768C77.6534 24.7768 83.9826 21.1014 91.4874 15.0451C98.9918 8.97972 101.01 0.107666 101.01 0.107666L77.0927 22.9845Z" fill="#C7FBF4"/> <path d="M75.9632 25.6103L76.0708 26.5156C76.0708 26.5156 86.5531 22.8133 93.0726 19.0291C99.7427 15.1635 101.21 10.2385 101.21 10.2385L75.9718 25.6009L75.9632 25.6103Z" fill="#AEFCD0"/> <path d="M52.0063 64.177C68.5749 64.177 82.0064 50.7456 82.0064 34.177C82.0064 17.6085 68.5749 4.177 52.0063 4.177C35.4378 4.177 22.0063 17.6085 22.0063 34.177C22.0063 50.7456 35.4378 64.177 52.0063 64.177Z" fill="#AEFCF0"/> <path d="M52.0064 34.1764L40.5261 6.46021C32.8722 9.63061 27.2281 15.6029 24.2902 22.6961L52.0064 34.1764Z" fill="#C7FBF4"/> <path d="M30.7928 12.9636L52.0064 34.1764H52.0086L34.035 10.1536C32.8889 11.0121 31.8055 11.9511 30.7928 12.9636Z" fill="#F8B7E1"/> <path d="M24.2917 22.6962L52.0068 34.1769L30.7955 12.9641C28.0094 15.7489 25.7983 19.0544 24.2879 22.6925L24.2917 22.6962Z" fill="#FBEFA2"/> <path d="M52.0064 64.177C35.4378 64.177 22.0063 50.7456 22.0063 34.177H52.0064V64.177Z" fill="#FE9679"/> <path d="M52.0064 34.177V64.177C68.575 64.177 82.006 50.7456 82.006 34.177H52.0064Z" fill="#7EE6FC"/> <path d="M79.7233 45.658L52.0071 34.177L73.2196 55.3898C76.0057 52.605 78.2169 49.2995 79.7275 45.6614L79.7233 45.658Z" fill="#5F9BDD"/> <path d="M79.7233 22.6977L52.0071 34.1772H82.0064C82.0073 30.238 81.2335 26.3371 79.7289 22.6965L79.7233 22.6977Z" fill="#7EE6FC"/> <path d="M30.7955 55.3902L52.0068 34.177L24.2917 45.6592C25.7988 49.2986 28.0067 52.6062 30.7899 55.3939L30.7955 55.3902Z" fill="#7C80F4"/> <path d="M22.0079 34.1771H52.0068L24.2917 22.6975C22.7837 26.3365 22.006 30.2365 22.0026 34.1756L22.0079 34.1771Z" fill="#FE9679"/> <path d="M52.0064 34.177V64.177C60.2905 64.177 67.7904 60.819 73.2196 55.3902L52.0064 34.177Z" fill="#5E50CC"/> <path d="M52.0064 34.177V64.177C48.066 64.1823 44.1633 63.4088 40.5228 61.9008C36.8823 60.3929 33.5758 58.1803 30.7932 55.3902L52.0064 34.177Z" fill="#1C66BA"/> <path d="M52.0064 34.177V64.177C48.2301 64.1816 44.4871 63.4714 40.975 62.0838" fill="#1C3EBA"/> <path d="M44.8956 61.0069L49.0737 63.5632L49.0565 63.5725L56.2716 63.2825L59.9275 61.7231V58.593L44.8956 61.0069Z" fill="#000002"/> <path d="M52.0064 60.1214C66.3353 60.1214 77.9513 48.5055 77.9513 34.1766C77.9513 19.8476 66.3353 8.23169 52.0064 8.23169C37.6774 8.23169 26.0615 19.8476 26.0615 34.1766C26.0615 48.5055 37.6774 60.1214 52.0064 60.1214Z" fill="#360C72"/> <path d="M26.0615 34.177C26.0615 48.5063 37.6775 60.1222 52.0064 60.1222C66.3352 60.1222 77.9512 48.5063 77.9512 34.177H26.0615Z" fill="white"/> <path d="M52.0064 34.177V60.1222C66.3353 60.1222 77.9513 48.5063 77.9513 34.177H52.0064Z" fill="#FEC2B2"/> <path d="M52.0063 58.2873C65.3221 58.2873 76.1167 47.4928 76.1167 34.177C76.1167 20.8612 65.3221 10.0667 52.0063 10.0667C38.6906 10.0667 27.896 20.8612 27.896 34.177C27.896 47.4928 38.6906 58.2873 52.0063 58.2873Z" fill="black"/> <path d="M52.0063 57.7604C65.0312 57.7604 75.5901 47.2016 75.5901 34.1767C75.5901 21.1518 65.0312 10.593 52.0063 10.593C38.9814 10.593 28.4227 21.1518 28.4227 34.1767C28.4227 47.2016 38.9814 57.7604 52.0063 57.7604Z" fill="url(#nitroopal_paint0_linear_2_669)"/> <path d="M67.2103 36.509C67.2169 38.3122 66.8603 40.0983 66.1618 41.7607C65.4632 43.4231 64.437 44.9278 63.1443 46.1851C60.5278 48.7428 57.0304 50.1531 53.2952 50.1531C47.0852 50.1531 41.708 46.2049 39.9568 40.4599H37.1497L36.9796 39.6719L35.7047 33.7711L35.443 32.5589H40.0278C40.2364 31.9451 40.4853 31.3458 40.7728 30.7647H35.0681L34.898 29.9776L33.6235 24.0767L33.3618 22.8645H52.9105C56.8726 22.8645 60.511 24.2722 63.1521 26.8266C65.7701 29.3582 67.2103 32.7962 67.2103 36.509Z" fill="black"/> <path d="M63.8795 7.76095L61.4966 10.0234L61.8637 12.1682L55.943 10.5336L58.3057 5.79224C58.3057 5.79224 62.3399 6.32974 63.8795 7.76095Z" fill="black"/> <path d="M66.8956 35.6891C66.8956 39.2913 65.4793 42.6642 62.9088 45.1809C60.3436 47.6905 56.9119 49.0712 53.2459 49.0712C49.7667 49.0712 46.5552 47.809 44.1208 45.6765C42.2562 44.0486 40.8849 41.931 40.162 39.5637H37.408L35.7342 31.8141H40.2308C40.4349 31.2122 40.6793 30.6247 40.9623 30.0555H35.3676L33.6912 22.3059H52.8717C60.8658 22.3044 66.8956 28.0591 66.8956 35.6891Z" fill="#4E11A6"/> <path d="M58.5805 27.3166L60.4867 24.3263C58.3188 23.0394 55.7222 22.3049 52.8725 22.3049H33.6912L39.9109 27.317L58.5805 27.3166Z" fill="#FEC2B2"/> <path d="M64.5105 43.2874L61.376 41.1729L53.2459 44.962L40.9093 38.5823H38.2001L37.4081 39.5638H40.1621C40.8849 41.9311 42.2563 44.0487 44.1208 45.6766C46.5556 47.8072 49.7668 49.0713 53.2459 49.0713C56.9119 49.0713 60.3436 47.6906 62.9089 45.181C63.5001 44.6006 64.0363 43.9667 64.5105 43.2874Z" fill="#3F3FCC"/> <path d="M53.2455 43.5196C57.5707 43.5196 61.0769 40.0133 61.0769 35.6881C61.0769 31.3629 57.5707 27.8567 53.2455 27.8567C48.9203 27.8567 45.414 31.3629 45.414 35.6881C45.414 40.0133 48.9203 43.5196 53.2455 43.5196Z" fill="#180169"/> <path d="M55.8612 28.3052C55.0211 28.0075 54.1361 27.8558 53.2448 27.8567C48.9194 27.8567 45.4133 31.3631 45.4133 35.6881C45.4133 35.7764 45.4171 35.8638 45.4197 35.9498L53.2448 35.6881L55.8612 28.3052Z" fill="#180036"/> <path d="M61.0717 35.4241L53.247 35.6857L50.6306 43.0683C51.4708 43.3658 52.3557 43.5175 53.247 43.5168C57.572 43.5168 61.0785 40.0107 61.0785 35.6853C61.0774 35.599 61.0736 35.5119 61.0717 35.4241Z" fill="#222B97"/> <path d="M58.4553 39.7455L53.2448 35.6877L55.5398 41.8805L56.6477 42.7432C57.5086 42.3261 58.2861 41.7552 58.9419 41.0586L58.4553 39.7455Z" fill="#5A31AD"/> <path d="M35.7343 31.8147L36.9498 32.794L38.2001 38.5824L37.4077 39.5643L35.7343 31.8147Z" fill="#9E41A6"/> <path d="M35.7343 31.8147H40.2305L40.9508 32.794H36.9498L35.7343 31.8147Z" fill="#FEC2B2"/> <path d="M35.3672 30.0537L36.1577 29.0725H42.6597L40.9616 30.0537H35.3672Z" fill="#5E50CC"/> <path d="M35.3671 30.0536L36.1577 29.0724L34.9074 23.2844L33.6911 22.304L35.3671 30.0536Z" fill="#9E41A6"/> <path d="M58.1257 31.1622L64.3132 29.5736L64.3129 29.5732L58.1253 31.1622H58.1257Z" fill="white"/> <path d="M46.7911 34.0723L37.7326 36.3979V36.3983L46.7908 34.0726L46.7911 34.0723Z" fill="white"/> <path d="M56.8343 23.8232L36.3866 29.0734H42.6549L42.6497 29.0816L59.3151 24.8029C58.5234 24.3933 57.6922 24.065 56.8343 23.8232Z" fill="#B1EDFF"/> <path d="M53.2542 29.0733C54.4094 29.0708 55.5455 29.3669 56.5525 29.933L63.3822 28.1792C62.8279 27.4659 62.1955 26.8168 61.4968 26.2441L41.4342 31.3937C41.2454 31.8514 41.0849 32.3203 40.9535 32.7976H36.954L37.3988 34.8493L47.5578 32.2407C48.7203 30.3348 50.8273 29.0733 53.2542 29.0733Z" fill="#1FD2FF"/> <path d="M60.7298 25.6604C60.2774 25.3441 59.8047 25.0579 59.3147 24.8037L42.6496 29.0824C42.3513 29.5431 42.0793 30.0203 41.8348 30.5117C41.6909 30.8014 41.5563 31.0956 41.4341 31.3946L61.4968 26.2439C61.2497 26.0402 60.9944 25.8451 60.7298 25.6604Z" fill="#7EE6FC"/> <path d="M63.6169 28.4951C63.5399 28.3882 63.4626 28.282 63.3822 28.1777L56.5525 29.9315C56.702 30.0149 56.8474 30.1027 56.9883 30.1969C57.4025 30.4747 57.7839 30.7984 58.1253 31.162L64.3133 29.5734C64.1008 29.2017 63.8683 28.8417 63.6169 28.4951Z" fill="#1EA5FF"/> <path d="M37.4747 35.2072L37.733 36.398L46.7912 34.0724C46.9115 33.5905 47.0863 33.1239 47.3122 32.6815C47.387 32.532 47.4692 32.3844 47.5563 32.2412L37.3973 34.8498L37.4747 35.2072Z" fill="#1EA5FF"/> <path d="M53.2542 32.585C51.5539 32.585 50.2617 33.7766 50.1365 35.4279L55.8811 33.953C55.3343 33.1135 54.3842 32.585 53.2542 32.585Z" fill="#5AFFF7"/> <path d="M46.6237 36.3295C46.6039 36.1198 46.5927 35.9072 46.5927 35.6919C46.5926 35.1459 46.6592 34.602 46.7912 34.0723L37.733 36.3979L38.1875 38.4956L46.6237 36.3295Z" fill="#5AFFF7"/> <path d="M59.3715 33.0564L65.2182 31.5553C64.9773 30.8688 64.6744 30.2057 64.3133 29.5742L58.1257 31.1632C58.6477 31.7171 59.0692 32.3578 59.3715 33.0564Z" fill="#5AFFF7"/> <path d="M46.6237 36.3301C46.6311 36.4104 46.6412 36.4901 46.6517 36.5693Z" fill="#FBFAA2"/> <path d="M50.1245 35.6774C50.1245 35.5929 50.1301 35.51 50.1365 35.4277Z" fill="#FBFAA2"/> <path d="M46.6517 36.5693C46.6413 36.4901 46.6312 36.4104 46.6237 36.3301L38.1875 38.498L38.2069 38.5885H40.9105C40.9303 38.6692 40.9523 38.7488 40.9733 38.8288L46.7956 37.3337C46.7328 37.0819 46.6847 36.8267 46.6517 36.5693Z" fill="#FBFAA2"/> <path d="M65.2955 31.7825C65.2705 31.7078 65.2455 31.6308 65.2208 31.5557L59.3741 33.0568C59.4059 33.1315 59.4358 33.2063 59.4649 33.281C59.5592 33.5221 59.6392 33.7685 59.7045 34.0189L65.518 32.5264C65.4503 32.2741 65.3752 32.027 65.2955 31.7825Z" fill="#FBFAA2"/> <path d="M56.0086 34.1679C55.9693 34.0931 55.9264 34.0236 55.8811 33.9541L50.1365 35.429C50.1301 35.5113 50.1249 35.5942 50.1245 35.6787C50.1245 35.6836 50.1245 35.6884 50.1245 35.6933C50.1252 35.9499 50.1552 36.2056 50.2139 36.4554L56.2848 34.8968C56.224 34.6431 56.1312 34.3982 56.0086 34.1679Z" fill="#FBFAA2"/> <path d="M56.3816 35.6926C56.3812 35.427 56.3491 35.1623 56.2859 34.9043L50.2154 36.463C50.3381 36.9983 50.6056 37.4897 50.9887 37.8833L56.2729 36.5265C56.3446 36.2543 56.3812 35.9741 56.3816 35.6926Z" fill="#FFD3D3"/> <path d="M46.7975 37.3408L40.9755 38.8359C41.1066 39.3434 41.2637 39.8438 41.4461 40.3352L47.3687 38.8146C47.1196 38.3482 46.9278 37.8533 46.7975 37.3408Z" fill="#FFD3D3"/> <path d="M59.9105 35.5936L65.8106 34.0786C65.7459 33.5581 65.648 33.0422 65.5176 32.5342L59.7042 34.0267C59.8347 34.539 59.9039 35.065 59.9105 35.5936Z" fill="#FFD3D3"/> <path d="M56.2841 34.8955L50.2132 36.4542L50.2154 36.4624L56.2875 34.9037C56.2862 34.9011 56.285 34.8983 56.2841 34.8955Z" fill="#FFD3D3"/> <path d="M59.7042 34.0261L65.5176 32.5336L65.5153 32.5254L59.7019 34.0179L59.7042 34.0261Z" fill="#FFD3D3"/> <path d="M46.7956 37.332L40.9732 38.8272L40.9755 38.8354L46.7975 37.3403C46.7967 37.3373 46.7964 37.3346 46.7956 37.332Z" fill="#FFD3D3"/> <path d="M65.8626 34.545C65.8484 34.3884 65.8305 34.2332 65.8106 34.0781L59.9105 35.5931C59.9105 35.6263 59.9131 35.6588 59.9131 35.6921C59.9131 35.8211 59.9087 35.9485 59.9012 36.0756C59.8243 37.499 59.2864 38.8587 58.3687 39.9495L65.6843 38.0708C65.8378 37.2872 65.9151 36.4906 65.9153 35.6921C65.9157 35.3049 65.8962 34.9229 65.8626 34.545Z" fill="#F8B7E1"/> <path d="M50.9887 37.8842C51.1228 38.0205 51.2697 38.1436 51.4275 38.2516C51.9348 38.5988 52.5597 38.7996 53.2542 38.7996C54.54 38.7996 55.5911 38.1036 56.0815 37.0566C56.1612 36.8864 56.2253 36.7092 56.2729 36.5273L50.9887 37.8842Z" fill="#F8B7E1"/> <path d="M47.6128 39.2306C47.5268 39.0949 47.445 38.9559 47.3687 38.8135L41.4461 40.3348C41.5007 40.4815 41.5575 40.6269 41.6166 40.771C42.0565 41.858 42.6479 42.8773 43.3734 43.7986L50.8639 41.8755C49.5219 41.3701 48.3807 40.4417 47.6128 39.2306Z" fill="#F8B7E1"/> <path d="M58.369 39.9498C58.1082 40.2605 57.8192 40.5463 57.5056 40.8035C56.3065 41.7845 54.8034 42.3175 53.2542 42.311C52.8515 42.3106 52.4497 42.2747 52.0533 42.2037C51.6474 42.1317 51.249 42.0223 50.8632 41.877L43.3726 43.8001C43.5139 43.9777 43.6597 44.1515 43.811 44.3197C45.9169 46.6599 49.0301 48.0994 53.2542 48.0994C59.2201 48.0994 64.1634 44.1433 65.5355 38.7421C65.5916 38.5209 65.6406 38.297 65.6851 38.0693L58.369 39.9498Z" fill="#FF7AD9"/> <path d="M52.8704 23.2852H34.9072L36.1642 29.074H36.3859L56.8335 23.8238C55.5436 23.4624 54.2099 23.2811 52.8704 23.2852Z" fill="#DBFDF7"/> <path d="M57.3591 59.8488L55.744 60.5511L55.458 60.2715L56.1223 58.6377L57.3748 58.594L57.3591 59.8488Z" fill="white"/> <path d="M55.3601 62.6338L55.744 60.5503L55.458 60.2708L53.3851 60.7028L55.3601 62.6338Z" fill="#231BCC"/> <path d="M53.385 60.7032L55.458 60.2711L56.1223 58.6373L54.9224 56.9202L53.385 60.7032Z" fill="#08107F"/> <path d="M54.9225 56.9207L56.1223 58.6379L57.3748 58.5941L59.1556 56.7727L54.9225 56.9207Z" fill="#FBFAA2"/> <path d="M57.3748 58.5941L57.3591 59.8489L59.1032 61.008L59.1555 56.7727L57.3748 58.5941Z" fill="#00CCC6"/> <path d="M53.3772 60.6994H50.615L49.0761 56.9197L51.9991 53.8547L54.9228 56.9197L53.3772 60.6994Z" fill="#9FFFFC"/> <path d="M51.133 57.3099L51.7972 58.9411H52.1967L52.8644 57.3084L51.9994 56.4016L51.133 57.3099Z" fill="white"/> <path d="M50.615 60.6995L51.7972 58.9417H52.1968L53.3772 60.6995H50.615Z" fill="#6666CC"/> <path d="M50.615 60.6989L49.0761 56.9192L51.133 57.3098L51.7972 58.941L50.615 60.6989Z" fill="#00F3EF"/> <path d="M53.3772 60.6989L52.1968 58.941L52.8644 57.3083L54.9228 56.9192L53.3772 60.6989Z" fill="#00F3EF"/> <path d="M54.9228 56.9197L52.8644 57.3088L51.9994 56.4021L51.9991 53.8547L54.9228 56.9197Z" fill="#231BCC"/> <path d="M51.9994 56.4021L51.133 57.3103L49.0761 56.9197L51.9991 53.8547L51.9994 56.4021Z" fill="#FFD580"/> <path d="M50.6135 60.7038L48.6384 62.6347L44.8958 61.008L44.8431 56.7727L49.0761 56.9207L50.6135 60.7038Z" fill="#9FFFFC"/> <path d="M46.6394 59.8488L48.2549 60.5511L48.5405 60.2715L47.8762 58.6377L46.6237 58.594L46.6394 59.8488Z" fill="white"/> <path d="M48.6384 62.6338L48.2549 60.5503L48.5405 60.2708L50.6135 60.7028L48.6384 62.6338Z" fill="#07735A"/> <path d="M48.6384 62.6347L44.8958 61.008L46.6394 59.8489L48.2549 60.5512L48.6384 62.6347Z" fill="#00F3EF"/> <path d="M50.6135 60.7032L48.5405 60.2711L47.8763 58.6373L49.0761 56.9202L50.6135 60.7032Z" fill="#231BCC"/> <path d="M49.0761 56.9207L47.8763 58.6379L46.6237 58.5941L44.8431 56.7727L49.0761 56.9207Z" fill="#FBFAA2"/> <path d="M46.6237 58.5941L46.6394 59.8489L44.8958 61.008L44.8431 56.7727L46.6237 58.5941Z" fill="#FFD580"/> <path d="M48.6384 62.6342L50.6134 60.7032L53.3772 60.6995L55.3601 62.6342H48.6384Z" fill="#A6FF4D"/> <path d="M55.3602 62.6347L59.1032 61.008L57.3592 59.8489L55.744 60.5512L55.3602 62.6347Z" fill="#08107F"/> <path d="M45.6873 0.232666L45.2761 1.43438C39.5072 3.03902 33.9764 7.63353 29.7268 11.8827C25.4773 16.1318 20.8682 21.6735 19.2632 27.4473L18.0619 27.8584L18.8842 29.1315L23.7131 27.9493C23.7579 27.7454 23.8068 27.5483 23.8596 27.3579C26.4458 16.6551 34.9953 8.25438 45.7796 5.88274L46.9615 1.05387L45.6873 0.232666Z" fill="#2A3296"/> <path d="M27.6056 9.76114C22.6011 14.7657 19.326 21.0377 18.0742 27.8521L22.7364 26.7076C24.0955 21.638 26.7646 16.5408 30.5753 12.7282C34.386 8.91565 39.4765 6.25247 44.542 4.89265L45.6869 0.229736C38.8759 1.48489 32.6079 4.75921 27.6056 9.76114Z" fill="#6E82E5"/> <path d="M58.3113 0.232666L58.7224 1.43438C64.4914 3.03902 70.0222 7.63353 74.2717 11.8827C78.5212 16.1318 83.1303 21.6735 84.7353 27.4473L85.9367 27.8584L85.1144 29.1315L80.2855 27.9493C80.2406 27.7454 80.1918 27.5483 80.139 27.3579C77.5528 16.6551 69.0033 8.25438 58.219 5.88274L57.0386 1.0535L58.3113 0.232666Z" fill="#2A3296"/> <path d="M76.393 9.76146C71.391 4.75953 65.1227 1.48521 58.3117 0.232666L59.4562 4.89558C64.5217 6.25539 69.6152 8.92345 73.4229 12.7312C77.2306 16.5389 79.9028 21.6395 81.2618 26.7105L85.924 27.8551C84.6726 21.0384 81.3975 14.7675 76.393 9.76146Z" fill="#6E82E5"/> <path d="M58.3113 68.1061L58.7225 66.9044C64.4914 65.2998 70.0222 60.7053 74.2718 56.4561C78.5213 52.207 83.1304 46.6653 84.7354 40.8915L85.9367 40.4804L85.1144 39.2073L80.2855 40.3895C80.2407 40.5931 80.1918 40.7902 80.139 40.9809C77.5528 51.6837 69.0033 60.0844 58.219 62.4561L57.0371 67.2849L58.3113 68.1061Z" fill="#D3FFB3"/> <path d="M76.393 58.5776C81.3975 53.5726 84.6726 47.3006 85.9244 40.4866L81.2622 41.6311C79.9032 46.7003 77.2344 51.7979 73.4233 55.6086C69.6122 59.4193 64.5221 62.0847 59.4566 63.4446L58.3113 68.106C65.1227 66.8538 71.391 63.5795 76.393 58.5776Z" fill="#7CB3E5"/> <path d="M45.6873 68.1061L45.2761 66.9044C39.5072 65.2998 33.9764 60.7053 29.7268 56.4561C25.4773 52.207 20.8682 46.6653 19.2632 40.8915L18.0619 40.4804L18.8842 39.2073L23.7131 40.3895C23.7579 40.5931 23.8068 40.7902 23.8596 40.9809C26.4458 51.6837 34.9953 60.0844 45.7796 62.4561L46.9615 67.2849L45.6873 68.1061Z" fill="#D3FFB3"/> <path d="M44.5424 63.4426C39.4769 62.0828 34.3834 59.4147 30.5757 55.6067C26.768 51.7986 24.0958 46.6983 22.7371 41.6291L18.0746 40.4846C19.326 47.2998 22.6011 53.5718 27.606 58.5756C32.6109 63.5794 38.8759 66.853 45.6873 68.1051L44.5424 63.4426Z" fill="#7CB3E5"/> <path d="M36.3204 61.6339L35.7044 61.2975L35.5313 61.1797C30.5921 57.9623 26.5173 53.5826 23.6641 48.4244L23.5363 48.1979C23.4115 47.9621 23.2298 47.6175 23.2298 47.6175L18.5893 47.0374L17.2837 47.7808H17.2923L21.9866 49.1589C25.1303 54.8824 29.6917 59.7022 35.2334 63.1563L35.6845 63.437L36.8283 68.1694L37.6062 67.0996L36.3204 61.6339Z" fill="#AEFCF0"/> <path d="M35.5028 62.7036C29.915 59.2193 25.3387 54.3304 22.2306 48.5249L17.2836 47.7815C21.1992 56.6588 28.1157 63.8738 36.8197 68.1608L35.5028 62.7036Z" fill="#9C9CF0"/> <path d="M35.0259 65.8425C28.3081 61.9607 22.8579 56.217 19.3335 49.3049L21.464 49.6249C24.585 55.2377 29.0466 59.9907 34.451 63.46L35.0259 65.8425Z" fill="#F8B7E1"/> <path d="M85.4007 47.0374L80.7602 47.6175C80.7602 47.6175 80.5785 47.9621 80.4507 48.1979L80.3229 48.4244C77.47 53.5819 73.3964 57.9614 68.4587 61.1797L68.2856 61.2975L67.6697 61.6339L66.3812 67.1004L67.1617 68.1702L68.3028 63.4471L68.757 63.166C74.2978 59.7119 78.8581 54.892 82.0004 49.1687L86.6981 47.7815H86.7063L85.4007 47.0374Z" fill="#AEFCF0"/> <path d="M81.7563 48.5249C78.6533 54.3313 74.0795 59.2207 68.4927 62.7036L67.1785 68.1608C75.8813 63.8721 82.7974 56.6576 86.7149 47.7815L81.7563 48.5249Z" fill="#9C9CF0"/> <path d="M69.5453 63.4575C74.95 59.9904 79.4103 55.2368 82.5267 49.6227L84.6666 49.302C81.1415 56.2146 75.691 61.9593 68.9731 65.8426L69.5453 63.4575Z" fill="#F8B7E1"/> <path d="M36.3203 6.76823L35.7043 7.10463L35.5312 7.22237C30.5921 10.4397 26.5174 14.8193 23.6641 19.9773L23.5362 20.2038C23.4114 20.4396 23.2297 20.7843 23.2297 20.7843L18.5893 21.3644L17.2836 20.6213H17.2922L21.9866 19.2432C25.1302 13.5197 29.6916 8.69985 35.2333 5.24582L35.6845 4.96473L36.8283 0.232666L37.6061 1.30243L36.3203 6.76823Z" fill="#FAFF59"/> <path d="M35.5028 5.69963C29.9149 9.18383 25.3386 14.0727 22.2306 19.8783L17.2836 20.6217C21.1991 11.7444 28.1156 4.52933 36.8197 0.242432L35.5028 5.69963Z" fill="#F8B7E1"/> <path d="M35.0259 2.55981C28.3077 6.44197 22.8574 12.1864 19.3335 19.0992L21.464 18.7793C24.585 13.1665 29.0466 8.41346 34.451 4.94416L35.0259 2.55981Z" fill="#FBFAA2"/> <path d="M85.4007 21.3647L80.7602 20.7857C80.7602 20.7857 80.5785 20.4411 80.4507 20.2053L80.3229 19.9788C77.4699 14.8215 73.3963 10.4421 68.4587 7.22386L68.2856 7.10538L67.6697 6.76897L66.3812 1.30243L67.1617 0.232666L68.3028 4.95576L68.757 5.23685C74.2979 8.69081 78.8582 13.5107 82.0004 19.2342L86.6981 20.6213H86.7063L85.4007 21.3647Z" fill="#5E50CC"/> <path d="M81.7563 19.8783C78.6534 14.0718 74.0796 9.18237 68.4927 5.69963L67.1785 0.242432C75.8814 4.53096 82.7975 11.7455 86.7149 20.6217L81.7563 19.8783Z" fill="#F8B7E1"/> <path d="M69.5453 4.94393C74.95 8.41104 79.4103 13.1645 82.5267 18.7787L84.6666 19.0994C81.1415 12.1868 75.691 6.44214 68.9731 2.55884L69.5453 4.94393Z" fill="#FBFAA2"/> <path d="M53.6253 8.26699L55.9431 10.5332L60.3347 8.62433L60.3964 3.65454L55.4295 3.82798L53.6253 8.26699Z" fill="#9FFFFC"/> <path d="M58.2886 7.26493L56.3932 8.08912L56.0579 7.76131L56.8372 5.84382L58.3069 5.79224L58.2886 7.26493Z" fill="white"/> <path d="M55.9431 10.5337L56.3932 8.08879L56.0579 7.76099L53.6253 8.26746L55.9431 10.5337Z" fill="#360C72"/> <path d="M55.9431 10.533L60.3347 8.6241L58.2886 7.26392L56.3932 8.0881L55.9431 10.533Z" fill="#3C28F9"/> <path d="M53.6253 8.26739L56.0579 7.76092L56.8372 5.84342L55.4295 3.82837L53.6253 8.26739Z" fill="#3C28F9"/> <path d="M55.4295 3.82798L56.8372 5.84303L58.3069 5.79145L60.3963 3.65454L55.4295 3.82798Z" fill="#FFCC66"/> <path d="M58.3069 5.79145L58.2886 7.26414L60.3347 8.62433L60.3964 3.65454L58.3069 5.79145Z" fill="#FF9933"/> <path d="M53.616 8.26349H50.3745L48.5692 3.82821L51.999 0.231689L55.4295 3.82821L53.616 8.26349Z" fill="#9FFFFC"/> <path d="M50.9827 4.28562L51.762 6.20012H52.2307L53.0141 4.28412L51.9993 3.21997L50.9827 4.28562Z" fill="#FBFAA2"/> <path d="M50.3745 8.26334L51.762 6.20044H52.2307L53.616 8.26334H50.3745Z" fill="#360C72"/> <path d="M50.3745 8.26365L48.5692 3.82837L50.9827 4.28625L51.762 6.20076L50.3745 8.26365Z" fill="#3399FF"/> <path d="M53.6159 8.26365L52.2307 6.20076L53.0142 4.28476L55.4295 3.82837L53.6159 8.26365Z" fill="#3399FF"/> <path d="M55.4295 3.82821L53.0142 4.28459L51.9994 3.22044L51.999 0.231689L55.4295 3.82821Z" fill="#00CCC6"/> <path d="M51.9994 3.22044L50.9827 4.28609L48.5692 3.82821L51.999 0.231689L51.9994 3.22044Z" fill="#FFCC66"/> <path d="M50.373 8.26699L48.0552 10.5332L43.6637 8.62433L43.602 3.65454L48.5692 3.82798L50.373 8.26699Z" fill="#9FFFFC"/> <path d="M45.7097 7.26493L47.6051 8.08912L47.9404 7.76131L47.1611 5.84382L45.6914 5.79224L45.7097 7.26493Z" fill="#FBFAA2"/> <path d="M48.0552 10.5337L47.6052 8.08879L47.9405 7.76099L50.373 8.26746L48.0552 10.5337Z" fill="#360C72"/> <path d="M48.0553 10.533L43.6637 8.6241L45.7098 7.26392L47.6052 8.0881L48.0553 10.533Z" fill="#A9ABF4"/> <path d="M50.373 8.26739L47.9405 7.76092L47.1612 5.84342L48.5692 3.82837L50.373 8.26739Z" fill="#A9ABF4"/> <path d="M48.5692 3.82798L47.1612 5.84303L45.6914 5.79145L43.602 3.65454L48.5692 3.82798Z" fill="#FFCC66"/> <path d="M45.6914 5.79145L45.7098 7.26414L43.6637 8.62433L43.602 3.65454L45.6914 5.79145Z" fill="white"/> <path d="M50.373 12.7993L48.0552 10.5334L43.6637 12.4423L43.602 17.4118L48.5692 17.2383L50.373 12.7993Z" fill="#9FFFFC"/> <path d="M45.7097 13.8016L47.6051 12.9778L47.9404 13.3052L47.1611 15.2227L45.6914 15.2743L45.7097 13.8016Z" fill="#00F3EF"/> <path d="M48.0552 10.5334L47.6052 12.9783L47.9405 13.3058L50.373 12.7993L48.0552 10.5334Z" fill="#360C72"/> <path d="M48.0552 10.5334L43.6637 12.4423L45.7098 13.8022L47.6052 12.9783L48.0552 10.5334Z" fill="#FE9679"/> <path d="M50.373 12.8L47.9405 13.3065L47.1611 15.224L48.5692 17.2391L50.373 12.8Z" fill="#FE9679"/> <path d="M48.5692 17.2389L47.1612 15.2239L45.6914 15.2755L43.602 17.4124L48.5692 17.2389Z" fill="#3C28F9"/> <path d="M45.6914 15.2751L45.7098 13.8024L43.6637 12.4426L43.602 17.412L45.6914 15.2751Z" fill="#FFCC66"/> <path d="M50.3824 12.804H53.6239L55.4295 17.2389L51.9994 20.8354L48.5692 17.2389L50.3824 12.804Z" fill="#9FFFFC"/> <path d="M53.0156 16.781L52.2363 14.8665H51.7676L50.9841 16.7825L51.9993 17.8466L53.0156 16.781Z" fill="#00F3EF"/> <path d="M53.6238 12.804L52.2363 14.8665H51.7676L50.3824 12.804H53.6238Z" fill="#360C72"/> <path d="M53.6238 12.804L55.4295 17.2389L53.0156 16.781L52.2363 14.8665L53.6238 12.804Z" fill="#6666CC"/> <path d="M50.3824 12.804L51.7677 14.8665L50.9842 16.7825L48.5692 17.2389L50.3824 12.804Z" fill="#6666CC"/> <path d="M48.5692 17.2389L50.9842 16.7825L51.9994 17.8466V20.8354L48.5692 17.2389Z" fill="#A6FF4D"/> <path d="M51.9994 17.8462L53.0156 16.7805L55.4295 17.2384L51.9994 20.8349V17.8462Z" fill="#3C28F9"/> <path d="M53.6253 12.7993L55.9431 10.5334L60.3347 12.4423L60.3964 17.4118L55.4295 17.2383L53.6253 12.7993Z" fill="#9FFFFC"/> <path d="M58.2886 13.8016L56.3932 12.9778L56.0579 13.3052L56.8372 15.2227L58.3069 15.2743L58.2886 13.8016Z" fill="#00F3EF"/> <path d="M55.9431 10.5334L56.3932 12.9783L56.0579 13.3058L53.6253 12.7993L55.9431 10.5334Z" fill="#360C72"/> <path d="M55.9431 10.5334L60.3347 12.4423L58.2886 13.8022L56.3932 12.9783L55.9431 10.5334Z" fill="#3C28F9"/> <path d="M53.6253 12.8L56.0579 13.3065L56.8372 15.224L55.4295 17.2391L53.6253 12.8Z" fill="#3C28F9"/> <path d="M55.4295 17.2389L56.8372 15.2239L58.3069 15.2755L60.3963 17.4124L55.4295 17.2389Z" fill="#A6FF4D"/> <path d="M58.3069 15.2751L58.2886 13.8024L60.3347 12.4426L60.3963 17.412L58.3069 15.2751Z" fill="#6666CC"/> <path d="M48.0552 10.5339L50.373 8.26765L53.616 8.26392L55.9431 10.5339L53.6253 12.7997L50.3824 12.8039L48.0552 10.5339Z" fill="#FFCC66"/> <path d="M48.0552 10.5339H55.9431L53.616 8.26392L50.373 8.26765L48.0552 10.5339Z" fill="#FFCC66"/> <path d="M50.373 8.26765V10.5339H53.616V8.26392L50.373 8.26765Z" fill="#00F3EF"/> <path d="M53.616 10.5334H50.373V12.8034H53.616V10.5334Z" fill="#FE9679"/> <path d="M50.373 10.5331H48.0552L50.373 8.26685V10.5331Z" fill="white"/> <path d="M53.616 8.26392V10.5339H55.9431L53.616 8.26392Z" fill="#A9ABF4"/> <path d="M55.9431 10.5334H53.616V12.8034L55.9431 10.5334Z" fill="#3399FF"/> <defs> <linearGradient id="nitroopal_paint0_linear_2_669" x1="52.0064" y1="10.5934" x2="52.0064" y2="57.7604" gradientUnits="userSpaceOnUse"> <stop stop-color="#0D0023"/> <stop offset="0.3" stop-color="#078292"/> <stop offset="0.6" stop-color="#025A9D"/> <stop offset="0.8" stop-color="#290E52"/> <stop offset="1" stop-color="#000826"/> </linearGradient> </defs> </svg>` },
  boost1: { label: "Server Boosting (1 Month)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m12 4-10 16h20zm0 5.66 4.59 7.34h-9.18z" fill="#ff6bfa"/><path d="m7.40991 17 4.58999-7.34003 4.59 7.34003z" fill="#ffdef9"/><path d="m12 4v5.66l4.59 7.34 5.41 3z" fill="#ffb0ff"/></svg>` },
  boost2: { label: "Server Boosting (2 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m12 2.70001-9.30005 9.29999 9.30005 9.3 9.2999-9.3zm0 14.64999-5.35005-5.35 5.35005-5.34999 5.35 5.34999z" fill="#ff6bfa"/><path d="m11.9934 6.6472-5.35278 5.3528 5.35278 5.3528 5.3528-5.3528z" fill="#ffdef9"/><path d="m12 2.70001v3.95l5.35 5.34999h3.95z" fill="#ffb0ff"/></svg>` },
  boost3: { label: "Server Boosting (3 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m12 2.70001-5.45996 5.46v7.67999l5.45996 5.46 5.46-5.46v-7.67999zm2.73 11.99999-2.73 2.74-2.72996-2.73v-5.41999l2.72996-2.73 2.73 2.73z" fill="#ff6bfa"/><path d="m9.27002 9.29v5.42l2.72998 2.73 2.73-2.73v-5.42l-2.73-2.73z" fill="#ffdef9"/><path d="m12 2.70001v3.86l2.73 2.73 2.73-1.13z" fill="#ffb0ff"/></svg>` },
  boost4: { label: "Server Boosting (6 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m12 3.29999-7.54004 4.35v8.70001l7.54004 4.36 7.54-4.36v-8.70001zm4.93 11.55001-4.93 2.84-4.92004-2.84v-5.69001l4.92004-2.85 4.93 2.85z" fill="#ff6bfa"/><g fill="#ffdef9"><path d="m15.6901 8.44-8.62003 4.98v-4.27l4.92003-2.84z"/><path d="m16.9301 9.15002v1.51998l-8.53002 4.94-1.32-.77z"/><path d="m9.62012 16.31 7.30998-4.22v2.75l-4.94 2.86z"/></g><path d="m12 3.28998v3.02l4.93 2.84 2.61-1.5z" fill="#ffb0ff"/><path d="m7.06996 14.85-2.61 1.5 7.54004 4.36v-3.02z" fill="#e34bd1"/><path d="m16.9301 9.15-1.24-.71-8.62003 4.98v1.43z" fill="#fff"/><path d="m16.9299 10.67v1.42l-7.31 4.22-1.22-.7z" fill="#fff"/></svg>` },
  boost5: { label: "Server Boosting (9 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m18.41 4h-12.82l-1.59 1.59v12.82l1.59 1.59h12.82l1.59-1.59v-12.82zm-1.41 13h-10v-10h10z" fill="#ff6bfa"/><g fill="#ffdef9"><path d="m15.19 6.97998-8.21002 8.20002v-8.20002z"/><path d="m17.02 6.97998v2.12l-7.92002 7.92002h-2.12v-.01z"/><path d="m10.9399 17.02 6.08-6.09v6.09z"/></g><path d="m18.41 4-1.4 2.99 2.99-1.4z" fill="#e34bd1"/><path d="m4 18.41 2.99-1.4-1.4 2.99z" fill="#e34bd1"/><path d="m5.59009 4 1.4 2.99h10.02001l1.4-2.99z" fill="#ffb0ff"/><path d="m20 18.41-2.99-1.4 1.4 2.99z" fill="#ffc0ff"/><path d="m17.01 6.98999h-1.82l-8.21002 8.19001v1.83z" fill="#fff"/><path d="m17.0201 9.09998v1.83002l-6.08 6.09h-1.84z" fill="#fff"/></svg>` },
  boost6: { label: "Server Boosting (12 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m4.61998 5.80002-.41.84c-.04774.04111-.07719.0995-.08188.16232-.00469.06283.01577.12494.05688.17268s.0995.07719.16232.08188c.06283.00469.12494-.01577.17268-.05688l.84-.4c.03119-.01506.06537-.02288.1-.02288s.06882.00782.1.02288l.84.4c.04336.02245.09274.03052.14099.02304.04826-.00748.09288-.03012.1274-.06465.03453-.03453.05717-.07914.06465-.1274.00748-.04825-.00059-.09763-.02304-.14099l-.41-.89c-.01493-.02944-.02272-.06199-.02272-.095s.00779-.06556.02272-.095l.41-.84c.02245-.04336.03052-.09274.02304-.14099s-.03012-.09287-.06465-.1274c-.03452-.03453-.07914-.05717-.1274-.06465-.04825-.00748-.09763.00059-.14099.02304l-.84.4c-.03118.01506-.06537.02288-.1.02288s-.06881-.00782-.1-.02288l-.84-.4c-.04336-.02245-.09274-.03052-.14099-.02304s-.09287.03012-.1274.06465-.05717.07915-.06465.1274.00059.09763.02304.14099l.41.84c.01494.02944.02272.06199.02272.095s-.00778.06556-.02272.095z" fill="#ffd836"/><path d="m20.8401 9.14001-5.51-1.73-3.35-4.71-3.33998 4.71-5.52 1.73 3.45 4.63999-.06 5.77 5.46998-1.84 5.48 1.84-.06-5.77z" fill="#ffdef9"/><path d="m20.8401 9.14001-5.51-1.73-3.33-4.71-3.35998 4.71-5.52 1.73 3.45 4.63999-.06 5.77 5.48998-1.84 5.48 1.84-.06-5.77zm-5.45 3.14999-.5.67v.84 2.26l-2.15-.72-.74-.27-.8.27-2.19998.72v-2.26-.8l-.5-.67-1.28-1.86 2.16-.67999.80998-.25.49-.69 1.32-1.85 1.31 1.84.49.68.8.25 2.16.67999z" fill="#ff73fa"/><path d="m11.98 2.70001v4.32l1.8 2.52 2.96.92999 4.1-1.32999-5.51-1.73z" fill="#ffb0ff"/><path d="m6.57001 13.78 2.5-.82-.03 3.1 2.92999-.99v2.64l-5.45999 1.84z" fill="#e655d4"/><path d="m14.8899 12.96 2.51.82.06 5.77-2.54-3.49z" fill="#ffb0ff"/><g fill="#d4e4ff"><path d="m19.01 16.14h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"/><path d="m19.01 19.68h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"/><path d="m18.1299 17.03v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"/><path d="m21.6799 17.03v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"/></g><path d="m13.78 9.53997-4.71003 3.42003-.6-.82 4.72003-3.42003z" fill="#fff"/><path d="m16.74 10.47-7.69996 5.59v-1.26l6.48996-4.71z" fill="#fff"/></svg>` },
  boost7: { label: "Server Boosting (15 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m6.3599 4.33.41.84c.02245.04336.03052.09274.02304.14099s-.03013.09287-.06465.1274c-.03453.03453-.07915.05717-.1274.06465s-.09763-.00059-.14099-.02304l-.84-.41c-.03119-.01506-.06537-.02288-.1-.02288s-.06882.00782-.1.02288l-.84.41c-.04336.02245-.09274.03052-.141.02304-.04825-.00748-.09287-.03012-.12739-.06465-.03453-.03453-.05717-.07915-.06465-.1274s.00058-.09763.02304-.14099l.41-.84c.01505-.03119.02287-.06537.02287-.1s-.00782-.06881-.02287-.1l-.41-.84c-.01585-.04253-.01876-.08879-.00836-.13297.01039-.04417.03362-.08429.06676-.11529s.07471-.05151.11948-.05894c.04477-.00742.09074-.00144.13212.0172l.84.41c.03118.01506.06537.02288.1.02288s.06881-.00782.1-.02288l.84-.41c.04336-.02245.09274-.03052.14099-.02304s.09287.03012.1274.06465c.03452.03453.05717.07914.06465.1274.00748.04825-.00059.09763-.02304.14099l-.41.84c-.01211.02846-.01834.05907-.01834.09s.00623.06154.01834.09z" fill="#ffd836"/><path d="m12 2.70001-5.45996 5.46v7.67999l5.45996 5.46 5.46-5.46v-7.67999zm2.73 11.99999-2.73 2.74-2.72996-2.73v-5.41999l2.72996-2.73 2.73 2.73z" fill="#ff73fa"/><path d="m12 2.70001v3.86l2.73 2.73 2.73-1.13z" fill="#ffc0ff"/><path d="m9.27004 14.71-2.73 1.13 5.45996 5.46v-3.86z" fill="#e655d4"/><g fill="#d4e4ff"><path d="m16.2199 17.7h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"/><path d="m16.2199 21.25h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"/><path d="m15.3401 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"/><path d="m18.8799 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"/></g><path d="m9.27002 9.29v5.42l2.72998 2.73 2.73-2.73v-5.42l-2.73-2.73z" fill="#ffdef9"/><path d="m14.72 9.28998v.01l-5.42997 5.43002-.01-.01v-1.47l4.69997-4.71002z" fill="#fff"/><path d="m14.7201 11.34v1.5l-3.66 3.66-.75-.75z" fill="#fff"/></svg>` },
  boost8: { label: "Server Boosting (18 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m6.3599 4.33.41.84c.02245.04336.03052.09274.02304.14099s-.03013.09287-.06465.1274c-.03453.03453-.07915.05717-.1274.06465s-.09763-.00059-.14099-.02304l-.84-.41c-.03119-.01506-.06537-.02288-.1-.02288s-.06882.00782-.1.02288l-.84.41c-.04336.02245-.09274.03052-.141.02304-.04825-.00748-.09287-.03012-.12739-.06465-.03453-.03453-.05717-.07915-.06465-.1274s.00058-.09763.02304-.14099l.41-.84c.01505-.03119.02287-.06537.02287-.1s-.00782-.06881-.02287-.1l-.41-.84c-.01585-.04253-.01876-.08879-.00836-.13297.01039-.04417.03362-.08429.06676-.11529s.07471-.05151.11948-.05894c.04477-.00742.09074-.00144.13212.0172l.84.41c.03118.01506.06537.02288.1.02288s.06881-.00782.1-.02288l.84-.41c.04336-.02245.09274-.03052.14099-.02304s.09287.03012.1274.06465c.03452.03453.05717.07914.06465.1274.00748.04825-.00059.09763-.02304.14099l-.41.84c-.01211.02846-.01834.05907-.01834.09s.00623.06154.01834.09z" fill="#ffd836"/><path d="m17.59 21.4h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z" fill="#d4e4ff"/><path d="m20.26 18.75v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z" fill="#d4e4ff"/><g fill="#ffdef9"><path d="m15.6901 8.44-8.62003 4.98v-4.27l4.94003-2.84z"/><path d="m16.9301 9.15002v1.51998l-8.54002 4.94-1.31-.77z"/><path d="m9.62012 16.31 7.30998-4.22v2.75l-4.92 2.86z"/></g><path d="m16.9301 9.15-1.24-.71-8.62003 4.98v1.43z" fill="#fff"/><path d="m16.9299 10.67v1.42l-7.31001 4.22-1.23-.7z" fill="#fff"/><path d="m12 3.29999-7.54004 4.35v8.70001l7.54004 4.36 7.54-4.36v-8.70001zm4.92 11.55001-4.92 2.84-4.93004-2.84v-5.69001l4.93004-2.85 4.92 2.85z" fill="#ff73fa"/><path d="m17.59 17.86h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z" fill="#d4e4ff"/><path d="m16.71 18.75v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z" fill="#d4e4ff"/><path d="m12 3.28998v3.02l4.93 2.84 2.61-1.5z" fill="#ffc0ff"/><path d="m7.06996 14.85-2.61 1.5 7.54004 4.36v-3.02z" fill="#e655d4"/></svg>` },
  boost9: { label: "Server Boosting (24 Months)", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m3.08996 5.80003-.4.84c-.02364.02035-.04303.04516-.05708.07301-.01405.02786-.02248.0582-.0248.08931s.00151.06237.01127.092c.00976.02962.02526.05704.04561.08068.04111.04774.0995.07719.16232.08188.03111.00232.06237-.00151.092-.01127s.05704-.02526.08068-.04561l.84-.4c.03119-.01506.06537-.02288.1-.02288s.06882.00782.1.02288l.84.4c.04336.02245.09274.03052.14099.02304.04826-.00748.09287-.03013.1274-.06465.03453-.03453.05717-.07915.06465-.1274s-.00059-.09763-.02304-.14099l-.4-.84c-.01493-.02944-.02272-.06199-.02272-.095s.00779-.06556.02272-.095l.4-.84c.02245-.04336.03052-.09274.02304-.141-.00748-.04825-.03012-.09287-.06465-.12739-.03453-.03453-.07914-.05717-.1274-.06465-.04825-.00748-.09763.00059-.14099.02304l-.88.35c-.03118.01505-.06537.02287-.1.02287s-.06881-.00782-.1-.02287l-.8-.4c-.04301-.01893-.09078-.02422-.13689-.01518-.0461.00904-.08834.03199-.12101.06576-.03268.03376-.05423.07672-.06175.1231-.00753.04638-.00067.09395.01965.13632l.4.84c.01341.03022.01949.06318.01775.09619-.00173.03302-.01124.06516-.02775.09381z" fill="#ffd836"/><path d="m17.91 18.52.31.88c.0144.0472.0435.0884.0831.1178.0396.0293.0876.0451.1369.0451s.0973-.0158.1369-.0451c.0396-.0294.0687-.0706.0831-.1178l.3-.88c.0125-.0333.0325-.0633.0585-.0876.0261-.0243.0574-.0423.0915-.0524l.88-.31c.0436-.0166.0811-.046.1076-.0844s.0407-.0839.0407-.1306c0-.0466-.0142-.0922-.0407-.1306s-.064-.0678-.1076-.0844l-.88-.31c-.0332-.0119-.0636-.0305-.0894-.0546-.0258-.024-.0464-.0531-.0606-.0854l-.3-.88c-.0144-.0471-.0435-.0884-.0831-.1177-.0396-.0294-.0876-.0452-.1369-.0452s-.0973.0158-.1369.0452c-.0396.0293-.0687.0706-.0831.1177l-.31.88c-.0108.0327-.029.0623-.0534.0867-.0243.0243-.0539.0425-.0866.0533l-.88.31c-.0436.0166-.0811.046-.1076.0844s-.0407.084-.0407.1306c0 .0467.0142.0922.0407.1306s.064.0678.1076.0844l.88.31c.0335.0092.064.0269.0885.0515.0246.0245.0423.055.0515.0885z" fill="#ffd836"/><path d="m18.05 5.88h-10.47l-2.58 2.61h15.7z" fill="#ff73fa"/><path d="m4.95996 8.48999 7.85004 11.58001 7.85-11.58001z" fill="#ff73fa"/><path d="m7.57996 5.88-2.62 2.61h5.24004z" fill="#ffc0ff"/><path d="m12.81 5.88-2.61 2.61h5.23z" fill="#e655d4"/><path d="m18.0499 5.88-2.62 2.61h5.23z" fill="#ffc0ff"/><path d="m15.4299 8.49v-2.61h2.62z" fill="#ffdef9"/><path d="m15.43 8.48999-2.62 11.58001-2.61-11.58001z" fill="#ffc0ff"/><path d="m15.4299 8.48999v.01l-4.27 4.26001-.25-1.11 3.15-3.16001z" fill="#fff"/><path d="m14.6799 11.81-.4 1.77-2.39 2.39-.26-1.11z" fill="#fff"/><g fill="#d4e4ff"><path d="m6.04009 14.31h-.01c-.24301 0-.44.197-.44.44v.89c0 .243.19699.44.44.44h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44z"/><path d="m6.04009 17.85h-.01c-.24301 0-.44.197-.44.44v.89c0 .243.19699.44.44.44h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44z"/><path d="m8.69995 16.98v-.01c0-.243-.19699-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.24301 0 .44-.197.44-.44z"/><path d="m5.1499 16.98v-.01c0-.243-.19699-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.24301 0 .44-.197.44-.44z"/></g></svg>` },
  nitro: { label: "Discord Nitro", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><circle cx="15" cy="12" fill="#fff" r="6"/><path clip-rule="evenodd" d="m2.20812 10.124c.42636 0 .7816-.34817.7816-.76611 0-.41793-.35524-.76615-.7816-.76615h-.42635c-.42636 0-.78177.34822-.78177.76615 0 .41794.35541.76611.78177.76611zm16.13038 9.2643c4.0504-1.811 5.7558-6.4083 3.9083-10.23937-1.2791-2.71657-3.9793-4.31859-6.8217-4.45801h-8.02965c-.71065 0-1.20812.55735-1.20812 1.18425 0 .69645.56859 1.18409 1.20812 1.18409h2.06067c.42635 0 .78158.34822.78158.76616 0 .41793-.35523.76632-.78158.76632h-5.04517c-.42635 0-.78176.34822-.78176.76615 0 .41794.35541.76611.78176.76611h3.62404c.42635 0 .78159.3484.78159.7664 0 .4179-.35524.7661-.78159.7661h-2.27402c-.42636 0-.7816.3482-.7816.7662 0 .4179.35524.7663.7816.7663h1.56336c.07112.8359.2843 1.6717.63954 2.4379 1.77654 3.8311 6.46643 5.5028 10.37463 3.7614zm-7.2725-5.1884c-1.0318-2.2025-.0466-4.80794 2.2003-5.81933 2.2469-1.0114 4.9049-.04564 5.9366 2.15683 1.0318 2.2025.0468 4.8079-2.2003 5.8193-2.2469 1.0114-4.9048.0457-5.9366-2.1568z" fill="#4f5d7f" fill-rule="evenodd"/><path d="m16.8142 9.86662 1.4212 2.36838c.0711.1392.0711.2089 0 .3482l-1.4212 2.3683c-.0711.1393-.2131.1393-.2842.1393h-2.7714c-.142 0-.2131-.0697-.2841-.1393l-1.4213-2.3683c-.0709-.1393-.0709-.209 0-.3482l1.4213-2.36838c.071-.13926.2132-.13926.2841-.13926h2.7714c.1422-.06971.2131 0 .2842.13926z" fill="#c5cedd"/></svg>` },
  boost: { label: "Server Booster", svg: `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="4.2774mm" height="4.207mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 427.74 420.7" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <style type="text/css"> <![CDATA[ .fil0 {fill:#4E5058} .fil1 {fill:#949BA4} ]]> </style> </defs> <g> <metadata/> <path class="fil0" d="M421.48 212.17c0,21.79 -34.22,38.06 -40.63,57.64 -6.42,19.59 11.76,55.16 0,71.43 -11.76,16.27 -49.19,9.66 -65.77,22.07 -16.58,12.41 -21.11,50.74 -41.17,57.64 -20.06,6.9 -44.65,-22.07 -66.03,-22.07 -21.38,0 -46.78,27.58 -66.02,22.07 -19.25,-5.51 -24.6,-45.23 -41.18,-57.64 -16.58,-12.41 -53.47,-4.96 -65.76,-22.07 -12.3,-17.1 6.15,-50.74 0,-71.43 -6.16,-20.69 -41.18,-35.85 -41.18,-57.64 0,-21.78 34.23,-38.06 40.64,-57.64 6.42,-19.59 -11.76,-55.16 0,-71.43 11.76,-16.27 49.46,-9.65 66.3,-22.07 16.85,-12.41 20.86,-50.74 40.9,-58.46 20.05,-7.73 44.65,22.89 66.03,22.89 21.38,0 46.78,-27.58 66.03,-22.07 19.25,5.51 24.33,45.23 40.9,57.64 16.57,12.42 53.47,4.96 65.76,22.07 12.3,17.1 -6.15,50.74 0,71.43 6.16,20.69 41.17,35.86 41.17,57.64l0.01 0z"/> <path class="fil1" d="M220.93 71.91c-3.58,-3.42 -8.31,-5.27 -13.3,-5.27 -4.98,0 -9.71,1.85 -13.42,5.27l-62.64 52.74c-8.56,8.44 -13.42,20.04 -13.42,32.31 0,0.66 0,1.31 0,1.97l0 105.48c0,14.11 5.11,27.16 13.42,34.28l62.64 52.74c8.31,6.99 18.54,6.99 26.85,0l62.64 -52.74c8.56,-8.43 13.42,-20.04 13.42,-32.3 0,-0.66 0,-1.32 0,-1.98l-0.13 -105.48c0,-14.1 -5.11,-27.16 -13.42,-34.28l-62.64 -52.74zm-13.42 22.68l-59.83 50.5c-0.89,0.79 -4.09,5.27 -4.09,13.84l0 105.48c0,8.57 3.2,13.19 4.09,13.85l59.83 50.5 59.82 -50.5c0.9,-0.79 4.1,-5.28 4.1,-13.85l0 -105.48c0,-8.57 -3.2,-13.18 -4.1,-13.84l-59.82 -50.5z"/> </g> </svg>` },
  staff: { label: "Discord Staff", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><g fill="#5865f2"><path d="m5.92127 6.03526s.22115-.33086.31286-.47743c.09172-.14657-.23743-.49286-.36514-.60257-.12772-.10971-.32914-.05486-.32914-.05486-1.60715.71229-2.41115 2.17372-2.52086 2.466-.10972.29229.27943.61115.56657.76715.132.072.342-.08743.47143-.20572l.04371-.04457.06772-.06857.00085-.00086 4.37229 4.35517.59743-.5975 1.09801-1.098-4.32173-4.43224z"/><path d="m16.2505 10.6294.2306-.2194 2.0717 2.052c.0146.0129.03.018.0437.018.0395 0 .072-.036.072-.036s2.2937-2.2757 2.3015-2.2834c.0677-.0669 0-.1037 0-.1037l-1.7692-1.78119-.0026.00258-.2425-.23743.1354-.13029.2897.03343-.0548-.384.0728-.07371-.1088-.55372c-.378-.53571-1.4135-1.39371-1.4135-1.39371l-.5417-.09772-.0548.07286-.408-.06086.0394.348.0257.02572-.1209.12171-.6685-.654s-3.8795-2.10686-4.086-2.20457c-.1166-.054-.2023-.09-.2846-.09-.0634 0-.1251.02143-.1963.072-.1646.11571-.0677.34886-.0677.34886l2.412 4.45714.4826.47829-.1509.15085-.0557.05572-.3857-.05315.0591.38229-.1114.11143-.0197-.01972c-.018-.018-.0429-.02742-.0669-.02742s-.048.00942-.0668.02742c-.0369.03686-.0369.09686 0 .13372l.0197.01971-.0532.054-.0137-.01457c-.0188-.018-.0428-.02743-.0668-.02743-.0249 0-.0489.00943-.0669.02743-.0368.03686-.0368.09686 0 .13372l.0146.01457-1.0149 1.02004-.0231-.0232c-.0189-.018-.0429-.0274-.0669-.0274s-.048.0094-.0668.0274c-.0369.0369-.0369.0969 0 .1337l.024.0232-.054.054-.018-.0172c-.018-.0188-.0429-.0283-.066-.0283-.0249 0-.0489.0095-.0677.0283-.036.0369-.036.096 0 .1329l.018.018-.132.1337-.018.1697.0694.0712-.0017.0008-.084.0857-5.47632 5.4755-.07114-.0592-.22714.0326-.12858.1303-.00857-.0086c-.01885-.0189-.04285-.0283-.06685-.0283s-.04886.0094-.06686.0283c-.03686.0369-.03686.096 0 .1329l.01028.0102-.05314.0549-.00514-.0051c-.018-.0189-.04286-.0283-.06686-.0283s-.048.0094-.06686.0283c-.036.0368-.036.096 0 .1328l.006.0069-1.002 1.0191-.02057-.0206c-.01885-.0188-.042-.0274-.06685-.0274-.024 0-.048.0086-.06686.0274-.03686.0369-.03686.0969 0 .1338l.02228.0214-.05314.054-.01628-.0163c-.01886-.018-.04286-.0274-.06772-.0274-.02314 0-.048.0094-.066.0274-.03686.0369-.03686.0969 0 .1337l.01714.018-.07457.0763-.38828-.0694.02914.4337-.12257.1251.10628.5846s.16286.5091.498.8469c.32486.3274.82029.4842.84172.5005l.55971.0977.138-.1354.38572.0626-.06343-.3814.11743-.1149.054.054c.018.018.042.0274.066.0274s.04885-.0094.06685-.0274c.03686-.0377.03686-.0969 0-.1337l-.05314-.0532.05486-.0531.04628.0463c.018.0188.04286.0283.06686.0283s.048-.0095.06686-.0283c.03686-.0369.03686-.096 0-.1329l-.04543-.0463 1.01743-1.0037.04457.0446c.018.0189.04286.0274.06686.0274s.048-.0085.06685-.0274c.036-.0369.036-.0969 0-.1337l-.04371-.0429.054-.054.03771.0377c.018.018.042.0275.066.0275.02486 0 .04886-.0095.06686-.0275.03686-.0368.03686-.0968 0-.1337l-.03686-.0368.114-.1115.04115-.2442-.06086-.0609.00086-.0009.11057-.1097 5.43946-5.4411-.0026-.0052.1063.1098.1706-.0189.1534-.1543.0248.0249c.0189.018.0429.0274.0669.0274s.0489-.0094.0669-.0274c.0368-.0369.0368-.0969 0-.1337l-.0249-.0249.054-.0531.0189.0188c.018.018.042.0274.0668.0274.024 0 .048-.0094.066-.0274.0369-.0368.0369-.0968 0-.1337l-.0188-.0197 1.0165-1.0183.0266.0266c.018.018.042.0274.066.0274.0249 0 .0489-.0094.0669-.0274.0368-.0369.0368-.0969 0-.1337l-.0266-.0266.054-.054.0206.0214c.0188.018.0428.0274.0668.0274s.048-.0094.0669-.0274c.0368-.0377.0368-.0968 0-.1337l-.0206-.0214.1131-.1132.378.0592z"/><path d="m17.0057 16.7793-2.4111-1.8274-.4294-.4423-1.6637 1.6637.4183.3995 1.5711 2.3562 2.1188 2.3203 2.4421-2.2783z"/></g></svg>` },
  partner: { label: "Partner", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><g fill="#5865f2"><path d="m16.6033 9.15179-2.4908 1.66051c-.249.2491-.6642.1661-.7472 0-.2491-.2491-.6642-.4151-.9133-.4982-.6642-.166-1.2454 0-1.7435.2491l-.83027.5812-4.64945 2.9889c-.99631.6642-2.2417.4152-2.9059-.6642-.66421-1.0793-.24908-2.2417.74723-2.8228l5.31365-3.65318c1.49447-.83026 3.23804-1.24539 4.89854-.83026 1.4114.24907 2.6568.99631 3.4871 2.15867.249.16605.249.66421-.1661.83026z"/><path d="m22 11.6425c0 .7473-.4152 1.4115-.9963 1.7436l-5.4797 3.5701c-.9964.6642-2.2417.9963-3.4041.9963-.4982 0-.9963 0-1.4114-.166-1.41148-.2491-2.49081-1.1624-3.48712-2.1587-.16606-.1661-.16606-.6642.16605-.7473l2.49077-1.6605c.2491-.249.6642-.166.7472 0 .2491.2491.4982.4152.9133.4982.6642.166 1.2454 0 1.7436-.2491l1.2453-.7472 3.7362-2.4908.4982-.41513c.9963-.6642 2.2417-.41512 2.9059.66423.166.4151.3321.7472.3321 1.1623z"/></g></svg>` },
  hypeevents: { label: "HypeSquad Events", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><g fill="#fbb848"><path d="m21.5912 6.84349-7.8694 5.16551c-.1351.088-.2444.2103-.317.3543l-1.1997 2.4056c-.0174.0399-.0461.0739-.0825.0977-.0364.0239-.079.0366-.1226.0366s-.0862-.0127-.1226-.0366c-.0364-.0238-.0651-.0578-.0825-.0977l-1.1997-2.4056c-.0726-.144-.1819-.2663-.317-.3543l-7.86944-5.16551c-.03957-.04698-.09618-.07632-.15738-.08157-.0612-.00524-.12198.01404-.16896.0536-.04698.03957-.07633.09618-.08157.15738-.00525.0612.01403.12198.0536.16896l3.28825 6.39624c.01598.0335.02385.0703.02297.1074s-.01049.0734-.02804.1061c-.01756.0327-.04257.0608-.07301.082-.03043.0212-.06544.035-.10219.0402h-1.97668c-.04881-.0005-.0965.0146-.13617.043-.03967.0285-.06926.0688-.08449.1152s-.0153.0964-.00022.1428c.01509.0464.04455.0869.08413.1154l8.8142 6.3155c.0403.0275.088.0422.1368.0422s.0965-.0147.1368-.0422l8.8142-6.3155c.0396-.0285.069-.069.0841-.1154s.015-.0964-.0002-.1428-.0448-.0867-.0845-.1152c-.0396-.0284-.0873-.0435-.1362-.043h-1.9766c-.0389-.0015-.0769-.0126-.1105-.0323-.0335-.0197-.0617-.0474-.082-.0806s-.0321-.071-.0343-.1098c-.0022-.0389.0052-.0777.0216-.113l3.3132-6.39624c.0395-.04698.0588-.10776.0536-.16896-.0053-.0612-.0346-.11781-.0816-.15738-.047-.03956-.1078-.05884-.169-.0536-.0612.00525-.1178.03459-.1574.08157z"/><path d="m12.1741 2.10696.8081 1.64723c.0143.02721.0346.05084.0594.06913.0247.01829.0533.03078.0835.03654l1.8213.26107c.0356.00524.0691.02036.0966.04366s.0479.05383.0589.08814.0122.07102.0034.10595c-.0089.03494-.0273.06671-.0532.0917l-1.3178 1.28049c-.0213.02203-.0373.04854-.047.07758s-.0127.05988-.009.09025l.3108 1.80885c.0069.03487.0036.07096-.0094.10404-.013.03307-.0351.06174-.0639.08264-.0287.0209-.0628.03315-.0983.03532-.0354.00217-.0708-.00584-.1019-.02309l-1.6285-.85159c-.0265-.01527-.0565-.02331-.0871-.02331-.0305 0-.0605.00804-.087.02331l-1.6286.85159c-.031.01725-.0664.02526-.1019.02309-.0354-.00217-.0695-.01442-.0983-.03532-.0287-.0209-.0509-.04957-.0639-.08264-.0129-.03308-.0162-.06917-.0094-.10404l.3108-1.80885c.0038-.03037.0008-.06121-.0089-.09025s-.0258-.05555-.047-.07758l-1.31781-1.28049c-.02595-.02499-.04438-.05676-.05318-.0917-.00881-.03493-.00764-.07164.00336-.10595s.03141-.06484.05889-.08814c.02749-.0233.06095-.03842.0966-.04366l1.82124-.25485c.0303-.00576.0588-.01825.0836-.03654.0247-.01829.045-.04192.0594-.06913l.8081-1.64723c.015-.03321.0392-.06147.0696-.08149.0305-.02003.066-.03101.1025-.03166.0364-.00065.0723.00905.1035.02798.0311.01893.0563.0463.0725.07895z"/></g></svg>` },
  bughunter: { label: "Bug Hunter", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m16.5822 2.63812s7.6721 5.23623 4.7567 12.58868c-2.9154 7.3525-8.7142 5.313-6.5469 3.1648 2.1674-2.1482-2.5573-3.6059-5.58143-6.3935l7.36523-9.35998" fill="#3ba55c"/><path d="m16.1155 9.83717c-1.6175 2.05873-3.9 3.08803-5.6646 2.71723l-6.15684 7.8447c-.10362.1324-.23231.243-.37871.3256-.1464.0825-.30764.1354-.47451.1556-.16686.0202-.33606.0073-.49793-.038-.16187-.0452-.31322-.122-.44541-.2258-.13374-.1032-.2457-.2319-.32942-.3786s-.13754-.3086-.15834-.4762c-.02081-.1677-.00819-.3378.03712-.5005s.12242-.3149.22687-.4476l6.12492-7.832c-.81197-1.62394-.36443-4.11099 1.27869-6.18886 2.03946-2.58295 5.11476-3.54836 6.89856-2.15459 1.7837 1.39377 1.5664 4.61607-.4604 7.19902z" fill="#b4e1cd"/></svg>` },
  bravery: { label: "HypeSquad Bravery", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path clip-rule="evenodd" d="m5.01502 4h13.97008c.1187 0 .215.09992.215.22305v9.97865c0 .0697-.0312.1343-.0837.1767l-6.985 5.5752c-.0389.0313-.0847.0464-.1314.0464-.0466 0-.0924-.0151-.1313-.0464l-6.985-5.5752c-.05252-.0424-.08365-.107-.08365-.1767v-9.97865c0-.12313.0963-.22305.21497-.22305zm7.82148 7.0972 4.1275-2.71296c.1039-.06863.2299.04542.1725.15644l-1.7114 3.36192c-.0403.0807.0182.1756.1079.1756h1.0246c.118 0 .1664.1504.0706.219l-4.6267 3.3175c-.0414.0303-.0978.0303-.1402 0l-4.6267-3.3175c-.0948-.0686-.04639-.219.07059-.219h1.02356c.09076 0 .14925-.0949.10791-.1756l-1.71132-3.36293c-.05648-.11001.06958-.22305.17345-.15543l4.12851 2.71296c.0716.0474.1291.112.1674.1887l.6293 1.2636c.0444.0888.1714.0888.2158 0l.6293-1.2636c.0383-.0767.0958-.1423.1674-.1887z" fill="#9c84ef" fill-rule="evenodd"/></svg>` },
  brilliance: { label: "HypeSquad Brilliance", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path clip-rule="evenodd" d="m12 20c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.7921-8.275 3.6146-2.3738c.0909-.05916.2013.03974.151.136l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1315.0618.1916l-4.0517 2.9027c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9027c-.08301-.0601-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.09626.06094-.19516.1519-.136l3.61545 2.3738c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z" fill="#f47b67" fill-rule="evenodd"/></svg>` },
  balance: { label: "HypeSquad Balance", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path clip-rule="evenodd" d="m11.8622 4.05696c.076-.07595.1996-.07595.2756 0l7.8048 7.80474c.0371.0362.0574.0865.0574.1377 0 .0513-.0212.1016-.0574.1378l-7.8048 7.8047c-.038.038-.0883.0574-.1378.0574s-.0998-.0194-.1378-.0574l-7.8048-7.8047c-.03709-.0362-.0574-.0857-.0574-.1378s.02031-.1015.0574-.1377zm.9299 8.29474 3.6146-2.37377c.0909-.05917.2013.03977.151.13597l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1316.0618.1916l-4.0517 2.9028c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9028c-.08301-.06-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.0962.06094-.19514.1519-.13597l3.61545 2.37377c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z" fill="#45ddc0" fill-rule="evenodd"/></svg>` },
  early: { label: "Early Supporter", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m16.4823 15.6364h-1.2218c-.7028-.0096-1.3731-.2975-1.8639-.8006s-.7621-1.1803-.7543-1.8831v-1.2509c-.0019-.2803.1071-.5501.3033-.7504s.4636-.3148.744-.3187h5.7382v-1.49815h-10.18186c-.92363 2.08005-1.86909 4.24725-2.18181 5.09095-.20109.4955-.54642.9193-.99121 1.2162-.44479.297-.96854.4535-1.50334.4492v.8946c.40174.4023.87908.7212 1.40455.9384s1.08869.3283 1.65727.327h9.1564c.7008 0 1.373-.2779 1.8693-.7728s.776-1.1663.7779-1.8672v-.1891c-.4132.2695-.8957.4135-1.3891.4146zm-6.1309-2.0437c-.1802.0013-.35663-.0514-.50658-.1513-.14996-.0999-.26654-.2424-.33472-.4092-.06819-.1668-.08484-.3502-.04782-.5265.03702-.1764.12602-.3376.25552-.4629s.2936-.2089.471-.2401c.1775-.0312.3603-.0084.5247.0652.1644.0737.3031.1949.398.3481.0949.1531.1417.3312.1344.5113-.0093.2315-.1074.4506-.274.6118-.1665.1611-.3888.252-.6205.2536z" fill="#9cb8ff"/><path d="m19.617 10.6327h-5.92c-.1394.001-.2773.0294-.4057.0836-.1285.0543-.245.1333-.343.2326-.0979.0992-.1753.2168-.2278.346-.0524.1292-.079.2675-.078.4069v1.2509c-.0078.7028.2635 1.38.7543 1.8831s1.1611.791 1.8639.8006h2.7854c.4934-.0011.9759-.1451 1.3891-.4146l.0728-.0436c.3531-.2533.6404-.5876.8378-.9748s.2991-.8161.2967-1.2507v-1.2509c.0039-.2772-.1015-.5448-.2934-.7449s-.4549-.3166-.7321-.3242zm-2.6109 3.8327h-1.1563c-.0626.0081-.1261.0027-.1864-.0157s-.1159-.0495-.1633-.0911c-.0473-.0416-.0853-.0929-.1112-.1503-.026-.0575-.0395-.1198-.0395-.1829 0-.063.0135-.1253.0395-.1828.0259-.0574.0639-.1087.1112-.1503.0474-.0416.103-.0727.1633-.0911s.1238-.0238.1864-.0158h1.1563c.0626-.008.1261-.0026.1864.0158s.1159.0495.1633.0911c.0473.0416.0853.0929.1112.1503.026.0575.0395.1198.0395.1828 0 .0631-.0135.1254-.0395.1829-.0259.0574-.0639.1087-.1112.1503-.0474.0416-.103.0727-.1633.0911s-.1238.0238-.1864.0157zm2.0728 0h-.4437c-.1069-.0137-.2052-.066-.2764-.147s-.1105-.1851-.1105-.293c0-.1078.0393-.2119.1105-.2929s.1695-.1333.2764-.1471h.4437c.0625-.008.126-.0026.1863.0158s.116.0495.1633.0911c.0474.0416.0853.0929.1113.1503.0259.0575.0394.1198.0394.1828 0 .0631-.0135.1254-.0394.1829-.026.0574-.0639.1087-.1113.1503-.0473.0416-.103.0727-.1633.0911s-.1238.0238-.1863.0157z" fill="#cbdaf7"/><path d="m17.0061 13.5855h-1.1564c-.0625-.0081-.1261-.0027-.1864.0157s-.1159.0495-.1633.0911c-.0473.0417-.0852.0929-.1112.1503-.026.0575-.0394.1198-.0394.1829 0 .063.0134.1253.0394.1828.026.0574.0639.1087.1112.1503.0474.0416.103.0727.1633.0911s.1239.0238.1864.0158h1.1564c.0625.008.126.0026.1863-.0158s.116-.0495.1633-.0911c.0474-.0416.0853-.0929.1113-.1503.0259-.0575.0394-.1198.0394-.1828 0-.0631-.0135-.1254-.0394-.1829-.026-.0574-.0639-.1086-.1113-.1503-.0473-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1863-.0157zm2.0581 0h-.4436c-.107.0137-.2052.066-.2765.147-.0712.081-.1105.1851-.1105.293 0 .1078.0393.2119.1105.2929.0713.081.1695.1333.2765.1471h.4436c.0626.008.1261.0026.1864-.0158s.1159-.0495.1633-.0911c.0473-.0416.0853-.0929.1112-.1503.026-.0575.0395-.1198.0395-.1828 0-.0631-.0135-.1254-.0395-.1829-.0259-.0574-.0639-.1086-.1112-.1503-.0474-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1864-.0157z" fill="#9cb8ff"/><path d="m2.62786 15.1709c-.10957-.05-.21639-.1058-.32-.1673v4.2037l1.13455.7927 1.12727-.7927v-3.3164c-.71689.0255-1.41481-.2333-1.94182-.72z" fill="#ff903e"/><path d="m6.3152 13.7455c-.1373.345-.34381.6583-.6068.9205-.26298.2622-.57687.4677-.92232.604-.34546.1363-.71516.2004-1.08632.1883-.37117-.012-.73594-.0999-1.07183-.2583.52585.4893 1.22391.7508 1.94182.7273.53666-.0108 1.05762-.1831 1.49485-.4945s.77041-.7473.95606-1.251c.32727-.8291 1.27272-2.9963 2.18182-5.09089h-.92364s-1.25818 2.85819-1.96364 4.65459z" fill="#d0d9ea"/><path d="m11.5298 4 .6182.05091z" fill="#ebeff7"/><path d="m16.897 7.11273c.8756.02248 1.7483.11 2.6109.26182-.5673-.67636-2.7782-2.90909-7.3527-3.30909 3.309.79273 4.5309 2.67636 4.7418 3.04727zm-10.58184 6.63277c.70545-1.7964 1.96363-4.61095 1.96363-4.61095s2.24001-1.69454 6.85091-1.98545c-1.6073-2.18182-4.2473-2.90909-5.87636-3.08364-5.62182.60364-8.24727 4.87273-8.24727 8.27634-.033091.5186.06957 1.0368.29786 1.5036s.57432.866 1.00396 1.1582c.1036.0615.21042.1173.32.1673.33408.1592.69713.2485 1.06693.2625.36979.014.73856-.0476 1.08372-.181.34517-.1335.65948-.3359.92369-.595.26422-.2591.47278-.5694.61293-.9119zm-4.74909-2.0655c.02458-.5434.26177-1.0553.66042-1.4254.39864-.37006.92678-.5686 1.47049-.55278.53236.11535.99792.43568 1.29598.89158s.40466 1.0109.29674 1.5448c-.02451.5382-.25765 1.0458-.65 1.415-.39235.3693-.91308.5713-1.45181.5632-.26672-.053-.52036-.1581-.74635-.3094-.22599-.1512-.41989-.3456-.57057-.572-.15069-.2263-.25519-.4802-.30751-.7471-.05232-.2668-.05144-.5414.00261-.8079z" fill="#fff"/><path d="m16.1552 7.10544c-.3564 0-.7273 0-1.0328.04363-4.6109.29091-6.84359 1.98546-6.84359 1.98546h15.60729c-1.29-.93245-2.7877-1.53654-4.3637-1.76-.8626-.15183-1.7353-.23934-2.6109-.26182z" fill="#7687b2"/><path d="m3.18792 14.1164c.54495.0178 1.07495-.1799 1.47517-.5502.40023-.3703.63843-.8833.66301-1.428.10697-.5391-.00456-1.0986-.31006-1.5555s-.77995-.77374-1.31903-.88086c-.5437-.01583-1.07184.18271-1.47049.55276-.39864.3701-.63583.882-.66042 1.4254-.05404.2665-.05493.5411-.0026.8079.05232.2669.15682.5208.30751.7471.15068.2264.34458.4208.57057.572.22599.1513.47962.2564.74634.3094zm-1.28-2.3564c.00742-.1825.05112-.3617.12857-.5271s.18709-.3137.32251-.4363c.13542-.1225.29391-.2168.4662-.2775.1723-.0606.35494-.0862.53727-.0754.35402.0768.6634.2902.86088.5939.19747.3037.26707.6731.19366 1.0279-.01513.3614-.17287.7021-.43868.9475-.26581.2453-.61802.3753-.9795.3616-.35825-.0704-.67407-.2798-.87847-.5823-.20441-.3025-.28078-.6736-.21244-1.0323z" fill="#7687b2"/><path d="m2.96248 13.3745c.36148.0138.71369-.1162.9795-.3616.2658-.2453.42355-.586.43868-.9474.0734-.3548.0038-.7242-.19367-1.0279-.19748-.3037-.50686-.5171-.86088-.594-.36217-.0118-.71436.1199-.97995.3664s-.42308.588-.43823.95c-.06934.3535.00209.7201.19907 1.0216.19698.3016.50394.5144.85548.5929zm12.16002-6.21814h1.7527c-.2182-.37818-1.4545-2.25454-4.7345-3.04727l-.611-.10909h-.9163c-.4521.0002-.90378.02691-1.35274.08 1.62184.19636 4.25454.86545 5.86184 3.07636z" fill="#ff903e"/><circle cx="10.28" cy="12.75" fill="#040405" r="1"/></svg>` },
  bughuntergold: { label: "Bug Hunter Gold", svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="140" viewBox="0 0 24 24" width="140"><mask id="bughuntergold_a" height="19" maskUnits="userSpaceOnUse" width="16" x="2" y="2"><path d="m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z" fill="#ffd56c"/></mask><path d="m16.5888 2.60168s7.6906 5.25949 4.7351 12.63232c-2.9555 7.3728-8.7235 5.323-6.5307 3.1461s-2.5582-3.591-5.57726-6.4194z" fill="#ffeac0"/><path d="m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z" fill="#ffd56c"/><g fill="#fff" mask="url(#bughuntergold_a)"><path d="m13.0389-1.26782.7405.09754-3.1567 23.96118-.74043-.0976z"/><path d="m14.2822-1.51801 1.6226.21377-3.1566 23.96114-1.6226-.2137z"/></g></svg>` },
  botdev: { label: "Early Verified Bot Developer", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="140" viewBox="0 0 24 24" width="140"><path d="m21.58 11.4-4.28-7.39-.35-.6h-9.91l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6zm-13.07-1.03-1.63 1.63 1.63 1.63v2.73l-4.36-4.36 4.37-4.37v2.74zm3.12 6.93-2.04-.63 3.1-9.98 2.04.64zm3.86-.93v-2.73l1.63-1.64-1.63-1.63v-2.74l4.36 4.37z" fill="#3e70dd"/></svg>` },
  activedev: { label: "Active Developer", svg: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="none"> <path d="M6.47213 4L4 6.47213V17.5279L6.47217 20H17.5278L20 17.5279V6.47213L17.5279 4H6.47213ZM10.8582 16.4255H8.64551C8.64551 14.5952 7.1567 13.1064 5.32642 13.1064V10.8936C7.1567 10.8936 8.64551 9.40483 8.64551 7.57454H10.8582C10.8582 9.39042 9.96684 10.9908 8.61129 12C9.96684 13.0093 10.8582 14.6096 10.8582 16.4255ZM18.6667 13.1064C16.8364 13.1064 15.3476 14.5952 15.3476 16.4255H13.1348C13.1348 14.6096 14.0263 13.0093 15.3818 12C14.0263 10.9908 13.1348 9.39042 13.1348 7.57454H15.3476C15.3476 9.40483 16.8364 10.8936 18.6667 10.8936V13.1064V13.1064Z" fill="#2EA967"/> </svg>` },
};

const DISCORD_FLAG_BADGES = [
  { bit: 1 << 0,  key: "staff" },
  { bit: 1 << 1,  key: "partner" },
  { bit: 1 << 2,  key: "hypeevents" },
  { bit: 1 << 3,  key: "bughunter" },
  { bit: 1 << 6,  key: "bravery" },
  { bit: 1 << 7,  key: "brilliance" },
  { bit: 1 << 8,  key: "balance" },
  { bit: 1 << 9,  key: "early" },
  { bit: 1 << 14, key: "bughuntergold" },
  { bit: 1 << 17, key: "botdev" },
  { bit: 1 << 22, key: "activedev" },
];

const ACTIVITY_TYPE_LABEL = { 0: "PLAYING", 1: "STREAMING", 2: "LISTENING TO", 3: "WATCHING", 5: "COMPETING IN" };

let activityTimerId = null;

function formatElapsed(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
  const s = String(totalSec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// Set to true to log the raw Lanyard payload to the browser console (F12).
// Useful for checking whether Spotify / activities are actually arriving.
const DISCORD_DEBUG = false;

/* Relative luminance, per WCAG. */
function relLum([r, g, b]) {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(a, b) {
  const l1 = relLum(a), l2 = relLum(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

/* Takes a colour and the background it sits on, and returns the closest
   colour to it that still reaches the target contrast. The hue is kept and
   only the lightness moves, so a personalised colour stays recognisable
   while remaining readable. */
function readableOn(rgb, bg, target = 4.5) {
  if (contrast(rgb, bg) >= target) return rgb;
  const toward = relLum(bg) > 0.5 ? 0 : 255;
  let lo = 0, hi = 1, best = rgb.map(() => toward);
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    const test = rgb.map((v) => Math.round(v + (toward - v) * mid));
    if (contrast(test, bg) >= target) { best = test; hi = mid; } else { lo = mid; }
  }
  return best;
}

function renderDiscordPresence(data) {
  if (DISCORD_DEBUG) {
    console.log("[Lanyard] listening_to_spotify:", data.listening_to_spotify);
    console.log("[Lanyard] spotify:", data.spotify);
    console.log("[Lanyard] activities:", data.activities);
    console.log("[Lanyard] full payload:", data);
  }
  const statusColor = { online: "#23a55a", idle: "#f0b232", dnd: "#f23f43", offline: "#80848e" };
  const du = data.discord_user;
  const status = data.discord_status || "offline";

  if (du?.avatar) {
    const img = document.getElementById("discordAvatarImg");
    const ext = du.avatar.startsWith("a_") ? "gif" : "png"; // animated (Nitro) avatars are GIFs, not PNGs
    img.src = `https://cdn.discordapp.com/avatars/${du.id}/${du.avatar}.${ext}?size=128`;
    img.style.display = "block";
    document.getElementById("discordAvatarFallback").style.display = "none";
  }

  const decoEl = document.getElementById("discordAvatarDecoration");
  const decorationAsset = du?.avatar_decoration_data?.asset;
  if (decorationAsset) {
    // Animated decorations are served as APNG, which browsers can't decode from
    // this endpoint — request the still PNG instead, and hide it if it fails.
    const stillAsset = decorationAsset.replace(/^a_/, "");
    decoEl.onerror = () => {
      if (decoEl.dataset.retried) {
        decoEl.style.display = "none";
        return;
      }
      decoEl.dataset.retried = "1";
      decoEl.src = `https://cdn.discordapp.com/avatar-decoration-presets/${stillAsset}.png?size=160`;
    };
    decoEl.src = `https://cdn.discordapp.com/avatar-decoration-presets/${decorationAsset}.png?size=160`;
    decoEl.style.display = "block";
  } else {
    decoEl.style.display = "none";
  }

  // Discord's custom display-name color (from Nitro name styling), if set
  const nameEl = document.querySelector(".discord-username");
  const nameColor = du?.display_name_styles?.colors?.[0];
  if (nameEl && typeof nameColor === "number") {
    const rgb = [(nameColor >> 16) & 255, (nameColor >> 8) & 255, nameColor & 255];
    // The card this sits on, so the check is against what is really behind it.
    const safe = readableOn(rgb, [22, 22, 28]);
    nameEl.style.color = `rgb(${safe[0]}, ${safe[1]}, ${safe[2]})`;
  }

  // Server clan / guild tag (e.g. "RAR") shown next to the name
  const clanEl = document.getElementById("discordClanTag");
  const pg = du?.primary_guild;
  if (clanEl) {
    if (pg?.identity_enabled && pg?.tag) {
      const iconUrl = pg.badge && pg.identity_guild_id
        ? `https://cdn.discordapp.com/clan-badges/${pg.identity_guild_id}/${pg.badge}.png?size=32`
        : null;
      clanEl.innerHTML = `${iconUrl ? `<img src="${iconUrl}" alt="" onerror="this.remove()" />` : ""}<span>${pg.tag}</span>`;
      clanEl.style.display = "inline-flex";
    } else {
      clanEl.style.display = "none";
    }
  }
  document.getElementById("discordStatusDot").style.background = statusColor[status] || statusColor.offline;

  const customStatus = data.activities?.find((a) => a.type === 4);
  const elCS = document.getElementById("discordCustomStatus");
  if (customStatus?.state) {
    elCS.textContent = `"${customStatus.state}"`;
    elCS.style.display = "block";
  } else {
    elCS.style.display = "none";
  }

  const flags = du?.public_flags || 0;
  const badgesWrap = document.getElementById("discordBadges");
  badgesWrap.innerHTML = "";

  if (MY_BADGES.nitroTier) appendBadge(badgesWrap, "nitro" + MY_BADGES.nitroTier);
  if (MY_BADGES.boostTier) appendBadge(badgesWrap, "boost" + MY_BADGES.boostTier);

  DISCORD_FLAG_BADGES.forEach((b) => {
    if (flags & b.bit) appendBadge(badgesWrap, b.key);
  });

  // Live activity panel (real-time "what they're doing right now", like karbon's widget)
  clearInterval(activityTimerId);
  const panel = document.getElementById("discordActivity");

  // Spotify is exposed both as an activity (type 2) and as a dedicated object.
  // Prefer the dedicated one — it has clean track/artist/art fields.
  const spotify = data.listening_to_spotify ? data.spotify : null;
  const activity = spotify || data.activities?.find((a) => a.type !== 4);

  if (activity) {
    const iconEl = document.getElementById("activityIcon");
    let iconUrl = null;

    if (spotify) {
      document.getElementById("activityType").textContent = "LISTENING TO SPOTIFY";
      document.getElementById("activityName").textContent = spotify.song || "Unknown track";
      document.getElementById("activityDetail").textContent = spotify.artist
        ? `by ${spotify.artist}`
        : spotify.album || "";
      iconUrl = spotify.album_art_url || null;
    } else {
      document.getElementById("activityType").textContent = ACTIVITY_TYPE_LABEL[activity.type] || "ACTIVE";
      document.getElementById("activityName").textContent = activity.name || "Something";
      document.getElementById("activityDetail").textContent = activity.details || activity.state || "Not doing anything";

      const key = activity.assets?.large_image;
      if (key) {
        if (key.startsWith("mp:")) {
          iconUrl = `https://media.discordapp.net/${key.slice(3)}`;
        } else if (key.startsWith("spotify:")) {
          iconUrl = `https://i.scdn.co/image/${key.slice(8)}`;
        } else if (activity.application_id) {
          iconUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${key}.webp`;
        }
      }
    }

    if (iconUrl) {
      const img = document.createElement("img");
      img.src = iconUrl;
      img.alt = "";
      img.onerror = () => img.remove();
      iconEl.innerHTML = "";
      iconEl.appendChild(img);
    }

    const start = spotify ? spotify.timestamps?.start : activity.timestamps?.start;
    if (start) {
      const tick = () => {
        document.getElementById("activityElapsed").textContent = formatElapsed(Date.now() - start);
      };
      tick();
      activityTimerId = setInterval(tick, 1000);
    }

    panel.style.display = "flex";
  } else {
    panel.style.display = "none";
  }
}

function appendBadge(wrap, key) {
  const badge = BADGE_SVG[key];
  if (!badge) return;
  const span = document.createElement("span");
  span.className = "discord-badge";
  span.title = badge.label;
  span.innerHTML = badge.svg;
  wrap.appendChild(span);
}

function renderManualBadges() {
  const badgesWrap = document.getElementById("discordBadges");
  if (MY_BADGES.nitroTier) appendBadge(badgesWrap, "nitro" + MY_BADGES.nitroTier);
  if (MY_BADGES.boostTier) appendBadge(badgesWrap, "boost" + MY_BADGES.boostTier);
}

function setupDiscordCard() {
  renderManualBadges(); // show right away, doesn't need to wait on any network call
  let ws;
  let heartbeatId;
  let reconnectDelay = 2000;

  function connect() {
    ws = new WebSocket("wss://api.lanyard.rest/socket");

    ws.onmessage = (event) => {
      const { op, t, d } = JSON.parse(event.data);
      if (op === 1) {
        // Hello - start heartbeating and subscribe to this one user
        clearInterval(heartbeatId);
        heartbeatId = setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ op: 3 }));
        }, d.heartbeat_interval);
        ws.send(JSON.stringify({ op: 2, d: { subscribe_to_ids: [DISCORD_USER_ID] } }));
        reconnectDelay = 2000; // reset backoff on a successful connection
      }
      if (op === 0 && (t === "INIT_STATE" || t === "PRESENCE_UPDATE")) {
        // INIT_STATE is keyed by user id; PRESENCE_UPDATE is the presence object itself
        const presence = t === "INIT_STATE" ? d[DISCORD_USER_ID] : d;
        if (presence) renderDiscordPresence(presence);
      }
    };

    ws.onclose = () => {
      clearInterval(heartbeatId);
      // Reconnect with backoff so a dropped connection doesn't silently go stale
      setTimeout(connect, reconnectDelay);
      reconnectDelay = Math.min(reconnectDelay * 1.5, 30000);
    };

    ws.onerror = () => ws.close();
  }

  // Also grab an immediate snapshot via REST so the card isn't empty while the socket connects
  fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
    .then((r) => r.json())
    .then((json) => {
      if (json?.success) renderDiscordPresence(json.data);
    })
    .catch(() => {
      // Not registered with Lanyard yet, or the request failed — the static
      // fallback card (offline dot, "f" avatar, no activity panel) stays as-is.
    });

  connect();
}

/* ============================== SMOOTH SCROLL ==============================
   Lenis puts inertia on the page. Everything already pinned or scrubbed reads
   as weighted rather than snapping frame to frame with the scrollbar, and it is
   the single biggest reason a site feels considered rather than assembled.

   Two things have to be true for it not to fight the rest of the page: GSAP has
   to drive the loop, so ScrollTrigger and Lenis agree on the frame, and the
   native smooth scroll has to be off, or the two ease against each other. */

let lenis = null;

function setupSmoothScroll() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || typeof window.Lenis === "undefined" || typeof window.gsap === "undefined") return;

  document.documentElement.style.scrollBehavior = "auto";

  lenis = new Lenis({
    duration: 1.05,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  });

  if (window.ScrollTrigger) lenis.on("scroll", ScrollTrigger.update);

  // One ticker, not two. lagSmoothing off so a slow frame does not make the
  // scrub jump to catch up.
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // In page links have to go through Lenis, or they teleport past the easing.
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -80 });
  });
}

/* The project overlay and the intro both take the page out of play. Lenis has
   to be told, or the body keeps easing underneath them. */
function lockScroll(on) {
  document.documentElement.classList.toggle("no-scroll", on);
  if (!lenis) return;
  if (on) lenis.stop();
  else lenis.start();
}

/* ============================== SCRAMBLE ==============================
   Text resolves out of noise one character at a time. Used on the mono lines
   only, where the fixed advance width means nothing reflows while it lands. */

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>*#";

function scramble(node, text, duration = 900) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    node.textContent = text;
    return;
  }
  node.classList.add("scramble");
  const chars = text.split("");
  const t0 = performance.now();

  const step = (now) => {
    const p = Math.min(1, (now - t0) / duration);
    // each character locks in at its own point across the run, left to right
    const settled = p * chars.length * 1.25;
    node.textContent = chars
      .map((ch, i) => {
        if (ch === " ") return " ";
        if (i < settled - 1) return ch;
        return SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0];
      })
      .join("");
    if (p < 1) requestAnimationFrame(step);
    else node.textContent = text;
  };
  // If rAF never ticks, the text still has to end up readable.
  setTimeout(() => (node.textContent = text), duration + 1200);
  requestAnimationFrame(step);
}

/* ============================== INTRO CURTAIN ==============================
   The drawing draws itself, the line resolves, the panel lifts. Once per
   session, and it never depends on GSAP loading. */

function setupBoot() {
  const boot = document.getElementById("boot");
  if (!boot) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let seen = false;
  try { seen = sessionStorage.getItem("booted") === "1"; } catch (e) { /* private mode */ }

  const drop = () => {
    boot.remove();
    lockScroll(false);
  };
  if (reduce || seen) { drop(); return; }
  try { sessionStorage.setItem("booted", "1"); } catch (e) { /* ignore */ }

  const n = document.getElementById("bootN");
  const bar = document.getElementById("bootBar");
  const line = document.getElementById("bootLine");
  const draw = document.getElementById("bootDraw");
  lockScroll(true);

  // Each stroke is dashed by its own length, so it draws rather than fades.
  if (draw) {
    [...draw.children].forEach((el, i) => {
      // A guide line is already dashed. Overwriting its dash to draw it would
      // turn it solid, so those fade in and only the solid strokes draw.
      if (el.hasAttribute("stroke-dasharray")) {
        el.style.opacity = "0";
        el.style.transition = `opacity .9s ease ${0.5 + i * 0.06}s`;
        requestAnimationFrame(() => (el.style.opacity = "1"));
        return;
      }
      const len = el.getTotalLength ? el.getTotalLength() : 1000;
      el.style.setProperty("--len", len);
      el.style.transition = `stroke-dashoffset 1.15s cubic-bezier(.65,0,.35,1) ${i * 0.075}s`;
      requestAnimationFrame(() => (el.style.strokeDashoffset = "0"));
    });
  }

  const text = line ? line.textContent : "";
  if (line) setTimeout(() => scramble(line, text, 820), 420);

  // Safety net: a throttled renderer must not leave a visitor behind a curtain.
  const bail = setTimeout(drop, 3400);

  const DUR = 1500;
  const t0 = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / DUR);
    n.textContent = String(Math.round(100 * p)).padStart(3, "0");
    bar.style.width = `${p * 100}%`;
    if (p < 1) { requestAnimationFrame(tick); return; }
    clearTimeout(bail);
    boot.style.transition = "transform .85s cubic-bezier(.76,0,.24,1)";
    boot.style.transform = "translateY(-101%)";
    lockScroll(false);
    setTimeout(drop, 900);
  };
  requestAnimationFrame(tick);
}

/* ============================== AMBIENT LIGHT ==============================
   The two blurred fields behind the page take their colour from whichever build
   is in front of you. This is the reason the page never reads as a flat black
   field, and it costs one custom property write per section, not per frame. */

function setAmbient(a1, a2) {
  const root = document.documentElement;
  if (root.style.getPropertyValue("--a1") === a1) return;
  root.style.setProperty("--a1", a1);
  root.style.setProperty("--a2", a2);
}

function setupAmbient() {
  if (!("IntersectionObserver" in window)) return;

  // Panels carry their own palette. Everything else falls back to the neutral
  // pair, so the colour only ever comes from the work.
  const zones = [...document.querySelectorAll("[data-a1]")];
  const NEUTRAL = ["#2f3566", "#3a2350"];

  const io = new IntersectionObserver(
    (entries) => {
      // The panel covering the middle of the viewport wins.
      const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (hit) setAmbient(hit.target.dataset.a1, hit.target.dataset.a2);
    },
    { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.5, 1] }
  );
  zones.forEach((z) => io.observe(z));

  // Leaving the reel in either direction returns the page to neutral.
  const reel = document.querySelector(".reel");
  if (reel) {
    new IntersectionObserver(
      ([e]) => { if (!e.isIntersecting) setAmbient(NEUTRAL[0], NEUTRAL[1]); },
      { threshold: 0 }
    ).observe(reel);
  }
}

/* ============================== THE SPACE ==============================
   An infinite perspective grid the work sits inside, drawn on a 2D canvas.

   The reference does this with Three.js. It does not need to be: a floor and
   ceiling of converging lines plus travelling depth rules gets the same read
   for a few hundred bytes of maths and no dependency. The grid travels toward
   you as you scroll and drifts against the cursor, so the reel reads as a room
   you are moving through rather than a stack of cards on a page.

   It only runs while the section is on screen, and not at all under reduced
   motion, where the static CSS field stands in for it. */

function setupSpace() {
  const cv = document.getElementById("space");
  if (!cv) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const ctx = cv.getContext("2d", { alpha: true });
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let raf = 0;
  let live = false;
  let phase = 0;
  let scrollPhase = 0;

  // pointer drift, eased toward the target rather than snapped
  let px = 0;
  let py = 0;
  let tx = 0;
  let ty = 0;

  const COLS = 26;      // converging lines each side of the vanishing point
  const ROWS = 22;      // travelling depth rules
  const SPREAD = 2.6;   // how far the floor fans out past the viewport

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.clientWidth;
    h = cv.clientHeight;
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // Depth rules bunch up toward the horizon. k is 0 at the viewer and 1 at the
  // vanishing point; the reciprocal is what makes it read as perspective
  // rather than as a set of evenly spaced lines.
  const depth = (k) => 1 / (k + 0.42);

  const plane = (hz, vx, dir) => {
    const far = h * 0.5 * dir;
    const near = dir > 0 ? h - hz : hz;

    // converging lines
    for (let i = -COLS; i <= COLS; i++) {
      const edge = vx + (i / COLS) * w * SPREAD;
      const fade = 1 - Math.min(1, Math.abs(i) / COLS);
      ctx.globalAlpha = 0.08 + fade * 0.2;
      ctx.beginPath();
      ctx.moveTo(vx, hz);
      ctx.lineTo(edge, hz + near * dir);
      ctx.stroke();
    }

    // travelling depth rules
    for (let k = 0; k < ROWS; k++) {
      const d = depth(k + phase);
      const y = hz + near * d * dir;
      if (dir > 0 ? y > h || y < hz : y < 0 || y > hz) continue;
      const fade = Math.min(1, d * 1.5);
      ctx.globalAlpha = 0.06 + fade * 0.26;
      const half = w * SPREAD * d;
      ctx.beginPath();
      ctx.moveTo(vx - half, y);
      ctx.lineTo(vx + half, y);
      ctx.stroke();
    }
    void far;
  };

  const draw = () => {
    raf = 0;
    if (!live) return;

    px += (tx - px) * 0.06;
    py += (ty - py) * 0.06;

    const hz = h * (0.46 + py * 0.05);
    const vx = w * (0.5 + px * 0.09);

    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.9)";

    plane(hz, vx, 1);   // floor
    plane(hz, vx, -1);  // ceiling

    // the horizon itself, and the vanishing point marked like a datum
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.moveTo(0, hz);
    ctx.lineTo(w, hz);
    ctx.stroke();

    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = "rgba(204,255,51,0.9)";
    ctx.beginPath();
    ctx.moveTo(vx - 9, hz);
    ctx.lineTo(vx + 9, hz);
    ctx.moveTo(vx, hz - 9);
    ctx.lineTo(vx, hz + 9);
    ctx.stroke();
    ctx.globalAlpha = 1;

    raf = requestAnimationFrame(draw);
  };

  const kick = () => {
    if (!raf && live) raf = requestAnimationFrame(draw);
  };

  // Only paint while the section is actually on screen.
  const host = cv.closest("section") || cv.parentElement;
  if ("IntersectionObserver" in window && host) {
    new IntersectionObserver(
      ([e]) => {
        live = e.isIntersecting;
        if (live) { resize(); kick(); }
        else if (raf) { cancelAnimationFrame(raf); raf = 0; }
      },
      { rootMargin: "20% 0px" }
    ).observe(host);
  } else {
    live = true;
    resize();
    kick();
  }

  window.addEventListener("resize", () => { resize(); kick(); });

  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      kick();
    });
  }

  // Scroll drives travel: moving down the page moves you through the space.
  if (window.ScrollTrigger && host) {
    ScrollTrigger.create({
      trigger: host,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        scrollPhase = self.progress;
        phase = (scrollPhase * ROWS) % 1;
        kick();
      },
    });
  }
}

/* ============================== CONVERSION EVENTS ==============================
   Vercel Analytics was counting pageviews only, so there was no way to tell
   whether any of this turns into work. Two moments matter: someone asking to
   start a project, and someone opening a build. */
function track(name, data) {
  try {
    if (typeof window.va === "function") window.va("event", { name, ...data });
  } catch (e) { /* analytics must never break a click */ }
}

function setupEvents() {
  document.addEventListener("click", (e) => {
    const cta = e.target.closest('a[href*="discord.com"], a[href="#start"], .nav-cta');
    if (!cta) return;
    track("start_project_click", {
      where: cta.closest("#start") ? "contact"
           : cta.closest(".nav")   ? "nav"
           : cta.closest(".hero")  ? "hero"
           : "other",
    });
  });
}

/* ============================== EDGE INDEX ==============================
   Where you are in the document, down the left margin. IntersectionObserver
   only, so it costs nothing per frame. It also drives the one theme inversion:
   when the light section owns the viewport, body.inverted flips the fixed
   layers that would otherwise stay dark on top of it. */

function setupEdge() {
  const edge = document.getElementById("edge");
  if (!edge || !("IntersectionObserver" in window)) return;

  const items = [...edge.querySelectorAll("li")];
  const map = new Map();
  items.forEach((li) => {
    const sec = document.getElementById(li.dataset.sec);
    if (sec) map.set(sec, li);
  });
  if (!map.size) return;

  const io = new IntersectionObserver(
    (entries) => {
      const hit = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!hit) return;
      items.forEach((li) => li.classList.toggle("on", li === map.get(hit.target)));
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
  );
  map.forEach((_li, sec) => io.observe(sec));
}

/* The single inversion. The ambient, blueprint and grid layers are fixed, so
   they have to be told when the light section is covering them; otherwise dark
   hairlines sit on top of a white page. */
function setupInversion() {
  const vision = document.getElementById("vision");
  if (!vision || !("IntersectionObserver" in window)) return;

  new IntersectionObserver(
    ([e]) => {
      const covering = e.isIntersecting && e.intersectionRatio > 0.55;
      document.body.classList.toggle("inverted", covering);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", covering ? "#f4f4f0" : "#08080a");
    },
    { threshold: [0, 0.55, 0.9] }
  ).observe(vision);
}

/* ============================== RADAR ==============================
   The sweep and the pip both read the reel's progress, so the instrument is
   actually reporting something rather than spinning for effect. */

function setupRadar() {
  const sweep = document.getElementById("radarSweep");
  const pip = document.getElementById("radarPip");
  if (!sweep || !window.ScrollTrigger) return;

  ScrollTrigger.create({
    trigger: "#work",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const deg = self.progress * 360;
      sweep.style.transform = `rotate(${deg}deg)`;
      if (pip) pip.style.transform = `rotate(${deg}deg)`;
    },
  });
}

/* ============================== POINTER PHYSICS ==============================
   Feedback only, and only where a click is the point: the CTAs pull toward the
   cursor, and the slabs light up under it. Transform and one custom property,
   both rAF gated, both desktop pointers only. */

function setupPointer() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    let raf = 0;
    btn.addEventListener("pointermove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.26;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    });
    btn.addEventListener("pointerleave", () => {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      btn.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)";
      btn.style.transform = "";
      setTimeout(() => (btn.style.transition = ""), 500);
    });
  });

  // Shelf cards tilt toward the cursor. Depth on hover is the difference
  // between a row of thumbnails and a row you want to reach into.
  document.querySelectorAll(".card").forEach((card) => {
    let raf = 0;
    card.addEventListener("pointerenter", () => card.classList.add("tilting"));
    card.addEventListener("pointermove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty("--ry", `${px * 7}deg`);
        card.style.setProperty("--rx", `${-py * 7}deg`);
      });
    });
    card.addEventListener("pointerleave", () => {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      card.classList.remove("tilting");
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });

  document.querySelectorAll(".slab").forEach((slab) => {
    let raf = 0;
    slab.addEventListener("pointermove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = slab.getBoundingClientRect();
        slab.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        slab.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    });
  });
}

/* ============================== MOTION ==============================
   GSAP owns pin, scrub and parallax, and nothing else. Every entrance on this
   page belongs to CSS, so the two systems can never fight over a property. */

function setupMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  if (reduce || !hasGSAP) {
    // Without GSAP the pan cannot be scrubbed sideways, so it has to be
    // reachable by hand. Everything else still reveals on its own.
    const panEl = document.querySelector(".pan");
    if (panEl && !reduce) {
      panEl.style.overflowX = "auto";
      panEl.style.scrollSnapType = "x proximity";
      document.querySelectorAll(".card").forEach((c) => (c.style.scrollSnapAlign = "center"));
    }
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* -- Hero. The copy leaves before the image does, so the build stays on
        screen as the reader moves down into the work. -- */
  gsap.to(".hero-media img", {
    scale: 1,
    duration: 2.4,
    ease: "power2.out",
  });
  gsap.to(".hero-media img", {
    yPercent: 12,
    scale: 1.14,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".hero-in", {
    yPercent: -16,
    opacity: 0,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "72% top", scrub: true },
  });

  /* -- THE REEL.
        Arriving, a build opens: the slab is clipped to a narrow vertical slot
        in the middle of the screen and widens to full frame as it takes over,
        while its image settles from an over scale. Leaving, it eases back and
        lifts rather than hinging away, so the handoff stays smooth and the six
        panels read as one continuous handoff rather than six pages sliding.
        All of it is transform, opacity and an inset clip, so it stays on the
        compositor. -- */
  const panels = gsap.utils.toArray(".panel");
  panels.forEach((panel, i) => {
    const slab = panel.querySelector(".slab");
    const img = panel.querySelector(".slab-media img");
    const cap = panel.querySelector(".slab-cap");
    const num = panel.querySelector(".panel-n");

    // opening: the slot widens into the full frame
    gsap.fromTo(
      slab,
      { clipPath: "inset(0% 44% 0% 44%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        scrollTrigger: { trigger: panel, start: "top bottom", end: "top 12%", scrub: true },
      }
    );
    gsap.fromTo(
      img,
      { scale: 1.32 },
      { scale: 1, ease: "none", scrollTrigger: { trigger: panel, start: "top bottom", end: "top top", scrub: true } }
    );
    // the caption arrives last, once the frame is open enough to hold it
    if (cap) {
      gsap.fromTo(
        cap,
        { y: 46, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: panel, start: "top 62%", end: "top 12%", scrub: true },
        }
      );
    }
    // the ghost numeral drifts against the slab, which gives the panel depth
    if (num) {
      gsap.fromTo(
        num,
        { yPercent: 16 },
        { yPercent: -16, ease: "none", scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: true } }
      );
    }

    // leaving: tip away and drop back into the deck
    if (i < panels.length - 1) {
      gsap.to(panel, {
        scale: 0.92,
        yPercent: -2.5,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: panels[i + 1], start: "top bottom", end: "top top", scrub: true },
      });
    }
  });

  /* -- The rail. Feedback: which build is in front, and what is still to come. -- */
  const rail = document.getElementById("reelRail");
  const railItems = rail ? [...rail.querySelectorAll("li")] : [];
  if (rail && panels.length) {
    ScrollTrigger.create({
      trigger: "#work",
      start: "top top",
      end: "bottom bottom",
      onToggle: (self) => rail.classList.toggle("on", self.isActive),
      onUpdate: (self) => {
        const n = Math.min(panels.length - 1, Math.floor(self.progress * panels.length));
        railItems.forEach((li, i) => li.classList.toggle("on", i === n));
      },
    });
  }

  /* -- THE INDEX PAN. Vertical scroll drives the track sideways, so the back
        catalogue is one sweep instead of six more screens. -- */
  const pan = document.querySelector(".pan");
  const panTrack = document.getElementById("indexMount");
  if (pan && panTrack) {
    const distance = () => Math.max(0, panTrack.scrollWidth - window.innerWidth);
    gsap.to(panTrack, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: pan,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    // the word behind the row pans at a slower rate, which is what makes the
    // shelf read as a space the cards are moving through
    const word = document.getElementById("panWord");
    if (word) {
      gsap.to(word, {
        x: () => -distance() * 0.42,
        ease: "none",
        scrollTrigger: {
          trigger: pan,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    // each card's image drifts against the track, so the row has depth rather
    // than sliding as one flat plane
    gsap.utils.toArray(".card-media img").forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: pan,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }

  /* -- The ticker leans into the direction you are scrolling, then settles.
        Cheap, and it makes the band read as a moving part of the page. -- */
  const ticker = document.getElementById("tickerMount");
  if (ticker) {
    const setSkew = gsap.quickTo(ticker, "skewX", { duration: 0.5, ease: "power3" });
    ScrollTrigger.create({
      trigger: ".ticker",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => setSkew(gsap.utils.clamp(-8, 8, self.getVelocity() / 280)),
    });
  }

  /* -- The beam in the light section draws across as it arrives. -- */
  gsap.utils.toArray(".vision-beam path").forEach((p, i) => {
    const len = p.getTotalLength ? p.getTotalLength() : 1400;
    gsap.fromTo(
      p,
      { strokeDasharray: len, strokeDashoffset: len },
      {
        strokeDashoffset: 0,
        duration: 1.6,
        delay: i * 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".vision", start: "top 72%" },
      }
    );
  });

  watchLayout();
}

/* Keeps ScrollTrigger's measurements honest.
 *
 * A single refresh on load is not enough. Images below the fold are lazy, so
 * they load as they are approached, and every one of them changes the height
 * of the document beneath every trigger below it. Left alone the drift
 * accumulates into thousands of pixels, and triggers near the bottom of the
 * page pass their own end before you ever reach them.
 *
 * So: refresh when the fonts land, when the page finishes loading, and after
 * that whenever the document's height actually changes. The refresh is
 * debounced, and skipped entirely when the height has not moved, so scrolling
 * a settled page costs nothing. */
/* The landing gradient keeps animating even when the hero is far above the
   viewport, which means six blurred layers are being recomposited the whole
   way down the page for something nobody can see. Stop them once the hero
   has gone. */
function setupMeshPause() {
  const hero = document.querySelector(".hero");
  if (!hero || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(
    ([e]) => document.documentElement.classList.toggle("mesh-off", !e.isIntersecting),
    { rootMargin: "200px" }
  ).observe(hero);
}

function watchLayout() {
  if (!window.ScrollTrigger) return;

  let lastHeight = document.documentElement.scrollHeight;
  let queued = 0;

  const refresh = () => {
    queued = 0;
    lastHeight = document.documentElement.scrollHeight;
    ScrollTrigger.refresh();
  };

  const schedule = () => {
    if (queued) clearTimeout(queued);
    queued = setTimeout(refresh, 180);
  };

  const ifChanged = () => {
    if (document.documentElement.scrollHeight !== lastHeight) schedule();
  };

  window.addEventListener("load", schedule);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);

  // Every lazy image that arrives, anywhere on the page.
  document.addEventListener("load", (e) => {
    if (e.target && e.target.tagName === "IMG") ifChanged();
  }, true);

  // Anything else that changes the page: the React islands mounting, the
  // Discord card filling in, a section growing when its content arrives.
  if ("ResizeObserver" in window) {
    let first = true;
    new ResizeObserver(() => {
      if (first) { first = false; return; }
      ifChanged();
    }).observe(document.documentElement);
  }

  // The islands say when they are up, since they mount well after load.
  window.addEventListener("f34r:mounted", schedule);
}

/* ============================== INIT ============================== */

document.addEventListener("DOMContentLoaded", () => {
  setupMeshPause();
  setupSmoothScroll();
  setupBoot();

  renderTicker();
  renderHeroStrip();
  renderWork();
  renderIndex();
  renderCraft();
  renderReviews();
  renderTools();
  renderScope();
  renderDiscordShell();

  setupNav();
  setupReveal();
  setupCountUp();
  setupAmbient();
  setupSpace();
  setupEdge();
  setupInversion();
  setupRadar();
  setupEvents();
  setupCraft();
  setupCoverflow();
  setupScramble();
  setupClock();
  setupKeys();
  setupDiscordCard();
  setupMotion();
  setupPointer();
});
