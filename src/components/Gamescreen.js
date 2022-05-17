import { useState } from "react";
import Ft from "./pics/Ft.png";
import logo from "./pics/logo.png";


function GameScreen() {
    const [pass, setPass] = useState(0);
    const [touchDown, setTouchDown] = useState(0);
    const [counter, setCounter] = useState(0);
    const [building, setBuilding] = useState(1);
    const [eq, setEQ] = useState(6);

    const mechanics = () => {
        setPass(pass + building);
        setCounter(counter + building);

        if(counter >= eq && counter <= eq + 10){
            setTouchDown(touchDown + 1);
            setCounter(0);
        }
    }

    const B = () => {
        setTouchDown(touchDown - 2);
        setBuilding(building + 2);
        setEQ(pass + (building * 2));
    }

    const check = () => {
        if(touchDown >= 2){
            return(
                <div className="Eq-card">
                    <h1 className="font-card Eq-p">Powerups</h1>
                    <button className="btn-Eq" onClick={() => {B()}}>Equip Wide Receiver</button>
                    <h6 className="font-card Eq-d">Equip Wide Receiver To Increase Passes By 2</h6>
                </div>
            );
        }
    }

  return (
    <div>
        <img className="logo" src={logo} alt="Raiders Logo"></img>
        <div className="score-card">
            <h3 className="font-card score-card-td">Touchdowns</h3>
            <h1 className="font-card">{<img src={Ft} alt="NFL Football" width="50" height="50"></img>}X {touchDown}</h1>
        </div>
        <div className="pos">
            <div className="font-p pass">{pass}</div>
            <button className="btn-specs" onClick={() => {mechanics()}}>Pass The Ball</button>
            <h5 className="font-p pass-d">{building} Passes Per Click</h5>
        </div>
        <div>
            {check()}
        </div>
    </div>
  );
}

export default GameScreen;
