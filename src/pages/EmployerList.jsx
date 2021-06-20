import React, { useEffect, useState } from "react";
import EmployerService from "../services/EmployerService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAllEmployer()
      .then((result) => setEmployers(result.data.data));
  });

  return (
    <div key="id">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Web Site</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.webSite}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
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
