import React from 'react';
import ReactDOM from 'react-dom';
import WrappedApp from './WrappedApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
