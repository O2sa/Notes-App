import { useState, useEffect } from "react";

// export default function FetchAPI() {
//   const [starWarData, setStarWarData] = useState({});

//   console.log("compnents rerendered   ");

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/1").then((res) => res.json())
//       .then(data=>setStarWarData(data))
//   },);
//   return (
//     <div>
//       <pre>{JSON.stringify(starWarData, null, 2)}</pre>
//     </div>
//   );
// }

export default function FetchAPI() {
  const [count, setCount] = useState(0);
  const [starWarData, setStarWarData] = useState({});

  console.log("compnents rerendered   ");

  function handle() {
    setCount((pre) => pre + 1);
  }
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarData(data));
    console.log("effct run");
  }, [count]);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={handle}>Add</button>
      <div>
        <pre>{JSON.stringify(starWarData, null, 2)}</pre>{" "}
      </div>
    </div>
  );
}
