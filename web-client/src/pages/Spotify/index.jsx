import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { onPageLoad, refreshDevices, requestAuthorization, transfer } from "./api.js"
import useLocalStorage from "../../hooks/UseLocalStorage.jsx";
import useConnectedDevices from "../../features/spotify/hooks/useConnectedDevices.jsx";

const SpotifyPage = () => {
  // const urlRef = useRef(null);
  // const [url, setUrl] = useState(() => requestAuthorization());

  const [devices, setDevices, getDevices, status] = useConnectedDevices();



  const handleTransferClick = () => {
    // alert(JSON.stringify(devices))
    transfer(devices[0])
  }

  useEffect(() => {
    // onPageLoad();
    // Do something with the devices
    // alert(JSON.stringify(devices.devices))
    setInterval(() => {
      getDevices();
    }, 7000);
  }, []);
  return (
    <>
      <Navbar  >
      </Navbar>
      <div style={{ width: '100%', height: '96svh', margin: '0px', padding: '0px' }}>
        {/* <iframe src={url} style={{ width: '100%', height: '100%' }}></iframe> */}
        <button type="button" onClick={handleTransferClick}>Transfer Playback</button>
        {devices && devices.map(device => device.name)}

      </div>

    </>
  );
}

export default SpotifyPage