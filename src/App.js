import { React, useContext } from 'react'
import Home from './pages/Home';
import { ContextApi } from './context/ContextApi';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import './App.css';
import LoadingScreen from './pages/LoadingScreen';
import Result from './pages/Result';

function App() {

  const { data, loading } = useContext(ContextApi)
  // Use the variables from context (global state management)

  return (
    <>
      {!data && !loading && <Home />}
      {loading && <LoadingScreen />}
      {data && <Result data={data} />}
    </>
  );
}

export default App;
