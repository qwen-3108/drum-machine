import React  from 'react';
import DrumContextProvider from './components/DrumContext';
import App from './components/App/App';

const WrappedApp = () => {

  return(
    <DrumContextProvider>
      <App />
    </DrumContextProvider>
  );
}

export default WrappedApp;
