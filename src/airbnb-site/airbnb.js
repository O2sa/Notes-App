import ImgGrid from "../imgs/Group 77.png";
import ExperImg1 from "../imgs/image 12.png";
import ExperImg2 from "../imgs/wedding-photography 1.png";
import StarImg from "../imgs/Star 1-2.png";
import Logo from "../imgs/airbnb 1.png";
import "./airbnb.css";

const exps = [
  {
    id: "1",
    img: ExperImg1,
    country: "(6)USA",
    rate: "5.0",
    disc: "Life lessons with Katie Zaferes  ",
    price: "From $136",
  },
  {
    id: "2",
    img: ExperImg2,
    country: "(6)USA",
    rate: "5.0",
    disc: "Life lessons with Katie Zaferes ",
    price: "From $136",
  },
  {
    id: "3",
    img: ExperImg1,
    country: "(6)USA",
    rate: "5.0",
    disc: "Life lessons with Katie Zaferes  ",
    price: "From $136",
  },
];

export default function Airbnb() {
  return (
    <div className="airbnb">
      <header>
        <img src={Logo} alt="logo"></img>
      </header>
      <div className="container">
        <div className="img-gride">
            <img src={ImgGrid} alt=" gride"></img>
        </div>

        <div className="exp">
          <h2>Online Experiences</h2>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
        <div className="exps">
          {exps.map(function (ele) {
         return  <ExpCard CardInfo={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}

function ExpCard({CardInfo}) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="exp-img" src={CardInfo.img} alt={"profile"+ CardInfo.id}></img>
        <span>SOLD OUT</span>
      </div>
      <div className="desc">
        <div className="img">
          <img src={StarImg} alt={'star'+ CardInfo.id} className="star"></img>
        </div>
        <span>
         {CardInfo.rate} <span className="rate"> {CardInfo.country}</span>
        </span>
        <p>
        {CardInfo.disc}
          <b> {CardInfo.price}</b> / person
        </p>
      </div>
    </div>
  );
}
