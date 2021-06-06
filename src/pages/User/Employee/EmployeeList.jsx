import React, { useState, useEffect } from "react";
import { Table, Header, Icon, Button } from "semantic-ui-react";
import EmployeeService from "../../../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Employee List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastName}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
