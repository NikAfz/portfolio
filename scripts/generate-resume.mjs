/**
 * Generates an improved one-page résumé PDF.
 * Run: npm run resume
 */
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(
  __dirname,
  "../src/assets/resumee-2026-07-20.pdf"
);

const INK = "#0e1614";
const MUTED = "#4a5854";
const TEAL = "#0f766e";
const RULE = "#cfd9d5";
const MARGIN_X = 48;
const PAGE_W = 612;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const doc = new PDFDocument({
  size: "LETTER",
  margin: 48,
  info: {
    Title: "Nikan Afzali — Frontend Developer Resume",
    Author: "Nikan Afzali",
    Subject: "Résumé",
  },
});

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

function hr() {
  doc.moveDown(0.45);
  const y = doc.y;
  doc
    .save()
    .strokeColor(RULE)
    .lineWidth(0.75)
    .moveTo(MARGIN_X, y)
    .lineTo(PAGE_W - MARGIN_X, y)
    .stroke()
    .restore();
  doc.moveDown(0.9);
}

function section(title) {
  doc.moveDown(0.55);
  doc
    .fillColor(TEAL)
    .font("Helvetica-Bold")
    .fontSize(10)
    .text(title.toUpperCase());
  doc.moveDown(0.5);
}

function bullets(items) {
  items.forEach((item, i) => {
    doc
      .fillColor(MUTED)
      .font("Helvetica")
      .fontSize(9.5)
      .text(`•  ${item}`, {
        indent: 0,
        lineGap: 2.5,
        paragraphGap: i === items.length - 1 ? 0 : 4,
      });
  });
  doc.moveDown(0.55);
}

function role(title, meta) {
  doc
    .fillColor(INK)
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .text(title, { width: CONTENT_W });
  doc.moveDown(0.12);
  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(8.5)
    .text(meta, { width: CONTENT_W });
  doc.moveDown(0.35);
}

function projectLinks(demoHref, githubHref) {
  doc
    .fillColor(TEAL)
    .font("Helvetica")
    .fontSize(9)
    .text("Live demo", {
      continued: true,
      link: demoHref,
      underline: true,
    })
    .fillColor(MUTED)
    .text("  ·  ", { continued: true, underline: false, link: null })
    .fillColor(TEAL)
    .text("GitHub", {
      continued: false,
      link: githubHref,
      underline: true,
    });
  doc.moveDown(0.3);
}

// ——— Header ———
doc
  .fillColor(INK)
  .font("Helvetica-Bold")
  .fontSize(24)
  .text("Nikan Afzali");

doc.moveDown(0.15);

doc
  .fillColor(TEAL)
  .font("Helvetica-Bold")
  .fontSize(11)
  .text("Frontend Web Developer");

doc.moveDown(0.55);

doc
  .fillColor(MUTED)
  .font("Helvetica")
  .fontSize(9)
  .text("+98 939 214 1219  ·  ", { continued: true })
  .fillColor(TEAL)
  .text("nikafz980@gmail.com", {
    continued: true,
    link: "mailto:nikafz980@gmail.com",
    underline: true,
  })
  .fillColor(MUTED)
  .text("  ·  Tehran, Iran", { underline: false, link: null });

doc.moveDown(0.2);

doc
  .fillColor(TEAL)
  .font("Helvetica")
  .fontSize(9)
  .text("LinkedIn", {
    continued: true,
    link: "https://www.linkedin.com/in/nik-afz/",
    underline: true,
  })
  .fillColor(MUTED)
  .text("  ·  ", { continued: true, underline: false, link: null })
  .fillColor(TEAL)
  .text("Portfolio", {
    continued: true,
    link: "https://nikafz.github.io/portfolio/",
    underline: true,
  })
  .fillColor(MUTED)
  .text("  ·  ", { continued: true, underline: false, link: null })
  .fillColor(TEAL)
  .text("GitHub", {
    continued: false,
    link: "https://github.com/NikAfz",
    underline: true,
  });

hr();

// ——— Summary ———
section("Summary");
doc
  .fillColor(MUTED)
  .font("Helvetica")
  .fontSize(9.5)
  .text(
    "Frontend developer focused on fast, clean, user-friendly web apps. Co-founder and frontend lead at LibMate, an AI-powered book translation platform — shipping production UI with React and modern deployment pipelines. Strong eye for design, interaction polish, and maintainable code.",
    { lineGap: 3 }
  );

// ——— Experience ———
section("Experience");

role("Frontend Developer", "Tadbir Kish Vira  ·  Dec 2025 – Present");
bullets([
  "Working as a frontend developer building and maintaining web interfaces with modern frontend tools.",
]);

role("Co-founder & Frontend Lead", "LibMate  ·  2024 – Present");
doc
  .fillColor(TEAL)
  .font("Helvetica")
  .fontSize(9)
  .text("libmate.ir", {
    link: "https://www.libmate.ir/",
    underline: true,
  });
doc.moveDown(0.35);
bullets([
  "Built the full frontend for an AI-powered book translation platform — clean UI, responsive layouts, and polished motion (anime.js, Swiper).",
  "Owned production delivery with Docker and GitHub Actions for reliable, automated builds and deploys.",
  "Shipped client-side state, API integration (Axios), and a maintainable component architecture with React, MUI, and Emotion.",
]);

// ——— Projects ———
section("Selected Projects");

role("Luxetick (Watch Shop)", "React · MUI · Emotion · React Router");
projectLinks(
  "https://nikafz.github.io/watch-shop/",
  "https://github.com/NikAfz/watch-shop"
);
bullets([
  "E-commerce experience for luxury watches with a focus on UX, responsive layout, and smooth navigation.",
]);

role("Cryptopia", "React · Vite · Axios · React Router");
projectLinks(
  "https://nikafz.github.io/cryptopia/",
  "https://github.com/NikAfz/cryptopia"
);
bullets([
  "Live crypto tracker for the top 30 coins with real-time pricing UI, responsive design, and GitHub Pages deployment.",
]);

// ——— Skills ———
section("Skills");
const skills = [
  [
    "Frontend",
    "HTML5, CSS3, JavaScript (ES6+), TypeScript, React, React Native, Vue, Nuxt, React Router, Vite, Expo, Tailwind CSS, MUI, Emotion",
  ],
  ["Backend & APIs", "Node.js, Express.js, REST APIs, Axios"],
  ["Tools", "Git, GitHub Actions (CI/CD), Docker, npm, Linux, VS Code"],
  ["Languages", "English (Fluent)  ·  Persian (Native)"],
];

skills.forEach(([label, value]) => {
  const y = doc.y;
  doc
    .fillColor(INK)
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .text(label, MARGIN_X, y, { width: 92 });
  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(9.5)
    .text(value, MARGIN_X + 96, y, { width: CONTENT_W - 96, lineGap: 2 });
  doc.moveDown(0.4);
});

// ——— Education ———
section("Education");
role(
  "B.S. Computer Science",
  "Islamic Azad University — West Tehran Branch  ·  Oct 2024 – Present  ·  Tehran, Iran"
);

doc.end();

await new Promise((resolve, reject) => {
  stream.on("finish", resolve);
  stream.on("error", reject);
});

const oldPath = path.resolve(
  __dirname,
  "../src/assets/Resume-2025-11-23.pdf"
);
if (fs.existsSync(oldPath)) {
  fs.unlinkSync(oldPath);
}

console.log(`Wrote ${outPath} (${fs.statSync(outPath).size} bytes)`);
