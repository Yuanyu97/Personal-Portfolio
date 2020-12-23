import React from "react"
import { FaReact, FaNode, FaDatabase } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaReact className="service-icon" />,
    title: "frontend web development",
    text: `I do most of my frontend web developments in React, using styling libraries such as Material UI and Bootstrap for web design. I am also experienced in server side rendering with Next JS and generating static sites with Gatsby JS. `,
  },
  {
    id: 2,
    icon: <FaNode className="service-icon" />,
    title: "backend web development",
    text: `I do most of my server side development in Node JS, having the most experience in Express JS.`,
  },
  {
    id: 3,
    icon: <FaDatabase className="service-icon" />,
    title: "database management",
    text: `I do most of database development  in NoSQL using MongoDB and Firebase. I am currently exploring SQL databases such as PostgresSQL and MySQL.`,
  },
]
