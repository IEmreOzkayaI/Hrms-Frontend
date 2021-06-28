import React from "react";
import { Dropdown, Menu,Image } from "semantic-ui-react";

export default function SignIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/72611040?s=400&u=9efea1495f02362ca55e8431430f421c358e6fa4&v=4"
        />
        <Dropdown pointing="top right" text="Emre">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    </div>
  );
}
