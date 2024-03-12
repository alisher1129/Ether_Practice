import { ethers } from "ethers";
import React, { useState } from "react";
import ContractAddress from "./Contract";
import Abi from "./Abi.json";


function Minus() {
    const [Value, setValue] = useState();
    const Read = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      // await provider.send("eth_requestAccount", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(ContractAddress, Abi, signer);
      const Values = await contract.SubtractNumbers();
      setValue(Values.toString());
    };
  return ( <>
  <div className="flex flex-col"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={Read}>
      Minus Values
    </button>
    <div className="flex justify-center">{Value ? Value : "Empty"}</div></div>
   
  </> 
  )
}

export default Minus