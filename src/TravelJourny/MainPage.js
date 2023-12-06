import "./Styles.css";

const travData = [
  {
    id: 1,
    country: "JAPAN",
    loc_name: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    disc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    img: "../imgs/sydney.png",
  },
  {
    id: 2,
    country: "JAPAN",
    loc_name: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    disc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    img: "../imgs/trav2.png",
  },
  {
    id: 3,
    country: "JAPAN",
    loc_name: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    disc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    img: "../imgs/trav3.png",
  },
];

export default function TravelJourny() {
  const TravCards = travData.map((card) => {
   return <TravCard card={card} />;
  });

  return (
    <div className="travel">
      <header>
        <img src="./imgs/trav-logo.png" alt=""></img>
        <a href="/">my travel journy</a>
        
      </header>
      <div className="container">{TravCards} </div>
    </div>
  );
}

function TravCard({ card }) {
  return (
    <div className="trav-card">
      <div className="trav-img">
        <img src={card.img} alt={card.loc_naem}></img>
      </div>
      <div className="trav-disc">
        <span className="location">
          <img src="../imgs/locatin.png" alt="location"></img>
          <span className="country">   { card.country}</span>
          <span className="loc-map"> View on Google Maps</span>
        </span>
        <h2>{card.loc_name}</h2>
        <span className="date">{card.date}</span>
        <p className="disc">{card.disc} </p>
      </div>
    </div>
  );
}
