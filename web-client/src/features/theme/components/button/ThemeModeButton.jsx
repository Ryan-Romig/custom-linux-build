import { AppContext } from "../../../../App"
import { useContext } from "react"
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { colors } from "../../../../data/colors";
import { getSecret, secretNames } from "../../../../data/secrets";
import { useTheme } from "@emotion/react";
import useThemeStyle from "../../hooks/useThemeStyle";
import moonCursor from '../../../../assets/moon_cursor.png'
import sunCursor from '../../../../assets/sun_cursor.png'


const ThemeModeButton = () => {
  const { themeContext } = useContext(AppContext)
  const [isDarkMode, setIsDarkMode] = themeContext
  const handleModeChange = () => {
    setIsDarkMode(isDarkMode => !isDarkMode);

  };
  const style={
    background:'transparent',
    borderRadius:'10px',
    border:'none',
    cursor: "pointer",
    padding: "0.5rem 0.6rem",
    width:'60px',
    // cursor:`url(${isDarkMode ? sunCursor : moonCursor}), auto `,
    cursor:'pointer'
  }
  const theme = useThemeStyle(style)
  return (
    <button style={theme} onClick={handleModeChange} >
      {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
    </button>
  )
}

export default ThemeModeButton