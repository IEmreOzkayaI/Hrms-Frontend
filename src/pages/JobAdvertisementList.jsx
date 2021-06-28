import React, { useEffect } from "react";
import { useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";
import LeftBar from "../layouts/LeftBar";
import { Card, Icon, Image } from "semantic-ui-react";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisement] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisement(result.data.data));
  }, []);

  return (
    <div>
      <Grid>
        <GridColumn width={3}>
          <LeftBar />
        </GridColumn>
        <GridColumn width={13}>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Card fluid key={jobAdvertisement.id}>
              <Card.Content>
                {" "}
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  floated="left"
                  size="mini"
                />
                <Card.Header textAlign="left">
                  {jobAdvertisement.jobPositionId?.positionName}
                </Card.Header>
                <Card.Meta textAlign="left">
                  <span className="companyname">
                    {jobAdvertisement.employer?.companyName}
                  </span>
                </Card.Meta>
              </Card.Content>

              <Card.Content>
                <Card.Description textAlign="left">
                  {jobAdvertisement.jobDescription}
                </Card.Description>
              </Card.Content>

              <Card.Content extra > 
                <small style={{paddingRight:"32.5em"}} >
                  {" "}
                  <Icon name="user" />
                  {jobAdvertisement.openPositions} Kişi{" "}
                </small>
                <small style={{padding:"center"}}>

                <Icon name="calendar check" />
                {jobAdvertisement.releaseDate}
                </small>

                <small style={{paddingLeft:"32.5em"}}>

                <Icon name="calendar check" />
                {jobAdvertisement.lastDate}
                </small>

              </Card.Content>
            </Card>
          ))}
        </GridColumn>
      </Grid>
    </div>
  );
}
