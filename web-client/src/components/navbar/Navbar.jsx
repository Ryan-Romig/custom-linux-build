import NavbarLink from "./NavbarLink";

const Navbar = ({children}) => {
  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding:'4px',
    alignItems: "center",
    borderBottom:'2px solid black',
    width:'100%',
    minHeight:'30px'

  }
  return (
    <nav style={style}>
      <NavbarLink to="/" text={"Home"} />
      {children}
      {/* <NavbarLink to="/lists" text={"Lists"} /> */}

    </nav>
  );
}
export default Navbar;
