import React, { useState, useContext } from "react";
import ETFSetting from "./ETFSetting";
import ETFSetting2 from "./ETFSettiong2";

export const MyContext = React.createContext();

export default function ETFMaker(){
    const [contextValue, setContextValue] = useState('1');

    return (
        <MyContext.Provider value={{ contextValue, setContextValue }}>
            {contextValue === '1' ? <ETFSetting /> : <ETFSetting2 />}
        </MyContext.Provider>
    );
}
