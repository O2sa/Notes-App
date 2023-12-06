import "./style.css";
// import MemesData from "./Memes";
import { useState, useEffect } from "react";


export default function MemeGen() {
  //load memes imgs from API
  useEffect(async () => {
    const res = await fetch(`https://api.imgflip.com/get_memes`);
    const data = await res.json();
    setAllMemeImgs(data.data.memes);
  }, []);

  function getMemeImg() {
    // let imgsArr = MemesData.data.memes;
    return allMemesImgs[Math.floor(Math.random() * allMemesImgs.length)].url;
  }

  const [allMemesImgs, setAllMemeImgs] = useState([]);

  //state to change meme's img
  const [meme, setMeme] = useState({
    up_text: "",
    down_text: "",
    meme_img: 
    // getMemeImg()
    "https://i.imgflip.com/30b1gx.jpg",
  });

  function handleData(event) {
    const { name, type, value } = event.target;
    console.log(event.target.type);

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: name == "meme_img" ? getMemeImg() : value,
    }));
  }

  return (
    <div className="meme-gen">
      <header>
        <img src="./imgs/Troll Face.png" alt=""></img>
        <a href="">Meme Generator</a>
      </header>
      <main className="main-sec container">
        <div className="filds">
          <input
            placeholder="Upper Text"
            type="text"
            className="up-txt-fild"
            name="up_text"
            onChange={handleData}
            value={meme.up_text}
          ></input>
          <input
            placeholder="Down text"
            type="text"
            className="down-txt-fild"
            name="down_text"
            onChange={handleData}
            value={meme.down_text}
          ></input>
          <button name="meme_img" onClick={handleData} className="submit-btn">
            Get a new meme image
          </button>
          <div className="meme-img">
            <h3 className="up_text">{meme.up_text}</h3>
            <h3 className="down_text">{meme.down_text}</h3>
            <img src={meme.meme_img} className=""></img>
          </div>
        </div>
      </main>
    </div>
  );
}
