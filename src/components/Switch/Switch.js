import React, { useContext } from 'react';
import { DrumContext } from '../DrumContext';
import Svg from '../Svg';
import './Switch.css';

const Switch = () =>{
  const { setState, mute, ...state } = useContext(DrumContext);
  const muteDrum =(e) => {
    let newMute = Number(e.target.value) ? true : false;
    setState({mute:newMute, ...state});
    document.getElementById('display').innerHTML = '';
  }
  return(
    <div id="switch">
      <div id="switch-icon">
        <Svg name='switch' width='24' height='24' viewBox='-44 -44 600 600' fill='pink' />
        <p>ENTER</p>
      </div>
      <input type="range" min="0" max="1" step="1" value={mute?1:0} onChange={muteDrum}/>
    </div>);

}

export default Switch;
