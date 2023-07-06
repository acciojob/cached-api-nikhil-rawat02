
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [result, setResult] = useState([]);
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState("");
  const [showData, setShowData] = useState([]);
  const handleInput = (e) =>{
    setInputData(e.target.value);
    setShowData({});

    const show = result.map(item =>{
      console.log(item);
    })

  }
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then( data => data.json().then((dataSet) => {
      setError("");
      setResult(data);
      console.log(data);
    })
    )
    .catch((error)=>{
      setError(error.message);
    })
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" value={inputData} onChange={handleInput}/>
        <div style={{margin:"10px"}}>
          
        </div>
    </div>
  )
}

export default App
