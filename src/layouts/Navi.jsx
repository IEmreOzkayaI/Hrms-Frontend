import React ,{useState} from "react";
import { Input, Menu } from "semantic-ui-react";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history =  useHistory()


  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/home")
  }

  function handleSignIn(params) {
    setIsAuthenticated(true)
  }

  return (
    <div >
      <Menu secondary size="huge" fixed="top">
      <Menu.Item as={NavLink} to="/home" name="Ana Sayfa" />
        <Menu.Item  as={NavLink} to="/jobAdvertisement" name="İş İlanları" />
        <Menu.Item  as={NavLink} to="/employers" name="İş Verenler" />
        <Menu.Item  as={NavLink} to="/jobSeekers" name="İş Arayanlar" />
        <Menu.Menu  position="right">
          <Menu.Item>
            <Input  icon="search" placeholder="Search..." size="large"/>
          </Menu.Item>
          {isAuthenticated ? <SignIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn}  /> }
        </Menu.Menu>
      </Menu>
    </div>
  );
}
