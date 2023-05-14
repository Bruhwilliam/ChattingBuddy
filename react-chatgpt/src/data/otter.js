import React,{ createContext,useState,useContext } from "react";

export const OtterContext = createContext({ health:3, credit:3,responses:["Hi there! I'm Otter!"],changeHealth:()=>{},changeCredit:()=>{},addResponse:()=>{}
});

export const OtterContextProvider = ({children}) => {
    const [health,setHealth] = useState(3);
    const [credit,setCredit] = useState(3);
    const [responses,setResponses] = useState(["Hi there! I'm Otter!"]);
    
    const changeHealth=(newHealth)=>{
      setHealth(newHealth);
    }

    const changeCredit=(newCredit)=>{
      setCredit(newCredit);
    }

    const addResponse=(newResponse)=>{
      responses.push(newResponse);
      if(responses.length>3)
        responses.shift();
      setResponses([...responses]);
    }

    const value = {health,credit,responses,changeHealth,changeCredit,addResponse};

    return (
      <OtterContext.Provider value={value}>
        {children}
      </OtterContext.Provider>
    )
};

export const useOtterSettings = () => useContext(OtterContext);