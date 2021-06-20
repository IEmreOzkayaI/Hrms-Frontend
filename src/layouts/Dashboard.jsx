import React from "react";
import LeftBar from "./LeftBar";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobSeekerList from "../pages/JobSeekerList";
import { Grid } from "semantic-ui-react";
import CvList from "../pages/CvList";
import EmployerList from "../pages/EmployerList";
import SystemPersonnelList from "../pages/SystemPersonnelList";


export default function Dashboard() {
  return (
    <div>
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={3}>
            <LeftBar />
          </Grid.Column>
          <Grid.Column width={13}>
            <JobAdvertisementList/>
            <JobSeekerList/>
            <CvList/>
            <EmployerList/>
            <SystemPersonnelList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
