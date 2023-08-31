import "./App.css";
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from "./assets";

function App() {
  const players = [
    { name: "Precious", score: 150, image: img1 },
    { name: "Toyin", score: 250, image: img2 },
    { name: "Waliyah", score: 100, image: img3 },
    { name: "Taiwo", score: 320, image: img4 },
    { name: "Brown", score: 200, image: img5 },
    { name: "Theo", score: 110, image: img6 },
    { name: "Lanre", score: 180, image: img7 },
    { name: "Damola", score: 190, image: img8 },
    { name: "Wale", score: 220, image: img9 },
  ];

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  const topThree = sortedPlayers.slice(0, 3);
  // console.log(topThree);

  const topWinners = [
    {
      numberOne: {
        name: topThree[0].name,
        image: topThree[0].image,
        score: topThree[0].score,
      },
      numberTwo: {
        name: topThree[0].name,
        image: topThree[1].image,
        score: topThree[1].score,
      },
      numberThree: {
        name: topThree[0].name,
        image: topThree[2].image,
        score: topThree[2].score,
      },
    },
  ];

  console.log(topWinners);

  // console.log(sortedPlayers[0]);
  // const firstPlace = sortedPlayers[0].name;
  // console.log(firstPlace);

  // display all the players
  // const leaderBoard = sortedPlayers.map((player, index) => (
  //   <div key={index}>
  //     <img style={{ width: "50px" }} src={player.image} alt="" />
  //     <p>{player.name}</p>
  //     <p>{player.score}</p>
  //   </div>
  // ));

  // display only the top three
  const firstThree = sortedPlayers.slice(0, 3).map((player, index) => (
    <div key={index}>
      <img style={{ width: "50px" }} src={player.image} alt="" />
      <p>{player.name}</p>
      <p>{player.score}</p>
    </div>
  ));

  // display the rest of the players
  const leaderBoard = sortedPlayers.slice(3).map((player, index) => (
    <div key={index}>
      <img style={{ width: "50px" }} src={player.image} alt="" />
      <p>{player.name}</p>
      <p>{player.score}</p>
    </div>
  ));

  return (
    <div className="container">
      first three
      <div style={{ display: "flex" }}> {firstThree} </div>
      others
      <div style={{ display: "flex" }}> {leaderBoard}</div>
      {/* <div className="secondPlace">{}</div>
      <div className="winner"></div>
      <div className="thirdPlace"></div> */}
    </div>
  );
}

export default App;
