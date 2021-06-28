import React, { useEffect, useState } from "react";
import JobSeekerService from "../../services/JobSeekerService";
import { Grid, GridColumn } from "semantic-ui-react";
import LeftBar from "../../layouts/LeftBar";
import { Card, Icon, Image } from "semantic-ui-react";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeeker()
      .then((result) => setJobSeekers(result.data.data));
  }, []);

  return (
    <div>
      <Grid>
        <GridColumn width={3}>
          <LeftBar />
        </GridColumn>
        <GridColumn width={13}>
          {jobSeekers.map((jobSeeker) => (
            <Card fluid key={jobSeeker.id}>
              <Card.Content>
                {" "}
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  floated="left"
                  size="mini"
                />
                <Card.Header textAlign="left">Programlama Dili</Card.Header>
                <Card.Meta textAlign="left">
                  <span className="companyname">
                    {jobSeeker.firstName + " "}
                    {jobSeeker.lastName}
                  </span>
                </Card.Meta>
              </Card.Content>

              <Card.Content>
                <Card.Description textAlign="left">
                  Matthew is a musician living in Nashville.Matthew is a
                  musician living in Nashville.Matthew is a musician living in
                  Nashville. Matthew is a musician living in Nashville.Matthew
                  is a musician living in Nashville.Matthew is a musician living
                  in Nashville. Matthew is a musician living in
                  Nashville.Matthew is a musician living in Nashville.Matthew is
                  a musician living in Nashville.
                </Card.Description>
              </Card.Content>

              <Card.Content extra>
                <small style={{ paddingRight: "90.5em" }}>
                  {" "}
                  <Icon name="mail" />
                  {jobSeeker.email}
                </small>
              </Card.Content>
            </Card>
          ))}
        </GridColumn>
      </Grid>
    </div>
  );
}
