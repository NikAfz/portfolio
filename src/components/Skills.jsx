import js from "/javascript.svg";
import ts from "/typescript.png";
import rrd from "/rrd.svg";
import vite from "/vite.svg";
import git from "/git.png";
import react from "/react.svg";
import vue from "/vue.svg";
import nuxt from "/nuxt.svg";
import html from "/html.svg";
import css from "/purple-css-logo.png";
import mui from "/material-ui.svg";
import npm from "/npm.svg";
import api from "/r-api.svg";
import reactNative from "/react-native-1.svg";
import expo from "/Expo-logo.png";
import axios from "/Axios.svg";
import express from "/Express.svg";
import node from "/Node.js.svg";
import docker from "/Docker.svg";

import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const techSkills = [
  { src: html, label: "HTML5" },
  { src: css, label: "CSS3" },
  { src: js, label: "JavaScript" },
  { src: ts, label: "TypeScript" },
  { src: react, label: "React" },
  { src: reactNative, label: "React Native" },
  { src: vue, label: "Vue" },
  { src: nuxt, label: "Nuxt" },
  { src: vite, label: "Vite" },
  { src: expo, label: "Expo" },
  { src: rrd, label: "React Router" },
  { src: mui, label: "MUI" },
  { src: axios, label: "Axios" },
  { src: npm, label: "npm" },
  { src: express, label: "Express" },
  { src: node, label: "Node.js" },
  { src: git, label: "Git" },
  { src: api, label: "REST API" },
  { src: docker, label: "Docker" },
];

const languages = [
  { name: "Persian", detail: "Native", native: "فارسی" },
  { name: "English", detail: "Fluent", native: "American" },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <div className="section__header">
          <p className="section__eyebrow">Skills</p>
          <h2 className="section__title">Tools I reach for</h2>
          <p className="section__lede">
            A practical stack for shipping polished frontend — and enough
            backend to get things live.
          </p>
        </div>

        <div className="skills__tech">
          {techSkills.map((skill) => (
            <Tooltip
              key={skill.label}
              TransitionComponent={Zoom}
              title={skill.label}
              arrow
            >
              <div className="skills__icon" tabIndex={0}>
                <img
                  src={skill.src}
                  alt={skill.label}
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
            </Tooltip>
          ))}
        </div>

        <div className="skills__langs">
          {languages.map((lang) => (
            <div key={lang.name} className="skills__lang">
              <h3>
                {lang.name}{" "}
                <span className="skills__lang-native">({lang.native})</span>
              </h3>
              <p>{lang.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
