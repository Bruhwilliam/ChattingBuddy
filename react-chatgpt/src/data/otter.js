import React,{ createContext,useState,useContext } from "react";

export const OtterContext = createContext({ health:3, credit:3,responses:["Hi there! I'm Otter!"],addHealth:()=>{},addCredit:()=>{},addResponse:()=>{}
});

export const OtterContextProvider = ({children}) => {
    const [health,setHealth] = useState(3);
    const [credit,setCredit] = useState(3);
    const [responses,setResponses] = useState(["Hi there! I'm Otter!"]);
    
    const addHealth=(amount)=>{
      const destHealth = health+amount;
      setTimeout(()=>{
      setHealth(destHealth);},200);
    }

    const addCredit=(amount)=>{
      const destCredit = credit+amount;
      setTimeout(()=>{
      setCredit(destCredit);},200);
    }


    const addResponse=(newResponse)=>{
      responses.push(newResponse);
      if(responses.length>3)
        responses.shift();
      setResponses([...responses]);
    }

    const value = {health,credit,responses,addCredit,addHealth,addResponse};

    return (
      <OtterContext.Provider value={value}>
        {children}
      </OtterContext.Provider>
    )
};

export const useOtterSettings = () => useContext(OtterContext);