import { useState } from 'react';

const useFtoC = (temp) => {
    const [temperature , setTemperature] = useState(temp)
    const [isF , setIsF] = useState(true);
    
    
    const change = () => {
       if(isF === true){
            setTemperature((temperature - 32) / 1.8);
            setIsF(false);
       }else{
            setTemperature((temperature * 1.8) + 32);
            setIsF(true);
        }
    }
    return {temperature, isF, change}
};

export default useFtoC;