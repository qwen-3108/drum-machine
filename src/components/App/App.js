import React, { useEffect, useContext } from 'react';
import { DrumContext } from '../DrumContext';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import Switch from '../Switch/Switch';
import Volume from '../Volume/Volume';
import ToggleBank from '../ToggleBank/ToggleBank';
import { keyAction } from './keyAction';
import './App.css';

const App = () => {

  const { setState, volume, mute, toggleBank, animState, ...state } = useContext(DrumContext);

  const focus=()=>{
    setInterval(()=>document.getElementById('drum-machine').focus(), 500);
  }

  useEffect(()=>{
    focus();
    var audioClip = document.getElementsByTagName('audio');
    for(let i=0; i<audioClip.length; i++){
      audioClip[i].volume = volume;
    }
  });

  const keyHandler =(e)=> {
    let id = e.key;
    let newState = keyAction(id, volume, mute, toggleBank, animState);
    setState({...newState, ...state});
  }

  return(
    <div id="drum-machine" className={mute?'disable':'enable'} onKeyDown={keyHandler} tabIndex="0">
      <DrumPad />
      <div id="meta">
        <Volume />
        <ToggleBank />
        <Switch />
        <Display />
      </div>
    </div>
  );
}

export default App;
