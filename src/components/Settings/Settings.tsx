import React, {useState} from "react";
import s from './Settings.module.css';

const Settings:React.FC = () => {
    let [number, setNumber] = useState<number>(0)

    return (
        <div className={s.content}>
            <ul>
                <h1>WOWOW SETTINGS</h1>
                {number}
                <button onClick={() => {setNumber(number+1)}}>+1</button>
                <button onClick={() => {setNumber(number-1)}}>-1</button>
            </ul>
        </div>
    );
}

export default Settings;