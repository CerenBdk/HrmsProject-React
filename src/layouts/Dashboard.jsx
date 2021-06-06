import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertList from "../pages/JobAdvert/JobAdvertList";
import JobPositionList from "../pages/JobAdvert/JobPosition/JobPositionList";
import EmployeeList from "../pages/User/Employee/EmployeeList";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobseekerList from "../pages/User/Jobseeker/JobseekerList";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <SideBar/>
          </Grid.Column>
          <Grid.Column width={14}>
              <JobAdvertList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
