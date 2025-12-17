import "./App.css";
import Usercards from "./Components/Usercards";
import Rohit from "./assets/Rohit.jpg";
import Virat from "./assets/Virat.jpg";
import Jasprit from "./assets/Jasprit.jpg";

function App() {
  return (
    <div className="conatiner">
      <Usercards
        name="Rohit Sharma"
        image={Rohit}
        style={{
          "border-radius": "10px",
          width: "30%",
          "margin-left": "40px",
        }}
        desc="Rohit sharma (born April 30, 1987) is a record-breaking right-handed batsman known as the Hitman, famous for powerful hitting, especially in limited overs, holding records like three ODI double centuries and most T20I centuries. "
      />
      <Usercards
        name="Virat Kohli"
        image={Virat}
        style={{ "border-radius": "10px", width: "30%" }}
        desc="Virat Kohli (born Nov 5, 1988) is a world-renowned Indian cricketer, considered one of the greatest batsmen of his generation, known for his aggressive style, record-breaking run-scoring across all formats (Test, ODI, T20I) as a top-order batsman."
      />
      <Usercards
        name="Jasprit Bumrah"
        image={Jasprit}
        style={{
          "border-radius": "10px",
          width: "30%",
          "margin-right": "40px",
        }}
        desc="Jasprit Bumrah (born Dec 6, 1993) is an Indian international cricketer known for his unique action, pace, and deadly yorkers, considered one of the world's best bowlers across Tests, ODIs, and T20s."
      />
    </div>
  );
}

export default App; //if you want to use this App component outside this file you need to export it first.
