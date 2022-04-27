import './weatherContent.style.css'
import React from 'react'

class WeatherContent extends React.Component{
    constructor(){
        super()
        this.state={
            searchInput:"",
        }
    }
    render(){
        return(
            <>
            <form >
                <div className='heading'>
                    <div className='weather-app'>
                      <input type='search' placeholder='enter a city'/>
                    </div>               
                </div>
            </form>
            </>
        )
    }

}
export default WeatherContent