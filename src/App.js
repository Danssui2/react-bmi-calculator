import React, {useState} from 'react';
import './App.css';
import Nav from './Navbar.js';

function App() {
  const [res, setRes] = useState(19.5);
  const [info, setInfo] = useState("Healthy");
  const [risk, setRisk] = useState("Low");
  const [w, setW] = useState(50);
  const [h, setH] = useState(1.6);
  const body = document.querySelector("body");
  
  const cal = () => {
    let val = (w / (h * h)).toFixed(1);
    
    if (val < 18.5){
      setInfo("Underweight");
      setRisk("Medium");
      body.style = "background: linear-gradient(45deg, #31c700, #84e200)";
    } else if (val < 24.9){
      setInfo("Healthy");
      setRisk("Low");
      body.style = "background: linear-gradient(45deg, #00ccff, #007cff)";
    } else if (val < 29.9){
      setInfo("Overweight");
      setRisk("High");
      body.style = "background: linear-gradient(30deg, #ffa818, #ffed3b)";
    } else if (val < 34.9){
      setInfo("Obese");
      setRisk("Very High");
      body.style = "background: linear-gradient(30deg, #ff4f29, #ff7129)";
    } else if (val > 34.9){
      setInfo("Severe Obese");
      setRisk("Extremely High");
      body.style = "background: linear-gradient(30deg, #ff2b80, #ff2424)";
    }
    setRes(val);
  }
  
  return (
    <div className="container">
      <Nav/>
    
      <div className="top-sec">
        <div className="top-content">
          <div>
            <h2>BMI Calculator</h2>
            <p>Help you to measure your ideal body mass</p>
            <a href="#bmi"><button className="start-btn">Get Started ✨</button></a>
            <a href="#info"><button className="info-btn">Information 📘</button></a>
          </div>
        </div>
        
      <span className="pat-dots" Style="top: 70%; left: 80%;"></span>
      <span className="pat-dots" Style="top: -10%; left: 70%;"></span>
      <span className="pat-dots" Style="top: 10%; left: -40%;"></span>
      <span className="pat-dots" Style="top: 85%; left: -20%;"></span>
      
      <span className="pat-stripe" Style="top: 60%; left: 80%;"></span>
      <span className="pat-stripe" Style="top: 10%; left: 15%;"></span>
      </div>
      
      <div id="bmi" className="mid-sec">
        <div className="card">
          <h1>{res}</h1>
          <h2>{info}</h2>
          
          <div className="inputHolder">
            <div className="inputW">
              <label forHtml="winput">Weight</label>
              <input 
              id="winput" 
              type="number"
              onChange={(e) => setW(e.target.value)}
              placeholder="50"
              />
              <p>kg</p>
            </div>
          
            <div className="inputH">
              <label forHtml="hinput">Height</label>
              <input 
              id="hinput" 
              type="number"
              onChange={(e) => setH(e.target.value / 100)}
              placeholder="160"
              />
              <p>cm</p>
            </div>
          </div>
          
          <button id="calBtn" onClick={cal}>Calculate</button>
          <p className="risk-info">{risk} health risk</p>
          
        </div>
          <span className="pat-emo" Style="top: 15%; left: 5%;">😍</span>
          <span className="pat-emo" Style="top: 10%; left: 60%;">✨</span>
          <span className="pat-emo" Style="top: 30%; left: 85%;">😎</span>
          <span className="pat-emo" Style="top: 70%; left: 83%;">😼</span>
          <span className="pat-emo" Style="top: 82%; left: 40%;">🔥</span>
          <span className="pat-emo" Style="top: 68%; left: -2%;">💪</span>
          <span className="pat-emo" Style="top: 35%; left: 0%;">💯</span>
      </div>
      
      <div id="info" className="bot-sec">
        <div className="bot-content">
          <h2>What is BMI?</h2>
          <p>The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. Major adult BMI classifications are underweight (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight (25 to 29.9), and obese (30 or more)</p>
          <a href="https://en.m.wikipedia.org/wiki/Body_mass_index" target="_blank" rel="noreferrer">
            <button>Continue Reading 📘</button>
          </a>
        </div>
        <h4>Created with ♥️ by Danss</h4>
      </div>
      
    </div>
  );
}

export default App;