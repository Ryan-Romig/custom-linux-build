import { useContext } from "react"
import { AppContext } from "../../App"
import { colors } from "../../data/colors"

const  CallbackButton = ({callback, overrideStyle, children}) => {
  const { themeContext } = useContext(AppContext)
  const [isDarkMode] = themeContext
  const style= overrideStyle ? overrideStyle : {
    color:isDarkMode ? colors.darkMode.text : colors.lightMode.text,
    background:'transparent',
    borderRadius:'10px',
    border:'none',
    cursor: "pointer",
    padding: "0.5rem 0.6rem",
    fontSize:'18px',
    // width:'60px',
    margin:'0 auto',
    display:'inline-flex',
    justifyContent:'center',
    alignItems:'center',
    boxShadow:`0px 0px 10px ${isDarkMode ? 'white' : 'black'}`,
    margin:'5px'
  }
    const handleOnClick = () => {
        callback()
    }
  return (
    <button type="button" style={style} onClick={handleOnClick} >{children}</button>
  )
}

export default CallbackButton