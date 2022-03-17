import { thunkUserLogin } from "../redux/users/thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from "../schemas/schema";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <Formik
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(thunkUserLogin(values));
        resetForm();
      }}
      initialValues={{
        email: "",
        password: "",
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
            <h1 className="text-center">Login User </h1>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.email}
                placeholder="example@example.com"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="password"
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <Form.Text id="password" muted>
                Must Contain 6 Characters, One Uppercase, One Lowercase, One
                Number and One Special Case Character
              </Form.Text>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                Login
              </Button>
              <ToastContainer autoClose={2000} position="top-center" />
            </div>
            <div className="text-center">
              <Link to="/register">Already have an account?</Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
