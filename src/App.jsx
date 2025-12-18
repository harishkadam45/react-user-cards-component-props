import "./App.css";
import Usercards from "./Components/Usercards";
import Rohit from "./assets/Rohit.jpg";
import Virat from "./assets/Virat.jpg";
import Jasprit from "./assets/Jasprit.jpg";

function App() {
  return (
    <div className="conatiner">
      {/* Card 1 */}
      <Usercards
        name="Rohit Sharma"
        image={Rohit}
        desc="Rohit sharma (born April 30, 1987) is a record-breaking right-handed batsman known as the Hitman, famous for powerful hitting, especially in limited overs, holding records like three ODI double centuries and most T20I centuries."
      />

      {/* Card 2 */}
      <Usercards
        name="Virat Kohli"
        image={Virat}
        desc="Virat Kohli (born Nov 5, 1988) is a world-renowned Indian cricketer, considered one of the greatest batsmen of his generation, known for his aggressive style, record-breaking run-scoring across all formats."
      />

      {/* Card 3 */}
      <Usercards
        name="Jasprit Bumrah"
        image={Jasprit}
        desc="Jasprit Bumrah (born Dec 6, 1993) is an Indian international cricketer known for his unique action, pace, and deadly yorkers, considered one of the world's best bowlers."
      />
    </div>
  );
}

export default App;
