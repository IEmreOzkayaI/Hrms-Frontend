import React, { useEffect,useState } from "react";
import JobSeekerService from "../services/JobSeekerService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getJobSeeker().then((result) => setJobSeekers(result.data.data));
  });

  return (
    <div key="id">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>SurName</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
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
