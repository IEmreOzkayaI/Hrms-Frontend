import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobSeekerList from "../pages/JobSeekerList";
import Home from "../pages/Home";
import { Grid } from "semantic-ui-react";
import CvList from "../pages/CvList";
import EmployerList from "../pages/EmployerList";
import SystemPersonnelList from "../pages/SystemPersonnelList";
import { Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Grid columns="three" style={{ marginTop: "5em" }}>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/cvs" component={CvList} />
            <Route path="/employers" component={EmployerList} />
            <Route path="/jobAdvertisement" component={JobAdvertisementList} />
            <Route path="/jobSeekers" component={JobSeekerList} />
            <Route path="/systemPersonnels" component={SystemPersonnelList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
