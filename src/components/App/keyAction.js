export const keyAction = (id, volume, mute, toggleBank) => {
  let originState = {
    volume:volume,
    mute:mute,
    toggleBank: toggleBank};

  if(mute){
    switch(id){
      case 'Enter':
        return ({toggleBank:toggleBank, volume:volume, mute:!mute});
      default:
        return originState;
    }

  }else{
  switch(id){
    //modify toggleBank
    case 'Tab':
      document.getElementById('display').innerHTML = toggleBank ? 'Smooth Piano Kit' : 'Heater Kit';
      return ({toggleBank:!toggleBank, volume:volume, mute:mute});

    //modify mute
    case 'Enter':
      return ({toggleBank:toggleBank, volume:volume, mute:!mute});

    //modify volume
    case 'ArrowUp':
      if(volume<1){
        let newVol = Number((volume+0.1).toFixed(2));
        let displayStr=(newVol*100).toFixed(2);
        document.getElementById('display').innerHTML = 'Volume: '+displayStr.slice(0, displayStr.length-3);
        return ({toggleBank:toggleBank, volume:newVol, mute:mute});
      }else{
        return originState;
      }

    //modifiy volume
    case 'ArrowDown':
      if(volume>0){
        let newVol = Number((volume-0.1).toFixed(2));
        let displayStr=(newVol*100).toFixed(2);
        document.getElementById('display').innerHTML = 'Volume: '+displayStr.slice(0, displayStr.length-3);
        return ({toggleBank:toggleBank, volume:newVol, mute:mute});
      }else{
        return originState;
      }

    //play clip
    default:
      if((/^[qweasdzxc]$/i).test(id)){
        id = id.toUpperCase();
        document.getElementById(id).play();
        let str = document.getElementById(id).parentElement.id;
        let mapStr = str.match(/\w+/g);
        let formatStr = mapStr.map((x)=>x[0].toUpperCase()+x.slice(1));
        document.getElementById('display').innerHTML = formatStr.join(' ');
        return originState;
      }else{
        return originState;
      }
  }
}
}
