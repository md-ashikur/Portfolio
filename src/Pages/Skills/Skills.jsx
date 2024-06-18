import "./Skills.css";
import html from "../../images/logos/html-5.svg";
import css from "../../images/logos/css-3.svg";
import js from "../../images/logos/javascript.svg";
import react from "../../images/logos/react.svg";
import mongodb from "../../images/logos/mongodb-icon.svg";
import git from "../../images/logos/git-icon.svg";
import github from "../../images/logos/github-icon.svg";
import mysql from "../../images/logos/mysql-icon.svg";
import tailwind from "../../images/logos/tailwindcss-icon.svg";
import bootstrap from "../../images/logos/bootstrap.svg";
import figma from "../../images/logos/figma.svg";
import illustrator from "../../images/logos/adobe-illustrator.svg";
import node from "../../images/logos/nodejs-icon.svg";
import vite from "../../images/logos/vitejs.svg";
import vercel from "../../images/logos/vercel-icon.svg";
import firebase from "../../images/logos/firebase.svg";
import express from "../../images/logos/express.svg";
import cpp from "../../images/logos/c-plusplus.svg";
import c from "../../images/logos/C_Logo.png";
import vscode from "../../images/logos/visual-studio-code.svg";

const Skills = () => {
  return (
    <div className="py-20 lg:px-20">
      <div className="text-center ">
        <h2 className="text-5xl font-bold py-5 gradient-text">My Skills</h2>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="my-5 flex flex-wrap justify-center gap-5 max-w-[700px]">
          <div className="s-logo ">
            <img src={html} alt="" />
          </div>

          <div className="s-logo bg-base">
            <img src={css} alt="" />
          </div>

          <div className="s-logo">
            <img src={tailwind} alt="" />
          </div>

          <div className="s-logo ">
            <img src={bootstrap} alt="" />
          </div>

          <div className="s-logo bg-base">
            <img src={js} alt="" />
          </div>

          <div className="s-logo">
            <img src={react} alt="" />
          </div>

          <div className="s-logo">
            <img src={node} alt="" />
          </div>

          <div className="s-logo bg-base">
            <img src={express} alt="" />
          </div>

          <div className="s-logo ">
            <img src={mongodb} alt="" />
          </div>

          <div className="s-logo">
            <img src={mysql} alt="" />
          </div>

          <div className="s-logo bg-base">
            <img src={github} alt="" />
          </div>

          <div className="s-logo">
            <img src={git} alt="" />
          </div>

          <div className="s-logo">
            <img src={firebase} alt="" />
          </div>

          <div className="s-logo bg-base">
            <img src={vite} alt="" />
          </div>

          <div className="s-logo bg-base">
            <img src={vercel} alt="" />
          </div>

          <div className="s-logo bg-base">
            <img src={figma} alt="" />
          </div>

          <div className="s-logo">
            <img src={illustrator} alt="" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 max-w-[700px]">
          <div className="s-logo">
            <img src={cpp} alt="" />
          </div>
          <div className="s-logo bg-base lg:bg-transparent">
            <img src={c} alt="" className=" !h-auto"/>
          </div>
          <div className="s-logo bg-base lg:bg-transparent">
            <img src={vscode} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
