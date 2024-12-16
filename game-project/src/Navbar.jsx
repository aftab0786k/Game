import React from "react";

import "./Navbar.css";

const Navbar = (props) => {
    const openRegister =()=>{
        props.open()
    }
  return (
    <div className="app-container">
      
      <header className="header">
        <div className="logo">MELBET</div>
        <nav>
          <ul>
            <li>CRICKET</li>
            <li>SPORTS</li>
            <li>LIVE</li>
            <li>FAST GAMES</li>
            <li>SLOTS</li>
            <li>LIVE CASINO</li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button onClick={openRegister}>Registration</button>
          <button>Log in</button>
        </div>
      </header>

      
      <div className="main-content">
        
        <div className="bet-list">
          <h3>FAST GAMES | CRASH</h3>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Odds</th>
                <th>Bet</th>
                <th>Win</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>******93</td>
                <td>x0</td>
                <td>3994.82 INR</td>
                <td>0 INR</td>
              </tr>
              <tr>
                <td>******31</td>
                <td>x0</td>
                <td>3983.68 INR</td>
                <td>0 INR</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        
        <div className="graph">
          <h2>Graph Section</h2>
          <div className="graph-placeholder">Graph Animation Here</div>
        </div>

        
        <div className="bet-controls">
          <h3>STAKE SELECTOR</h3>
          <div className="stake-input">
            <input type="number" placeholder="Enter bet" />
          </div>
          <div className="quick-bets">
            <button>20</button>
            <button>90</button>
            <button>200</button>
            <button>700</button>
          </div>
          <button className="place-bet">Place a Bet</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar
