import React, { useContext } from 'react';
import './Volume.css';
import { DrumContext } from '../DrumContext';
import Svg from '../Svg';

const Volume = () =>{

  let { setState, volume, mute, ...state } = useContext(DrumContext);

  const volumeChange = (e) => {
    if(!mute){
      setState({volume:Number(e.target.value), mute, ...state});
      let displayStr = (Number(e.target.value)*100).toFixed(2);
      document.getElementById('display').innerHTML = 'Volume: '+ displayStr.slice(0, displayStr.length-3);
    }
  }

  return(
    <div id="volume">
      <div id="volume-icon">
      <Svg name='volume' width='24' height='24' viewBox='0 0 52 52' fill='pink' stroke='pink' strokeWidth='1.5'/>
      </div>
      <input type="range" min="0" max="1" value={volume} step="0.05" onChange={volumeChange}/>
    </div>
  );

}

export default Volume;
