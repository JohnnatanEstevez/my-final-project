import { Table, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { thunkDeleteTodo } from "../redux/todos/thunkTodos";
export function TodosTable({ todos }) {
  const dispatch = useDispatch();

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
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.description}</td>
            <td>
              <Form.Check aria-label="option 1" />
            </td>
            <td>
              <button>Edit</button>
              <button onClick={() => dispatch(thunkDeleteTodo(todo))}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
