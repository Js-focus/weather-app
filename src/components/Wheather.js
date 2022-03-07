import React from 'react';
import useFtoC from '../hooks/useF/useFtoC';
import useFecht from '../hooks/useFecht';
import useLocation from '../hooks/useLocation';

const Wheather = () => {
    const {lat, long} = useLocation(0)
    const {data , loading, error} = useFecht(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e1c4175935677f2e4dc895ebb8b821f2`);
    const temp = data?.main.temp;
    const {temperature, isF, change} = useFtoC(temp)
    

    if(lat === 0) {
        document.body.style.background = ('black')
        return (
            <div className='need-permision'>
                <img src="https://i.gifer.com/g0R9.gif" alt="" />
                <h2>For show the weather in your position </h2>
                <h1>Please allow the permission</h1>
            </div>

        )
    }
    

    if(loading) return <h1>Loading......</h1>

    if(error) console.log(error)
    

    document.body.style.background = ('#d4ed97');
    
   
    return (
        <div className='weather-app'>
        <h1>Weather now</h1>
        <div className='temperature'>
            <h2> {temperature} {isF ? 'Fahrenheit' : 'Celsius'} </h2>
            <button onClick={change}>F / C</button>
        </div>
        <b>{data?.name}, {data?.sys.country}</b>
        <div className='icon'>
            <img src={`http://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`} alt="" />
            <h3>{data?.weather?.[0].description}</h3>
        </div>
        
        <ul>
            <li><b>Pressure:</b> <span> {data?.main.pressure} hPa </span> </li>
            <li><b>Humidity:</b> <span> {data?.main.humidity}% </span> </li>
            <li><b>Cloudiness:</b> <span> {data?.clouds.all}% </span></li>
        </ul>
        
        </div>
    
    );
};

export default Wheather;