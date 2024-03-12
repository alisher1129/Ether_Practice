import { ethers } from "ethers";

import React, { useState } from "react";
import ContractAddress from "./Contract";
import Abi from "./Abi.json";

function SetValues() {
  const [Value, setVal] = useState();


  const write = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
    
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(ContractAddress, Abi, signer);
      const [value1, value2] = Value.split(',').map(val => parseInt(val.trim()));
      const send = await contract.setValue(value1, value2);

      console.log("value is:", send.toString());
    } catch (error) {
      console.log("this is error:", error);
    }
  };

  return (
    <>

      <div  className="mt-40">
        <input 
          className=" border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
          type="text"
          name="value"
          value={Value}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Enter Any Two Numbers"
        />{" "}


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={write}>
          Set Values
        </button>
      </div>
    </>
  );
}

export default SetValues;
