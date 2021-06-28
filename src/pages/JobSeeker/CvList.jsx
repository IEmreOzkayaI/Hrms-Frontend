import React, { useEffect, useState } from "react";
import CvService from "../../services/CvService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function CvList() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getAll().then((result) => setCvs(result.data.data));
  },[]);

  return (
    <div key="id">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Cv Id</Table.HeaderCell>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>Linkedin</Table.HeaderCell>
            <Table.HeaderCell>Biography</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row>
              <Table.Cell>{cv.id}</Table.Cell>
              <Table.Cell>{cv.github}</Table.Cell>
              <Table.Cell>{cv.linkedin}</Table.Cell>
              <Table.Cell>{cv.biography}</Table.Cell>
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
