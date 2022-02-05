import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Banner from './Componets/Banner/Banner'
import Row from './Componets/Row-posters/Row'
import {originals,action,romance} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row url={originals} title="Netflix Originals"/>
      <Row url={action} title="Action" isSmall/>
      <Row url={romance} title="Romance" isSmall/>
    </div>
  );
}

export default App;
