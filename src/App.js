import { useSelector } from 'react-redux';
import Splash from './Views/Splash';
import Routes from './Routes';



function App() {
    const { appLoaded } = useSelector(state => state.app);
    console.log(appLoaded);
    return (
      <>
          {!appLoaded && <Splash/>}
          { appLoaded && <Routes/>}
      </>
    );
}

export default App;