import React, { useEffect, useState } from "react";
import SystemPersonnelService from "../services/SystemPersonnelService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function SystemPersonnelList() {
  const [systemPersonnels, setSystemPersonnel] = useState([]);

  useEffect(() => {
    let systemPersonnelService = new SystemPersonnelService();
    systemPersonnelService
      .getAllSystemPersonnel()
      .then((result) => setSystemPersonnel(result.data.data));
  });

  return (
    <div key="id">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width = "1" >Personel</Table.HeaderCell>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {systemPersonnels.map((systemPersonnel) => (
            <Table.Row>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>{systemPersonnel.firstName}</Table.Cell>
              <Table.Cell>{systemPersonnel.lastName}</Table.Cell>
              <Table.Cell>{systemPersonnel.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
