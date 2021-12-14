import logo from "./logo.svg";
import "./App.css";
import web3 from "./utils/web3";
import { useEffect } from "react";
import lottery from "./contracts/lottery";

function App() {
  web3.eth.getAccounts().then(console.log);
  console.log("web3", web3);
  // useEffect(() => {
  //   async function getLottery() {
  //     const mng = await lottery.methods.manager().call();
  //     console.log("mng", mng);
  //   }
  //   getLottery();
  //   return () => {};
  // });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
