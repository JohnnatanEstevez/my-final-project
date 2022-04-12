import { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { thunkDeleteTodo, thunkUpdateTodo } from "../redux/todos/thunkTodos";
export function TodosTable({ todos }) {
  const dispatch = useDispatch();
  const [editRow, setEditRow] = useState(null);

  const handleEditStart = (todo) => (event) => {
    setEditRow({ ...todo });
  }; //recibimos el todo, creamos un closure: funcion que retorna otra funcion.

  const handleChange = ({ target: { name, value } }) => {
    setEditRow((prevEditRow) => ({ ...prevEditRow, [name]: value }));
  };
  const handleCancel = () => {
    setEditRow({ editRow: null });
  };
  const handleUpdate = () => {
    dispatch(thunkUpdateTodo(editRow));
    setEditRow(null);
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Todo</th>
          <th>Done</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) =>
          todo.id === editRow?.id ? (
            <tr key={todo.id}>
              <td>
                <input type="text" name="id" value={editRow.id} disabled />
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={editRow.description}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="done"
                  disabled
                  //value={editRow.description}
                  //onChange={handleChange}
                />
              </td>
              <td>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancel}>Cancel</button>
              </td>
            </tr>
          ) : (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>
                <button onClick={handleEditStart(todo)}>Edit</button>
                <button onClick={() => dispatch(thunkDeleteTodo(todo))}>
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
}
