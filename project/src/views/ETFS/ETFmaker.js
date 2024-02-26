import React, { useState } from "react";
import ETFSetting from "./ETFSetting";
import ETFSetting2 from "./ETFSettiong2";
import ETFSetting3 from "./ETFSetting3";

export const MyContext = React.createContext();
export const StartDateContext = React.createContext();
export const EndDateContext = React.createContext();
export const ETFMoneyContext = React.createContext();
export const ETFListContext = React.createContext();
export const ETFPercentContext = React.createContext();

export default function ETFMaker(){
    const [contextValue, setContextValue] = useState('1');
    const [etfList, setEtfList] = useState(null);


    return (
        <MyContext.Provider value={{ contextValue, setContextValue }}>
            <ETFListContext.Provider value={{ etfList, setEtfList }}>
            {contextValue === '1' ? <ETFSetting /> : contextValue === '2' ? <ETFSetting2 /> : <ETFSetting3 />}
            </ETFListContext.Provider>
        </MyContext.Provider>
    );
}
