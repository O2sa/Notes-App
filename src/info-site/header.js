import { useState } from "react";
import ReactLogo from "../logo.svg";

export default function Header(props) {
  
  return (
    
    <header className={`${props.mode?'dark':""}`}>
      <div className={`logo ${props.mode?'dark':""}`}>
        <img src={ReactLogo}></img>
        <h1>ReactFacts</h1>
      </div>
        <div className="mode">
          <span>dark</span>
          <img onClick={props.modeHandler} src="../imgs/toggle-on-icon.svg" />
          <span>light</span>
        </div>
    </header>
  );
}
