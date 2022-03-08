import { useEffect, useState } from 'react';

const useFtoC = (temp) => {
    
    const [temperature , setTemperature] = useState(0)
    const [isF , setIsF] = useState(true);
    
    
    useEffect(()=>{
        setTemperature(temp);
    },[temp])
    
    const change = () => {
        console.log(temperature)
       if(isF === true){
            setTemperature(((temperature - 32) / 1.8).toFixed());
            setIsF(false);
       }else{
            setTemperature(((temperature * 1.8) + 32).toFixed());
            setIsF(true);
        }
    }
    return {temperature, isF, change}
};

export default useFtoC;