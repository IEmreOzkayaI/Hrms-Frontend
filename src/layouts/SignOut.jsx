import React from "react";
import { Button , Menu } from "semantic-ui-react";

export default function SignOut({ signIn }) {
  return (
    <div>


      <Menu.Item>
        <Button onClick={signIn} color="vk">
          Giriş Yap
        </Button>
        <Button style={{ marginLeft: "0.5em" }} color="vk">
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}
