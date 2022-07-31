import React, { useState } from 'react'
import men from './assets/men2.png'
import name from './assets/name.png'
import './App.css'
import { Button, Tooltip, Typography } from '@material-ui/core'

const App = () => {

  const [hide, setHide] = useState(false);

  return (
    <div className='container'>
      <div className='areaLeft'>
        <div className='containerHiring'>
          <div className='iconKotak'/>
          <Typography variant='subtitle1'>YOU ARE HIRING?</Typography>
        </div>
        <Typography style={{fontWeight:'bold'}} variant='h2'>FRONT-END ENGINEER</Typography>
        <Typography style={{marginBottom: '10px'}} variant='subtitle1'>I Am a Front-end Engineer, who can already<br/> use a lot of front-end technology, hire me.</Typography>
        <Button variant='contained' color='primary'>Hire Now</Button>
      </div>
      <div className='kotak1'>      
          <img src={name}/>
        <h1>Hi, I am Al Fajri</h1>
      </div>
      <Tooltip onClick={() => setHide(!hide)} title={hide? "Klik To Show Karakter":"Klik To Hidden Karakter"}>
      <div className='card'>
        {
          hide? null:<img className='img' src={men}/>
        }
          <div className='roundedTop'>
            
          </div>
        <div className='roundedBottom'>

        </div>
      </div>
      </Tooltip>
      <div className='areaRight'>
      <div className='containerHiring'>
          <div className='iconKotak'/>
          <Typography variant='subtitle1'>YOU ARE HIRING?</Typography>
        </div>
        <Typography style={{fontWeight:'bold'}} variant='h2'>Software Enginer</Typography>
        <Typography style={{marginBottom: '10px'}} variant='subtitle1'>I like to learn new technology, especially for <br/> Front-end, Software Enginer and Web3</Typography>
        <Button variant='contained' color='primary'>Hire Now</Button>
      </div>
    </div>
  )
}

export default App