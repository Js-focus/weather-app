import { useEffect , useState } from 'react';

const useLocation = (initial) => {
    
    const [lat , setLat] = useState(initial);
    const [long , setLong] = useState(initial);

    const success = pos => {
         setLat(pos.coords.latitude);
         setLong(pos.coords.longitude); 
     };
     useEffect(() => {
        navigator.geolocation.getCurrentPosition(success) 
     },[]);
     return {lat, long};
};

export default useLocation;