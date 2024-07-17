import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import {onPageLoad, refreshDevices, requestAuthorization } from "./api.js"

const SpotifyPage = () => {    
  // const urlRef = useRef(null);
  // const [url, setUrl] = useState(() => requestAuthorization());
  const [devices, setDevices] = useState(() =>JSON.parse(localStorage.getItem("devices")));

  useEffect(() => {
  
    onPageLoad();

    // Do something with the devices
  }, []);  
      return (
        <>
          <Navbar  >
          </Navbar>
          <div style={{ width: '100%', height: '96svh', margin:'0px', padding:'0px' }}>
      {/* <iframe src={url} style={{ width: '100%', height: '100%' }}></iframe> */}

      {devices.map(device => device.name)}
           
          </div>
        
        </>
      );
}

export default SpotifyPage