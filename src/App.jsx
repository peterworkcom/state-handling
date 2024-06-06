import StatefullCounter from "./StatefullCounter";
import StatelessCounter from "./StatelessCounter";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <StatelessCounter />
      <StatefullCounter />
    </div>
  );
};

export default App;
