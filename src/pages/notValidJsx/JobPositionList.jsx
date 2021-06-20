import React, { useEffect , useState } from 'react'
import JobPositionService from "../../services/JobPositionService"
import { Icon, Menu, Table } from "semantic-ui-react";

export default function JobPositionList() {

  const [jobPositions, setJobPositions] = useState([])

  useEffect(()=>{
    let jobPositionService = new JobPositionService();
    jobPositionService.getAllJobPositions().then(result => setJobPositions(result.data.data))
  })

  return (
    <div key="id">
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>İş Pozisyon Id</Table.HeaderCell>
          <Table.HeaderCell>İş Pozisyonu Adı</Table.HeaderCell>

        </Table.Row>
      </Table.Header>

      <Table.Body>
        {jobPositions.map((jobPosition) => (
          <Table.Row>
            <Table.Cell>{jobPosition.id}</Table.Cell>
            <Table.Cell>{jobPosition.positionName}</Table.Cell>
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
  )
}
