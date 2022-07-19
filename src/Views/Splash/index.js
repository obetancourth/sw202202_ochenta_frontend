import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Page from '../../Components/Page';
import { app_loaded, app_start_loading } from './SplashActions';
const h1SplashStyle = {
  width: "100%",
  backgroundColor: "#fff",
  textAlign: "center",
  padding: "1rem",
  boxShadow: "0px 3px 5px #bbb"
}

const Splash = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    app_start_loading(dispatch);
    setTimeout(() => {
      app_loaded(dispatch);
    }, 3000);
  }, [dispatch]);
  
  return (
    <Page
      useAbsoluteCenter={true}
      showNavBar={false}
    >
      <h1 style={h1SplashStyle}>Ochenta App <br /> v1.0.0</h1>
    </Page>
  )
}

export default Splash;
