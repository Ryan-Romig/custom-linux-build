import { useContext } from "react"
import { AppContext } from "../../App"
import { colors } from "../../data/colors"
import { Link } from "react-router-dom";


function NavbarLink({ to, inner, overrideStyle , text}) {
  const { themeContext } = useContext(AppContext)
  const [isDarkMode] = themeContext
  const style =
  {
    color: isDarkMode ? colors.darkMode.text : colors.lightMode.text,
    textDecoration: 'none'
  }
  return (
    <Link style={overrideStyle ? overrideStyle : style} to={to}>
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:'20px'}}>
        {inner}
        <h4>
        {text}
        </h4>
      </div>
    </Link>
  )
}
export default NavbarLink