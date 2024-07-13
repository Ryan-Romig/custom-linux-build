import Navbar from "../../components/navbar/Navbar";

const SpotifyPage = () => {    
      return (
        <>
          <Navbar  >
            <button type="button" onClick={handleButtonClick} >Start Spotify</button>
            <button type="button" onClick={handleButtonClick2} >Stop Spotify</button>
          </Navbar>
          <div style={{ width: '100%', height: '96svh', margin:'0px', padding:'0px' }}>
    
           
          </div>
    
        </>
      );
}

export default SpotifyPage