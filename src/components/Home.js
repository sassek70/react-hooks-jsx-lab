import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const tagColor = {
    color: 'firebrick'
  }
  
  return (
  <div id="home">Home
    <h1 style={tagColor}>{name} is a Web Developer from {city}</h1>
  </div>
  )
}

export default Home;
