import "./styles.css";
import ContextInstance from "./context";
import { useContext } from "react";
import { Button } from '@zzxiexin/react-components'

function Name() {
  const params = useContext(ContextInstance);
  return <div>{params.name}</div>;
}

export default function App() {
  return (
    <div className="App">
      <ContextInstance.Provider value={{ name: "test1`11" }}>
        <Name />
        <Button type="primary" throttle={3} onClick={() => console.log(1)}>test</Button>
      </ContextInstance.Provider>
    </div>
  );
}
