import React, { useContext } from 'react';
import { DrumContext } from '../DrumContext';
import { useSpring, animated } from 'react-spring';
import './DrumPad.css';

const DrumPad = () =>{
  const { audioBank, toggleBank, mute } = useContext(DrumContext);

  const clickHandler = (e) => {
    if(!mute){
      let str = e.currentTarget.id;
      let id = e.currentTarget.children[0].id;
      document.getElementById(id).play();
      let mapStr = str.match(/\w+/g);
      let formatStr = mapStr.map((x)=>x[0].toUpperCase()+x.slice(1));
      document.getElementById('display').innerHTML = formatStr.join(' ');
    }
  }

  /*const keyHandler = (e) => {
    console.log(e.key);
  }*/

  let sliced = toggleBank ? audioBank.slice(0, 9) : audioBank.slice(9, 19) ;
  let toRender = sliced.map((x)=>{
    return(
      <div className="grid-item">
        <div id={x.name} className="drum-pad" onClick={clickHandler}>
          <audio id={x.key} className="clip" src={require(`${x.src}`)}></audio>
          <p>{x.key}</p>
        </div>
      </div>
    );
  });

  return(
    <div id="pad">
      {toRender}
    </div>);
}

export default DrumPad;
