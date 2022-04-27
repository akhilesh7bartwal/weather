//import image from "../../assets/background.jpg"; 
import './App.css';

import axios from 'axios';
import React from 'react';
import WeatherContent from '../../component/weather-content/weatherContent.component';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:"",
      WeatherData:[]
    }
    console.log(this.state)
  }
  componentDidMount(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5a52159762aeab736e56e72dcbd8454b')
    .then(response => {
     this.setState({weatherData: response.data});
    console.log(response.data)
    } )
  }

  render(){
//     const myStyle={
//       backgroundImage: 
// "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fraluca-weather-app.netlify.app%2F&psig=AOvVaw3C10ZqOdDQnQVKFBrQrLnv&ust=1651127758479000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMCZ35G7s_cCFQAAAAAdAAAAABAD')",
//       fontSize:'50px',
//       backgroundSize: 'cover',
//   };
    return (
      <>
    <div className='App'>
        <h1> Weather APP</h1>
        <div className='Search'>
          
          <WeatherContent/>
        </div>
    </div>
      </>     
    );
  }
}

export default App;
