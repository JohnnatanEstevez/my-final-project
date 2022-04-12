import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { TodosTable } from "./todosTable";
import { useDispatch } from "react-redux";
import { thunkAddTodo, thunkListTodo } from "../redux/todos/thunkTodos";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../redux/todos/selectorTodos";

const todosSchema = yup.object().shape({
  description: yup.string().required("Name is required"),
});

export default function Todos() {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkListTodo());
  }, []);
  return (
    <Formik
      validationSchema={todosSchema}
      onSubmit={(values) => {
        dispatch(thunkAddTodo(values));
      }}
      initialValues={{
        description: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <div className="container">
          <Form noValidate onSubmit={handleSubmit}>
            <h1 className="text-center">Todos</h1>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder="Todo Description"
              />
              <Button
                variant="outline-secondary"
                type="submit"
                //disabled={isSubmitting}
              >
                Add
              </Button>
            </InputGroup>
          </Form>

          <TodosTable todos={todos} />
        </div>
      )}
    </Formik>
  );
}
