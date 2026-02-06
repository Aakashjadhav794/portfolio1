import java from "../assets/icons/java.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import bootstrap from "../assets/icons/css.svg";
import nodejs from "../assets/icons/nodejs.svg";
import express from "../assets/icons/server.svg";
import aws from "../assets/icons/aws.svg";
import mongodb from "../assets/icons/mongodb.svg";
import mysql from "../assets/icons/mysql.svg";
import sql from "../assets/icons/sql.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import linux from "../assets/icons/linux.svg";
import jenkins from "../assets/icons/jenkins.svg";
import postman from "../assets/icons/postman.svg";

export const skills = [
  {
    title: "Programming",
    items: [
      { name: "Java", icon: java },
      { name: "JavaScript", icon: javascript }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: react },
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "Bootstrap", icon: bootstrap }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
      { name: "REST APIs", icon: postman }
    ]
  },
  {
    title: "Cloud",
    items: [
      { name: "AWS EC2", icon: aws },
      { name: "AWS S3", icon: aws },
      { name: "CloudWatch", icon: aws }
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
      { name: "SQL Server", icon: sql }
    ]
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Linux", icon: linux },
      { name: "Jenkins", icon: jenkins }
    ]
  }
];
