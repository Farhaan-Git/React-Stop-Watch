import { useRef, useState } from "react";
import "./StopWatch.css"

function StopWatch(){

    const [hours,setHours] = useState(9);
    const [minutes,setMinutes] = useState(59);
    const [seconds,setSeconds] = useState(57);

    const timerRef = useRef(null);  

    function addTime(){
        
        setSeconds(s => {

            if(s === 59){

                 setMinutes(m => {

                    if(m === 59){

                        setHours(h=> h+1);
                        return 0;
                    }
                    else{
                        return m+1;
                    }
                
                })
                return 0;
            }
            else{
                return s+1;
            }
        })
    }

    function startTimer(){
        if(!timerRef.current){
            timerRef.current = setInterval(addTime, 1000);
        }
    }

    function stopTimer(){
        clearInterval(timerRef.current);
        timerRef.current = null;

    }

    function resetTimer(){
        stopTimer();
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    }

    function padZero(num){
        if(num<=9){
            return "0";
        }
        else{
            return "";
        }
    }
    

    return(
        <div className="watch-box">
            <span className="time-span">{padZero(hours)+hours.toString()}:{padZero(minutes)+minutes.toString()}:{padZero(seconds)+seconds.toString()}</span>
            <button className="start-btn" onClick={()=> startTimer()}>start</button>
            <button className="reset-btn" onClick={()=> resetTimer()}>reset</button>
            <button className="stop-btn" onClick={()=> stopTimer()}>stop</button>
        </div>
    )

}

export default StopWatch;