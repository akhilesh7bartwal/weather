import React from 'react'

import axios from 'axios';

//import WeatherContent from '../weather-content/weatherContent.component.jsx'
import './search.component.css'

class Search extends React.Component{
    constructor(){
        super()
        this.state={
            searchInput:"",city:"",country:'',temp:'',min_temp:'',max_temp:''
        };
    }

    handleSearchInput = (event) =>{
        this.setState({searchInput: event.target.value})
    };

    handleSubmit = (event) =>{
        event.preventDefault(); 
        console.log(this.state.searchInput)
        console.log(this.state.city)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchInput}&appid=5a52159762aeab736e56e72dcbd8454b`)
            .then(response => {
             this.setState({city: response.name, country: response.sys.country, temp: response.main.temp,
                min_temp: response.main.temp_min, max_temp: response.main.temp_max});
            } ).catch(e => {
                console.log(e);
                this.setState({...this.state});
            });
         // console.log(this.state.city)
    };
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <div className='heading'>
                    <div className='weather-app'>
                      <input type='search' placeholder='enter a city' onChange={this.handleSearchInput}/>
                    </div>               
                </div>
            </form>
            </>
        )
    }
}
export default Search