const MenuActionButton = ({callback, text}) => {
    const buttonStyle = {
        border: 'solid rgba(300,300,300,1) 1px',
        margin: '10px',
        boxShadow: '2px 4px 10px rgba(10, 10, 10, 0.5)',
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(0,10,300, .5)',
        color: 'white',
        fontWeight: '700',
        letterSpacing: '1px'
    }
    const handleClearOnClick = () => {
        callback()
      }    
    return <button style={buttonStyle} onClick={handleClearOnClick}>{text}</button>
}

export default MenuActionButton