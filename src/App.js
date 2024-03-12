import { ethers } from "ethers";
import { useEffect, useState } from "react";
import ContractAddress from "./components/Contract";
import Abi from "./components/Abi.json";
import GetValues from "./components/GetValues";
import SetValues from "./components/SetValues";
import AddValues from "./components/AddValues";
import Multiply from "./components/Multiply";
import Minus from "./components/Minus";

function App() {

  return (
    <>
  <div className="flex flex-col items-center ">
   <SetValues/>
      <GetValues/>
      <AddValues/>
      <Multiply/>
      <Minus/>

  </div>
     
      
    </>
  );
}

export default App;
