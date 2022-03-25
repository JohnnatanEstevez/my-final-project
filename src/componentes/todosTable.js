import { useState } from "react";
import { Table, Form } from "react-bootstrap";
export function TodosTable() {
  //const [editRow, setEditRow] = useState;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Done</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Johnnatan estevez</td>
          <td>
            <Form.Check aria-label="option 1" />
          </td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
