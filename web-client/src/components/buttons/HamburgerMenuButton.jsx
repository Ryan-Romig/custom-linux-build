import { AppContext } from "../../App"
import { RxHamburgerMenu } from "react-icons/rx";
import { colors } from '../../data/colors';
import { useContext } from "react";



const HamburgerMenuButton = ({children,callback}) => {
  const {themeContext} = useContext(AppContext)
const [isDarkMode] = themeContext
  const style={
    color:isDarkMode ? colors.darkMode.text : colors.lightMode.text,
    background:'transparent',
    borderRadius:'10px',
    border:'none',
    cursor: "pointer",
    padding: "0.5rem 0.6rem",
    fontSize:'18px',
    float:'right',
    width:'60px'
  }
  const handleOnClick = () => {
    callback()
  }
  return (
    <button onClick={handleOnClick} style={style}  >
      <RxHamburgerMenu/>
      </button>
  )
}

export default HamburgerMenuButton