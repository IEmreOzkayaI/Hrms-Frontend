import React from "react";
import { Menu } from "semantic-ui-react";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <Menu pointing secondary vertical>
        <Menu.Item name="Filtreler" />
        <Menu.Item name="Şehir" />
        <Menu.Item name="Pozisyon" />
        <Menu.Item name="Teknoloji" />
        <Menu.Item name="Yabancı Dil" />

      </Menu>
    </div>
  );
}
