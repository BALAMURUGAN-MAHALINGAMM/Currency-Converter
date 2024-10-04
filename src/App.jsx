import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const[amount,setamount]=useState(1);
  const[fromcurrency,setfromcurrency]=useState("USD");
  const[tocurrency,settocurrency]=useState("INR");
  const[convertedAmount,setconvertedAmount] =useState(null);
  const[exchange,setexchange]=useState(null);


  useEffect(() =>{
    const getexchangerate = async () =>{
      try{
      let url =`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;

      const response = await axios.get(url);
      // console.log(response)
      setexchange(response.data.rates[tocurrency])

      }catch(error) {
        console.error("error fetching exchange rate:", error)
      }
    };
    getexchangerate();
  },[ fromcurrency, tocurrency]);

  useEffect(()=>{

    if(exchange !== null){
      setconvertedAmount((amount*exchange).toFixed(2));
    }
  },[amount,exchange]);

  const handleamountchange = (e) =>{
    const value =parseFloat(e.target.value);
    setamount(isNaN(value) ? 0 : value)
  }

  const handlefc = (e) =>{
    setfromcurrency(e.target.value);
  }
  const handletoc =(e)=>{
    settocurrency(e.target.value);
  }
    
  return (
    <>
      <div className="currency-converter">
        <div className="box"></div>
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor="amt">Amount:</label>
            <input type="number" id="amt" value={amount} onChange={handleamountchange}></input>
          </div>
          <div className="input-container">
            <label htmlFor="fromcurrency">From Currency:</label>
            <select id="fromcurrency" value={fromcurrency} onChange={handlefc}>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanase Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupees</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
              <option value="QAR">QAR -  Qatari riyal</option>
              <option value="KGS">KGS - Kyrgyzstani Som</option>
              <option value="KHR">KHR - Cambodian Riel</option>
              <option value="RSD">RSD - Serbian dinar</option>
              <option value="RUB">RUB -  Russian Ruble</option>
              <option value="PEN">PEN -  Peruvian Sol</option>
              <option value="PGK">PGK -  Papua New Guinea kina</option>
              <option value="SOS">SOS -  OpenDAO crypto</option>
              <option value="SRD">SRD - Surinamese dollar</option>
              <option value="TRY">TRY - Turkish lira</option>
              <option value="TTD">TTD - Trinidad & Tobago dollar</option>
              <option value="ZMW">ZMW -  Zambian Kwacha</option>
              <option value="WST">WST -  Samoan currency</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="tocurrency">To Currency:</label>
            <select id="tocurrency" value={tocurrency} onChange={handletoc}>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanase Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupees</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
              <option value="QAR">QAR - Qatari riyal</option>
              <option value="KGS">KGS - Kyrgyzstani Som</option>
              <option value="KHR">KHR - Cambodian Riel</option>
              <option value="RSD">RSD - Serbian dinar</option>
              <option value="RUB">RUB -  Russian Ruble</option>
              <option value="PEN">PEN -  Peruvian Sol</option>
              <option value="PGK">PGK -  Papua New Guinea kina</option>
              <option value="SOS">SOS -  OpenDAO crypto</option>
              <option value="SRD">SRD - Surinamese dollar</option>
              <option value="TRY">TRY - Turkish lira</option>
              <option value="TTD">TTD - Trinidad & Tobago dollar</option>
              <option value="ZMW">ZMW -  Zambian Kwacha</option>
              <option value="WST">WST -  Samoan currency</option>
           
            </select>
          </div>
          <div className="result">
          <p> {amount} {fromcurrency} is equal to {convertedAmount}  {tocurrency}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
