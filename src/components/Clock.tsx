import React, {useState, useEffect } from "react";

type Style={
    transform:string;
}



export const Clock: React.FC = ()=> {
    
    
    const deg:number =6;
    
    const [day, setDay] =useState<Date>(new Date())
 
    useEffect(() => {
        const id = setInterval(()=>{setDay(new Date())},1000)
        return () => {
            clearInterval(id);
        }
    }, [day]);
   
   
    let hh:number = day.getHours()*30;
    let mm:number = day.getMinutes()*deg;
    let ss:number = day.getSeconds()*deg;
    
   
   
    const hr:Style = {
        transform: `rotateZ(${(hh)+(mm/12)}deg)`
      };
    const mn:Style = {
        transform: `rotateZ(${mm}deg)`
      };
    const sc:Style = {
        transform: `rotateZ(${ss}deg)`
      };
    
    
  return (
    <div className="clock" >
      <div className="hour"></div>
      <div className="hr" style={hr}></div>
      <div className="min">
        <div className="mn" style={mn}></div>
      </div>
      <div className="sec">
        <div className="sc" style={sc}></div>
      </div>
    </div>
  );
};
