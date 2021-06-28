import React from "react";
import {Input, Menu } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <Menu vertical size="large">
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>

        <Menu.Item style={{fontSize:"22px" }} >Filtre</Menu.Item>

        <Menu.Item name="filtre1">filtre1</Menu.Item>
        <Menu >
          <Menu.Item>
            <Checkbox label="loremimp" />
          </Menu.Item>
          <Menu.Item>
            <Checkbox label="loremimp" />
          </Menu.Item>
        </Menu>
        <Menu >
          <Menu.Item>
            <Checkbox label="loremimp" />
          </Menu.Item>
          <Menu.Item>
            <Checkbox label="loremimp" />
          </Menu.Item>
        </Menu>
      </Menu>
    </div>
  );
}
