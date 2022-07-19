import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Splash from './Views/Splash';
import Routes from './Routes';

import store from './Store/store';

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 3000);
  }
    , []);
  return (
    <Provider store={store}>
      {!appLoaded && <Splash />}
      {appLoaded && <Routes />}
    </Provider>
  );
}

export default App;
