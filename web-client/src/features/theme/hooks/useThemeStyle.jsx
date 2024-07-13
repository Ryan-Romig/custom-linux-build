import { useContext } from 'react';
import { AppContext } from '../../../App';
import { colors } from '../../../data/colors';

const useThemeStyle = (style, hasBackground, inverted) => {
  const { themeContext } = useContext(AppContext)
  const [isDarkMode, setIsDarkMode] = themeContext
  const overrideStyle = style ? style : {}
  // Define your style object based on the theme
  let backgroundColor = isDarkMode ? colors.darkMode.background : colors.lightMode.background
  let textColor =  isDarkMode ? colors.darkMode.text : colors.lightMode.text
  if(inverted){
    backgroundColor = isDarkMode ? colors.lightMode.background : colors.darkMode.background
    textColor = isDarkMode ? colors.lightMode.text : colors.darkMode.text
  }
  const theme = {
    color: textColor,
    backgroundColor: hasBackground ? backgroundColor : 'transparent',
    fontSize: '18px',
    textDecoration:'none',
    ...overrideStyle
  }

  return theme;
};

export default useThemeStyle;
