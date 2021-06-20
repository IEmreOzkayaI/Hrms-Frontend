import React, { useEffect } from "react";
import { useState } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertisementList() {

  const [jobAdvertisements, setJobAdvertisement] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisement(result.data.data));
  });

  return (
    <div key="id">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Position Name</Table.HeaderCell>
            <Table.HeaderCell>Open Positions</Table.HeaderCell>
            <Table.HeaderCell>Last Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row>
              <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.positionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisement.lastDate}</Table.Cell>
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
