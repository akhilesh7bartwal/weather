//import image from "../../assets/background.jpg"; 
import './App.css';


import React from 'react';
import Search from '../../component/search/search.component';

const App=() =>{

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
          
          <Search/>
        </div>
    </div>
      </>     
    );
};

export default App;
