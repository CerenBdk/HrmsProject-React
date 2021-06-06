import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertList from "../pages/JobAdvert/JobAdvertList";
import JobPositionList from "../pages/JobAdvert/JobPosition/JobPositionList";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobseekerList from "../pages/User/Jobseeker/JobseekerList";

export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <JobseekerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobAdvertList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobPositionList />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
