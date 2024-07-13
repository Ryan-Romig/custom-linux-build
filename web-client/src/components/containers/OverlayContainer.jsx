import { useState } from "react"

const OverlayContainer = ({callback, children}) => {
  const [show, setShow] = useState(true)
  const style = {
    display: show ? 'flex' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(35, 35, 36, 0.95)',
    zIndex: '10',
    width: '100%',
    height: '100svh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  }

  const handleCloseOnClick = () => {
    setShow(false)
    callback('closed')
  }
  const closeButtonStyle = {
    height: '40px', width: '120px',
    backgroundColor: "red",
  }



  return <div style={style}>
    {children}
     <button style={closeButtonStyle} onClick={handleCloseOnClick}>Close</button>
  </div>
}
export default OverlayContainer