import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './Cards/Cards'
import './index.css'
import './Cards/Cards.css'
import Carousel from './Components/Carrossel/carrossel'
import Videos from './Components/Videos/Videos'



import menu from "./Menu/Menu"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App className="invisible"/>

     <div> {/* Classe de organização dos cards */}
     
     <Carousel className="container1"/>
      <Videos/>

    </div>
    
  </React.StrictMode>
)
