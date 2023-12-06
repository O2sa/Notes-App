import './info-site.css';
import Header from "./header";
import { useState } from 'react';
import MainContent from './mainContnt';
export default function InfoSite() {
  const [mode,setMode]=useState(true);
  function handlMode(){
      setMode((prev)=>!prev)
  }
  return (
    <div className="info-site">
        <Header mode={mode} modeHandler={handlMode}/>
        <MainContent mode={mode} />
    </div>
  );
}

