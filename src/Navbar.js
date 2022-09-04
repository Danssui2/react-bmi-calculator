import React from 'react';

const Nav = () => {
  
  document.addEventListener("scroll", () => {
    if (window.scrollY > 80){
      document.querySelector(".nav").style="background: #FFFFFF60; backdrop-filter:blur( 4.5px );";
      document.querySelector(".nav h2").style="opacity: 1;";
    } else {
      document.querySelector(".nav").style="background: transparent;";
      document.querySelector(".nav h2").style="opacity: 0;";
    }
  });
  
  return (
    <div className="nav">
      <h2>BMI Calculator</h2>
      <div className="navBtn">
        <a href="https://github.com/Danssui2" target="_blank" rel="noreferrer">
          <button>😼</button>
        </a>
      </div>
    </div>
  );
}

export default Nav;