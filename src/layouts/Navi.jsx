import React ,{useState} from "react";
import { Input, Menu } from "semantic-ui-react";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history =  useHistory()


  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/home")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (


    
    <div >
      <Menu secondary size="huge" fixed="top">,
      <Menu.Item as={NavLink} to="/home" name="Ana Sayfa"  style={{color:"gray",fontWeight:"bold"}}/>
        <Menu.Item  as={NavLink} to="/jobAdvertisement" name="İş İlanları" style={{color:"gray",fontWeight:"bold"}}/>
        <Menu.Item  as={NavLink} to="/jobSeekers" name="İş Arayanlar"style={{color:"gray",fontWeight:"bold"}} />
        {isAuthenticated ? 
        <Menu.Item  as={NavLink} to="/jobAdvertisementAdd" name="İş İlanı Ekle"style={{color:"gray",fontWeight:"bold"}} />
          :
        null
        }
        <Menu.Menu  position="right">
          <Menu.Item>
            <Input  icon="search" placeholder="Search..." size="mini" style={{}}  />
          </Menu.Item>
          {isAuthenticated ? <SignIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn}  /> }
        </Menu.Menu>
      </Menu>
    </div>
  );
}
