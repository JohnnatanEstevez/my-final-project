import { thunkUserRegister } from "../redux/users/thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import registerImg from "../images/register.png";

export default function UserRegister() {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
        "Must Contain min 6 Characters, One Uppercase, One Lowercase and One Number"
      ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match")

      .required("Confirm password is required"),
  });

  const dispatch = useDispatch();

  return (
    <Formik
      validationSchema={schema}
      onSubmit={({ confirmPassword, ...values }, { resetForm }) => {
        console.log(values);
        console.log("1.dispatch thunk in register component");

        dispatch(thunkUserRegister(values));
        //resetForm();
      }}
      initialValues={{
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            <h1 className="text-center">Register User </h1>
            <img className="img-fluid w-100" src={registerImg} alt="register" />

            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
                placeholder="Last name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
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
              <Form.Text id="passwordHelpBlock" muted>
                Your password must Contain min 6 Characters, One Uppercase, One
                Lowercase and One Number".
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
                placeholder="Confirm password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                //disabled={isSubmitting}
              >
                Register
              </Button>
            </div>
            <div className="text-center">
              <Link to="/login">Already have an account?</Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
