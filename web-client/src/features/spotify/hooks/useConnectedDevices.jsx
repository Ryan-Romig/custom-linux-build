import { useEffect, useState } from 'react';
import useLocalStorage from '../../../hooks/UseLocalStorage';

const useConnectedDevices = () => {
    const LOCAL_STORAGE_KEY = 'devices';
    const [devices, setDevices] = useLocalStorage(LOCAL_STORAGE_KEY, []);
    const [status, setStatus] = useState();
    const getDevices = async () => {
        setStatus('loading');
        console.log('loading')
        try {
            const access_token = localStorage.getItem('access_token');
            const res = await fetch('https://api.spotify.com/v1/me/player/devices', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
            const json = await res.json();
            const newDevices = json.devices;
            setDevices(newDevices);
            setStatus('loaded');
            console.log('loaded')
            return newDevices;
        }
        catch (error) {
            setStatus(error);
            console.log(error)
        }

    }
    useEffect(()=>{
        getDevices()
    },[])
    return [devices, setDevices, getDevices, status];
};

export default useConnectedDevices;
