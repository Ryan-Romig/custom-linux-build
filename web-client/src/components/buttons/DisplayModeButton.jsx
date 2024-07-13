import React, { useContext } from 'react'
import CallbackButton from './CallbackButton'
import { AppContext } from '../../App';
import { secretNames } from '../../data/secrets';
import { SlGrid } from 'react-icons/sl'
import { ImTable2 } from 'react-icons/im'
import { colors } from "../../data/colors"

function DisplayModeButton() {
  const { displayModeContext } = useContext(AppContext)
  const [displayMode, setDisplayMode] = displayModeContext
  const { themeContext } = useContext(AppContext)
  const [isDarkMode] = themeContext
  const style = {
    color: isDarkMode ? colors.darkMode.text : colors.lightMode.text,
    background: 'transparent',
    borderRadius: '10px',
    border: 'none',
    cursor: "pointer",
    fontSize: '18px',
    // float:'right',
    width: '100px',
    display: 'inline-flex',
    border: '1px solid black',
    borderRadius: '50px',
    backgroundColor: isDarkMode ? colors.lightMode.primary : colors.darkMode.primary,
    borderColor:isDarkMode ? colors.lightMode.background : colors.darkMode.background,
    padding:'2px',
  }

  const handleModeChange = () => {
    const newMode = !displayMode
    setDisplayMode(newMode);
    localStorage.setItem(secretNames.displayMode, JSON.stringify(newMode))
  };
  const iconStyle = {
    transform: 'scale(0.5)',
    color:!isDarkMode ? colors.darkMode.text : colors.lightMode.text
  }
  const containerStyle = {
    margin:'3px',
    padding:'8px',
    width: '50%',
    borderRadius: '20px',
    height:'110%',
    display:'flex',
    justifyContent:'center',
    transition:'300ms ease'

  }

  return (<CallbackButton callback={handleModeChange} overrideStyle={style}>
    <div style={displayMode ? containerStyle : { ...containerStyle, backgroundColor: isDarkMode ? colors.darkMode.primary : colors.lightMode.primary }}>

      <ImTable2 style={!displayMode ? { ...iconStyle, transform: 'scale(1)', color:isDarkMode ? colors.darkMode.text : colors.lightMode.text } : iconStyle} />
    </div>
    <div style={!displayMode ? containerStyle : { ...containerStyle, backgroundColor: isDarkMode ? colors.darkMode.primary : colors.lightMode.primary }}>
      <SlGrid style={displayMode ? { ...iconStyle, transform: 'scale(1)',color:isDarkMode ? colors.darkMode.text : colors.lightMode.text } : iconStyle} />

    </div>
  </CallbackButton>
  )
}

export default DisplayModeButton