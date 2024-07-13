import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import Navbar from "../../components/navbar/Navbar";
import NavbarLink from "../../components/navbar/NavbarLink";


const Home = () => {
  const { themeContext } = useContext(AppContext)
  const [isDarkMode] = themeContext
  //send post to localhost:5000/system/hotspot with body of state:on
  return (
    <>
      <Navbar >
        <NavbarLink to="/remote" text={"Remote View"} />
        <NavbarLink to="/spotify" text={"Spotify Page"} />
      </Navbar>
      <div style={{ width: '100%', height: '96svh', margin: '0px', padding: '0px' }}>

      </div>
    </>
  );
}
export default Home;
