import Navbar from "../../components/navbar/Navbar";

const PandoraPage = () => {
    const handleButtonClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/plugins/pandora', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ state: 'on' }),
            });
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
      };
      const handleButtonClick2 = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/plugins/pandora', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ state: 'off' }),
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <>
          <Navbar  >
            <button type="button" onClick={handleButtonClick} >Start Pandora</button>
            <button type="button" onClick={handleButtonClick2} >Stop Pandora</button>
          </Navbar>
          <div style={{ width: '100%', height: '96svh', margin:'0px', padding:'0px' }}>
    
            <iframe
              src="http://pop-os:6080/vnc.html?host=pop-os&port=6080"
              width="100%"
              height="100%"
              title="melodia-remote"
              style={{ width: "100%", height: "100%" , padding:'0', margin:'0'}}
            ></iframe>
          </div>
    
        </>
      );
}

export default SpotifyPage