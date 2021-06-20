import React from "react";
import { Input, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu secondary fixed="top" >
      <Menu.Item name="Ana Sayfa" />
        <Menu.Item name="İş İlanları" />
        <Menu.Item name="İş Verenler" />
        <Menu.Item name="İş Arayanlar" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="logout" />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
