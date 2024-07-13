const RowButton = ({text, onClick, color, children, type}) => {
    const style = {
        width:'40px',
        height:'40px',
        borderRadius:'10px',
        borderColor:'black',
        backgroundColor:color ? color : "",
        margin:'2px'
    }
    return<button style={style} type={type ? type : 'button'} onClick={onClick}> {text}{children}</button>
}
export default RowButton