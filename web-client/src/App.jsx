import { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import SpotifyPage from "./pages/Spotify/index.jsx";
import { getSecret, secretNames } from "./data/secrets.js";
import RemoteView from './pages/RemoteView/index.jsx';

export const AppContext = createContext()

const App = () => {
  const isMobile = /Android|iPhone/i.test(window.navigator.userAgent)

  //local storage can only do strings. if string is present, it returns true even if the string says false. 
  //use this to have it work right
  const [isDarkMode, setIsDarkMode] = useState(empty => {
    const exists = localStorage.getItem(getSecret(secretNames.isDarkMode))
    return exists ? JSON.parse(exists) === true : true
  });

  // const [displayMode, setDisplayMode] = useState(isMobile ? true : false);
  const [displayMode, setDisplayMode] = useState(true);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])


  useEffect(() => {
    localStorage.setItem(getSecret(secretNames.isDarkMode), isDarkMode === true ? 'true' : 'false')
  },[isDarkMode])

  return (
    <Router>
        <AppContext.Provider value={{themeContext:[isDarkMode,setIsDarkMode], windowWidthContext:[currentWidth],displayModeContext:[displayMode, setDisplayMode]}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotify" element={<SpotifyPage />} />
        <Route path="/remote" element={<RemoteView />} />
        {/* <Route path="/tools/uuid/:uuid" element={<ToolInfoPage />} /> */}
        <Route path="*" element={<>Not Found</>} />
      </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;