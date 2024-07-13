import MenuActionButton from './MenuActionButton';
const Menu = ({ items }) => {
    const menuStyle = {
        position: 'absolute',
        transform: 'translate(0%, 100%)',
        right: '0px',
        bottom: '0px',
        backgroundColor: 'white',
        minHeight: "120px"
    }
    return <div style={menuStyle}>
        {items.map(item => <p>{item.text}<MenuActionButton callback={item.callback} text={item.text} /></p>)}
    </div>
}
export default Menu