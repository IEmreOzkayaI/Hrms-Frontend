import React from "react";
import { Button , Menu } from "semantic-ui-react";

export default function SignOut({ signIn }) {
  return (
    <div>


      <Menu.Item style={{marginTop:"2px"}}>
        <Button onClick={signIn} color="vk" style={{padding:"8px"}}>
        Giriş Yap
        </Button>
        <Button style={{ marginLeft: "0.5em" ,padding:"8px"}} color="vk ">
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}
