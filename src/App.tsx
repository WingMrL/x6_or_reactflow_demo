import "./App.css";
import ReactFlowCom from './components/ReactFlow';

import { sourceData } from "./const";

function App() {
  return (
    <div className="app">
      <div className="left">
        <p className="menu">你个老头</p>
        <p className="menu">你个老头</p>
        <p className="menu">你个老头</p>
        <p className="menu">你个老头</p>
        <p className="menu">你个老头</p>
        <p className="menu">你个老头</p>
        <p className="menu">你个老头</p>
      </div>
      <div className="right">
        <ReactFlowCom  sourceData={sourceData}/>
      </div>
    </div>
  );
}

export default App;
