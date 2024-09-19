import "./styles.css";
import ContextInstance from "./context";
import { useContext } from "react";

function Name() {
  const params = useContext(ContextInstance);
  return <div>{params.name}</div>;
}

export default function App() {
  return (
    <div className="App">
      <ContextInstance.Provider value={{ name: "test1`11" }}>
        <Name />
      </ContextInstance.Provider>
    </div>
  );
}
