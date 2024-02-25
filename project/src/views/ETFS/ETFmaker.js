import React, { useState, useContext } from "react";
import ETFSetting from "./ETFSetting";
import ETFSetting2 from "./ETFSettiong2";
import ETFSetting3 from "./ETFSetting3";
export const MyContext = React.createContext();
export const StartDay = React.createContext();
export const EndDay = React.createContext();
export const ETFMoney = React.createContext()
export const ETFList = React.createContext();
export const ETFPercent = React.createContext()

export default function ETFMaker(){
    const [contextValue, setContextValue] = useState('1');

    return (
        <MyContext.Provider value={{ contextValue, setContextValue }}>
            {contextValue === '1' ? <ETFSetting /> : contextValue === '2' ? <ETFSetting2 /> : <ETFSetting3 />}
        </MyContext.Provider>
    );
}
